"use client";

import { motion } from "framer-motion";

export default function ProductHeader() {
  return (
    // 💡 টেক্সট সেন্টার এবং ম্যাক্স উইডথ সেট করা
    <div className="relative z-10 w-full max-w-2xl mx-auto text-center select-none pb-8">
      
      {/* প্রিমিয়াম পালসিং ব্যাজ */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/60 border border-blue-100/80"
      >
        <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
        <span className="text-[10px] font-bold tracking-wider uppercase text-blue-600">
          Product Overview
        </span>
      </motion.div>

      {/* 💡 শিরোনাম সাইজ ছোট এবং সেন্টারে */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-[1.1]"
      >
        Powerful Modules Built{" "}
        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          For Modern Dealerships
        </span>
      </motion.h2>

      {/* প্রিমিয়াম সাবটাইটেল - সেন্টারড */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 text-neutral-500 text-sm md:text-base font-normal leading-relaxed"
      >
        MotoHave combines inventory, CRM, and marketing tools into one intelligent, 
        easy-to-use dealership management platform.
      </motion.p>
    </div>
  );
}