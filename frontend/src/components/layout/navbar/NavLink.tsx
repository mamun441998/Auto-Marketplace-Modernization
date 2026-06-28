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
      className={clsx(
        "relative font-medium transition-colors duration-200",
        "text-slate-700 hover:text-blue-600",
        active && "text-blue-600"
      )}
    >
      {children}

      <span
        className={clsx(
          "absolute -bottom-2 left-0 h-0.5 bg-blue-600 transition-all duration-300",
          active ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  );
}