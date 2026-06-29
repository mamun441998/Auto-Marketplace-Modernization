// features/featuresData.ts

export interface FeatureItem {
  id: number;
  badge: string;
  title: string;
  description: string;
  highlightText: string;
  imagePath: string;
  colorTheme: string; // image_e74fdf.jpg এর ব্র্যান্ড কালার ম্যাচিং গ্রেডিয়েন্ট
}

export const featuresData: FeatureItem[] = [
  {
    id: 1,
    badge: "AI Marketing",
    title: "AI-Powered Smart Campaign Booster",
    description: "Launch automated Facebook, Instagram, and Google ads for your dealership inventory in one click. Our smart AI auto-generates copy and targets high-intent car buyers seamlessly.",
    highlightText: "3x Higher Lead Conversion Rate",
    imagePath: "/images/features/ai-marketing.jpg",
    colorTheme: "from-blue-600 via-blue-500 to-cyan-400", // MotoHave primary blue gradient
  },
  {
    id: 2,
    badge: "SaaS Dashboard",
    title: "Next-Gen Intelligent Analytics Hub",
    description: "Track your entire dealership inventory, customer inquiries, and sales metrics from a centralized command center. Real-time data graphs give you total business control.",
    highlightText: "All dealership data in a single viewport",
    imagePath: "/images/features/dashboard.jpg",
    colorTheme: "from-blue-700 via-indigo-600 to-blue-500",
  },
  {
    id: 3,
    badge: "Smart Selling",
    title: "Instant Car Valuation & Listing Engine",
    description: "Upload a car image and let our advanced AI vision instantly detect the model, specs, and condition to auto-generate a premium, conversion-optimized marketplace listing.",
    highlightText: "Reduce listing time by over 90%",
    imagePath: "/images/features/car-selling.jpg",
    colorTheme: "from-cyan-500 via-blue-500 to-indigo-600",
  },
  {
    id: 4,
    badge: "Secure Deals",
    title: "Seamless Dealer-to-Buyer Portal",
    description: "Close deals faster with secure integrated payment gateways, instant digital documentation signing, and automated invoice generation for a completely paperless workflow.",
    highlightText: "100% Secure & Encrypted Transactions",
    imagePath: "/images/features/secure-deals.jpg",
    colorTheme: "from-blue-600 via-cyan-500 to-blue-400",
  },
];