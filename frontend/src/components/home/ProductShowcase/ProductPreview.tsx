// src/components/home/ProductShowcase/ProductPreview.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import DashboardCRM from "./dashboard/DashboardCRM";
import DashboardInventory from "./dashboard/DashboardInventory";
import DashboardWebsite from "./dashboard/DashboardWebsite";
import MocBrowser from "./dashboard/MocBrowser";

type Props = {
  activeTab: string;
};

export default function ProductPreview({ activeTab }: Props) {
  return (
    // 💡 max-w এবং scaling অ্যাডজাস্ট করা হয়েছে যেন বড় স্ক্রিনে এক নজরে সব ফিট থাকে
    <div className="w-full max-w-[660px] xl:max-w-[720px] transition-all duration-500 origin-top">
      {/* 💡 একটি প্রিমিয়াম ড্রপ শ্যাডো ও গ্লো কন্টেইনার যুক্ত করা হয়েছে */}
      <div className="relative rounded-[20px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08),0_0_40px_rgba(59,130,246,0.03)] bg-white">
        
        <MocBrowser>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{
                opacity: 0,
                scale: 0.98,
                y: 12,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
                y: -12,
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1], // 💡 আল্ট্রা-স্মুথ অ্যাপল-স্টাইল কার্ভ
              }}
              className="w-full h-full"
            >
              {activeTab === "inventory" && <DashboardInventory />}
              {activeTab === "crm" && <DashboardCRM />}
              {activeTab === "website" && <DashboardWebsite />}
            </motion.div>
          </AnimatePresence>
        </MocBrowser>
        
      </div>
    </div>
  );
}