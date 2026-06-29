"use client";

import { motion } from "framer-motion";

type PricingToggleProps = {
  yearly: boolean;
  setYearly: (value: boolean) => void;
};

export default function PricingToggle({
  yearly,
  setYearly,
}: PricingToggleProps) {
  return (
    <div className="mt-12 flex items-center justify-center">

      <div
        className="
          relative
          flex
          items-center
          rounded-full
          border
          border-slate-200
          bg-white
          p-1
          shadow-lg
        "
      >
        {/* Animated Background */}

        <motion.div
          className="
            absolute
            top-1
            bottom-1
            w-[48%]
            rounded-full
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
          "
          animate={{
            x: yearly ? "100%" : "0%",
          }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
        />

        {/* Monthly */}

        <button
          onClick={() => setYearly(false)}
          className={`
            relative
            z-10
            w-36
            rounded-full
            px-6
            py-3
            text-sm
            font-semibold
            transition

            ${
              yearly
                ? "text-slate-600"
                : "text-white"
            }
          `}
        >
          Monthly
        </button>

        {/* Yearly */}

        <button
          onClick={() => setYearly(true)}
          className={`
            relative
            z-10
            w-36
            rounded-full
            px-6
            py-3
            text-sm
            font-semibold
            transition

            ${
              yearly
                ? "text-white"
                : "text-slate-600"
            }
          `}
        >
          Yearly
        </button>

      </div>

      {/* Save Badge */}

      <motion.div
        initial={{
          scale: 0,
          rotate: -10,
        }}
        whileInView={{
          scale: 1,
          rotate: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.3,
        }}
        className="
          ml-4
          rounded-full
          bg-green-100
          px-4
          py-2
          text-sm
          font-bold
          text-green-700
        "
      >
        Save 20%
      </motion.div>

    </div>
  );
}