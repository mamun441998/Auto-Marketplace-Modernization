// everything/everythingData.ts

export interface EverythingItem {
  id: number;
  title: string;
  description: string;
  liveLabel: string;
  liveValue: string;
  iconType: "inventory" | "crm" | "analytics" | "website" | "marketing" | "ai";
  gradient: string;
  accentColor: string;
}

export const everythingData: EverythingItem[] = [
  {
    id: 1,
    title: "Inventory",
    description: "Manage unlimited vehicles with VIN tracking, pricing, stock and galleries.",
    liveLabel: "LIVE DATA",
    liveValue: "15K+ Vehicles",
    iconType: "inventory",
    gradient: "from-blue-500/10 to-cyan-500/5",
    accentColor: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    id: 2,
    title: "CRM",
    description: "Track leads, customers and sales opportunities in one single unified place.",
    liveLabel: "LIVE DATA",
    liveValue: "238 Active Leads",
    iconType: "crm",
    gradient: "from-emerald-500/10 to-teal-500/5",
    accentColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    id: 3,
    title: "Analytics",
    description: "Monitor dealership performance with beautiful, lightning-fast live dashboards.",
    liveLabel: "LIVE DATA",
    liveValue: "+18% Growth",
    iconType: "analytics",
    gradient: "from-amber-500/10 to-orange-500/5",
    accentColor: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    id: 4,
    title: "Website Builder",
    description: "Create a modern dealership website connected directly to your real-time inventory.",
    liveLabel: "LIVE DATA",
    liveValue: "SEO Optimized",
    iconType: "website",
    gradient: "from-indigo-500/10 to-purple-500/5",
    accentColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    id: 5,
    title: "Marketing",
    description: "Run automated campaigns, featured smart listings and direct customer promotions.",
    liveLabel: "LIVE DATA",
    liveValue: "Campaign Ready",
    iconType: "marketing",
    gradient: "from-rose-500/10 to-pink-500/5",
    accentColor: "text-rose-600 bg-rose-50 border-rose-100",
  },
  {
    id: 6,
    title: "AI Automation",
    description: "Generate vehicle descriptions instantly and automate repetitive manual dealership tasks.",
    liveLabel: "LIVE DATA",
    liveValue: "Powered by AI",
    iconType: "ai",
    gradient: "from-violet-500/10 to-fuchsia-500/5",
    accentColor: "text-violet-600 bg-violet-50 border-violet-100",
  },
];