"use client";

import { motion } from "framer-motion";

import DashboardMockup from "./dashboard/DashboardMockup";

export default function HeroImage() {
  return (
    <motion.div
      className="relative flex items-center justify-center lg:justify-end"      
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.2,
        ease: "easeOut",
      }}
    >
      <DashboardMockup />
    </motion.div>
  );
}