// src/components/home/Everything/EverythingGrid.tsx
"use client";

import React from "react";
import { everythingData } from "./everythingData";
import EverythingCard from "./EverythingCard"; // 👈 কোনো কার্লি ব্রেসেস নেই (Default Import)

export default function EverythingGrid() {
  return (
    <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {everythingData.map((item, index) => (
          <EverythingCard 
            key={item.id} 
            item={item} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
}