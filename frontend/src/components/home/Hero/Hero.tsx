"use client";

import Container from "@/components/layout/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-100/50 via-white to-white">
      {/* ব্যাকগ্রাউন্ড ব্লার */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-300/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-300/20 blur-[120px] pointer-events-none" />

      <Container>
        <div className="relative z-10 grid grid-cols-1 items-center gap-12 pt-16 pb-32 lg:grid-cols-2 lg:gap-16 lg:min-h-[600px] lg:pt-10 lg:pb-32">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>

      {/* 💡 এনিমেশনসহ ওয়েভ ডিজাইন (ওপরের দিকে মুখ করা) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-[200%] h-[100px] md:h-[150px] animate-wave" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
        >
          <path 
            className="fill-blue-100"
            d="M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,208C672,203,768,213,864,229.3C960,245,1056,267,1152,256C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <style jsx>{`
        .animate-wave {
          animation: wave 15s linear infinite;
        }
        @keyframes wave {
          0% { transform: translateX(0); }
          50% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}