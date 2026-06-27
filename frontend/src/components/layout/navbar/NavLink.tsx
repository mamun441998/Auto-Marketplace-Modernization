"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
};

export default function NavLink({
    href,
    children,
    onClick,
}: NavLinkProps) {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link 
            href={href}
            onClick={onClick}
            className={clsx(
                "transition-colors duration-200 font-medium",
                isActive
                ? "text-blue-600"
                : "text-slate-600 hover:text-blue-600"
            )}

            >
                {children}
            </Link>
    );
}