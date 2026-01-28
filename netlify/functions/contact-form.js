// Contact Form Handler - Netlify Function
// Handles submissions from the Contact page

export const handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        console.log('[Contact Form] ❌ Method not allowed:', event.httpMethod);
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Parse the incoming JSON body
        const data = JSON.parse(event.body);
        const { firstName, lastName, email, subject, message } = data;

        // Validate required fields
        const requiredFields = { firstName, lastName, email, subject, message };
        const missingFields = Object.entries(requiredFields)
            .filter(([key, value]) => !value)
            .map(([key]) => key);

        if (missingFields.length > 0) {
            console.log('[Contact Form] ❌ Missing required fields:', missingFields.join(', '));
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: 'Missing required fields',
                    fields: missingFields
                })
            };
        }

        // Log the submission
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('[Contact Form] 📧 NEW SUBMISSION');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log(`Timestamp: ${new Date().toISOString()}`);
        console.log(`Name: ${firstName} ${lastName}`);
        console.log(`Email: ${email}`);
        console.log(`Subject: ${subject}`);
        console.log(`Message: ${message}`);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

        // Prepare email object (ready for email service integration)
        const emailData = {
            to: process.env.OWNER_EMAIL || 'owner@example.com',
            subject: `[Contact Form] ${subject} - From ${firstName} ${lastName}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <hr/>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr/>
                <h3>Message:</h3>
                <p>${message.replace(/\n/g, '<br/>')}</p>
                <hr/>
                <p style="color: #666; font-size: 12px;">
                    Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                </p>
            `,
            text: `
New Contact Form Submission
===========================

Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            `
        };

        console.log('[Contact Form] ✅ Email prepared for:', emailData.to);
        console.log('[Contact Form] 📋 Email Subject:', emailData.subject);

        // TODO: Integrate with email service (SendGrid, Nodemailer, etc.)
        // Example with SendGrid:
        // await sgMail.send(emailData);

        console.log('[Contact Form] ✅ Submission processed successfully');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: true,
                message: 'Contact form submitted successfully',
                emailPrepared: true
            })
        };

    } catch (error) {
        console.error('[Contact Form] ❌ ERROR:', error.message);
        console.error('[Contact Form] Stack:', error.stack);

        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Internal server error',
                message: error.message
            })
        };
    }
};
