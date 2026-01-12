
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Printer, Package, Gift, ArrowRight,
    BookOpen, FileText, CreditCard, Scroll, Sticker,
    Box, ShoppingBag, Layers,
    Coffee, Shirt, PenTool, Smartphone,
    ChevronRight, ChevronLeft, ChevronDown, Check
} from 'lucide-react';

import commercialImg from '../assets/images/commercial_v2.png';
import packagingImg from '../assets/images/packaging_v2.png';
import giftingImg from '../assets/images/gifting_v2.png';

import businessCardsImg from '../assets/images/products/business_cards.png';
import brochuresImg from '../assets/images/products/brochures.png';
import letterheadsImg from '../assets/images/products/letterheads.png';

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
                features: ["350gsm - 400gsm Premium Stock", "Matte, Gloss, or Soft-touch Lamination", "Spot UV & Foil Stamping Options", "Rounded Corners Available"]
            },
            {
                id: 'brochures',
                name: 'Brochures & Flyers',
                icon: BookOpen,
                image: brochuresImg,
                description: "Communicate your message effectively with professionally printed brochures. Perfect for marketing campaigns, product catalogs, and event guides.",
                features: ["Bi-fold, Tri-fold, Z-fold options", "High-quality Digital & Offset Print", "Gloss or Matte Finishes", "Bulk Volume Discounts"]
            },
            {
                id: 'letterheads',
                name: 'Letterheads',
                icon: FileText,
                image: letterheadsImg,
                description: "Reinforce your brand identity with every official document. Our crisp, clean letterhead printing ensures you look professional on paper.",
                features: ["Premium Bond Paper", "Crisp Typography", "Pantone Color Matching", "Laser Printer Compatible"]
            },
            {
                id: 'magazines',
                name: 'Magazines & Booklets',
                icon: BookOpen,
                image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000",
                description: "From annual reports to lifestyle magazines, we produce high-quality multi-page publications with perfect binding or saddle stitching.",
                features: ["Saddle Stitched or Perfect Bound", "High-Resolution Image Reproduction", "Cover Finishes available", "Custom Sizes"]
            },
            {
                id: 'posters',
                name: 'Posters & Banners',
                icon: Scroll,
                image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=1000",
                description: "Grab attention with large format printing. Vibrant colors and durable materials make our posters and banners perfect for indoor and outdoor use.",
                features: ["Wide Format Printing", "Vinyl, Canvas, or Paper", "Weather-resistant Options", "Grommets & Mounting Available"]
            },
            {
                id: 'stickers',
                name: 'Stickers & Labels',
                icon: Sticker,
                image: "https://images.unsplash.com/photo-1616401784845-180881149eec?auto=format&fit=crop&q=80&w=1000",
                description: "Versatile branding tools for products, packaging, and giveaways. Custom cut to any shape and available in rolls or sheets.",
                features: ["Die-cut Custom Shapes", "Vinyl or Paper Stock", "Waterproof Options", "Easy Peel Backing"]
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
                image: "https://images.unsplash.com/photo-1628131376840-7abf06ae5f05?auto=format&fit=crop&q=80&w=1000",
                description: "The ultimate premium unboxing experience. Sturdy, high-end rigid boxes perfect for luxury goods, electronics, and gift sets.",
                features: ["Thick Greyboard Construction", "Premium Paper wrapping", "Magnetic Closures", "Custom Foam Inserts"]
            },
            {
                id: 'cartons',
                name: 'Product Cartons',
                icon: Box,
                image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1000",
                description: "Standard folding cartons that are cost-effective yet high-quality. Ideal for retail products, cosmetics, and lightweight goods.",
                features: ["SBS or Recycled Board", "Full Color CMYK Printing", "Embossing & Debossing", "Auto-lock Bottoms"]
            },
            {
                id: 'paper-bags',
                name: 'Paper Bags',
                icon: ShoppingBag,
                image: "https://images.unsplash.com/photo-1598532163257-537dfe5d7285?auto=format&fit=crop&q=80&w=1000",
                description: "Extend your brand visibility beyond the store. Durable, branded paper bags available in various sizes and handle types.",
                features: ["Kraft or Coated Paper", "Twisted or Rope Handles", "Reinforced Bottoms", "Full Branding Surface"]
            },
            {
                id: 'mailer-boxes',
                name: 'Mailer Boxes',
                icon: Box,
                image: "https://images.unsplash.com/photo-1595079676339-1534801fafde?auto=format&fit=crop&q=80&w=1000",
                description: "Secure and stylish shipping boxes for e-commerce brands. Designed to protect your products while impressing your customers.",
                features: ["E-flute Corrugated Board", "Inside & Outside Printing", "Self-locking Design", "Eco-friendly Materials"]
            },
            {
                id: 'tissue',
                name: 'Custom Tissue Paper',
                icon: Layers,
                image: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80&w=1000",
                description: "Add a layer of luxury and protection inside your packaging. Custom printed tissue paper shows you care about the details.",
                features: ["17gsm Acid-free Paper", "Repeated Logo Pattern", "Multiple Ink Colors", "Soft & Premium Feel"]
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
                features: ["Screen Printing & Embroidery", "Premium Cotton Blends", "Unisex & Gender-specific cuts", "Various Colors Available"]
            },
            {
                id: 'drinkware',
                name: 'Drinkware',
                icon: Coffee,
                image: "https://images.unsplash.com/photo-1517487881594-275122854ad7?auto=format&fit=crop&q=80&w=1000",
                description: "Practical and popular. Custom mugs, tumblers, and water bottles that people will use every day.",
                features: ["Ceramic, Steel, or Glass", "Laser Etching or Printing", "Double-wall Insulation", "Durable Coating"]
            },
            {
                id: 'notebooks',
                name: 'Premium Notebooks',
                icon: BookOpen,
                image: "https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&q=80&w=1000",
                description: "Elegant notebooks for ideas and meeting notes. A staple corporate gift that exudes professionalism.",
                features: ["Leather or Hardcover", "Embossed Logo", "Custom Inner Pages", "Elastic Band Closure"]
            },
            {
                id: 'writing',
                name: 'Writing Instruments',
                icon: PenTool,
                image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=1000",
                description: "From budget-friendly giveaways to premium metal pens. Put your brand in their hand.",
                features: ["Metal or Plastic Pens", "Laser Engraving", "Smooth Ink Flow", "Gift Box Options"]
            },
            {
                id: 'tech',
                name: 'Tech Accessories',
                icon: Smartphone,
                image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&q=80&w=1000",
                description: "Modern gifts for the modern professional. Power banks, USB drives, and wireless chargers.",
                features: ["High Utility Value", "Full Color Branding", "Compact & Portable", "Latest Tech Specs"]
            }
        ]
    }
];

