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
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.25,
          }}
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <div className="px-6 py-6">

            <div className="flex flex-col gap-6">

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

            <div className="mt-8 space-y-4">

              <Link
                href="/login"
                onClick={onClose}
                className="block"
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
                className="block"
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