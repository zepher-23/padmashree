
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import {
    Printer, Package, Gift, ArrowRight,
    BookOpen, FileText, CreditCard, Scroll, Sticker,
    Box, ShoppingBag, Layers,
    Coffee, Shirt, PenTool, Smartphone,
    ChevronRight, ChevronLeft, ChevronDown, Check
} from 'lucide-react';

import commercialImg from '../assets/images/commercial_v2.png?format=webp&w=1200&quality=80';
import packagingImg from '../assets/images/packaging_v2.png?format=webp&w=1200&quality=80';
import giftingImg from '../assets/images/gifting_v2.png?format=webp&w=1200&quality=80';

import businessCardsImg from '../assets/images/products/business_cards.png?format=webp&w=1200&quality=80';
import brochuresImg from '../assets/images/products/brochures.png?format=webp&w=1200&quality=80';
import letterheadsImg from '../assets/images/products/letterhead.jpeg?format=webp&w=1200&quality=80';
import postersImg from '../assets/images/products/poster.jpeg?format=webp&w=1200&quality=80';
import stickersImg from '../assets/images/products/stickers.jpeg?format=webp&w=1200&quality=80';
import rigidBoxesImg from '../assets/images/products/rigid-box.jpeg?format=webp&w=1200&quality=80';
import cartonsImg from '../assets/images/products/product-cartons.jpeg?format=webp&w=1200&quality=80';
import paperBagsImg from '../assets/images/products/paper-bags.jpeg?format=webp&w=1200&quality=80';
import mailerBoxesImg from '../assets/images/products/mailer-box.jpeg?format=webp&w=1200&quality=80';
import tissuesImg from '../assets/images/products/tissues.jpeg?format=webp&w=1200&quality=80';
import drinkwareImg from '../assets/images/products/drinkware.jpeg?format=webp&w=1200&quality=80';
import magazinesImg from '../assets/images/products/magazine-booklets.jpeg?format=webp&w=1200&quality=80';
import notebooksImg from '../assets/images/products/premium-book.jpeg?format=webp&w=1200&quality=80';

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
                image: magazinesImg,
                description: "From annual reports to lifestyle magazines, we produce high-quality multi-page publications with perfect binding or saddle stitching.",
                features: ["Saddle Stitched or Perfect Bound", "High-Resolution Image Reproduction", "Cover Finishes available", "Custom Sizes"]
            },
            {
                id: 'posters',
                name: 'Posters & Banners',
                icon: Scroll,
                image: postersImg,
                description: "Grab attention with large format printing. Vibrant colors and durable materials make our posters and banners perfect for indoor and outdoor use.",
                features: ["Wide Format Printing", "Vinyl, Canvas, or Paper", "Weather-resistant Options", "Grommets & Mounting Available"]
            },
            {
                id: 'stickers',
                name: 'Stickers & Labels',
                icon: Sticker,
                image: stickersImg,
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
                image: rigidBoxesImg,
                description: "The ultimate premium unboxing experience. Sturdy, high-end rigid boxes perfect for luxury goods, electronics, and gift sets.",
                features: ["Thick Greyboard Construction", "Premium Paper wrapping", "Magnetic Closures", "Custom Foam Inserts"]
            },
            {
                id: 'cartons',
                name: 'Product Cartons',
                icon: Box,
                image: cartonsImg,
                description: "Standard folding cartons that are cost-effective yet high-quality. Ideal for retail products, cosmetics, and lightweight goods.",
                features: ["SBS or Recycled Board", "Full Color CMYK Printing", "Embossing & Debossing", "Auto-lock Bottoms"]
            },
            {
                id: 'paper-bags',
                name: 'Paper Bags',
                icon: ShoppingBag,
                image: paperBagsImg,
                description: "Extend your brand visibility beyond the store. Durable, branded paper bags available in various sizes and handle types.",
                features: ["Kraft or Coated Paper", "Twisted or Rope Handles", "Reinforced Bottoms", "Full Branding Surface"]
            },
            {
                id: 'mailer-boxes',
                name: 'Mailer Boxes',
                icon: Box,
                image: mailerBoxesImg,
                description: "Secure and stylish shipping boxes for e-commerce brands. Designed to protect your products while impressing your customers.",
                features: ["E-flute Corrugated Board", "Inside & Outside Printing", "Self-locking Design", "Eco-friendly Materials"]
            },
            {
                id: 'tissue',
                name: 'Custom Tissue Paper',
                icon: Layers,
                image: tissuesImg,
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
                image: drinkwareImg,
                description: "Practical and popular. Custom mugs, tumblers, and water bottles that people will use every day.",
                features: ["Ceramic, Steel, or Glass", "Laser Etching or Printing", "Double-wall Insulation", "Durable Coating"]
            },
            {
                id: 'notebooks',
                name: 'Premium Notebooks',
                icon: BookOpen,
                image: notebooksImg,
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
            <div className="bg-slate-900 text-white py-8 md:py-12 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Products & Services</h1>
                    <p className="text-slate-400 text-base max-w-2xl mx-auto">Explore our wide range of print and packaging solutions.</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-6 h-auto md:h-[calc(100vh-250px)] min-h-[600px]">

                {/* Mobile Category Carousel */}
                <div className="md:hidden relative max-w-5xl mx-auto mb-16 px-4">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center justify-center gap-4 w-full max-w-2xl">
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
                                        className="px-8 py-4 rounded-full bg-primary-600 text-white shadow-xl shadow-primary-500/30 flex items-center justify-center gap-3 text-lg font-bold w-full mx-auto"
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

                {/* Desktop Category Tabs */}
                <div className="hidden md:flex flex-wrap justify-center gap-3 mb-6">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 border-2 ${activeCategory.id === cat.id
                                ? "bg-primary-600 border-primary-600 text-white shadow-md shadow-primary-500/30 scale-105"
                                : "bg-white border-slate-200 text-slate-600 hover:border-primary-200 hover:text-primary-600 hover:-translate-y-1"
                                }`}
                        >
                            <cat.icon className="w-4 h-4" />
                            {cat.title}
                        </button>
                    ))}
                </div>

                {/* Two Column Layout (Fixed Height Desktop) */}
                <div className="grid lg:grid-cols-12 gap-6 h-full md:overflow-hidden">

                    {/* Sidebar - Product List (Desktop Only) */}
                    <div className="hidden lg:flex lg:col-span-3 flex-col h-full space-y-3">
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex-1 flex flex-col overflow-hidden">
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

                    {/* Detail View - Right Side */}
                    <div className="lg:col-span-9" ref={detailViewRef}>

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
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white rounded-[2rem] shadow-2xl shadow-slate-100 border border-slate-100 h-full flex flex-col relative overflow-hidden"
                            >
                                {/* Scrollable Area */}
                                <div className="flex-1 overflow-y-auto custom-scrollbar">
                                    {/* Compact Hero Image */}
                                    <div className="relative h-48 w-full group">
                                        <img
                                            src={activeProduct.image}
                                            alt={activeProduct.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                                        <div className="absolute bottom-4 left-6 right-6 text-white flex items-end justify-between">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-[10px] font-bold bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 uppercase tracking-wider">{activeCategory.title}</span>
                                                </div>
                                                <h2 className="text-2xl font-bold leading-tight">{activeProduct.name}</h2>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="prose prose-sm text-slate-600 mb-6 max-w-none text-justify">
                                            <p>{activeProduct.description}</p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                                            {activeProduct.features.map((feature, idx) => (
                                                <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center gap-3">
                                                    <div className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0">
                                                        <Check className="w-2.5 h-2.5 text-green-500" />
                                                    </div>
                                                    <span className="text-slate-700 font-medium text-xs leading-tight">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Bottom Action Area */}
                                        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="flex -space-x-2">
                                                    {[1, 2, 3].map(i => (
                                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">
                                                            {i === 3 ? "2k+" : ""}
                                                        </div>
                                                    ))}
                                                </div>
                                                <p className="text-xs text-slate-500">Trusted by <span className="font-bold text-slate-900">2,000+ businesses</span></p>
                                            </div>

                                            <Link
                                                to="/contact"
                                                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary-600 text-white font-bold text-sm shadow-lg shadow-primary-500/30 hover:bg-primary-700 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                                            >
                                                Get a Quote <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* CTA Bottom */}
            < section className="py-20 bg-slate-900 text-white text-center mt-20" >
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking for something custom?</h2>
                    <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                        We love a challenge. If you have a unique printing requirement that isn't listed here, let's talk about it.
                    </p>
                    <Link to="/contact" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-primary-50 transition-all inline-block">
                        Speak to a Consultant
                    </Link>
                </div>
            </section >
        </div >
    );
}
