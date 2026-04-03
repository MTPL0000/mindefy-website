"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

/* ── Animation presets ─────────────────────────────────────────────────────── */
export const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

/* ── ScrollReveal ──────────────────────────────────────────────────────────── */
export function ScrollReveal({
  children,
  variants = fadeUp,
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-72px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: { ...variants.visible.transition, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── StaggerGrid ───────────────────────────────────────────────────────────── */
export function StaggerGrid({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Counter ───────────────────────────────────────────────────────────────── */
export function Counter({ end, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 80;
    const step = end / total;
    const tick = () => {
      frame++;
      setVal(Math.min(Math.round(step * frame * 10) / 10, end));
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/* ── Chip ──────────────────────────────────────────────────────────────────── */
export function Chip({ children, as: Tag = "span" }) {
  return (
    <Tag className="inline-flex items-center gap-1.5 font-poppins font-bold text-[#E84B27] bg-[rgba(232,75,39,0.07)] border border-[rgba(232,75,39,0.2)] text-xs tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-5">
      {children}
    </Tag>
  );
}

/* ── Section Heading ───────────────────────────────────────────────────────── */
export function H2({
  children,
  light = false,
  className = "",
  as: Tag = "h2",
}) {
  return (
    <Tag
      className={`font-extrabold leading-snug tracking-[-0.025em] font-poppins mb-4 ${
        light ? "text-white" : "text-[#162560]"
      } ${className}`}
      style={{
        fontSize: "clamp(30px, 4vw, 54px)",
      }}
    >
      {children}
    </Tag>
  );
}

/* ── Arrow Icon ────────────────────────────────────────────────────────────── */
export function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 17L17 7M17 7H7M17 7V17"
      />
    </svg>
  );
}

/* ── Check Icon ────────────────────────────────────────────────────────────── */
export function CheckIcon() {
  return (
    <svg
      className="w-3 h-3 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

/* ── CTA Button ────────────────────────────────────────────────────────────── */
export function AppDevButton({
  href,
  children,
  variant = "solid",
  primaryColor = "#F94D00",
  secondaryColor = "#0B0D17",
  textColor = "#fff",
  surfaceColor = "#fff",
  size = "md",
  icon = <ArrowIcon />,
  className = "",
  style = {},
  ...rest
}) {
  const isOutline = variant === "outline" || variant === "light";

  const colorStyles = {
    "--theme": primaryColor,
    "--header": secondaryColor,
    "--white": isOutline ? surfaceColor : textColor,
  };

  const sizeStyles = {
    sm: { padding: "12px 20px", fontSize: "14px" },
    md: {},
    lg: { padding: "18px 44px", fontSize: "17px" },
  };

  const mergedStyle = { ...colorStyles, ...(sizeStyles[size] || {}), ...style };

  return (
    <Link
      href={href}
      className={`theme-btn font-poppins hover:shadow-xl group no-underline ${
        isOutline ? "style-btn" : ""
      } ${className}`}
      style={mergedStyle}
      {...rest}
    >
      <span>{children}</span>
      {icon ? (
        <span className="ml-1 transition-transform duration-300 group-hover:rotate-45 flex items-center">
          {icon}
        </span>
      ) : null}
    </Link>
  );
}
