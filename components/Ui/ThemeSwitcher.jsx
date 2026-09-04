"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdPalette } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";

const themes = [
  {
    id: "crimson",
    name: "Crimson",
    desc: "Dark red & orange",
    swatch: ["#f77f00", "#d62828", "#780000"],
    vars: {
      "--color-bg":        "12 0 0",
      "--color-primary":   "247 127 0",
      "--color-secondary": "252 191 73",
      "--color-red":       "214 40 40",
      "--color-navy":      "120 0 0",
      "--color-light":     "234 226 183",
    },
  },
  {
    id: "midnight",
    name: "Midnight",
    desc: "Deep ocean blue",
    swatch: ["#38bdf8", "#0ea5e9", "#0c4a6e"],
    vars: {
      "--color-bg":        "2 8 20",
      "--color-primary":   "56 189 248",
      "--color-secondary": "125 211 252",
      "--color-red":       "14 165 233",
      "--color-navy":      "12 74 110",
      "--color-light":     "224 242 254",
    },
  },
  {
    id: "neon",
    name: "Neon",
    desc: "Cyberpunk purple",
    swatch: ["#c77dff", "#9d4edd", "#3c096c"],
    vars: {
      "--color-bg":        "8 0 15",
      "--color-primary":   "199 125 255",
      "--color-secondary": "224 170 255",
      "--color-red":       "157 78 221",
      "--color-navy":      "60 9 108",
      "--color-light":     "248 237 255",
    },
  },
  {
    id: "gold",
    name: "Gold",
    desc: "Luxury dark gold",
    swatch: ["#ffd700", "#b8860b", "#2d2000"],
    vars: {
      "--color-bg":        "8 6 0",
      "--color-primary":   "255 215 0",
      "--color-secondary": "255 195 0",
      "--color-red":       "184 134 11",
      "--color-navy":      "45 32 0",
      "--color-light":     "255 251 230",
    },
  },
];

const applyTheme = (theme) => {
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));
  document.body.style.backgroundColor = `rgb(${theme.vars["--color-bg"]})`;
};

const ThemeSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("crimson");

  useEffect(() => {
    // Random theme on every page load
    const random = themes[Math.floor(Math.random() * themes.length)];
    setActive(random.id);
    applyTheme(random);
  }, []);

  const select = (theme) => {
    setActive(theme.id);
    applyTheme(theme);
  };

  return (
    <div className="fixed bottom-24 left-6 z-50">
      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((p) => !p)}
        className="w-11 h-11 rounded-full backdrop-blur-md flex items-center justify-center shadow-lg"
        style={{
          background: "rgb(var(--color-navy) / 0.85)",
          border: "1px solid rgb(var(--color-primary) / 0.4)",
          color: "rgb(var(--color-primary))",
        }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.94 }}
        title="Switch theme"
      >
        <MdPalette size={20} />
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.93 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-14 left-0 backdrop-blur-xl rounded-2xl p-4 flex flex-col gap-2 w-[190px] shadow-2xl"
            style={{
              background: "rgb(var(--color-navy) / 0.92)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <p
              className="text-[10px] font-montserrat uppercase tracking-widest font-semibold pb-1"
              style={{ color: "rgb(var(--color-primary) / 0.6)" }}
            >
              Color Theme
            </p>

            {themes.map((theme) => {
              const isActive = active === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => select(theme)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl w-full text-left transition-all duration-200"
                  style={{
                    background: isActive
                      ? "rgba(255,255,255,0.1)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(255,255,255,0.15)"
                      : "1px solid transparent",
                  }}
                >
                  {/* Swatches */}
                  <div className="flex gap-1 flex-shrink-0">
                    {theme.swatch.map((c, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>

                  {/* Label */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-montserrat text-white/90 font-semibold leading-none">
                      {theme.name}
                    </p>
                    <p className="text-[10px] text-white/40 mt-0.5 leading-none">
                      {theme.desc}
                    </p>
                  </div>

                  {isActive && (
                    <IoCheckmark
                      size={14}
                      style={{ color: "rgb(var(--color-primary))", flexShrink: 0 }}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
