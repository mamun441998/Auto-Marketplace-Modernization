"use client";

import { motion } from "framer-motion";
import { Check } from "./pricingData";

type PricingCardProps = {
  icon: React.ElementType;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  yearly: boolean;
  button: string;
  popular: boolean;
  badge: string;
  features: string[];
};

export default function PricingCard({
  icon: Icon,
  name,
  description,
  monthlyPrice,
  yearlyPrice,
  yearly,
  button,
  popular,
  badge,
  features,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[32px]
        border
        bg-white
        p-8
        shadow-xl
        transition-all
        duration-300

        ${
          popular
            ? "border-blue-600 shadow-blue-200/60"
            : "border-slate-200 hover:border-blue-200"
        }
      `}
    >
      {/* Glow */}

      {popular && (
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-blue-500/5
            via-transparent
            to-cyan-500/5
          "
        />
      )}

      {/* Badge */}

      {popular && (
        <div
          className="
            absolute
            right-6
            top-6
            rounded-full
            bg-blue-600
            px-4
            py-1.5
            text-xs
            font-bold
            text-white
          "
        >
          {badge}
        </div>
      )}

      {/* Icon */}

      <div
        className={`
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl

          ${
            popular
              ? "bg-blue-600 text-white"
              : "bg-blue-50 text-blue-600"
          }
        `}
      >
        <Icon size={30} />
      </div>

      {/* Name */}

      <h3 className="mt-7 text-3xl font-bold text-slate-900">
        {name}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>

      {/* Price */}

      <div className="mt-8 flex items-end gap-2">

        <motion.h2
          key={yearly ? yearlyPrice : monthlyPrice}
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="text-5xl font-extrabold text-slate-900"
        >
          ${yearly ? yearlyPrice : monthlyPrice}
        </motion.h2>

        <span className="mb-2 text-slate-500">
          / {yearly ? "year" : "month"}
        </span>

      </div>

      {/* Button */}

      <button
        className={`
          mt-8
          w-full
          rounded-2xl
          py-4
          font-semibold
          transition-all

          ${
            popular
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-slate-100 text-slate-900 hover:bg-slate-200"
          }
        `}
      >
        {button}
      </button>

      {/* Divider */}

      <div className="my-8 h-px bg-slate-200" />

      {/* Features */}

      <div className="space-y-4">

        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3"
          >
            <div
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-green-100
                text-green-600
              "
            >
              <Check size={15} />
            </div>

            <span className="text-slate-700">
              {feature}
            </span>
          </div>
        ))}

      </div>
    </motion.div>
  );
}