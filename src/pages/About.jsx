
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award, History, Heart } from 'lucide-react';

import aboutHero from '../assets/images/about-hero.png?format=webp&w=1920&quality=80';
import serviceCommercial from '../assets/images/service-commercial.png?format=webp&w=600&quality=80';
import servicePackaging from '../assets/images/service-packaging.png?format=webp&w=600&quality=80';

export default function About() {
    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative h-auto md:h-[500px] py-20 md:py-0 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={aboutHero}
                        alt="Inside Padmashree Workshop"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/80" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            More Than Just a <br /> <span className="text-primary-400">Printing Company.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                            We are architects of first impressions, partners in brand building, and relentless pursuers of perfection in print.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Narrative Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-bold mb-6 uppercase tracking-wider">
                                Our Story
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Decades of Ink, Paper, and Passion.
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    Founded in 1998, Padmashree began with a single offset press and a simple mission: to deliver print quality that speaks for itself.
                                </p>
                                <p>
                                    Over the last 25 years, we have evolved from a local print shop into a comprehensive commercial printing, packaging, and gifting solutions provider. We have invested heavily in state-of-the-art technology, but our core philosophy remains unchanged – every layer of ink matters.
                                </p>
                                <p>
                                    Today, we serve leading brands across industries, helping them translate their digital identities into tangible, high-impact physical assets.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="space-y-4 mt-8">
                                <div className="bg-slate-100 rounded-3xl h-64 w-full flex items-center justify-center overflow-hidden">
                                    <img src={serviceCommercial} alt="History" className="w-full h-full object-cover" />
                                </div>
                                <div className="bg-primary-50 rounded-3xl p-8 flex flex-col justify-center items-center text-center h-48">
                                    <History className="w-10 h-10 text-primary-600 mb-2" />
                                    <span className="text-3xl font-bold text-slate-900">1998</span>
                                    <span className="text-sm text-slate-500">Established</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-slate-900 rounded-3xl p-8 flex flex-col justify-center items-center text-center h-48">
                                    <Users className="w-10 h-10 text-primary-400 mb-2" />
                                    <span className="text-3xl font-bold text-white">150+</span>
                                    <span className="text-sm text-slate-400">Team Members</span>
                                </div>
                                <div className="bg-slate-100 rounded-3xl h-64 w-full flex items-center justify-center overflow-hidden">
                                    <img src={servicePackaging} alt="Team Work" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 md:py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-slate-800 p-10 rounded-3xl border border-slate-700"
                        >
                            <div className="w-16 h-16 bg-primary-900 rounded-2xl flex items-center justify-center mb-6 text-primary-400">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                To empower businesses by providing exceptional print and packaging solutions that enhance brand value, foster connections, and leave a lasting impression, all while maintaining the highest standards of sustainability.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-slate-800 p-10 rounded-3xl border border-slate-700"
                        >
                            <div className="w-16 h-16 bg-primary-900 rounded-2xl flex items-center justify-center mb-6 text-primary-400">
                                <Lightbulb className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                To be the undisputed leader in print innovation in the region, recognized for our commitment to quality, creativity, and customer-centricity, pushing the boundaries of what is possible on paper.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Values</h2>
                        <p className="text-slate-500">The principles that guide every print, every package, and every interaction.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Award, title: "Quality First", desc: "We never compromise. If it's not perfect, it doesn't leave our shop." },
                            { icon: Heart, title: "Customer Obsession", desc: "Your deadlines are ours. Your stress is ours. We go the extra mile." },
                            { icon: Lightbulb, title: "Innovation", desc: "We constantly upgrade our tech and techniques to offer you the best." }
                        ].map((value, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center">
                                <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600">
                                    <value.icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
