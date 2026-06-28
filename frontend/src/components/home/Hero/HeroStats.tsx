export default function HeroStats() {
  const stats = [
    {
      value: "15K+",
      label: "Vehicles Managed",
    },
    {
      value: "500+",
      label: "Dealerships",
    },
    {
      value: "99%",
      label: "Customer Satisfaction",
    },
  ];

  return (
    <div className="mt-12 grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-3xl font-bold text-slate-900">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}