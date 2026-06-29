// src/components/home/Everything/EverythingHeader.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EverythingHeader() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto text-center px-4 pb-12 md:pb-14 select-none">
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-50 border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
      >
        <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
        <span className="text-[11px] font-bold tracking-wider uppercase text-neutral-600">
          One Platform. Every Tool.
        </span>
      </motion.div>

      {/* 💡 এখানে সাইজ পরিবর্তন করে স্ট্যান্ডার্ড ফিচার সেকশনের মতো text-3xl থেকে md:text-4xl font-bold করা হয়েছে */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight"
      >
        Everything You Need <br className="hidden sm:block" />
        To Run A{" "}
        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          Modern Dealership
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-3 text-neutral-500 text-sm md:text-base max-w-2xl mx-auto font-normal leading-relaxed"
      >
        Replace multiple disconnected systems with one intelligent platform. Manage inventory, 
        customers, websites, marketing, analytics and AI automation from a single dashboard.
      </motion.p>
    </div>
  );
}