export default function Services() {
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
    const [activeProduct, setActiveProduct] = useState(CATEGORIES[0].items[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const detailViewRef = useRef(null);

    useEffect(() => {
        // Find the full category object if we only have the ID (though here we set the object directly)
        // Reset active product when category changes
        setActiveProduct(activeCategory.items[0]);
    }, [activeCategory]);

    const handleProductClick = (item) => {
        setActiveProduct(item);
        if (window.innerWidth < 1024 && detailViewRef.current) {
            // Add a small delay to allow state update/animation to start
            setTimeout(() => {
                detailViewRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    const handlePrevCategory = () => {
        const currentIndex = CATEGORIES.findIndex(c => c.id === activeCategory.id);
        const prevIndex = (currentIndex - 1 + CATEGORIES.length) % CATEGORIES.length;
        setActiveCategory(CATEGORIES[prevIndex]);
    };

    const handleNextCategory = () => {
        const currentIndex = CATEGORIES.findIndex(c => c.id === activeCategory.id);
        const nextIndex = (currentIndex + 1) % CATEGORIES.length;
        setActiveCategory(CATEGORIES[nextIndex]);
    };

    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            {/* Simple Header */}
            <div className="bg-slate-900 text-white py-16 md:py-24 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products & Services</h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">Explore our wide range of print and packaging solutions designed to elevate your brand.</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-12">

                {/* Category Carousel */}
                <div className="relative max-w-5xl mx-auto mb-16 px-4">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center justify-center gap-4 md:gap-8 w-full max-w-2xl">
                            {/* Prev Button */}
                            <button
                                onClick={handlePrevCategory}
                                className="p-4 rounded-full bg-white text-slate-600 hover:bg-slate-50 hover:text-primary-600 border border-slate-200 shadow-sm transition-all hover:scale-110 active:scale-95 z-10 shrink-0"
                                aria-label="Previous Category"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            {/* Active Category Display */}
                            <div className="flex-1 flex justify-center relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeCategory.id}
                                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                                        transition={{ duration: 0.2 }}
                                        className="px-8 py-4 rounded-full bg-primary-600 text-white shadow-xl shadow-primary-500/30 flex items-center justify-center gap-3 text-lg md:text-xl font-bold w-full mx-auto"
                                    >
                                        <activeCategory.icon className="w-6 h-6" />
                                        <span className="whitespace-nowrap">{activeCategory.title}</span>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={handleNextCategory}
                                className="p-4 rounded-full bg-white text-slate-600 hover:bg-slate-50 hover:text-primary-600 border border-slate-200 shadow-sm transition-all hover:scale-110 active:scale-95 z-10 shrink-0"
                                aria-label="Next Category"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Indicators */}
                        <div className="flex justify-center gap-2">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`h-2 rounded-full transition-all duration-300 ${activeCategory.id === cat.id ? "w-8 bg-primary-600" : "w-2 bg-slate-300 hover:bg-primary-300"
                                        }`}
                                    aria-label={`Go to ${cat.title}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-12 gap-8 min-h-[600px]">

                    {/* Sidebar - Product List (Desktop Only) */}
                    <div className="hidden lg:block lg:col-span-4 space-y-3">
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                            <h3 className="text-lg font-bold text-slate-400 uppercase tracking-wider mb-6 px-2">
                                {activeCategory.title} Products
                            </h3>
                            <div className="space-y-2">
                                {activeCategory.items.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveProduct(item)}
                                        className={`w-full text-left px-5 py-4 rounded-xl transition-all flex items-center justify-between group ${activeProduct.id === item.id
                                            ? "bg-primary-50 text-primary-700 font-bold ring-1 ring-primary-200"
                                            : "text-slate-600 hover:bg-slate-50 hover:pl-6"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon className={`w-5 h-5 ${activeProduct.id === item.id ? "text-primary-600" : "text-slate-400"}`} />
                                            {item.name}
                                        </div>
                                        {activeProduct.id === item.id && <ChevronRight className="w-5 h-5 text-primary-500" />}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Help Box */}
                        <div className="bg-slate-900 text-white p-8 rounded-3xl mt-6 text-center">
                            <h4 className="font-bold text-xl mb-2">Need Help?</h4>
                            <p className="text-slate-400 text-sm mb-6">Not sure which spec is right for you? Our experts can guide you.</p>
                            <Link to="/contact" className="text-primary-400 font-bold hover:text-primary-300 text-sm underline decoration-2 underline-offset-4">
                                Contact Support
                            </Link>
                        </div>
                    </div>

                    {/* Detail View - Right Side */}
                    <div className="lg:col-span-8" ref={detailViewRef}>

                        {/* Mobile Product Selector (Dropdown) */}
                        <div className="lg:hidden mb-8 relative z-20">
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
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-2xl shadow-slate-200/50 border border-white/50 h-full flex flex-col relative overflow-hidden"
                            >
                                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-8 group shadow-lg">
                                    <img
                                        src={activeProduct.image}
                                        alt={activeProduct.name}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                                    <div className="absolute bottom-6 left-6 text-white max-w-lg">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/10">
                                                <activeProduct.icon className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider">{activeCategory.title}</span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">{activeProduct.name}</h2>
                                    </div>
                                </div>

                                <div className="prose prose-lg text-slate-600 mb-10 leading-relaxed">
                                    <p>{activeProduct.description}</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4 mb-10">
                                    {activeProduct.features.map((feature, idx) => (
                                        <div key={idx} className="bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 p-4 rounded-xl border border-slate-100 flex items-start gap-4 group">
                                            <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-primary-200 group-hover:text-primary-500 transition-colors">
                                                <Check className="w-3 h-3 text-green-500" />
                                            </div>
                                            <span className="text-slate-700 font-medium text-sm pt-0.5">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-8 border-t border-slate-100 flex flex-col md:flex-row gap-6 items-center justify-between">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                                                {i === 3 ? "2k+" : ""}
                                            </div>
                                        ))}
                                        <div className="pl-4 flex flex-col justify-center">
                                            <span className="text-xs font-bold text-slate-900">Trusted by</span>
                                            <span className="text-xs text-slate-500">2,000+ businesses</span>
                                        </div>
                                    </div>
                                    <Link
                                        to="/contact"
                                        className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2 group shadow-lg shadow-primary-500/20"
                                    >
                                        Request Quote
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            {/* CTA Bottom */}
            <section className="py-20 bg-slate-900 text-white text-center mt-20">
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
        </div>
    );
}
