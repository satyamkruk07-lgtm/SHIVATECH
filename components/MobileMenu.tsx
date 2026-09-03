"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  navLinks: { name: string; href: string }[];
  pathname: string;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  navLinks,
  pathname,
  isOpen,
  onToggle,
  onClose,
}) => {
  return (
    <>
      {/* Mobile Hamburger Toggle Button */}
      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        className="md:hidden z-50 p-2 text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg transition-colors"
        onClick={onToggle}
      >
        {isOpen ? <X size={26} className="text-red-400" /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu Fullscreen Translucent Glass Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#040814]/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center p-6 space-y-6 md:hidden overflow-y-auto"
          >
            {/* Background Neon Accent Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Brand Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-center mb-2 font-mono"
            >
              <span className="text-[10px] tracking-[0.3em] text-red-500 font-bold uppercase block mb-1">
                TECHNOLOGY FESTIVAL
              </span>
              <h2 className="text-3xl font-bold tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] font-sans">
                SHIVATECH
              </h2>
            </motion.div>

            {/* Staggered Navigation Items */}
            <div className="flex flex-col items-center space-y-5 font-mono text-center w-full max-w-xs">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`block py-2.5 px-4 text-sm font-bold tracking-[0.2em] uppercase rounded-lg transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-red-600/30 to-blue-600/30 border border-white/20 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
