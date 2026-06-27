"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import Container from "./Container";
import NavLogo from "./navbar/NavLogo";
import NavMenu from "./navbar/NavMenu";
import NavAction from "./navbar/NavAction";
import MobileMenu from "./navbar/MobileMenu";
import MobileNav from "./navbar/MobileNav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b border-slate-200 backdrop-blur-lg transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-md"
          : "bg-white/90"
      )}
    >
      <Container>
        <div ref={navRef}>
          <div className="flex h-20 items-center justify-between">
            <NavLogo />

            <NavMenu />

            <div className="flex items-center gap-3">
              <NavAction />

              <MobileMenu
                open={open}
                onToggle={() => setOpen(!open)}
              />
            </div>
          </div>

          <MobileNav
            open={open}
            onClose={() => setOpen(false)}
          />
        </div>
      </Container>
    </header>
  );
}
