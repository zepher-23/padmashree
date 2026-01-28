
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { createPortal } from 'react-dom';
import {
    Printer, Package, Gift, ArrowRight,
    BookOpen, FileText, CreditCard, Scroll, Sticker,
    Box, ShoppingBag, Layers,
    Coffee, Shirt, PenTool, Smartphone,
    ChevronRight, ChevronLeft, ChevronDown, Check, CheckCircle2,
    UploadCloud, File, Trash2, X
} from 'lucide-react';

import commercialImg from '../assets/images/commercial_v2.png?format=webp&w=800&quality=75';
import packagingImg from '../assets/images/packaging_v2.png?format=webp&w=800&quality=75';
import giftingImg from '../assets/images/gifting_v2.png?format=webp&w=800&quality=75';

import businessCardsImg from '../assets/images/products/business_cards.png?format=webp&w=800&quality=75';
import brochuresImg from '../assets/images/products/brochures.png?format=webp&w=800&quality=75';
import letterheadsImg from '../assets/images/products/letterhead.jpeg?format=webp&w=800&quality=75';
import postersImg from '../assets/images/products/poster.jpeg?format=webp&w=800&quality=75';
import stickersImg from '../assets/images/products/stickers.jpeg?format=webp&w=800&quality=75';
import rigidBoxesImg from '../assets/images/products/rigid-box.jpeg?format=webp&w=800&quality=75';
import cartonsImg from '../assets/images/products/product-cartons.jpeg?format=webp&w=800&quality=75';
import paperBagsImg from '../assets/images/products/paper-bags.jpeg?format=webp&w=800&quality=75';
import mailerBoxesImg from '../assets/images/products/mailer-box.jpeg?format=webp&w=800&quality=75';
import tissuesImg from '../assets/images/products/tissues.jpeg?format=webp&w=800&quality=75';
import drinkwareImg from '../assets/images/products/drinkware.jpeg?format=webp&w=800&quality=75';
import magazinesImg from '../assets/images/products/magazine-booklets.jpeg?format=webp&w=800&quality=75';
import notebooksImg from '../assets/images/products/premium-book.jpeg?format=webp&w=800&quality=75';

import servicesHero from '../assets/images/services-hero-header.png?format=webp&w=1920&quality=75';

