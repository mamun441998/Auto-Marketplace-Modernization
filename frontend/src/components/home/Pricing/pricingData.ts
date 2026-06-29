import {
  Check,
  Rocket,
  Crown,
  Building2,
} from "lucide-react";

export const pricingPlans = [
  {
    id: "starter",
    icon: Rocket,
    name: "Starter",
    monthlyPrice: 29,
    yearlyPrice: 290,
    description:
      "Perfect for individual dealers and small dealerships getting started.",

    badge: "",

    button: "Start Free Trial",

    popular: false,

    features: [
      "Up to 100 Vehicle Listings",
      "Inventory Management",
      "Basic CRM",
      "Dealer Website",
      "Lead Capture Forms",
      "Email Support",
    ],
  },

  {
    id: "professional",
    icon: Crown,
    name: "Professional",
    monthlyPrice: 79,
    yearlyPrice: 790,
    description:
      "Best choice for growing dealerships that need powerful automation.",

    badge: "Most Popular",

    button: "Get Started",

    popular: true,

    features: [
      "Unlimited Vehicles",
      "Advanced CRM",
      "Sales Pipeline",
      "Website Builder",
      "Marketing Tools",
      "Analytics Dashboard",
      "AI Description Generator",
      "Priority Support",
    ],
  },

  {
    id: "enterprise",
    icon: Building2,
    name: "Enterprise",
    monthlyPrice: 149,
    yearlyPrice: 1490,
    description:
      "For dealership groups needing advanced security and customization.",

    badge: "",

    button: "Contact Sales",

    popular: false,

    features: [
      "Everything in Professional",
      "Multiple Dealerships",
      "Unlimited Team Members",
      "Advanced Reports",
      "Custom Integrations",
      "API Access",
      "Dedicated Account Manager",
      "24/7 Premium Support",
    ],
  },
];

export { Check };