"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageSquare } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Africa/Lagos", // Nigerian time zone
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-card-border/40 bg-dark-bg/60 py-12 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Title */}
          <div>
            <h3 className="font-display text-2xl font-bold tracking-widest text-cream uppercase">
              ABIODUN OMONIJO<span className="text-accent">.</span>
            </h3>
            <p className="text-xs text-muted text-center mt-1 uppercase tracking-wider">
              Web & Mobile Product Developer
            </p>
          </div>

          {/* Socials & Actions */}
          <div className="flex items-center gap-4 fixed z-40 sm:inset-x-400 inset-x-60 sm:bottom-20 bottom-10">
            <a
              href="https://www.linkedin.com/in/abiodun-omonijo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-dark-card/50 text-muted hover:text-accent hover:border-accent transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://wa.me/+2348138672689"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-dark-card/50 text-muted hover:text-accent hover:border-accent transition-colors duration-300"
              aria-label="WhatsApp Chat"
            >
              <MessageSquare className="h-4 w-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-dark-card/50 text-muted hover:text-accent hover:border-accent transition-colors duration-300 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-card-border/30" />

        {/* Bottom meta */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted font-medium">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>&copy; {new Date().getFullYear()}</span>
            <span aria-hidden="true" className="text-faint">
              /
            </span>
            <span>Lagos, Nigeria</span>
            <span aria-hidden="true" className="text-faint">
              /
            </span>
            <span className="tabular-nums">{time}</span>
          </div>

          <p className="text-center md:text-right">
            {/* Coded with Next.js, TypeScript &amp; Tailwind CSS */}
          </p>
        </div>
      </div>
    </footer>
  );
}
