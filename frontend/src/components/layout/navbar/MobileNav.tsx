"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { navigation } from "@/config/navigation";
import Button from "@/components/ui/Button";
import NavLink from "./NavLink";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileNav({
  open,
  onClose,
}: MobileNavProps) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
        >
          <div className="flex flex-col px-4 py-6">
            <div className="flex flex-col gap-5">
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={onClose}
              >
                <Button
                  variant="outline"
                  className="w-full"
                >
                  Sign In
                </Button>
              </Link>

              <Link
                href="/register"
                onClick={onClose}
              >
                <Button className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}