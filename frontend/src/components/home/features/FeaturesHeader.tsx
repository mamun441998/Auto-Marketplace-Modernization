// features/FeaturesHeader.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export const FeaturesHeader: React.FC = () => {
  return (
    // pt-0 এবং pb-2 করে স্পেসিং অপ্টিমাইজ করা হয়েছে
    <div className="relative z-10 max-w-3xl mx-auto text-center pt-0 pb-2 px-4">
      
      {/* Soft Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Modern Compact Badge */}
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100"
      >
        <span className="text-[11px] font-bold tracking-wider uppercase text-blue-600">
          ⚡ Automated Automotive SaaS
        </span>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-2xl md:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight leading-tight"
      >
        Scale Your Dealership With{" "}
        <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
          Advanced AI Solutions
        </span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-3 text-neutral-500 text-sm md:text-base max-w-xl mx-auto font-normal leading-relaxed"
      >
        Everything you need to manage inventory, launch marketing campaigns, and close sales faster from one unified platform.
      </motion.p>
    </div>
  );
};