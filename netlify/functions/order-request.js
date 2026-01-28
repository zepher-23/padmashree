// Order Request Handler - Netlify Function
// Handles order submissions from the Services page with file upload support

export const handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        console.log('[Order Request] ❌ Method not allowed:', event.httpMethod);
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const contentType = event.headers['content-type'] || event.headers['Content-Type'] || '';
        let formFields = {};
        let fileInfo = null;

        // Handle multipart form data (with file upload)
        if (contentType.includes('multipart/form-data')) {
            const result = await parseMultipartFormData(event);
            formFields = result.fields;
            fileInfo = result.file;
        }
        // Handle JSON (fallback without file)
        else if (contentType.includes('application/json')) {
            formFields = JSON.parse(event.body);
        }
        else {
            console.log('[Order Request] ❌ Unsupported content type:', contentType);
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Unsupported content type' })
            };
        }

        const {
            name, email, phone, description,
            productName, productId, quantity,
            unitPrice, estimatedTotal
        } = formFields;

        // Validate required fields
        const requiredFields = { name, email, phone, productName, quantity };
        const missingFields = Object.entries(requiredFields)
            .filter(([key, value]) => !value)
            .map(([key]) => key);

        if (missingFields.length > 0) {
            console.log('[Order Request] ❌ Missing required fields:', missingFields.join(', '));
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: 'Missing required fields',
                    fields: missingFields
                })
            };
        }

        // Log the order submission
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('[Order Request] 📦 NEW ORDER SUBMISSION');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log(`Timestamp: ${new Date().toISOString()}`);
        console.log('');
        console.log('CUSTOMER DETAILS:');
        console.log(`  Name: ${name}`);
        console.log(`  Email: ${email}`);
        console.log(`  Phone: ${phone}`);
        console.log('');
        console.log('ORDER DETAILS:');
        console.log(`  Product: ${productName}`);
        console.log(`  Product ID: ${productId}`);
        console.log(`  Quantity: ${quantity}`);
        console.log(`  Unit Price: ₹${unitPrice}`);
        console.log(`  Estimated Total: ₹${estimatedTotal}`);
        console.log('');
        console.log('REQUIREMENTS:');
        console.log(`  ${description || 'No specific requirements provided'}`);
        console.log('');
        console.log('UPLOADED FILE:');
        if (fileInfo) {
            console.log(`  Name: ${fileInfo.filename}`);
            console.log(`  Type: ${fileInfo.contentType}`);
            console.log(`  Size: ${(fileInfo.size / 1024).toFixed(2)} KB`);
        } else {
            console.log('  No file uploaded');
        }
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

        // Prepare email object (ready for email service integration)
        const emailData = {
            to: process.env.OWNER_EMAIL || 'owner@example.com',
            subject: `[New Order Request] ${productName} - ${quantity} units`,
            html: `
                <h2>🎉 New Order Request Received</h2>
                <hr/>
                
                <h3>👤 Customer Details</h3>
                <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${phone}">${phone}</a></td></tr>
                </table>

                <h3>📦 Order Details</h3>
                <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Product</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${productName}</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Product ID</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${productId}</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Quantity</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${quantity} units</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Unit Price</strong></td><td style="padding: 8px; border: 1px solid #ddd;">₹${unitPrice}</td></tr>
                    <tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd;"><strong>Estimated Total</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><strong>₹${estimatedTotal}</strong></td></tr>
                </table>

                <h3>📝 Requirements</h3>
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                    ${description ? description.replace(/\n/g, '<br/>') : '<em>No specific requirements provided</em>'}
                </div>

                <h3>📎 Uploaded File</h3>
                <p>${fileInfo ? `<strong>${fileInfo.filename}</strong> (${(fileInfo.size / 1024).toFixed(2)} KB)` : '<em>No file uploaded</em>'}</p>

                <hr/>
                <p style="color: #666; font-size: 12px;">
                    Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                </p>
            `,
            text: `
NEW ORDER REQUEST
=================

CUSTOMER DETAILS:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

ORDER DETAILS:
- Product: ${productName}
- Product ID: ${productId}
- Quantity: ${quantity} units
- Unit Price: ₹${unitPrice}
- Estimated Total: ₹${estimatedTotal}

REQUIREMENTS:
${description || 'No specific requirements provided'}

UPLOADED FILE:
${fileInfo ? `${fileInfo.filename} (${(fileInfo.size / 1024).toFixed(2)} KB)` : 'No file uploaded'}

---
Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            `,
            // If file was uploaded, include attachment info for later integration
            attachments: fileInfo ? [{
                filename: fileInfo.filename,
                contentType: fileInfo.contentType,
                size: fileInfo.size,
                // Note: For actual email sending, you'd include the file content here
                // content: fileInfo.content.toString('base64')
            }] : []
        };

        console.log('[Order Request] ✅ Email prepared for:', emailData.to);
        console.log('[Order Request] 📋 Email Subject:', emailData.subject);

        // TODO: Integrate with email service (SendGrid, Nodemailer, etc.)
        // Example with SendGrid:
        // await sgMail.send(emailData);

        // TODO: Upload file to cloud storage (Cloudinary, S3, etc.)
        // if (fileInfo) {
        //     const uploadResult = await uploadToCloudStorage(fileInfo);
        //     console.log('[Order Request] ☁️ File uploaded:', uploadResult.url);
        // }

        console.log('[Order Request] ✅ Submission processed successfully');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: true,
                message: 'Order request submitted successfully',
                emailPrepared: true,
                fileReceived: !!fileInfo
            })
        };

    } catch (error) {
        console.error('[Order Request] ❌ ERROR:', error.message);
        console.error('[Order Request] Stack:', error.stack);

        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Internal server error',
                message: error.message
            })
        };
    }
};

