"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxEnterFullScreen } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { BsController } from "react-icons/bs";

const ITCH_URL = "https://ramansw.itch.io/tictactoe";

const features = [
  { icon: "🌐", label: "Real-Time Multiplayer" },
  { icon: "🔌", label: "WebSocket Powered" },
  { icon: "🏠", label: "Room-Based Matchmaking" },
  { icon: "⚡", label: "Live Game State Sync" },
];

const HomeTicTacToe = () => {
  const [open, setOpen] = useState(false);
  const iframeRef = useRef(null);

  const handleFullscreen = () => {
    const el = iframeRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  };

  return (
    <>
      <style>{`
        @keyframes spin-border {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 12px 2px rgba(247,127,0,0.25); }
          50%       { box-shadow: 0 0 28px 6px rgba(247,127,0,0.55); }
        }
        .game-widget { animation: glow-pulse 2.5s ease-in-out infinite; }
        .spin-ring::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 18px;
          padding: 2px;
          background: conic-gradient(from 0deg, #F5A623, transparent, #F5A623);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: spin-border 3s linear infinite;
        }
      `}</style>

      {/* ── Floating widget fixed bottom-right ── */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          className="game-widget spin-ring relative flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#0c0000] border border-primary/30 text-white font-montserrat text-sm font-semibold"
          onClick={() => setOpen(true)}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
        >
          {/* Pulsing dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <BsController size={16} className="text-primary" />
          <span>Play Game</span>
        </motion.button>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          >
            <motion.div
              className="relative w-full flex flex-col lg:flex-row rounded-3xl overflow-hidden border border-white/10"
              style={{
                maxWidth: "1100px",
                background: "#0c0000",
                boxShadow: "0 0 80px rgba(247,127,0,0.15)",
              }}
              initial={{ scale: 0.88, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 30 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* ── Left: Description ── */}
              <div className="lg:w-[280px] shrink-0 flex flex-col justify-between gap-6 p-7 border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="flex flex-col gap-4">
                  {/* Close */}
                  <button
                    onClick={() => setOpen(false)}
                    className="self-end text-white/30 hover:text-white transition-colors"
                  >
                    <IoClose size={20} />
                  </button>

                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-montserrat text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">Unity · WebGL</span>
                    <span className="text-[10px] font-montserrat text-white/40 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">C# · ASP.NET</span>
                  </div>

                  <h2 className="text-2xl font-bold font-montserrat text-white leading-tight">
                    TicTacToe <span className="text-primary">Online</span>
                  </h2>

                  <p className="text-white/50 font-montserrat text-xs leading-relaxed">
                    A real-time multiplayer game built with Unity WebGL and a custom ASP.NET Core server.
                    Create a room, share the code with a friend, and play,moves sync instantly over WebSockets.
                  </p>

                  <div className="flex flex-col gap-2.5 pt-2">
                    {features.map((f) => (
                      <div key={f.label} className="flex items-center gap-2.5 text-white/40 text-xs font-montserrat">
                        <span>{f.icon}</span>
                        <span>{f.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Live indicator */}
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-montserrat text-primary/60 uppercase tracking-widest">Server Live</span>
                  </div>

                  <a
                    href={ITCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-montserrat text-white/30 hover:text-primary transition-colors underline underline-offset-2"
                  >
                    Also on itch.io →
                  </a>
                </div>
              </div>

              {/* ── Right: Game (16:9) ── */}
              <div className="flex-1 relative" style={{ aspectRatio: "16/9", minHeight: "300px" }}>
                {/* Fullscreen button */}
                <button
                  onClick={handleFullscreen}
                  className="absolute top-3 right-3 z-10 w-8 h-8 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/40 transition-all duration-200"
                  title="Fullscreen"
                >
                  <RxEnterFullScreen size={15} />
                </button>

                <iframe
                  ref={iframeRef}
                  src="/games/tictactoe/index.html"
                  title="TicTacToe Online"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomeTicTacToe;
