// src/components/home/Everything/EverythingSection.tsx
"use client";

import React from "react";
import EverythingHeader from "./EverythingHeader"; // 👈 কোনো কার্লি ব্রেসেস নেই (Default Import)
import EverythingGrid from "./EverythingGrid"; // 👈 কোনো কার্লি ব্রেসেস নেই (Default Import)

export default function EverythingSection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 lg:py-28 overflow-hidden border-t border-neutral-100">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      
      <div className="relative z-10 w-full flex flex-col items-center">
        <EverythingHeader />
        <EverythingGrid />
      </div>
    </section>
  );
}