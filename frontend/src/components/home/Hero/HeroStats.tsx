"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, end, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [end, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function HeroStats() {
  return (
    <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 lg:mt-10 lg:gap-8 lg:pt-8">
      <motion.div
        whileHover={{ y: -3 }}
        className="text-center lg:text-left"
      >
        <h3 className="text-xl font-bold text-slate-900 sm:text-2xl lg:text-3xl">
          <CountUp end={15} suffix="K+" />
        </h3>

        <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
          Vehicles Managed
        </p>
      </motion.div>

      <motion.div
        whileHover={{ y: -3 }}
        className="text-center lg:text-left"
      >
        <h3 className="text-xl font-bold text-slate-900 sm:text-2xl lg:text-3xl">
          <CountUp end={530} suffix="+" />
        </h3>

        <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
          Dealerships
        </p>
      </motion.div>

      <motion.div
        whileHover={{ y: -3 }}
        className="text-center lg:text-left"
      >
        <h3 className="text-xl font-bold text-slate-900 sm:text-2xl lg:text-3xl">
          <CountUp end={99} suffix="%" />
        </h3>

        <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
          Customer Satisfaction
        </p>
      </motion.div>
    </div>
  );
}