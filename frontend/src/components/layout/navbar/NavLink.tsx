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

  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={clsx(
        "group relative block font-medium transition-all duration-200",

        // Mobile
        "rounded-xl px-4 py-3",
        "hover:bg-slate-100",

        // Desktop
        "lg:rounded-none lg:px-0 lg:py-0",
        "lg:hover:bg-transparent",

        // Text
        active
          ? "text-blue-600"
          : "text-slate-700 hover:text-blue-600"
      )}
    >
      {children}

      <span
        className={clsx(
          "absolute bottom-0 left-0 hidden h-0.5 bg-blue-600 transition-all duration-300 lg:block",
          active ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  );
}