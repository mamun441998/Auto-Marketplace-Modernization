"use client";

import { motion } from "framer-motion";

import FinalCTAButtons from "./FinalCTAButtons";
import FinalCTAStats from "./FinalCTAStats";

export default function FinalCTAContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="max-w-xl"
    >
      {/* Badge */}

      <div
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-blue-400/20
          bg-blue-500/10
          px-5
          py-2
          text-sm
          font-semibold
          text-blue-300
        "
      >
        🚀 Ready To Grow Your Dealership?
      </div>

      {/* Heading */}

      <h2 className="mt-8 text-4xl font-extrabold leading-tight text-white lg:text-6xl">
        Take Your Dealership

        <span className="mt-3 block text-blue-400">
          To The Next Level
        </span>
      </h2>

      {/* Description */}

      <p className="mt-7 text-lg leading-8 text-slate-300">
        Join hundreds of dealerships already using MotoHave
        to manage inventory, customers, websites, sales,
        marketing and business growth from one powerful cloud
        platform.
      </p>

      {/* Buttons */}

      <div className="mt-10">
        <FinalCTAButtons />
      </div>

      {/* Trust */}

      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
        <div className="flex items-center gap-2">
          ✅ Free 14-Day Trial
        </div>

        <div className="flex items-center gap-2">
          ✅ No Credit Card Required
        </div>

        <div className="flex items-center gap-2">
          ✅ Cancel Anytime
        </div>
      </div>

      {/* Divider */}

      <div className="my-10 h-px bg-white/10" />

      {/* Stats */}

      <FinalCTAStats />
    </motion.div>
  );
}