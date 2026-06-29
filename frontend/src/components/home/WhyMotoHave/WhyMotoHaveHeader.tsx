"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

export default function WhyMotoHaveHeader() {
  return (
    <motion.div
      className="mx-auto max-w-4xl text-center"
      initial={{
        opacity: 0,
        y: 60,
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

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.5,
        }}
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
        <BadgeCheck size={16} />

        Why Dealers Choose MotoHave
      </motion.div>

      {/* Heading */}

      <h2 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-5xl">
        Built For Modern

        <span className="mt-2 block text-blue-600">
          Automotive Dealerships
        </span>
      </h2>

      {/* Description */}

      <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">
        Stop switching between multiple software.
        MotoHave gives your dealership everything you need —
        inventory management, CRM, website builder,
        marketing tools and business analytics —
        all inside one powerful cloud platform.
      </p>

      {/* Decorative Line */}

      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: 120,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.5,
          duration: 0.7,
        }}
        className="
          mx-auto
          mt-10
          h-1
          rounded-full
          bg-gradient-to-r
          from-blue-600
          via-sky-500
          to-indigo-600
        "
      />
    </motion.div>
  );
}