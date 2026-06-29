"use client";

import { motion } from "framer-motion";
import {
  CarFront,
  Users,
  Globe,
  Megaphone,
  BarChart3,
  Sparkles,
  ArrowDown,
} from "lucide-react";

const cards = [
  {
    title: "Inventory",
    icon: CarFront,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "CRM",
    icon: Users,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Website",
    icon: Globe,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Marketing",
    icon: Megaphone,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    color: "bg-green-100 text-green-600",
  },
];

export default function WhyMotoHaveIllustration() {
  return (
    <div className="relative mx-auto max-w-md">

      {/* Background Glow */}

      <div className="absolute inset-0 rounded-full bg-blue-200/20 blur-3xl" />

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-slate-200
          bg-white
          p-8
          shadow-2xl
          shadow-blue-100/40
        "
      >
        {/* Header */}

        <div className="mb-8 flex items-center gap-3">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <Sparkles size={28} />
          </div>

          <div>

            <h3 className="text-xl font-bold text-slate-900">
              MotoHave Platform
            </h3>

            <p className="text-sm text-slate-500">
              Everything Connected
            </p>

          </div>

        </div>

        {/* Workflow */}

        <div className="space-y-4">

          {cards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{
                  scale: 1.03,
                  x: 8,
                }}
              >
                <div
                  className="
                    rounded-2xl
                    border
                    border-slate-100
                    bg-slate-50
                    p-4
                    shadow-sm
                  "
                >
                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <div
                        className={`
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-xl
                          ${item.color}
                        `}
                      >
                        <Icon size={24} />
                      </div>

                      <div>

                        <h4 className="font-semibold text-slate-900">
                          {item.title}
                        </h4>

                        <p className="text-sm text-slate-500">
                          Connected
                        </p>

                      </div>

                    </div>

                    <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      Active
                    </div>

                  </div>
                </div>

                {index !== cards.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown
                      size={18}
                      className="text-slate-300"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}

        </div>

        {/* Bottom */}

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            mt-8
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            p-5
            text-center
            text-white
          "
        >
          <h4 className="text-lg font-bold">
            One Login.
          </h4>

          <p className="mt-1 text-blue-100">
            One Platform. Unlimited Growth.
          </p>
        </motion.div>

      </motion.div>

    </div>
  );
}