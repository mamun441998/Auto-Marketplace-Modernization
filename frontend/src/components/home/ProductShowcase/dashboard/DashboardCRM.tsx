"use client";

const customers = [
  { name: "John Carter", status: "Hot Lead", color: "bg-rose-50 text-rose-600 border-rose-100", dot: "bg-rose-500" },
  { name: "Emma Watson", status: "Follow Up", color: "bg-amber-50 text-amber-600 border-amber-100", dot: "bg-amber-500" },
  { name: "Michael Lee", status: "Won Client", color: "bg-emerald-50 text-emerald-600 border-emerald-100", dot: "bg-emerald-500" },
];

const followUps = [
  { name: "Sophia Brown", time: "10:30 AM", type: "Outbound Call" },
  { name: "David Wilson", time: "02:00 PM", type: "Test Drive Sync" },
];

export default function DashboardCRM() {
  return (
    // 💡 আগের চেয়ে কিছুটা বড়, তবে মূল ভার্সনের চেয়ে ছোট (Optimized size)
    <div className="space-y-4 text-neutral-800 select-none">
      
      {/* CRM KPI Grid */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-600 p-4 text-white shadow-sm">
          <p className="text-[10px] uppercase tracking-wider font-semibold text-blue-100/80">Total Leads</p>
          <h3 className="mt-1 text-xl font-black tracking-tight">238</h3>
          <p className="text-[10px] font-medium text-blue-100/90">↑ 14%</p>
        </div>

        <div className="rounded-xl bg-white p-4 border border-neutral-200/60 shadow-sm">
          <p className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400">Converted</p>
          <h3 className="mt-1 text-xl font-black tracking-tight text-neutral-900">154</h3>
          <p className="text-[10px] font-medium text-emerald-600">↑ 9%</p>
        </div>

        <div className="rounded-xl bg-white p-4 border border-neutral-200/60 shadow-sm">
          <p className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400">Win Rate</p>
          <h3 className="mt-1 text-xl font-black tracking-tight text-violet-600">68%</h3>
          <p className="text-[10px] font-bold text-violet-600 uppercase tracking-wider">Excellent</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        
        {/* Customer Pipeline */}
        <div className="rounded-xl bg-white p-4 border border-neutral-200/60 shadow-sm flex flex-col justify-between">
          <h4 className="text-xs font-bold text-neutral-900 mb-3">Deal Pipeline</h4>
          <div className="space-y-2">
            {customers.map((customer) => (
              <div key={customer.name} className="flex items-center justify-between rounded-lg border border-neutral-100 p-2 bg-neutral-50/50">
                <h5 className="text-[11px] font-bold text-neutral-800">{customer.name}</h5>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${customer.color}`}>
                  {customer.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="rounded-xl bg-white p-4 border border-neutral-200/60 shadow-sm">
          <h4 className="text-xs font-bold text-neutral-900 mb-4">Conversion Funnel</h4>
          <div className="space-y-3">
            {[ {l:"Leads", p:"100%"}, {l:"Proposals", p:"74%"}, {l:"Closed", p:"42%"} ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-[10px] font-bold text-neutral-500 mb-1">
                  <span>{item.l}</span> <span>{item.p}</span>
                </div>
                <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
                  <div className="h-full rounded-full bg-blue-500" style={{ width: item.p }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Follow-ups */}
      <div className="rounded-xl bg-white p-4 border border-neutral-200/60 shadow-sm">
        <h4 className="text-xs font-bold text-neutral-900 mb-3">Smart Follow-ups</h4>
        <div className="grid grid-cols-2 gap-3">
          {followUps.map((item) => (
            <div key={item.name} className="p-2.5 rounded-lg border border-neutral-100 bg-neutral-50/50 flex justify-between items-center">
              <div>
                <p className="text-[11px] font-bold text-neutral-800">{item.name}</p>
                <p className="text-[10px] text-neutral-400">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}