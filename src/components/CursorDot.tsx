"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorDot() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  // Mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics settings for lag/drag trailing effect
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Spring settings for inner dot (snappier)
  const dotSpringConfig = { damping: 10, stiffness: 600 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Hover listeners for interactive tags
    const addHoverListeners = () => {
      const targets = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, [data-hover]",
      );
      targets.forEach((target) => {
        target.addEventListener("mouseenter", () => setHovered(true));
        target.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    // Set initial listeners
    addHoverListeners();

    // Re-bind when DOM mutations happen (e.g. page changes, tab changes)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
    };
  }, [mouseX, mouseY, visible]);

  if (!mounted || !visible) return null;

  return (
    <>
      {/* Outer trailing circle */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-8 w-8 rounded-full border border-accent/60 mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          scale: hovered ? 1.5 : 1,
          backgroundColor: hovered
            ? "rgba(217, 91, 61, 0.2)"
            : "rgba(217, 91, 61, 0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {/* Inner precise dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-1.5 w-1.5 rounded-full bg-accent mix-blend-difference hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          transform: "translate(12px, 12px)", // center inside the outer 32px ring
          scale: hovered ? 0 : 1,
        }}
      />
    </>
  );
}
