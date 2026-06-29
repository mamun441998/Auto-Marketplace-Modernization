// src/components/home/ProductShowcase/dashboard/MocBrowser.tsx
"use client";

type Props = {
  children: React.ReactNode;
};

export default function MocBrowser({ children }: Props) {
  return (
    <div
      className="
        w-full
        overflow-hidden
        rounded-[24px]
        border
        border-neutral-200/90
        bg-white
        transition-all
        duration-300
      "
    >
      {/* 🌐 প্রিমিয়াম ব্রাউজার হেডার */}
      <div className="flex items-center justify-between border-b border-neutral-200/70 bg-neutral-50/90 px-5 py-3.5 select-none">
        
        {/* ম্যাকবুক স্টাইল উইন্ডো কন্ট্রোলস */}
        <div className="flex items-center gap-2 group">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56] border border-[#E0443E] transition-colors duration-200" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] transition-colors duration-200" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F] border border-[#1AAA2C] transition-colors duration-200" />
        </div>

        {/* প্রিমিয়াম ইউআরএল বার */}
        <div className="flex items-center justify-center gap-1.5 w-64 md:w-72 rounded-lg bg-neutral-200/40 border border-neutral-200/20 px-4 py-1 text-center text-[11px] font-medium tracking-wide text-neutral-500 shadow-inner">
          <span className="text-[10px] opacity-70">🔒</span>
          <span className="truncate">motohave.com/dashboard</span>
        </div>

        {/* ব্যালেন্সিং স্পেসার */}
        <div className="w-14" />
      </div>

      {/* 💻 ব্রাউজার কন্টেন্ট এরিয়া (মোবাইল এবং ডেস্কটপ অপ্টিমাইজড প্যাডিং) */}
      <div className="bg-neutral-50/50 p-4 md:p-6">
        {children}
      </div>

    </div>
  );
}