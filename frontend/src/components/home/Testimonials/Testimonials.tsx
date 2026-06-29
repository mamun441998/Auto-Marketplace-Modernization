"use client";

import { motion } from "framer-motion";
import {
  Building2,
  CarFront,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import InfiniteMarquee from "./InfiniteMarquee";

const stats = [
  {
    icon: Building2,
    value: "530+",
    label: "Active Dealerships",
  },
  {
    icon: CarFront,
    value: "15K+",
    label: "Vehicles Managed",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Sales Growth",
  },
  {
    icon: ShieldCheck,
    value: "99%",
    label: "Customer Satisfaction",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">

      {/* Background */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-100/20 blur-3xl" />

      <div className="container relative mx-auto max-w-7xl px-6">

        {/* Header */}

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
          }}
        >
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            ⭐ Trusted By Dealers Worldwide
          </div>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            Loved By

            <span className="mt-2 block text-blue-600">
              Modern Dealerships
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Hundreds of dealerships trust MotoHave to manage
            inventory, customers, websites and sales every day.
          </p>
        </motion.div>

        {/* Stats */}

        <motion.div
          className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4"
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
          }}
        >
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  text-center
                  shadow-lg
                "
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 text-4xl font-extrabold text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-2 text-slate-500">
                  {item.label}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Marquee */}

        <InfiniteMarquee />

      </div>

    </section>
  );
}