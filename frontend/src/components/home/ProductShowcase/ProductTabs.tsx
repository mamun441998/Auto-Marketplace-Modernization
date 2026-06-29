"use client";

import { motion } from "framer-motion";
import { products } from "./ProductData";

type ProductTabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function ProductTabs({
  activeTab,
  setActiveTab,
}: ProductTabsProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {products.map((product, index) => {
        const active = activeTab === product.id;
        const Icon = product.icon;

        return (
          <motion.button
            key={product.id}
            type="button"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => setActiveTab(product.id)}
            className={`
              relative w-full rounded-2xl border p-5 text-left transition-all duration-300 select-none
              ${
                active
                  ? "border-blue-600 bg-gradient-to-br from-blue-600 to-indigo-700 shadow-xl text-white"
                  : "border-neutral-200 bg-white hover:border-blue-300 hover:shadow-lg text-neutral-800"
              }
            `}
          >
            {active && (
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="absolute bottom-0 left-0 h-[3px] bg-white/60 rounded-full"
              />
            )}

            <div className="flex items-start gap-4">
              {/* আইকন কন্টেইনার */}
              <div
                className={`
                  flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm
                  ${active ? "bg-white/20 text-white border border-white/20" : "bg-blue-50 text-blue-600 border border-blue-100"}
                `}
              >
                <Icon size={24} strokeWidth={2} />
              </div>

              {/* টেক্সট এরিয়া */}
              <div className="flex-1 min-w-0 pt-0.5">
                <h3 className={`text-base font-bold tracking-tight ${active ? "text-white" : "text-neutral-900"}`}>
                  {product.title}
                </h3>
                <p className={`text-sm mt-1 leading-normal ${active ? "text-blue-50" : "text-neutral-500"}`}>
                  {product.subtitle}
                </p>

                {/* ফিচার লিস্ট */}
                <ul className="mt-3.5 space-y-2">
                  {product.features.slice(0, 3).map((feature) => (
                    <li key={feature} className={`flex items-center gap-2 text-xs font-semibold ${active ? "text-blue-50" : "text-neutral-600"}`}>
                      <span className={`h-4.5 w-4.5 flex items-center justify-center rounded-full ${active ? "bg-white text-blue-600" : "bg-emerald-50 text-emerald-600"}`}>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={4}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}