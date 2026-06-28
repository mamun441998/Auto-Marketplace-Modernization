"use client";

import { Menu, X } from "lucide-react";

type MobileMenuProps = {
  open: boolean;
  onToggle: () => void;
};

export default function MobileMenu({
  open,
  onToggle,
}: MobileMenuProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle Menu"
      aria-expanded={open}
      className="
        inline-flex
        h-12
        w-12
        items-center
        justify-center
        rounded-xl
        border
        border-slate-200
        bg-white
        text-slate-700
        shadow-sm
        transition-all
        hover:bg-slate-50
        lg:hidden
      "
    >
      {open ? (
        <X className="h-6 w-6" />
      ) : (
        <Menu className="h-6 w-6" />
      )}
    </button>
  );
}