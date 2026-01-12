
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-2 text-white mb-6">
                            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
                            <span>Padma<span className="text-primary-500">Shree</span></span>
                        </a>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Your trusted partner for premium commercial printing, custom packaging, and corporate gifting solutions.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Commercial Printing</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Rigid Packaging</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Corporate Gifting</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Offset Printing</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Digital Printing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-primary-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Portfolio</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Testimonials</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-1" />
                                <span>123 Print Avenue, Industrial Area, <br />Tech City, 560001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                                <span>hello@padmashree.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© 2024 Padmashree Printers Pvt Ltd. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
