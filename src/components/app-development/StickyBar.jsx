"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowIcon } from "./ui";

export default function StickyBar() {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !closed) setShow(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [closed]);

  const handleClose = () => {
    setShow(false);
    setClosed(true);
  };

  return (
    <AnimatePresence>
      {show && !closed && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#162560]"
          style={{ borderTop: "3px solid #E84B27" }}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Message */}
            <p className="text-white font-semibold text-sm text-center sm:text-left">
              🔍{" "}
              <span style={{ color: "#FFB59E" }}>
                Free 30-Day Technical Audit
              </span>{" "}
              — Identify architectural debt before it breaks your growth.
            </p>

            {/* Actions */}
            <div className="flex gap-3 items-center flex-shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#E84B27] text-white font-bold text-[13px] px-5 py-2.5 rounded-lg hover:bg-[#FF5C35] transition-colors no-underline"
              >
                Claim Free Audit <ArrowIcon />
              </a>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white/60 hover:text-white flex items-center justify-center text-sm border-0 cursor-pointer"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
