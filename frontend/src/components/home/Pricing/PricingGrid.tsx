"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import PricingCard from "./PricingCard";
import PricingToggle from "./PricingToggle";
import { pricingPlans } from "./pricingData";

export default function PricingGrid() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      {/* Toggle */}

      <PricingToggle
        yearly={yearly}
        setYearly={setYearly}
      />

      {/* Cards */}

      <motion.div
        className="
          mt-16
          grid
          gap-8

          lg:grid-cols-3
        "
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {pricingPlans.map((plan) => (
          <motion.div
            key={plan.id}
            variants={{
              hidden: {
                opacity: 0,
                y: 60,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <PricingCard
              icon={plan.icon}
              name={plan.name}
              description={plan.description}
              monthlyPrice={plan.monthlyPrice}
              yearlyPrice={plan.yearlyPrice}
              yearly={yearly}
              button={plan.button}
              popular={plan.popular}
              badge={plan.badge}
              features={plan.features}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}