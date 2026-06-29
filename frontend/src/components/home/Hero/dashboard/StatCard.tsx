"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

type StatCardProps = {
  title: string;
  value: string;
};

function renderValue(value: string) {
  if (value === "15.4K") {
    return (
      <>
        <CountUp
          end={15.4}
          decimals={1}
          duration={2}
        />
        K
      </>
    );
  }

  if (value === "530") {
    return (
      <CountUp
        end={530}
        duration={2}
      />
    );
  }

  if (value === "$2.4M") {
    return (
      <>
        $
        <CountUp
          end={2.4}
          decimals={1}
          duration={2}
        />
        M
      </>
    );
  }

  return value;
}

export default function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -5,
        scale: 1.03,
      }}
      className="
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        p-4
        transition-all
        duration-300
        hover:border-blue-200
        hover:bg-white
        hover:shadow-xl
      "
    >
      <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
        {title}
      </p>

      <h4 className="mt-2 text-2xl font-bold text-slate-900">
        {renderValue(value)}
      </h4>
    </motion.div>
  );
}