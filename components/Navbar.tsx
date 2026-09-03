"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import RegisterButton from "./RegisterButton";
import SpiderCursor from "./SpiderCursor";
import MobileMenu from "./MobileMenu";
import NavbarWebAccent from "./NavbarWebAccent";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "EVENTS", href: "/events" },
  { name: "SCHEDULE", href: "/schedule" },
  { name: "GALLERY", href: "/gallery" },
  { name: "TEAM", href: "/team" },
  { name: "SPONSORS", href: "/sponsors" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState<boolean>(false);
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);
  const [activeHoverRect, setActiveHoverRect] = useState<DOMRect | null>(null);

  const headerRef = useRef<HTMLElement>(null);
  const navItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const pathname = usePathname();

  const activeRouteIndex = navLinks.findIndex((l) => l.href === pathname);
  const effectiveActiveIndex =
    activeHoverIndex !== null
      ? activeHoverIndex
      : activeRouteIndex !== -1
      ? activeRouteIndex
      : 0;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavHoverStart = (index: number) => {
    setActiveHoverIndex(index);
    const element = navItemsRef.current[index];
    if (element) {
      setActiveHoverRect(element.getBoundingClientRect());
    }
  };

  const handleNavHoverEnd = () => {
    setActiveHoverIndex(null);
    setActiveHoverRect(null);
  };

  return (
    <>
      <header
        ref={headerRef}
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => {
          setIsHeaderHovered(false);
          setActiveHoverIndex(null);
          setActiveHoverRect(null);
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out select-none ${
          isHeaderHovered ? "[&_*]:!cursor-none !cursor-none" : ""
        } ${
          scrolled
            ? "bg-[#040814]/90 backdrop-blur-2xl border-b border-white/15 py-4 md:py-5 shadow-[0_8px_32px_rgba(0,0,0,0.85),0_0_25px_rgba(239,68,68,0.15)]"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        {/* Dynamic Web Accent Border */}
        <NavbarWebAccent activeHoverIndex={activeHoverIndex} />

        {/* Header Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative z-10">
          {/* LEFT: SHIVATECH Brand */}
          <Link
            href="/"
            className="group flex items-center space-x-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
          >
            {/* Original Abstract Tech Spider Icon */}
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 border border-white/15 group-hover:border-red-500/60 transition-all shadow-[0_0_20px_rgba(239,68,68,0.25)]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white group-hover:text-red-400 transition-colors"
              >
                <ellipse cx="12" cy="13.5" rx="3" ry="4" fill="#060b16" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="12" cy="7" r="2.2" fill="#060b16" stroke="#3b82f6" strokeWidth="1.2" />
                <circle cx="12" cy="13.5" r="1" fill="#ef4444" className="animate-pulse" />
                <path d="M9 11 C 6 9, 4 6, 2 7" stroke="currentColor" strokeWidth="1.2" />
                <path d="M15 11 C 18 9, 20 6, 22 7" stroke="currentColor" strokeWidth="1.2" />
                <path d="M9 13 C 5 13, 3 12, 1 14" stroke="#ef4444" strokeWidth="1.2" />
                <path d="M15 13 C 19 13, 21 12, 23 14" stroke="#ef4444" strokeWidth="1.2" />
                <path d="M9 15 C 6 17, 4 19, 3 21" stroke="#3b82f6" strokeWidth="1.2" />
                <path d="M15 15 C 18 17, 20 19, 21 21" stroke="#3b82f6" strokeWidth="1.2" />
              </svg>
            </div>

            {/* Wordmark */}
            <span className="font-mono font-black text-2xl sm:text-3xl tracking-[0.16em] text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-red-400 transition-all duration-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
              SHIVATECH
            </span>
          </Link>

          {/* CENTER: Desktop Navigation Items */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link, idx) => {
              const isIndicatorActive = effectiveActiveIndex === idx;
              return (
                <div
                  key={link.name}
                  ref={(el) => {
                    navItemsRef.current[idx] = el;
                  }}
                >
                  <NavLink
                    name={link.name}
                    href={link.href}
                    isActive={isIndicatorActive}
                    onHoverStart={() => handleNavHoverStart(idx)}
                    onHoverEnd={handleNavHoverEnd}
                  />
                </div>
              );
            })}
          </nav>

          {/* RIGHT: Desktop Register CTA */}
          <div className="hidden md:block">
            <RegisterButton />
          </div>

          {/* MOBILE: Hamburger & Drawer Menu */}
          <MobileMenu
            navLinks={navLinks}
            pathname={pathname}
            isOpen={mobileMenuOpen}
            onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
            onClose={() => setMobileMenuOpen(false)}
          />
        </div>
      </header>

      {/* Header-Scoped Desktop Custom Spider Cursor */}
      <SpiderCursor
        isHeaderHovered={isHeaderHovered}
        activeHoverRect={activeHoverRect}
      />
    </>
  );
}
