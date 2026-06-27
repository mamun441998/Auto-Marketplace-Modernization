import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function NavLogo() {
    return (
        <Link
        href="/"
        className="flex items-center gap-2 transition-opacity hover:opacity-90">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                M 
            </div>

            <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight text-slate-900">
                    {siteConfig.name}
                </span>

                <span className="text-xs text-slate-500">
                    Automotive SaaS Platform
                </span>
            </div>
        </Link>
    );
}