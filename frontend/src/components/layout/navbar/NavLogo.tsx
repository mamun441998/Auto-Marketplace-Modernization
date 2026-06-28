import Link from "next/link";

export default function NavLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-4 shrink-0"
      aria-label="MotoHave Home"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white shadow-md">
        M
      </div>

      <div className="leading-tight">
        <h1 className="text-[2rem] font-bold tracking-tight text-slate-900">
          MotoHave
        </h1>

        <p className="text-sm text-slate-500">
          Automotive SaaS Platform
        </p>
      </div>
    </Link>
  );
}