/**
 * Parse multipart form data from the event
 * This is a simple parser for Netlify Functions
 */
async function parseMultipartFormData(event) {
    const boundary = getBoundary(event.headers['content-type'] || event.headers['Content-Type']);

    if (!boundary) {
        throw new Error('No boundary found in content-type header');
    }

    const body = event.isBase64Encoded
        ? Buffer.from(event.body, 'base64')
        : Buffer.from(event.body);

    const parts = parseMultipart(body, boundary);

    const fields = {};
    let file = null;

    for (const part of parts) {
        if (part.filename) {
            // This is a file
            file = {
                filename: part.filename,
                contentType: part.type || 'application/octet-stream',
                content: part.data,
                size: part.data.length
            };
        } else if (part.name) {
            // This is a regular field
            fields[part.name] = part.data.toString('utf8');
        }
    }

    return { fields, file };
}

/**
 * Extract boundary from content-type header
 */
function getBoundary(contentType) {
    const match = contentType.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
    return match ? (match[1] || match[2]) : null;
}

/**
 * Parse multipart body into parts
 */
function parseMultipart(body, boundary) {
    const parts = [];
    const boundaryBuffer = Buffer.from(`--${boundary}`);
    const endBoundaryBuffer = Buffer.from(`--${boundary}--`);

    let start = body.indexOf(boundaryBuffer) + boundaryBuffer.length;

    while (start < body.length) {
        // Skip CRLF after boundary
        if (body[start] === 0x0D && body[start + 1] === 0x0A) {
            start += 2;
        }

        // Find the next boundary
        let end = body.indexOf(boundaryBuffer, start);
        if (end === -1) break;

        // Extract this part
        const partBuffer = body.slice(start, end - 2); // -2 for CRLF before boundary
        const part = parsePart(partBuffer);
        if (part) parts.push(part);

        // Move to next part
        start = end + boundaryBuffer.length;

        // Check if this was the end boundary
        if (body.indexOf(endBoundaryBuffer, end) === end) break;
    }

    return parts;
}

/**
 * Parse a single part of multipart data
 */
function parsePart(buffer) {
    // Find the header/body separator (double CRLF)
    const separator = Buffer.from('\r\n\r\n');
    const separatorIndex = buffer.indexOf(separator);

    if (separatorIndex === -1) return null;

    const headerSection = buffer.slice(0, separatorIndex).toString('utf8');
    const dataSection = buffer.slice(separatorIndex + 4);

    // Parse headers
    const headers = {};
    headerSection.split('\r\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > -1) {
            const key = line.slice(0, colonIndex).trim().toLowerCase();
            const value = line.slice(colonIndex + 1).trim();
            headers[key] = value;
        }
    });

    // Extract name and filename from Content-Disposition
    const contentDisposition = headers['content-disposition'] || '';
    const nameMatch = contentDisposition.match(/name="([^"]+)"/);
    const filenameMatch = contentDisposition.match(/filename="([^"]+)"/);

    return {
        name: nameMatch ? nameMatch[1] : null,
        filename: filenameMatch ? filenameMatch[1] : null,
        type: headers['content-type'] || null,
        data: dataSection
    };
}
