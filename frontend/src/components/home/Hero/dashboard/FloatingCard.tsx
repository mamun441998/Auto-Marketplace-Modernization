"use client";

import { motion } from "framer-motion";
import {
  Star,
  TrendingUp,
} from "lucide-react";

type FloatingCardProps = {
  title: string;
  value: string;
  className?: string;
};

export default function FloatingCard({
  title,
  value,
  className = "",
}: FloatingCardProps) {
  const isFeatured = title === "Featured";

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: {
          duration: 0.5,
        },
        scale: {
          duration: 0.5,
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.08,
        y: -6,
      }}
      className={`
        absolute
        hidden
        lg:block

        rounded-2xl
        border
        border-white/60

        bg-white/90
        backdrop-blur-xl

        px-4
        py-3

        shadow-xl
        shadow-blue-100/50

        transition-all
        duration-300

        ${className}
      `}
    >
      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-blue-100
            text-blue-600
          "
        >
          {isFeatured ? (
            <Star size={18} />
          ) : (
            <TrendingUp size={18} />
          )}
        </div>

        <div>

          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
            {title}
          </p>

          <h4 className="mt-1 text-xl font-bold text-slate-900">
            {value}
          </h4>

        </div>

      </div>
    </motion.div>
  );
}