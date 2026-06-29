"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bell,
  CircleDollarSign,
  TrendingUp,
  Users,
} from "lucide-react";

export default function FinalCTADashboard() {
  const chart = [35, 52, 48, 70, 62, 90, 82];

  const activities = [
    {
      title: "New Lead Received",
      time: "2 min ago",
      color: "bg-blue-500",
    },
    {
      title: "BMW X5 Sold",
      time: "12 min ago",
      color: "bg-green-500",
    },
    {
      title: "Website Inquiry",
      time: "26 min ago",
      color: "bg-orange-500",
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      animate={{
        y: [0, -10, 0],
      }}
      className="relative mx-auto w-full max-w-[520px]"
    >
      {/* Glow */}

      <div className="absolute -inset-6 rounded-full bg-blue-500/20 blur-3xl" />

      {/* Card */}

      <div
        className="
          relative

          overflow-hidden

          rounded-3xl

          border
          border-white/10

          bg-white/10

          p-6

          backdrop-blur-xl

          shadow-2xl
        "
      >
        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <h3 className="text-xl font-bold text-white">
              Live Performance
            </h3>

            <p className="text-sm text-slate-300">
              Dealership Analytics
            </p>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-300">
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
              className="h-2 w-2 rounded-full bg-green-400"
            />

            Live
          </div>

        </div>

        {/* Stats */}

        <div className="mt-7 grid grid-cols-3 gap-4">

          <div className="rounded-2xl bg-white/5 p-4">

            <CircleDollarSign
              className="text-green-400"
              size={26}
            />

            <h4 className="mt-3 text-2xl font-bold text-white">
              $2.4M
            </h4>

            <p className="mt-1 text-xs text-slate-400">
              Revenue
            </p>

          </div>

          <div className="rounded-2xl bg-white/5 p-4">

            <Users
              className="text-blue-400"
              size={26}
            />

            <h4 className="mt-3 text-2xl font-bold text-white">
              356
            </h4>

            <p className="mt-1 text-xs text-slate-400">
              Active Leads
            </p>

          </div>

          <div className="rounded-2xl bg-white/5 p-4">

            <TrendingUp
              className="text-cyan-400"
              size={26}
            />

            <h4 className="mt-3 text-2xl font-bold text-white">
              18.6%
            </h4>

            <p className="mt-1 text-xs text-slate-400">
              Conversion
            </p>

          </div>

        </div>

        {/* Growth */}

        <div className="mt-8 rounded-2xl bg-white/5 p-5">

          <div className="mb-5 flex items-center justify-between">

            <div>

              <h4 className="font-semibold text-white">
                Revenue Growth
              </h4>

              <p className="text-sm text-slate-400">
                Last 7 Months
              </p>

            </div>

            <div className="flex items-center gap-1 rounded-full bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-300">

              +32%

              <ArrowUpRight size={16} />

            </div>

          </div>

          <div className="flex h-32 items-end gap-2">

            {chart.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  height: 0,
                }}
                whileInView={{
                  height: `${item}%`,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                className="
                  flex-1
                  rounded-t-xl

                  bg-gradient-to-t
                  from-blue-500
                  to-cyan-400
                "
              />
            ))}

          </div>

        </div>

        {/* Activity */}

        <div className="mt-8">

          <div className="mb-4 flex items-center gap-2">

            <Bell
              size={18}
              className="text-blue-300"
            />

            <h4 className="font-semibold text-white">
              Recent Activity
            </h4>

          </div>

          <div className="space-y-3">

            {activities.map((item) => (
              <motion.div
                whileHover={{
                  x: 4,
                }}
                key={item.title}
                className="
                  flex
                  items-center
                  justify-between

                  rounded-xl

                  bg-white/5

                  px-4
                  py-3
                "
              >
                <div className="flex items-center gap-3">

                  <div
                    className={`h-3 w-3 rounded-full ${item.color}`}
                  />

                  <div>

                    <h5 className="text-sm font-medium text-white">
                      {item.title}
                    </h5>

                    <p className="text-xs text-slate-400">
                      {item.time}
                    </p>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </motion.div>
  );
}