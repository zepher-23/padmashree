
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Printer,
  Package,
  Gift,
  ChevronRight,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";

// Data
const SERVICES = [
  {
    id: "commercial",
    title: "Commercial Printing",
    description: "High-volume, premium quality offset and digital printing for all your business needs.",
    features: ["Brochures & Flyers", "Business Cards", "Magazines", "Annual Reports"],
    image: "/service-commercial.png",
    icon: Printer,
  },
  {
    id: "packaging",
    title: "Custom Packaging",
    description: "Luxury boxes and bespoke packaging solutions that elevate your brand unboxing experience.",
    features: ["Product Boxes", "Rigid Boxes", "Eco-friendly Packaging", "Custom Inserts"],
    image: "/service-packaging.png",
    icon: Package,
  },
  {
    id: "gifting",
    title: "Corporate Gifting",
    description: "Curated, branded merchandise and gift sets to build lasting relationships with clients and employees.",
    features: ["Welcome Kits", "Premium Stationery", "Tech Accessories", "Festive Hampers"],
    image: "/service-gifting.png",
    icon: Gift,
  },
];

const FEATURES = [
  {
    title: "Eco-Friendly Inks",
    description: "We use soy-based sustainable inks for vibrant prints that don't harm the planet.",
  },
  {
    title: "24/7 Production",
    description: "Round-the-clock operations to ensure we meet your tightest deadlines without compromising quality.",
  },
  {
    title: "Precision Color",
    description: "Advanced color management systems ensuring 100% brand consistency across all materials.",
  },
];

// --- Home Components ---
function Hero() {
  return (
    <section className="relative h-screen min-h-[500px] md:min-h-[700px] flex items-center justify-center overflow-hidden" >
      {/* Background Image with Overlay */}
      < div className="absolute inset-0 z-0" >
        <img
          src="/hero-bg.png"
          alt="Offset Printing Press"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
      </div >

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Premium Printing Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            We Print Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-300">
              Imagination.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            From high-volume commercial printing to luxury packaging and bespoke corporate gifts. We bring your brand's vision to life with precision and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary-500/40 flex items-center justify-center gap-2 group">
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              View Our Work
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section >
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary-900/10 transition-all duration-300 border border-slate-100"
    >
      <div className="h-64 overflow-hidden relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        <div className="absolute bottom-4 left-6">
          <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl inline-block mb-2">
            <service.icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-600 mb-6 leading-relaxed">
          {service.description}
        </p>
        <ul className="space-y-3 mb-8">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-slate-500">
              <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <button className="w-full py-3 rounded-xl border border-slate-200 font-semibold text-slate-700 hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50 transition-all flex items-center justify-center gap-2">
          Learn More <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Crafting Perfection in Every Print
          </h3>
          <p className="text-slate-500 text-lg">
            We combine traditional craftsmanship with modern technology to deliver exceptional results across all mediums.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { label: "Years of Excellence", value: "25+" },
            { label: "Projects Completed", value: "10k+" },
            { label: "Happy Clients", value: "500+" },
            { label: "Awards Won", value: "12" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Why leading brands choose Padmashree for their printing needs.
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              We don't just print; we partner with you to solve problems. From rushing a last-minute order to engineering a complex packaging box, our team is dedicated to your success.
            </p>
            <div className="space-y-8">
              {FEATURES.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 relative z-10">
              <img src="/service-packaging.png" className="w-full h-full object-cover" alt="Quality Control" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-primary-100 rounded-3xl -z-0" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-slate-50 rounded-full blur-3xl -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/20 blur-[120px] rounded-full" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl mx-auto">
          Ready to elevate your brand presence?
        </h2>
        <p className="text-xl text-primary-100 mb-10 max-w-xl mx-auto">
          Get a custom quote for your next printing, packaging, or gifting project today.
        </p>
        <Link to="/contact" className="inline-block bg-white text-primary-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-50 transition-all shadow-xl shadow-black/20 transform hover:-translate-y-1">
          Request a Quote
        </Link>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <WhyChooseUs />
      <CTA />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
