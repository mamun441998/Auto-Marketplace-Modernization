"use client";

import { motion } from "framer-motion";

import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <motion.div
      className="max-w-xl lg:mt-8"
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
        ease: "easeOut",
      }}
    >
      {/* Badge */}

      <div className="mb-5 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
        🚗 Trusted by Modern Automotive Dealerships
      </div>

      {/* Heading */}

      <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 lg:text-5xl">
        Grow Your Dealership

        <br />

        With The Complete

        <span className="mt-3 block text-blue-600">
          Automotive SaaS Platform
        </span>
      </h1>

      {/* Description */}

      <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
        MotoHave helps dealerships manage inventory,
        customers, leads, sales, marketing and websites
        from one modern cloud platform designed for
        faster growth.
      </p>

      {/* Buttons */}

      <div className="mt-5">
        <HeroButtons />
      </div>

      {/* Trust */}

      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
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

      <div className="mt-8 mb-6 h-px bg-slate-200" />

      {/* Stats */}

      <HeroStats />
    </motion.div>
  );
}