const CATEGORIES = [
    {
        id: "commercial",
        title: "Commercial Printing",
        icon: Printer,
        description: "High-volume, premium quality offset and digital printing for all your business needs.",
        items: [
            {
                id: 'business-cards',
                name: 'Business Cards',
                icon: CreditCard,
                image: businessCardsImg,
                description: "Make a memorable first impression with our premium business cards. Available in various finishes including matte, gloss, spot UV, and textured papers.",
                features: ["350gsm - 400gsm Premium Stock", "Matte, Gloss, or Soft-touch Lamination", "Spot UV & Foil Stamping Options", "Rounded Corners Available"],
                details: [
                    { label: "Min. Order", value: "100 Cards" },
                    { label: "Turnaround", value: "2-3 Days" },
                    { label: "Print Method", value: "Digital / Offset" }
                ],
                useCases: ["Networking Events", "Client Meetings", "Brand Identity", "Appointment Cards"],
                pricing: { basePrice: 3.5, minQty: 100, unit: 'Cards' }
            },
            {
                id: 'brochures',
                name: 'Brochures & Flyers',
                icon: BookOpen,
                image: brochuresImg,
                description: "Communicate your message effectively with professionally printed brochures. Perfect for marketing campaigns, product catalogs, and event guides.",
                features: ["Bi-fold, Tri-fold, Z-fold options", "High-quality Digital & Offset Print", "Gloss or Matte Finishes", "Bulk Volume Discounts"],
                details: [
                    { label: "Min. Order", value: "50 Units" },
                    { label: "Turnaround", value: "3-5 Days" },
                    { label: "Paper", value: "130gsm - 170gsm" }
                ],
                useCases: ["Product Launches", "Service Menus", "Event Guides", "Direct Mail Marketing"],
                pricing: { basePrice: 25, minQty: 50, unit: 'Units' }
            },
            {
                id: 'letterheads',
                name: 'Letterheads',
                icon: FileText,
                image: letterheadsImg,
                description: "Reinforce your brand identity with every official document. Our crisp, clean letterhead printing ensures you look professional on paper.",
                features: ["Premium Bond Paper", "Crisp Typography", "Pantone Color Matching", "Laser Printer Compatible"],
                details: [
                    { label: "Min. Order", value: "500 Sheets" },
                    { label: "Turnaround", value: "3-5 Days" },
                    { label: "Paper", value: "100gsm Bond" }
                ],
                useCases: ["Official Correspondence", "Invoices & Receipts", "Contracts", "Proposals", "Internal Memos"],
                pricing: { basePrice: 5, minQty: 500, unit: 'Sheets' }
            },
            {
                id: 'magazines',
                name: 'Magazines & Booklets',
                icon: BookOpen,
                image: magazinesImg,
                description: "From annual reports to lifestyle magazines, we produce high-quality multi-page publications with perfect binding or saddle stitching.",
                features: ["Saddle Stitched or Perfect Bound", "High-Resolution Image Reproduction", "Cover Finishes available", "Custom Sizes"],
                details: [
                    { label: "Min. Order", value: "10 Units" },
                    { label: "Turnaround", value: "5-7 Days" },
                    { label: "Binding", value: "Perfect / Saddle" }
                ],
                useCases: ["Annual Reports", "Product Catalogs", "Company Profiles", "Event Programs"],
                pricing: { basePrice: 150, minQty: 10, unit: 'Units' }
            },
            {
                id: 'posters',
                name: 'Posters & Banners',
                icon: Scroll,
                image: postersImg,
                description: "Grab attention with large format printing. Vibrant colors and durable materials make our posters and banners perfect for indoor and outdoor use.",
                features: ["Wide Format Printing", "Vinyl, Canvas, or Paper", "Weather-resistant Options", "Grommets & Mounting Available"],
                details: [
                    { label: "Min. Order", value: "1 Unit" },
                    { label: "Turnaround", value: "1-2 Days" },
                    { label: "Format", value: "Large Format" }
                ],
                useCases: ["Event Promotions", "Storefront Displays", "Trade Show Booths", "Office Decor"],
                pricing: { basePrice: 200, minQty: 1, unit: 'Units' }
            },
            {
                id: 'stickers',
                name: 'Stickers & Labels',
                icon: Sticker,
                image: stickersImg,
                description: "Versatile branding tools for products, packaging, and giveaways. Custom cut to any shape and available in rolls or sheets.",
                features: ["Die-cut Custom Shapes", "Vinyl or Paper Stock", "Waterproof Options", "Easy Peel Backing"],
                details: [
                    { label: "Min. Order", value: "100 Units" },
                    { label: "Turnaround", value: "3-4 Days" },
                    { label: "Type", value: "Roll / Sheet" }
                ],
                useCases: ["Product Labeling", "Brand Promotion", "Packaging Seals", "Event Badges"],
                pricing: { basePrice: 4, minQty: 100, unit: 'Units' }
            }
        ]
    },
    {
        id: "packaging",
        title: "Custom Packaging",
        icon: Package,
        description: "Elevate your product value with premium, sturdy, and beautifully finished packaging solutions.",
        items: [
            {
                id: 'rigid-boxes',
                name: 'Rigid Luxury Boxes',
                icon: Box,
                image: rigidBoxesImg,
                description: "The ultimate premium unboxing experience. Sturdy, high-end rigid boxes perfect for luxury goods, electronics, and gift sets.",
                features: ["Thick Greyboard Construction", "Premium Paper wrapping", "Magnetic Closures", "Custom Foam Inserts"],
                details: [
                    { label: "Min. Order", value: "500 Boxes" },
                    { label: "Turnaround", value: "15-20 Days" },
                    { label: "Grade", value: "Premium" }
                ],
                useCases: ["Luxury Goods", "Electronics", "VIP Gift Sets", "Jewelry Packaging"],
                pricing: { basePrice: 250, minQty: 500, unit: 'Boxes' }
            },
            {
                id: 'cartons',
                name: 'Product Cartons',
                icon: Box,
                image: cartonsImg,
                description: "Standard folding cartons that are cost-effective yet high-quality. Ideal for retail products, cosmetics, and lightweight goods.",
                features: ["SBS or Recycled Board", "Full Color CMYK Printing", "Embossing & Debossing", "Auto-lock Bottoms"],
                details: [
                    { label: "Min. Order", value: "1000 Boxes" },
                    { label: "Turnaround", value: "7-10 Days" },
                    { label: "Material", value: "SBS / mono" }
                ],
                useCases: ["Cosmetics Packaging", "Retail Shelves", "Pharma Boxes", "Food Packaging"],
                pricing: { basePrice: 15, minQty: 1000, unit: 'Boxes' }
            },
            {
                id: 'paper-bags',
                name: 'Paper Bags',
                icon: ShoppingBag,
                image: paperBagsImg,
                description: "Extend your brand visibility beyond the store. Durable, branded paper bags available in various sizes and handle types.",
                features: ["Kraft or Coated Paper", "Twisted or Rope Handles", "Reinforced Bottoms", "Full Branding Surface"],
                details: [
                    { label: "Min. Order", value: "500 Bags" },
                    { label: "Turnaround", value: "7-10 Days" },
                    { label: "Handle", value: "Twist / Rope" }
                ],
                useCases: ["Retail Shopping", "Event Goodie Bags", "Corporate Gifting", "Takeout Food"],
                pricing: { basePrice: 25, minQty: 500, unit: 'Bags' }
            },
            {
                id: 'mailer-boxes',
                name: 'Mailer Boxes',
                icon: Box,
                image: mailerBoxesImg,
                description: "Secure and stylish shipping boxes for e-commerce brands. Designed to protect your products while impressing your customers.",
                features: ["E-flute Corrugated Board", "Inside & Outside Printing", "Self-locking Design", "Eco-friendly Materials"],
                details: [
                    { label: "Min. Order", value: "200 Boxes" },
                    { label: "Turnaround", value: "7-12 Days" },
                    { label: "Usage", value: "Shipping" }
                ],
                useCases: ["E-commerce Shipments", "Subscription Boxes", "PR Kits", "Direct Mail"],
                pricing: { basePrice: 45, minQty: 200, unit: 'Boxes' }
            },
            {
                id: 'tissue',
                name: 'Custom Tissue Paper',
                icon: Layers,
                image: tissuesImg,
                description: "Add a layer of luxury and protection inside your packaging. Custom printed tissue paper shows you care about the details.",
                features: ["17gsm Acid-free Paper", "Repeated Logo Pattern", "Multiple Ink Colors", "Soft & Premium Feel"],
                details: [
                    { label: "Thickness", value: "17-20 gsm" }
                ],
                useCases: ["E-commerce Packaging", "Gift Wrapping", "Retail Bags", "Luxury Product Protection"],
                pricing: { basePrice: 2, minQty: 2000, unit: 'Sheets' }
            }
        ]
    },
    {
        id: "gifting",
        title: "Corporate Gifting",
        icon: Gift,
        description: "Build relationships that last with high-quality personalized merchandise.",
        items: [
            {
                id: 'apparel',
                name: 'Custom Apparel',
                icon: Shirt,
                image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80&w=1000",
                description: "Turn your team and fans into brand ambassadors with high-quality printed or embroidered t-shirts, hoodies, and caps.",
                features: ["Screen Printing & Embroidery", "Premium Cotton Blends", "Unisex & Gender-specific cuts", "Various Colors Available"],
                details: [
                    { label: "Technique", value: "Print / Embroidery" }
                ],
                useCases: ["Team Uniforms", "Event Merchandise", "Promotional Giveaways", "Company Swag"],
                pricing: { basePrice: 450, minQty: 25, unit: 'Units' }
            },
            {
                id: 'drinkware',
                name: 'Drinkware',
                icon: Coffee,
                image: drinkwareImg,
                description: "Practical and popular. Custom mugs, tumblers, and water bottles that people will use every day.",
                features: ["Ceramic, Steel, or Glass", "Laser Etching or Printing", "Double-wall Insulation", "Durable Coating"],
                details: [
                    { label: "Material", value: "Steel / Ceramic" }
                ],
                useCases: ["Employee Onboarding", "Client Gifting", "Trade Shows", "Office Use"],
                pricing: { basePrice: 350, minQty: 50, unit: 'Units' }
            },
            {
                id: 'notebooks',
                name: 'Premium Notebooks',
                icon: BookOpen,
                image: notebooksImg,
                description: "Elegant notebooks for ideas and meeting notes. A staple corporate gift that exudes professionalism.",
                features: ["Leather or Hardcover", "Embossed Logo", "Custom Inner Pages", "Elastic Band Closure"],
                details: [
                    { label: "Cover", value: "Leather / Hard" }
                ],
                useCases: ["Conferences", "Executive Gifts", "Training Materials", "Client Meetings"],
                pricing: { basePrice: 250, minQty: 50, unit: 'Units' }
            },
            {
                id: 'writing',
                name: 'Writing Instruments',
                icon: PenTool,
                image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=1000",
                description: "From budget-friendly giveaways to premium metal pens. Put your brand in their hand.",
                features: ["Metal or Plastic Pens", "Laser Engraving", "Smooth Ink Flow", "Gift Box Options"],
                details: [
                    { label: "Type", value: "Ballpoint / Roller" }
                ],
                useCases: ["Trade Shows", "Reception Desks", "Sales Calls", "Gift Sets"],
                pricing: { basePrice: 50, minQty: 100, unit: 'Units' }
            },
            {
                id: 'tech',
                name: 'Tech Accessories',
                icon: Smartphone,
                image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&q=80&w=1000",
                description: "Modern gifts for the modern professional. Power banks, USB drives, and wireless chargers.",
                features: ["High Utility Value", "Full Color Branding", "Compact & Portable", "Latest Tech Specs"],
                details: [
                    { label: "Min. Order", value: "25 Units" },
                    { label: "Turnaround", value: "7-10 Days" },
                    { label: "Category", value: "Electronics" }
                ],
                useCases: ["Corporate Gifts", "Tech Events", "Employee Welcome Kits"],
                pricing: { basePrice: 850, minQty: 25, unit: 'Units' }
            }
        ]
    }
];

