// features/FeaturesGrid.tsx
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FeatureItem } from "./featuresData";

interface FeaturesGridProps {
  features: FeatureItem[];
  activeIndex: number;
}

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features, activeIndex }) => {
  const activeFeature = features[activeIndex];

  return (
    <div className="w-full max-w-md mx-auto h-[300px] md:h-[340px] lg:h-[360px] rounded-2xl bg-neutral-50 border border-neutral-200/40 relative overflow-hidden flex items-center justify-center p-4 shadow-[0_15px_40px_rgba(0,0,0,0.02)]">
      
      {/* Soft Ambient Glow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`glow-${activeIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 bg-gradient-to-tr ${activeFeature.colorTheme} blur-[60px] rounded-2xl pointer-events-none`}
        />
      </AnimatePresence>

      {/* Sleek Inner Card */}
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-white border border-neutral-200/50 shadow-sm flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full p-5 flex flex-col justify-between bg-white"
          >
            {/* Top Navigation Bar */}
            <div className="flex items-center justify-between w-full border-b border-neutral-100 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-neutral-200" />
                <span className="w-2 h-2 rounded-full bg-neutral-200" />
                <span className="text-[10px] font-mono text-neutral-400 ml-1 uppercase tracking-wider">
                  MotoHave Engine
                </span>
              </div>
              <span className="px-2 py-0.5 text-[9px] font-bold text-blue-600 bg-blue-50 rounded-full border border-blue-100">
                Live
              </span>
            </div>

            {/* Center Content Graphics (Strictly static fade, no shaking) */}
            <div className="flex-1 flex flex-col items-center justify-center text-center my-2">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activeFeature.colorTheme} flex items-center justify-center text-white text-sm font-black mb-3 shadow-sm`}>
                {activeIndex + 1}
              </div>
              
              <p className="text-[9px] font-bold tracking-[0.2em] text-blue-600 uppercase mb-1">
                {activeFeature.badge} Module
              </p>
              <h4 className="text-base md:text-lg font-extrabold text-neutral-900 max-w-xs px-2 leading-tight">
                {activeFeature.title}
              </h4>
            </div>

            {/* Bottom Status Block */}
            <div className="w-full bg-neutral-50 border border-neutral-100 rounded-lg p-2 text-[10px] font-mono text-neutral-400 flex items-center justify-between">
              <span>System Optimized</span>
              <span className="text-blue-600 font-bold">Active</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};