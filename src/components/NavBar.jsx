
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Services", href: "/#services" },
        { name: "About", href: "/about" },
        { name: "Portfolio", href: "/#portfolio" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled || !isHome ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
                        <span className={isScrolled || !isHome ? "text-slate-900" : "text-white"}>Padma<span className="text-primary-600">Shree</span></span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            item.href.startsWith("/#") ? (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-medium hover:text-primary-600 transition-colors",
                                        isScrolled || !isHome ? "text-slate-600" : "text-slate-200"
                                    )}
                                >
                                    {item.name}
                                </a>
                            ) : (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={cn(
                                        "text-sm font-medium hover:text-primary-600 transition-colors",
                                        isScrolled || !isHome ? "text-slate-600" : "text-slate-200"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            )

                        ))}
                        <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary-500/30">
                            Get a Quote
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    {!mobileMenuOpen && (
                        <button
                            className="md:hidden text-2xl"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu className={isScrolled || !isHome ? "text-slate-900" : "text-white"} />
                        </button>
                    )}
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        className="fixed inset-0 bg-white z-[100] flex flex-col p-8 overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <span className="text-2xl font-bold text-slate-900">Menu</span>
                            <button onClick={() => setMobileMenuOpen(false)}>
                                <X className="w-8 h-8 text-slate-500" />
                            </button>
                        </div>
                        <div className="flex flex-col gap-6 text-xl font-medium text-slate-800">
                            {navItems.map((item) => (
                                item.href.startsWith("/#") ? (
                                    <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}>{item.name}</a>
                                ) : (
                                    <Link key={item.name} to={item.href} onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                                )
                            ))}
                        </div>
                        <div className="mt-auto">
                            <button className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg">
                                Get a Quote
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
