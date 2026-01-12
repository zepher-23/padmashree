import React from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
        >
            <div className="relative flex items-center justify-center">
                {/* Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 border-4 border-slate-100 rounded-full border-t-primary-600"
                />

                {/* Inner Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="text-3xl font-bold text-primary-600"
                    >
                        P
                    </motion.div>
                </div>
            </div>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-slate-400 text-sm font-medium tracking-widest uppercase"
            >
                Loading
            </motion.p>
        </motion.div>
    );
}