function CostCalculator({ pricing, qty, onChange }) {
    // Safety check for qty
    const safeQty = qty !== undefined ? qty : (pricing ? pricing.minQty : 1);
    const total = safeQty * pricing.basePrice;

    return (
        <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Estimate Cost</h4>

            <div className="flex items-center justify-between mb-3">
                <div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-slate-900">₹{total.toLocaleString()}</span>
                        <span className="text-[10px] text-slate-500">approx.</span>
                    </div>
                    <p className="text-[9px] text-slate-400">Excludes tax & shipping</p>
                </div>
                <div className="text-right bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    <span className="text-xs font-bold text-slate-700 block">{qty.toLocaleString()} {pricing.unit}</span>
                    <span className="text-[9px] text-slate-400">₹{pricing.basePrice}/unit</span>
                </div>
            </div>

            <input
                type="range"
                min={pricing.minQty}
                max={pricing.minQty * 10}
                step={pricing.minQty}
                value={safeQty}
                onChange={(e) => onChange && onChange(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <div className="flex justify-between text-[9px] text-slate-400 font-medium mt-1">
                <span>{pricing.minQty}</span>
                <span>{pricing.minQty * 10}+</span>
            </div>
        </div>
    );
}

function FileUploader({ onFileChange }) {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        // 1MB limit (1024 * 1024 bytes)
        if (selectedFile.size > 1024 * 1024) {
            setError("File size exceeds 1MB limit");
            setFile(null);
            onFileChange(null);
            return;
        }

        setError(null);
        setFile(selectedFile);
        onFileChange(selectedFile);
    };

    const handleRemoveFile = (e) => {
        e.stopPropagation();
        setFile(null);
        setError(null);
        onFileChange(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="h-full flex flex-col">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Upload Design</h4>

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.ai,.psd,.jpg,.png"
            />

            <div
                onClick={() => fileInputRef.current?.click()}
                className={`flex-1 border-2 border-dashed rounded-xl transition-all cursor-pointer flex flex-col items-center justify-center p-4 text-center group min-h-[120px] relative overflow-hidden
                    ${error ? 'border-red-200 bg-red-50 hover:border-red-300' :
                        file ? 'border-green-200 bg-green-50 hover:border-green-300' :
                            'border-slate-200 hover:border-primary-400 hover:bg-primary-50'}`}
            >
                {/* Error State */}
                {error && (
                    <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-2">
                            <span className="text-xl font-bold text-red-500">!</span>
                        </div>
                        <span className="text-xs font-bold text-red-600 mb-1">File too large</span>
                        <span className="text-[10px] text-red-400">Max 1MB allowed</span>
                        <button
                            className="mt-2 text-[10px] font-bold text-slate-500 underline"
                            onClick={(e) => {
                                e.stopPropagation();
                                fileInputRef.current?.click();
                            }}
                        >
                            Try again
                        </button>
                    </div>
                )}

                {/* Success State */}
                {!error && file && (
                    <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300 w-full">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
                            <File className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-xs font-bold text-slate-700 truncate max-w-[90%] mb-1">{file.name}</span>
                        <span className="text-[10px] text-slate-400">{(file.size / 1024).toFixed(1)} KB</span>

                        <button
                            onClick={handleRemoveFile}
                            className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                        >
                            <Trash2 className="w-3.5 h-3.5" />
                        </button>
                    </div>
                )}

                {/* Default State */}
                {!error && !file && (
                    <>
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                            <UploadCloud className="w-5 h-5 text-slate-400 group-hover:text-primary-600 transition-colors" />
                        </div>
                        <span className="text-xs font-bold text-slate-600 group-hover:text-primary-700">Click to browse</span>
                        <span className="text-[10px] text-slate-400 mt-1">Supports PDF, AI, PSD</span>
                    </>
                )}
            </div>
        </div>
    );
}

function OrderSubmissionModal({ isOpen, onClose, product, qty, file }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        description: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Build FormData for multipart submission (supports file upload)
            const submitData = new FormData();
            submitData.append('name', formData.name);
            submitData.append('email', formData.email);
            submitData.append('phone', formData.phone);
            submitData.append('description', formData.description);
            submitData.append('productName', product.name);
            submitData.append('productId', product.id);
            submitData.append('quantity', qty);
            submitData.append('unitPrice', product.pricing?.basePrice || 0);
            submitData.append('estimatedTotal', product.pricing ? qty * product.pricing.basePrice : 0);

            if (file) {
                submitData.append('file', file);
            }

            const response = await fetch('/.netlify/functions/order-request', {
                method: 'POST',
                body: submitData
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Submission failed');
            }

            console.log('[Order Request] ✅ Submission successful:', result);
            alert(`Order request for ${product.name} submitted successfully! We will contact you at ${formData.email} or ${formData.phone} soon.`);

            // Reset form and close modal
            setFormData({ name: '', email: '', phone: '', description: '' });
            onClose();
        } catch (error) {
            console.error('[Order Request] ❌ Error:', error);
            alert('Failed to submit order request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between p-4 border-b border-slate-100">
                    <h3 className="font-bold text-lg text-slate-900">Confirm Your Interest</h3>
                    <button onClick={onClose} disabled={isSubmitting} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors disabled:opacity-50">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6">
                    <div className="flex items-start gap-4 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <img src={product.image} alt={product.name} className="w-16 h-16 rounded-lg object-cover" />
                        <div>
                            <h4 className="font-bold text-sm text-slate-900">{product.name}</h4>
                            <p className="text-xs text-slate-500 mt-1">Quantity: <span className="font-semibold text-slate-700">{qty.toLocaleString()}</span></p>
                            {file && (
                                <div className="flex items-center gap-1.5 mt-1 text-xs text-green-600 font-medium">
                                    <File className="w-3 h-3" /> {file.name}
                                </div>
                            )}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Full Name</label>
                            <input
                                type="text"
                                required
                                disabled={isSubmitting}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium text-slate-900 disabled:opacity-50"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Email Address</label>
                            <input
                                type="email"
                                required
                                disabled={isSubmitting}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium text-slate-900 disabled:opacity-50"
                                placeholder="john@company.com"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Phone Number</label>
                            <input
                                type="tel"
                                required
                                disabled={isSubmitting}
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium text-slate-900 disabled:opacity-50"
                                placeholder="+91 98765 43210"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Requirements / Description <span className="text-slate-400 font-normal">(Optional)</span></label>
                            <textarea
                                value={formData.description}
                                disabled={isSubmitting}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                rows={3}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium text-slate-900 resize-none disabled:opacity-50"
                                placeholder="Describe your requirements, special instructions, or any specific details..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-xl shadow-slate-900/10 hover:bg-primary-600 hover:shadow-primary-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Submitting...
                                </>
                            ) : (
                                <>Submit Order Request <ArrowRight className="w-4 h-4" /></>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>,
        document.body
    );
}

function ProductDetailView({ product, category }) {
    const [qty, setQty] = useState(product.pricing ? product.pricing.minQty : 1);
    const [file, setFile] = useState(null);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    // Reset state when product changes
    useEffect(() => {
        if (product.pricing) {
            setQty(product.pricing.minQty);
        }
        setFile(null);
    }, [product]);

    return (
        <div className="p-6">
            {/* Top Row: Image and Quick Info */}
            <div className="flex flex-col lg:flex-row gap-6 mb-6">
                {/* Product Image */}
                <div className="relative lg:w-2/5 h-52 lg:h-64 rounded-xl overflow-hidden shrink-0">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white">
                        <span className="text-[9px] font-bold bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full uppercase tracking-wider">{category.title}</span>
                        <h2 className="text-lg font-bold mt-1.5 drop-shadow-lg">{product.name}</h2>
                    </div>
                </div>

                {/* Description, Features, and Specs */}
                <div className="flex-1">
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{product.description}</p>

                    {/* Features as inline list */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.slice(0, 6).map((feature, idx) => (
                            <span key={idx} className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg text-xs text-slate-700">
                                <Check className="w-3 h-3 text-green-500" />
                                {feature}
                            </span>
                        ))}
                    </div>

                    {/* Specifications */}
                    {product.details && (
                        <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Specifications</h4>
                            <div className="flex flex-wrap gap-2">
                                {product.details.map((detail, idx) => (
                                    <div key={idx} className="bg-slate-50 p-2.5 rounded-lg text-center border border-slate-100 min-w-[100px] flex-1 basis-[calc(25%-0.5rem)] max-w-[200px]">
                                        <span className="block text-[10px] text-slate-400 font-medium uppercase truncate">{detail.label}</span>
                                        <span className="block text-xs font-bold text-slate-800 truncate" title={detail.value}>{detail.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Calculator */}
            {product.pricing && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                        <CostCalculator pricing={product.pricing} qty={qty} onChange={setQty} />
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                        <FileUploader onFileChange={setFile} />
                    </div>
                </div>
            )}

            {/* Use Cases */}
            {product.useCases && (
                <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Perfect For</h4>
                    <div className="flex flex-wrap gap-1.5">
                        {product.useCases.map((useCase, idx) => (
                            <span key={idx} className="bg-primary-50 text-primary-700 px-3 py-1.5 rounded-full text-xs font-medium border border-primary-100">
                                {useCase}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* CTA Bar */}
            <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <div className="hidden sm:flex items-center gap-3">
                    <div className="flex -space-x-2">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="User" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="User" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                        <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center text-[9px] font-bold text-white">2k+</div>
                    </div>
                    <span className="text-xs text-slate-500">Trusted by businesses</span>
                </div>
                <button
                    onClick={() => setIsOrderModalOpen(true)}
                    className="flex-1 sm:flex-none px-8 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-lg hover:bg-primary-600 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                    Submit Order <ArrowRight className="w-4 h-4" />
                </button>
            </div>
            <div className="text-center pb-4 sm:hidden">
                <span className="text-[10px] text-slate-400 italic">A team member will contact you soon to confirm details</span>
            </div>

            <OrderSubmissionModal
                isOpen={isOrderModalOpen}
                onClose={() => setIsOrderModalOpen(false)}
                product={product}
                qty={qty}
                file={file}
            />
        </div>
    );
}

export default function Services() {
    const [searchParams] = useSearchParams();
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
    const [activeProduct, setActiveProduct] = useState(CATEGORIES[0].items[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const detailViewRef = useRef(null);

    // Initial load from URL
    useEffect(() => {
        const categoryId = searchParams.get('category');
        if (categoryId) {
            const matchedCategory = CATEGORIES.find(c => c.id === categoryId);
            if (matchedCategory) {
                setActiveCategory(matchedCategory);
            }
        }
    }, [searchParams]);

    useEffect(() => {
        // Reset active product when category changes
        setActiveProduct(activeCategory.items[0]);
    }, [activeCategory]);

    // Preload all product images to ensure smooth transitions
    useEffect(() => {
        const preloadImages = () => {
            CATEGORIES.forEach(category => {
                category.items.forEach(item => {
                    if (item.image) {
                        const img = new Image();
                        img.src = item.image;
                    }
                });
            });
        };

        // requestIdleCallback is better for performance if available, otherwise immediate
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(preloadImages);
        } else {
            setTimeout(preloadImages, 1000); // Small delay to prioritize initial render
        }
    }, []);

    const handleProductClick = (item) => {
        setActiveProduct(item);
        if (window.innerWidth < 1024 && detailViewRef.current) {
            // Add a small delay to allow state update/animation to start
            setTimeout(() => {
                detailViewRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    const [direction, setDirection] = useState(0);

    const handlePrevCategory = () => {
        setDirection(-1);
        const currentIndex = CATEGORIES.findIndex(c => c.id === activeCategory.id);
        const prevIndex = (currentIndex - 1 + CATEGORIES.length) % CATEGORIES.length;
        setActiveCategory(CATEGORIES[prevIndex]);
    };

    const handleNextCategory = () => {
        setDirection(1);
        const currentIndex = CATEGORIES.findIndex(c => c.id === activeCategory.id);
        const nextIndex = (currentIndex + 1) % CATEGORIES.length;
        setActiveCategory(CATEGORIES[nextIndex]);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            {/* Hero Header */}
            <section className="relative h-[250px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={servicesHero}
                        alt="Our Services"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/80" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold mb-3"
                    >
                        Our Products & Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto"
                    >
                        Explore our wide range of print and packaging solutions.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            {/* Main Content */}
            <div className="container mx-auto px-6 md:px-12 lg:px-24 py-2 h-auto min-h-[600px] mb-32 relative z-0">

                {/* Mobile Category Carousel */}
                <div className="md:hidden relative max-w-5xl mx-auto mb-6 px-2">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center justify-center gap-3 w-full max-w-sm">
                            {/* Prev Button */}
                            <button
                                onClick={handlePrevCategory}
                                className="w-10 h-10 rounded-full bg-white text-slate-500 hover:text-primary-600 border border-slate-200 shadow-sm flex items-center justify-center active:scale-95 transition-all z-10 shrink-0"
                                aria-label="Previous Category"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Active Category Display */}
                            <div className="flex-1 flex justify-center relative min-w-0 overflow-hidden">
                                <AnimatePresence mode="wait" custom={direction}>
                                    <motion.div
                                        key={activeCategory.id}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                        className="w-full h-10 px-4 rounded-full bg-primary-600 text-white shadow-md shadow-primary-500/25 flex items-center justify-center gap-2 text-sm font-bold truncate"
                                    >
                                        <activeCategory.icon className="w-4 h-4 shrink-0" />
                                        <span className="truncate">{activeCategory.title}</span>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={handleNextCategory}
                                className="w-10 h-10 rounded-full bg-white text-slate-500 hover:text-primary-600 border border-slate-200 shadow-sm flex items-center justify-center active:scale-95 transition-all z-10 shrink-0"
                                aria-label="Next Category"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Indicators */}
                        <div className="flex justify-center gap-1.5">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${activeCategory.id === cat.id ? "w-6 bg-primary-600" : "w-1.5 bg-slate-300"
                                        }`}
                                    aria-label={`Go to ${cat.title}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop Category Tabs */}
                <div className="hidden md:flex justify-center mb-10">
                    <div className="bg-white p-1.5 rounded-full shadow-lg shadow-slate-100 border border-slate-100 inline-flex flex-wrap gap-1">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2.5 ${activeCategory.id === cat.id
                                    ? "bg-primary-600 text-white shadow-md relative z-10"
                                    : "text-slate-500 hover:text-primary-600 hover:bg-slate-50"
                                    }`}
                            >
                                <cat.icon className={`w-4 h-4 ${activeCategory.id === cat.id ? "text-white" : "opacity-70"}`} />
                                {cat.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Three Column Layout */}
                <div className="grid lg:grid-cols-12 gap-8 h-auto">

                    {/* Sidebar - Product List (Desktop Only) */}
                    <div className="hidden lg:flex lg:col-span-3 flex-col sticky top-24 self-start space-y-4 h-[calc(100vh-120px)]">
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex-1 flex flex-col overflow-hidden">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 px-2 shrink-0">
                                {activeCategory.title}
                            </h3>
                            <div className="space-y-1 overflow-y-auto pr-2 custom-scrollbar">
                                {activeCategory.items.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveProduct(item)}
                                        className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between group ${activeProduct.id === item.id
                                            ? "bg-primary-50 text-primary-700 font-bold ring-1 ring-primary-200"
                                            : "text-slate-600 hover:bg-slate-50 hover:pl-5"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon className={`w-4 h-4 ${activeProduct.id === item.id ? "text-primary-600" : "text-slate-400"}`} />
                                            <span className="text-sm truncate">{item.name}</span>
                                        </div>
                                        {activeProduct.id === item.id && <ChevronRight className="w-4 h-4 text-primary-500" />}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Help Box */}
                        <div className="bg-slate-900 text-white p-6 rounded-2xl shrink-0 text-center">
                            <h4 className="font-bold text-lg mb-1">Need Help?</h4>
                            <Link to="/contact" className="text-primary-400 font-bold hover:text-primary-300 text-xs underline decoration-2 underline-offset-4">
                                Contact Support
                            </Link>
                        </div>
                    </div>

                    {/* Detail View - Main Content */}
                    <div className="lg:col-span-9" ref={detailViewRef}>

                        {/* Mobile Product Selector (Dropdown) */}
                        <div className="lg:hidden mb-3 relative z-20">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 px-1">Select Product</h3>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full bg-white border border-slate-200 text-slate-700 font-bold py-4 px-6 rounded-2xl shadow-sm flex items-center justify-between active:scale-[0.99] transition-transform"
                            >
                                <div className="flex items-center gap-3">
                                    <activeProduct.icon className="w-5 h-5 text-primary-600" />
                                    {activeProduct.name}
                                </div>
                                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden max-h-[400px] overflow-y-auto"
                                    >
                                        {activeCategory.items.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => {
                                                    handleProductClick(item);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className={`w-full text-left px-6 py-4 flex items-center gap-3 transition-colors border-b border-slate-50 last:border-0 ${activeProduct.id === item.id ? 'bg-primary-50 text-primary-700 font-bold' : 'text-slate-600 hover:bg-slate-50'
                                                    }`}
                                            >
                                                <item.icon className={`w-5 h-5 ${activeProduct.id === item.id ? 'text-primary-600' : 'text-slate-400'}`} />
                                                {item.name}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProduct.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white rounded-2xl shadow-xl shadow-slate-100 border border-slate-100 overflow-hidden"
                            >
                                {/* Card Layout: Image Top, Content Grid Below */}
                                {/* Use specialized Product Detail View component that manages state */}
                                <ProductDetailView product={activeProduct} category={activeCategory} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            {/* CTA Bottom */}
            {/* CTA Bottom */}
            <section className="py-20 bg-slate-900 text-white text-center mt-20 relative z-10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking for something custom?</h2>
                    <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                        We love a challenge. If you have a unique printing requirement that isn't listed here, let's talk about it.
                    </p>
                    <Link to="/contact" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-primary-50 transition-all inline-block">
                        Speak to a Consultant
                    </Link>
                </div>
            </section>
        </div >
    );
}
