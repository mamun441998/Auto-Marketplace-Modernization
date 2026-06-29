"use client";

import { motion } from "framer-motion";

import { benefits } from "./whyMotoHaveData";
import WhyMotoHaveIllustration from "./WhyMotoHaveIllustration";

export default function WhyMotoHaveContent() {
  return (
    <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

      {/* LEFT */}

      <div className="space-y-5">

        {benefits.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
              }}
              whileHover={{
                x: 8,
                y: -4,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:border-blue-200
                hover:shadow-2xl
                hover:shadow-blue-100/40
              "
            >
              {/* Glow */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-blue-500/0
                  via-blue-500/5
                  to-sky-500/0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative flex items-start gap-5">

                {/* Icon */}

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    text-blue-600
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-blue-600
                    group-hover:text-white
                  "
                >
                  <Icon size={30} />
                </div>

                {/* Text */}

                <div className="flex-1">

                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>

                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

      {/* RIGHT */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative"
      >
        <WhyMotoHaveIllustration />
      </motion.div>

    </div>
  );
}