"use client";

import { motion } from "framer-motion";

export default function SalesChart() {
  const bars = [45, 65, 55, 80, 70, 95];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">

      {/* Header */}

      <div className="mb-4 flex items-center justify-between">

        <div>
          <h4 className="text-sm font-semibold text-slate-900">
            Sales Overview
          </h4>

          <p className="text-xs text-slate-500">
            Last 6 Months
          </p>
        </div>

        <motion.span
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.4,
          }}
          className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700"
        >
          +18.4%
        </motion.span>

      </div>

      {/* Chart */}

      <div className="flex h-32 items-end gap-2">

        {bars.map((height, index) => (

          <motion.div
            key={index}
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: `${height}%`,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            whileHover={{
              scaleY: 1.06,
            }}
            className="
              flex-1
              rounded-t-xl
              bg-gradient-to-t
              from-blue-700
              via-blue-600
              to-sky-400
              shadow-md
              origin-bottom
            "
          />

        ))}

      </div>

      {/* Months */}

      <div className="mt-3 flex justify-between text-[11px] text-slate-400">

        {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, index) => (

          <motion.span
            key={month}
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8 + index * 0.05,
            }}
          >
            {month}
          </motion.span>

        ))}

      </div>

    </div>
  );
}