
import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

import contactHero from '../assets/images/contact-hero.png?format=webp&w=1920&quality=75';

export default function Contact() {
    const location = useLocation();

    // Scroll logic removed as per user request

    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative h-auto md:h-[250px] py-16 md:py-0 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={contactHero}
                        alt="Contact Us"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/70" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-2"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto"
                    >
                        We're here to help you with your next big project. Reach out to us for quotes, queries, or just to say hello.
                    </motion.p>
                </div>
            </section>

            <section className="py-8 container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                    {/* Contact Form */}
                    <motion.div
                        id="contact-form"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                        <form className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">First Name</label>
                                    <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Last Name</label>
                                    <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                                <input type="email" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Subject</label>
                                <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all">
                                    <option>Commercial Printing Quote</option>
                                    <option>Packaging Inquiry</option>
                                    <option>Corporate Gifting</option>
                                    <option>General Support</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
                                <textarea rows="3" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                                Send Message <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Contact Information</h2>
                            <p className="text-slate-500 text-base md:text-lg mb-6 leading-relaxed">
                                Prefer to talk? Call us directly or visit our office for a cup of coffee and a consultation.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900">Headquarters</h4>
                                    <p className="text-slate-500 mt-1 text-sm">123 Print Avenue, Industrial Area,<br />Tech City, Bangalore 560001</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900">Phone</h4>
                                    <p className="text-slate-500 mt-1 text-sm">+91 98765 43210 (Sales)</p>
                                    <p className="text-slate-500 text-sm">+91 80 1234 5678 (Support)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900">Email</h4>
                                    <p className="text-slate-500 mt-1 text-sm">sales@padmashree.com</p>
                                    <p className="text-slate-500 text-sm">support@padmashree.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900">Working Hours</h4>
                                    <p className="text-slate-500 mt-1 text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                                    <p className="text-slate-500 text-sm">Sun: Closed</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="h-[400px] bg-slate-200 relative grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124419.09703352758!2d77.51868352528654!3d12.964956894084365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1705050000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </section>

        </div>
    )
}
