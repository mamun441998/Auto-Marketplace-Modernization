// features/FeaturesSection.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { featuresData } from "./featuresData";
import { FeaturesHeader } from "./FeaturesHeader";
import { FeatureCard } from "./FeatureCard";
import { FeaturesGrid } from "./FeaturesGrid";

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isAutoScrolling = useRef<boolean>(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isAutoScrolling.current) return;

    const totalFeatures = featuresData.length;
    const newIndex = Math.min(
      Math.floor(latest * totalFeatures),
      totalFeatures - 1
    );
    setActiveIndex(newIndex);
  });

  useEffect(() => {
    const handleAutoPlay = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isSectionInView = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!isSectionInView) return;

      const totalFeatures = featuresData.length;
      const nextIndex = (activeIndex + 1) % totalFeatures;

      const elementTop = containerRef.current.offsetTop;
      const elementHeight = containerRef.current.offsetHeight;
      const totalScrollableDistance = elementHeight - window.innerHeight;
      
      const targetProgress = (nextIndex + 0.1) / totalFeatures;
      const targetScrollY = elementTop + targetProgress * totalScrollableDistance;

      isAutoScrolling.current = true;
      setActiveIndex(nextIndex);

      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });

      setTimeout(() => {
        isAutoScrolling.current = false;
      }, 800);
    };

    const timer = setInterval(handleAutoPlay, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-white text-neutral-900">
      
      <div className="sticky top-0 w-full h-screen flex flex-col justify-between pt-20 md:pt-24 pb-12 overflow-hidden">
        
        {/* ১. হেডার */}
        <FeaturesHeader />

        {/* ২. মেইন ইন-প্লেস লেআউট */}
        <div className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* বাম পাশ: কন্টেন্ট এরিয়া (এটিকেও এখন AnimatePresence mode="wait" এ রূপান্তর করা হয়েছে) */}
          <div className="relative col-span-1 lg:col-span-6 h-[280px] md:h-[320px] lg:h-[350px] flex items-center">
            <AnimatePresence mode="wait">
              <FeatureCard
                key={activeIndex} // এটি প্রতিবার চেঞ্জ হলে পুরনো কার্ড স্লাইড-আউট হবে এবং নতুন কার্ড স্লাইড-ইন হবে
                feature={featuresData[activeIndex]}
              />
            </AnimatePresence>
          </div>

          {/* ডান পাশ: ড্যাশবোর্ড মকআপ গ্রিড */}
          <div className="col-span-1 lg:col-span-6 w-full flex items-center justify-center">
            <FeaturesGrid features={featuresData} activeIndex={activeIndex} />
          </div>

        </div>

        {/* ৩. বটম ইন্ডিকেটর বার */}
        <div className="w-full flex justify-center gap-2 pt-4 pb-2">
          {featuresData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!containerRef.current) return;
                const elementTop = containerRef.current.offsetTop;
                const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
                window.scrollTo({
                  top: elementTop + ((index + 0.1) / featuresData.length) * totalScrollable,
                  behavior: "smooth"
                });
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIndex === index ? "w-7 bg-blue-600" : "w-1.5 bg-neutral-200"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}