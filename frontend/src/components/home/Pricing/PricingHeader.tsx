"use client";

import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";

export default function PricingHeader() {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {/* Badge */}

      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-blue-100
          bg-blue-50
          px-5
          py-2
          text-sm
          font-semibold
          text-blue-700
        "
      >
        <CreditCard size={16} />

        Simple & Transparent Pricing
      </div>

      {/* Heading */}

      <h2 className="mt-7 text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
        Choose The Perfect Plan

        <span className="mt-2 block text-blue-600">
          For Your Dealership
        </span>
      </h2>

      {/* Description */}

      <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
        Start with a free trial and upgrade anytime.
        No hidden fees, no long-term contracts —
        just powerful dealership software designed
        to help your business grow.
      </p>
    </motion.div>
  );
}