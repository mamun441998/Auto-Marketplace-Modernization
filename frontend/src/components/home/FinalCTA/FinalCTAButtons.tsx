"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function FinalCTAButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">

      {/* Primary Button */}

      <motion.a
        href="#pricing"
        whileHover={{
          scale: 1.04,
          y: -2,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          inline-flex
          items-center
          justify-center
          gap-3

          rounded-2xl

          bg-blue-600

          px-8
          py-4

          text-base
          font-semibold
          text-white

          shadow-xl
          shadow-blue-600/30

          transition-all
          duration-300

          hover:bg-blue-700
          hover:shadow-blue-500/40
        "
      >
        Start Free Trial

        <ArrowRight size={20} />
      </motion.a>

      {/* Secondary Button */}

      <motion.a
        href="#contact"
        whileHover={{
          scale: 1.04,
          y: -2,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          inline-flex
          items-center
          justify-center
          gap-3

          rounded-2xl

          border
          border-white/15

          bg-white/5
          backdrop-blur-md

          px-8
          py-4

          text-base
          font-semibold
          text-white

          transition-all
          duration-300

          hover:border-blue-400/40
          hover:bg-white/10
        "
      >
        <CalendarDays size={20} />

        Book Live Demo
      </motion.a>

    </div>
  );
}