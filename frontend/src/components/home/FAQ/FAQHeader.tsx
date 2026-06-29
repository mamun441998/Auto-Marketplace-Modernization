"use client";

import { motion } from "framer-motion";
import { CircleHelp } from "lucide-react";

export default function FAQHeader() {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
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

      <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
        <CircleHelp size={16} />

        Frequently Asked Questions
      </div>

      {/* Heading */}

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
        Got Questions?

        <span className="mt-2 block text-blue-600">
          We've Got Answers
        </span>
      </h2>

      {/* Description */}

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        Learn more about MotoHave, our dealership platform,
        pricing, security, CRM, inventory management and
        everything you need before getting started.
      </p>
    </motion.div>
  );
}