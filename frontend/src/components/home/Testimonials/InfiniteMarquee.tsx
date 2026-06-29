"use client";

import { motion } from "framer-motion";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./TestimonialData";

const firstRow = testimonials.slice(0, 3);
const secondRow = testimonials.slice(3);

export default function InfiniteMarquee() {
  return (
    <div className="relative mt-20 space-y-8 overflow-hidden">

      {/* Top Row */}

      <motion.div
        className="flex gap-8"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        }}
        whileHover={{
          animationPlayState: "paused",
        }}
      >
        {[...firstRow, ...firstRow].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="min-w-[380px] max-w-[380px] flex-shrink-0"
          >
            <TestimonialCard
              name={item.name}
              company={item.company}
              role={item.role}
              quote={item.quote}
              avatar={item.avatar}
              rating={item.rating}
              gradient={item.gradient}
            />
          </div>
        ))}
      </motion.div>

      {/* Bottom Row */}

      <motion.div
        className="flex gap-8"
        animate={{
          x: ["-50%", "0%"],
        }}
        transition={{
          duration: 38,
          ease: "linear",
          repeat: Infinity,
        }}
        whileHover={{
          animationPlayState: "paused",
        }}
      >
        {[...secondRow, ...secondRow].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="min-w-[380px] max-w-[380px] flex-shrink-0"
          >
            <TestimonialCard
              name={item.name}
              company={item.company}
              role={item.role}
              quote={item.quote}
              avatar={item.avatar}
              rating={item.rating}
              gradient={item.gradient}
            />
          </div>
        ))}
      </motion.div>

      {/* Left Fade */}

      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />

      {/* Right Fade */}

      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent" />

    </div>
  );
}