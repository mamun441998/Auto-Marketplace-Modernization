"use client";

import CountUp from "react-countup";

const stats = [
  {
    end: 530,
    suffix: "+",
    label: "Dealerships",
  },
  {
    end: 15000,
    suffix: "+",
    label: "Vehicles Managed",
  },
  {
    end: 99,
    suffix: "%",
    label: "Customer Satisfaction",
  },
];

export default function FinalCTAStats() {
  return (
    <div className="grid grid-cols-3 gap-5 border-t border-white/10 pt-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-2xl font-extrabold text-white lg:text-3xl">
            <CountUp
              end={stat.end}
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
            />

            {stat.suffix}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}