"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-card-border/40 bg-dark-bg/85 py-4 backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        {/* Logo/Wordmark */}
        <div className="flex lg:flex-1">
          <a href="#" className="font-display text-xl font-bold tracking-wider text-cream hover:text-accent transition-colors">
            ABIODUN<span className="text-accent">.</span>
          </a>
        </div>

        {/* Desktop Hamburger / Hamburger Menu Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-cream hover:bg-dark-card transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open main menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Menu links */}
        <div className="hidden md:flex md:gap-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-display text-sm font-medium tracking-wide text-cream/70 hover:text-cream transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <a
            href="/AbiodunOmonijoResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-card-border bg-dark-card/50 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-cream hover:border-accent hover:bg-accent hover:text-dark-bg transition-all duration-300"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
        </div>
      </nav>

      {/* Mobile Drawer Menu using Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-dark-bg px-6 py-6 md:hidden"
          >
            <div className="flex items-center justify-between">
              <a href="#" className="font-display text-xl font-bold tracking-wider text-cream">
                ABIODUN<span className="text-accent">.</span>
              </a>
              <button
                type="button"
                className="rounded-md p-2.5 text-cream hover:bg-dark-card transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-12 flow-root">
              <div className="-my-6 divide-y divide-card-border/50">
                <div className="space-y-4 py-6 flex flex-col">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="font-display text-2xl font-semibold tracking-wide text-cream/70 hover:text-accent py-2 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/AbiodunOmonijoResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-wider text-dark-bg hover:bg-accent-hover transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <FileText className="h-4 w-4" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
