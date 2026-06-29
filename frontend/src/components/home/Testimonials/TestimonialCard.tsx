"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  company: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
  gradient: string;
};

export default function TestimonialCard({
  name,
  company,
  role,
  quote,
  avatar,
  rating,
  gradient,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white/90
        p-7
        shadow-xl
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-blue-200
        hover:shadow-2xl
        hover:shadow-blue-100/60
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          right-0
          top-0
          h-36
          w-36
          rounded-full
          bg-blue-50
          blur-3xl
          opacity-60
        "
      />

      {/* Quote */}

      <div className="relative z-10 flex items-center justify-between">

        <div
          className={`
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-r
            ${gradient}
            text-xl
            font-bold
            text-white
            shadow-lg
          `}
        >
          {avatar}
        </div>

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-blue-50
            text-blue-600
          "
        >
          <Quote size={22} />
        </div>

      </div>

      {/* Name */}

      <div className="relative z-10 mt-6">

        <h3 className="text-xl font-bold text-slate-900">
          {name}
        </h3>

        <p className="mt-1 text-sm font-medium text-blue-600">
          {role}
        </p>

        <p className="text-sm text-slate-500">
          {company}
        </p>

      </div>

      {/* Stars */}

      <div className="relative z-10 mt-5 flex items-center gap-1">

        {[...Array(rating)].map((_, index) => (
          <Star
            key={index}
            size={17}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}

      </div>

      {/* Quote */}

      <p className="relative z-10 mt-5 leading-8 text-slate-600">
        "{quote}"
      </p>

      {/* Bottom */}

      <div className="relative z-10 mt-7 flex items-center justify-between">

        <span className="text-sm font-semibold text-green-600">
          ✔ Verified Dealer
        </span>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          MotoHave User
        </span>

      </div>
    </motion.div>
  );
}