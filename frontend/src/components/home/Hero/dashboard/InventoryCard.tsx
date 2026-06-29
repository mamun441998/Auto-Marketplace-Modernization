"use client";

import { motion } from "framer-motion";
import {
  CarFront,
  CircleCheckBig,
  ArrowUpRight,
} from "lucide-react";

const vehicles = [
  {
    name: "BMW X5",
    stock: "24 Vehicles",
    status: "Available",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Tesla Model Y",
    stock: "12 Vehicles",
    status: "Available",
    color: "bg-violet-100 text-violet-600",
  },
];

export default function InventoryCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: 0.8,
      }}
      className="rounded-xl border border-slate-200 bg-white p-4"
    >
      {/* Header */}

      <div className="mb-4 flex items-center justify-between">

        <div>
          <h4 className="text-sm font-semibold text-slate-900">
            Latest Inventory
          </h4>

          <p className="mt-1 text-xs text-slate-500">
            Recently Added Vehicles
          </p>
        </div>

        <button className="flex items-center gap-1 text-xs font-semibold text-blue-600 transition hover:text-blue-700">
          View All

          <ArrowUpRight size={14} />
        </button>

      </div>

      {/* Vehicles */}

      <div className="space-y-3">

        {vehicles.map((vehicle, index) => (

          <motion.div
            key={vehicle.name}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 1 + index * 0.18,
              duration: 0.45,
            }}
            whileHover={{
              scale: 1.02,
            }}
            className="
              flex
              items-center
              justify-between
              rounded-xl
              border
              border-slate-100
              bg-slate-50
              px-3
              py-3
              transition
              hover:border-blue-200
              hover:bg-white
              hover:shadow-md
            "
          >

            <div className="flex items-center gap-3">

              <div
                className={`
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  ${vehicle.color}
                `}
              >
                <CarFront size={18} />
              </div>

              <div>

                <h5 className="text-sm font-semibold text-slate-900">
                  {vehicle.name}
                </h5>

                <p className="text-xs text-slate-500">
                  {vehicle.stock}
                </p>

              </div>

            </div>

            <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-[11px] font-semibold text-green-700">

              <CircleCheckBig size={12} />

              {vehicle.status}

            </span>

          </motion.div>

        ))}

      </div>

    </motion.div>
  );
}