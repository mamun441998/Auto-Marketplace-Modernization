"use client";

import { motion } from "framer-motion";

export default function DashboardInventory() {
  const vehicles = [
    { model: "BMW X5 M-Sport", price: "$58,900", stock: "ST-8921", status: "Available", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    { model: "Tesla Model Y LR", price: "$47,500", stock: "ST-4402", status: "Reserved", color: "bg-amber-50 text-amber-600 border-amber-100" },
    { model: "Mercedes GLC 300", price: "$61,200", stock: "ST-1109", status: "Available", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  ];

  return (
    <div className="space-y-4 text-neutral-800 select-none">
      
      {/* KPI Cards Row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-600 p-4 text-white shadow-sm">
          <p className="text-[10px] uppercase tracking-wider font-semibold text-blue-100/80">Active Fleet</p>
          <h3 className="mt-1 text-xl font-black tracking-tight">426</h3>
          <p className="text-[10px] font-medium text-blue-100/90">↑ 12%</p>
        </div>

        <div className="rounded-xl bg-white p-4 border border-neutral-200/60 shadow-sm">
          <p className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400">Units Sold</p>
          <h3 className="mt-1 text-xl font-black tracking-tight text-neutral-900">148</h3>
          <p className="text-[10px] font-medium text-emerald-600">↑ 8%</p>
        </div>

        <div className="rounded-xl bg-white p-4 border border-neutral-200/60 shadow-sm">
          <p className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400">Gross Rev</p>
          <h3 className="mt-1 text-xl font-black tracking-tight text-blue-600">$2.4M</h3>
          <p className="text-[10px] font-medium text-blue-600">↑ 18%</p>
        </div>
      </div>

      {/* Main Inventory Status Card */}
      <div className="rounded-xl bg-white p-4 border border-neutral-200/60 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold text-neutral-900">Live Fleet Inventory</h4>
          </div>
          <button className="text-[10px] font-bold text-blue-600 hover:text-blue-700">Manage</button>
        </div>

        {/* Vehicle Rows */}
        <div className="space-y-2">
          {vehicles.map((car) => (
            <div
              key={car.model}
              className="flex items-center justify-between rounded-lg border border-neutral-100 p-2 bg-neutral-50/50"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-white border border-neutral-200/50 flex flex-col items-center justify-center text-neutral-400 font-bold text-[8px] leading-none text-center">
                  {car.stock.split('-')[0]}
                  <span className="text-[9px]">{car.stock.split('-')[1]}</span>
                </div>
                <div>
                  <h5 className="text-[11px] font-bold text-neutral-800">{car.model}</h5>
                  <p className="text-[10px] font-semibold text-neutral-400">MSRP: {car.price}</p>
                </div>
              </div>

              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${car.color}`}>
                {car.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mini Activity Logs Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-white p-3 border border-neutral-200/60 shadow-sm">
          <h5 className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">Inbound</h5>
          <div className="space-y-1">
            <p className="text-[10px] font-medium text-neutral-700 truncate">⚡ Quote for X5</p>
            <p className="text-[10px] font-medium text-neutral-700 truncate">📬 Tesla Test-drive</p>
          </div>
        </div>

        <div className="rounded-xl bg-white p-3 border border-neutral-200/60 shadow-sm">
          <h5 className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">Actions</h5>
          <div className="space-y-1">
            <p className="text-[10px] font-medium text-emerald-600">✓ Facebook Sync</p>
            <p className="text-[10px] font-medium text-blue-600">✓ VIN Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
}