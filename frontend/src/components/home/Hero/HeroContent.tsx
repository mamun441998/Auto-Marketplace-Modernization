import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      {/* Trust Badge */}
      <div className="mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        🚗 Trusted by Modern Automotive Dealerships
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        Grow Your Dealership With The Complete
        <span className="block text-blue-600">
          Automotive SaaS Platform
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 text-lg leading-8 text-slate-600">
        MotoHave helps dealerships manage inventory, leads,
        customers, sales, websites, and marketing—all from one
        modern platform built for growth.
      </p>

      {/* Buttons */}
      <div className="mt-10">
        <HeroButtons />
      </div>

      {/* Small Trust Text */}
      <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">

        <div className="flex items-center gap-2">
          <span className="text-green-500">✔</span>
          No Credit Card Required
        </div>

        <div className="flex items-center gap-2">
          <span className="text-green-500">✔</span>
          Free 14-Day Trial
        </div>

        <div className="flex items-center gap-2">
          <span className="text-green-500">✔</span>
          Cancel Anytime
        </div>

        <HeroStats />

      </div>

    </div>
  );
}