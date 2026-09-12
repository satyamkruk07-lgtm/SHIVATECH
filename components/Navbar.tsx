"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import NavbarWebAccent from "./NavbarWebAccent";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "EVENTS", href: "/events" },
  { name: "SCHEDULE", href: "/schedule" },
  { name: "GALLERY", href: "/gallery" },
  { name: "TEAM", href: "/team" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState<boolean>(false);
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);

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
  };

  const handleNavHoverEnd = () => {
    setActiveHoverIndex(null);
  };

  return (
    <header
      ref={headerRef}
      onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={() => {
        setIsHeaderHovered(false);
        setActiveHoverIndex(null);
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out select-none ${
        scrolled
          ? "bg-[#040814]/95 backdrop-blur-2xl border-b border-white/15 py-2.5 sm:py-4 md:py-5 shadow-[0_8px_32px_rgba(0,0,0,0.85),0_0_25px_rgba(239,68,68,0.15)]"
          : "bg-[#040814]/60 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none py-3 sm:py-6 md:py-8"
      }`}
    >
      {/* Dynamic Web Accent Border */}
      <NavbarWebAccent activeHoverIndex={activeHoverIndex} />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-6 relative z-10">
        {/* LEFT: SHIVATECH Brand & Logos */}
        <div className="flex items-center space-x-1.5 sm:space-x-3 shrink-0">
          <Link
            href="/"
            className="group flex items-center space-x-1.5 xs:space-x-2 sm:space-x-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm shrink-0"
          >
            {/* Abstract Tech Spider Icon */}
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 flex items-center justify-center rounded-lg sm:rounded-xl bg-white/10 border border-white/15 group-hover:border-red-500/60 transition-all shadow-[0_0_15px_rgba(239,68,68,0.25)] shrink-0">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white group-hover:text-red-400 transition-colors sm:w-5 sm:h-5 lg:w-6 lg:h-6"
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
            <span className="font-mono font-black text-sm xs:text-base sm:text-lg md:text-xl lg:text-[22px] tracking-[0.06em] xs:tracking-[0.08em] sm:tracking-[0.10em] lg:tracking-[0.14em] text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-red-400 transition-all duration-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] whitespace-nowrap">
              SHIVA INNOVEX
            </span>
          </Link>

          {/* 3 INSTITUTION LOGOS (VISIBLE ON ALL DEVICES: MOBILE, TABLET & DESKTOP) */}
          <div className="flex items-center space-x-1 xs:space-x-1.5 sm:space-x-2 pl-1.5 sm:pl-2.5 lg:pl-3 border-l border-white/20 shrink-0">
            {/* 1. University Logo */}
            <a
              href="https://sudoon.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              title="Shivalik University"
              className="h-6 xs:h-7 sm:h-8 lg:h-8.5 px-1.5 sm:px-2 bg-white/95 rounded-md sm:rounded-lg flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              <Image
                src="/images/university_logo.png"
                alt="Shivalik University Logo"
                width={95}
                height={30}
                priority
                className="object-contain h-4 xs:h-5 sm:h-6 lg:h-6.5 w-auto"
              />
            </a>

            {/* 2. ACM Logo */}
            <a
              href="https://acmshivalik.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="ACM Student Chapter"
              className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 lg:h-8.5 lg:w-8.5 bg-white/95 rounded-md sm:rounded-lg p-0.5 sm:p-1 flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              <Image
                src="/images/acm_logo_cropped.png"
                alt="ACM Logo"
                width={32}
                height={32}
                priority
                className="object-contain h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 lg:h-6.5 lg:w-6.5"
              />
            </a>

            {/* 3. CBII Logo */}
            <a
              href="https://shivalikcollege.edu.in/ihub-cbii/"
              target="_blank"
              rel="noopener noreferrer"
              title="CBII / iHub"
              className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 lg:h-8.5 lg:w-8.5 bg-white/95 rounded-md sm:rounded-lg p-0.5 sm:p-1 flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              <Image
                src="/images/cbii_logo.png"
                alt="CBII Logo"
                width={32}
                height={32}
                priority
                className="object-contain h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 lg:h-6.5 lg:w-6.5"
              />
            </a>
          </div>
        </div>

        {/* CENTER / RIGHT: Desktop Navigation Items */}
        <nav className="hidden lg:flex items-center space-x-1 lg:space-x-2 xl:space-x-4.5 shrink-0">
          {navLinks.map((link, idx) => {
            const isIndicatorActive = effectiveActiveIndex === idx;
            return (
              <div
                key={link.name}
                ref={(el) => {
                  navItemsRef.current[idx] = el;
                }}
                className="shrink-0"
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
  );
}
