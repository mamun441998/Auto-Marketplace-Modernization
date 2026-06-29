import StatCard from "./StatCard";
import SalesChart from "./SalesChart";
import InventoryCard from "./InventoryCard";
import FloatingCard from "./FloatingCard";

export default function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[470px] lg:max-w-[520px]">

      <div
        className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-5
          lg:p-5
          shadow-2xl
          shadow-blue-100/40
        "
      >
        {/* Header */}

        <div className="mb-4 flex items-center justify-between">

          <div>
            <h3 className="text-xl font-bold text-slate-900">
              MotoHave Dashboard
            </h3>

            <p className="text-sm text-slate-500">
              Dealer Analytics
            </p>
          </div>

          <div className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
            Live
          </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-3 gap-3">

          <StatCard title="Vehicles" value="15.4K" />
          <StatCard title="Dealers" value="530" />
          <StatCard title="Revenue" value="$2.4M" />

        </div>

        {/* Sales Chart */}

        <div className="mt-4">
          <SalesChart />
        </div>

        {/* Inventory */}

        <div className="mt-4">
          <InventoryCard />
        </div>

      </div>

      {/* Floating Left */}

      <FloatingCard
        className="-left-12 top-16 lg:-left-32 lg:top-16"
        title="Featured"
        value="SUV"
      />

      {/* Floating Right */}

      <FloatingCard
        className="-right-8 bottom-8 lg:-right-35 lg:bottom-10"
        title="Satisfaction"
        value="98%"
      />

    </div>
  );
}