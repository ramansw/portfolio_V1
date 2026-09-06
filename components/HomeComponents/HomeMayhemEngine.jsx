"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { BsStack } from "react-icons/bs";
import { FiGithub, FiBookOpen, FiExternalLink } from "react-icons/fi";
import { TbBraces, TbNetwork } from "react-icons/tb";

const GITHUB_URL = "https://github.com/ramansw/MayhemEngine";

const tools = [
  {
    id: "debugger",
    name: "MayhemDebugger",
    tag: "Decision Chain",
    Icon: TbBraces,
    desc: "Records every condition checked in a gameplay decision. Shows exactly which check failed — not just the final state.",
    badges: ["UE 5.3+", "Unity 2020+", "C++17"],
    code: `DEBUG_CHAIN("DoJump");
DEBUG_CHECK("IsAlive",
  health > 0.f,
  mdbg::V("hp", health));
DEBUG_CHECK("HasControl",
  GetController() != nullptr);`,
    unityCode: `using var chain = MDBG.Chain("Attack");
chain.Check("InRange",   dist < range);
chain.Check("Cooldown",  timer <= 0f);`,
    stats: ["Zero heap alloc", "Break on fail", "Live viewer"],
  },
  {
    id: "nettrace",
    name: "NetTrace",
    tag: "Network Tracer",
    Icon: TbNetwork,
    desc: "Rolling log of every network send & receive. Byte counts, tagged values, aggregate stats. Thread-safe.",
    badges: ["UE 5.3+", "Unity 2020+", "P/Invoke"],
    code: `NET_TRACE_SEND("Rep_Health")
  .Bytes(sizeof(float))
  .Value("health", hp)
  .Value("actor", name)
  .Record();`,
    unityCode: `NTR.RecordSend("PlayerPos")
  .Bytes(12)
  .Value("pos", pos.ToString())
  .Record();`,
    stats: ["Thread-safe", "512-event ring", "Aggregate stats"],
  },
];

const CodeBlock = ({ code }) => (
  <pre
    className="text-[10px] font-mono leading-relaxed rounded-xl p-3 overflow-x-auto scrollbar-hide"
    style={{ background: "rgb(0 0 0 / 0.5)", color: "rgb(var(--color-secondary) / 0.9)" }}
  >
    {code}
  </pre>
);

const HomeMayhemEngine = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("ue");

  return (
    <>
      <style>{`
        @keyframes mayhem-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes mayhem-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes mayhem-border-pulse {
          0%, 100% { opacity: 0.35; }
          50%       { opacity: 0.8; }
        }
        .mayhem-card {
          animation: mayhem-float 4s ease-in-out infinite;
        }
        .mayhem-card-border {
          animation: mayhem-border-pulse 3s ease-in-out infinite;
        }
        .mayhem-shimmer-text {
          background: linear-gradient(
            90deg,
            rgb(var(--color-primary)) 0%,
            rgb(var(--color-secondary)) 40%,
            rgb(var(--color-primary)) 60%,
            rgb(var(--color-secondary)) 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: mayhem-shimmer 3s linear infinite;
        }
      `}</style>

      {/* ── Floating card — vertically centred on right edge ── */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40">
        <motion.button
          className="mayhem-card relative flex flex-col items-start rounded-2xl overflow-hidden text-left"
          style={{
            width: "160px",
            background: "rgb(var(--color-bg))",
            border: "1px solid rgb(var(--color-primary) / 0.35)",
            boxShadow: "0 8px 32px rgb(var(--color-primary) / 0.12), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
          onClick={() => setOpen(true)}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.03, x: -3 }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Top accent stripe */}
          <div className="w-full h-0.5" style={{ background: "linear-gradient(90deg, rgb(var(--color-primary)), rgb(var(--color-secondary)), transparent)" }} />

          {/* Card body */}
          <div className="flex flex-col gap-3 p-4 w-full">
            {/* Icon + live dot */}
            <div className="flex items-center justify-between w-full">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: "rgb(var(--color-primary) / 0.12)", border: "1px solid rgb(var(--color-primary) / 0.25)" }}
              >
                <BsStack size={15} style={{ color: "rgb(var(--color-primary))" }} />
              </div>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "rgb(var(--color-primary))" }} />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "rgb(var(--color-primary))" }} />
              </span>
            </div>

            {/* Name */}
            <div>
              <p className="mayhem-shimmer-text text-sm font-bold font-montserrat leading-none">MayhemEngine</p>
              <p className="text-[9px] font-montserrat text-white/30 mt-0.5 uppercase tracking-widest">Framework</p>
            </div>

            {/* One-line description */}
            <p className="text-[10px] font-montserrat text-white/40 leading-relaxed">
              Game debugging tools I built and open-sourced.
            </p>

            {/* Tool pills */}
            <div className="flex flex-col gap-1.5">
              {[
                { Icon: TbBraces, label: "MayhemDebugger" },
                { Icon: TbNetwork, label: "NetTrace" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <Icon size={10} style={{ color: "rgb(var(--color-primary) / 0.7)" }} />
                  <span className="text-[9px] font-montserrat text-white/35">{label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="w-full text-center text-[9px] font-montserrat font-semibold py-1.5 rounded-lg mt-1"
              style={{ background: "rgb(var(--color-primary) / 0.12)", color: "rgb(var(--color-primary))", border: "1px solid rgb(var(--color-primary) / 0.2)" }}
            >
              View Details
            </div>
          </div>
        </motion.button>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          >
            <motion.div
              className="relative w-full flex flex-col lg:flex-row rounded-3xl overflow-hidden border border-white/10"
              style={{
                maxWidth: "1050px",
                maxHeight: "90vh",
                background: "rgb(var(--color-bg))",
                boxShadow: "0 0 100px rgb(var(--color-primary) / 0.12)",
              }}
              initial={{ scale: 0.88, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 30 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* ── Left: Info panel ── */}
              <div className="lg:w-[270px] shrink-0 flex flex-col justify-between gap-5 p-6 border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: "rgb(var(--color-primary) / 0.15)", border: "1px solid rgb(var(--color-primary) / 0.25)" }}
                    >
                      <BsStack size={17} style={{ color: "rgb(var(--color-primary))" }} />
                    </div>
                    <button onClick={() => setOpen(false)} className="text-white/30 hover:text-white transition-colors">
                      <IoClose size={20} />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-[10px] font-montserrat px-2.5 py-0.5 rounded-full" style={{ color: "rgb(var(--color-primary))", background: "rgb(var(--color-primary) / 0.1)", border: "1px solid rgb(var(--color-primary) / 0.2)" }}>Open Source</span>
                    <span className="text-[10px] font-montserrat text-white/40 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">v1.0.0</span>
                    <span className="text-[10px] font-montserrat text-white/40 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">MIT</span>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold font-montserrat text-white leading-tight">
                      Mayhem<span style={{ color: "rgb(var(--color-primary))" }}>Engine</span>
                    </h2>
                    <p className="text-[11px] font-montserrat text-white/40 mt-0.5">Game Debugging Toolset</p>
                  </div>

                  <p className="text-white/50 font-montserrat text-xs leading-relaxed">
                    I build and open-source tools I wish existed: debuggers, network tracers, and diagnostics layers that make game development less painful.
                  </p>

                  <div className="flex flex-col gap-2 pt-1">
                    {[
                      { icon: "🔗", label: "MayhemDebugger", sub: "Decision chain debugger" },
                      { icon: "📡", label: "NetTrace", sub: "Network event tracer" },
                      { icon: "⚡", label: "Zero heap allocation", sub: "Fixed-capacity, no malloc" },
                      { icon: "🎮", label: "UE 5.3+ · Unity 2020+", sub: "Both engines supported" },
                    ].map((f) => (
                      <div key={f.label} className="flex items-start gap-2.5">
                        <span className="text-sm mt-0.5">{f.icon}</span>
                        <div>
                          <p className="text-xs font-montserrat text-white/70 leading-none">{f.label}</p>
                          <p className="text-[10px] font-montserrat text-white/30 mt-0.5">{f.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "rgb(var(--color-primary))" }} />
                    <span className="text-[10px] font-montserrat uppercase tracking-widest" style={{ color: "rgb(var(--color-primary) / 0.6)" }}>Live on GitHub</span>
                  </div>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-montserrat text-white/50 hover:text-white transition-colors"
                  >
                    <FiGithub size={13} />
                    ramansw/MayhemEngine
                    <FiExternalLink size={10} className="opacity-50" />
                  </a>
                  <a
                    href="/frameworks/mayhem-engine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-montserrat transition-colors"
                    style={{ color: "rgb(var(--color-primary) / 0.8)" }}
                  >
                    <FiBookOpen size={13} />
                    Full Documentation →
                  </a>
                </div>
              </div>

              {/* ── Right: Tool showcase ── */}
              <div className="flex-1 flex flex-col overflow-hidden">
                {/* Tab bar */}
                <div className="flex items-center gap-1 p-4 pb-0 border-b border-white/5">
                  {["ue", "unity"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className="px-3 py-1.5 rounded-lg text-xs font-montserrat font-semibold transition-all duration-200"
                      style={activeTab === tab
                        ? { background: "rgb(var(--color-primary) / 0.15)", color: "rgb(var(--color-primary))", border: "1px solid rgb(var(--color-primary) / 0.25)" }
                        : { color: "rgb(255 255 255 / 0.3)", border: "1px solid transparent" }
                      }
                    >
                      {tab === "ue" ? "Unreal Engine" : "Unity"}
                    </button>
                  ))}
                </div>

                {/* Tool cards */}
                <div className="flex-1 overflow-y-auto scrollbar-hide p-4 grid grid-cols-1 md:grid-cols-2 gap-4 content-start">
                  {tools.map((tool) => (
                    <motion.div
                      key={tool.id}
                      className="flex flex-col gap-3 rounded-2xl p-4 border border-white/8"
                      style={{ background: "rgb(255 255 255 / 0.02)" }}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Card header */}
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: "rgb(var(--color-primary) / 0.12)", border: "1px solid rgb(var(--color-primary) / 0.2)" }}
                        >
                          <tool.Icon size={15} style={{ color: "rgb(var(--color-primary))" }} />
                        </div>
                        <div>
                          <p className="text-sm font-montserrat font-bold text-white leading-none">{tool.name}</p>
                          <p className="text-[10px] font-montserrat text-white/35 mt-0.5">{tool.tag}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[11px] font-montserrat text-white/45 leading-relaxed">{tool.desc}</p>

                      {/* Code */}
                      <CodeBlock code={activeTab === "ue" ? tool.code : tool.unityCode} />

                      {/* Stats row */}
                      <div className="flex flex-wrap gap-1.5">
                        {tool.stats.map((s) => (
                          <span
                            key={s}
                            className="text-[9px] font-montserrat text-white/40 bg-white/5 border border-white/8 px-2 py-0.5 rounded-full"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}

                  {/* Install card */}
                  <div
                    className="md:col-span-2 flex flex-col gap-3 rounded-2xl p-4 border"
                    style={{ background: "rgb(var(--color-primary) / 0.04)", borderColor: "rgb(var(--color-primary) / 0.15)" }}
                  >
                    <p className="text-[10px] font-montserrat uppercase tracking-widest" style={{ color: "rgb(var(--color-primary) / 0.6)" }}>
                      {activeTab === "ue" ? "Install  Unreal Engine" : "Install  Unity (UPM)"}
                    </p>
                    {activeTab === "ue" ? (
                      <p className="text-xs font-montserrat text-white/40 leading-relaxed">
                        Copy <span className="text-white/70">UE/MayhemDebugger/</span> into your project's <span className="text-white/70">Plugins/</span> folder → generate VS project files → add <span className="text-white/70">"MayhemDebugger"</span> to PublicDependencyModuleNames.
                      </p>
                    ) : (
                      <CodeBlock code={`// Window → Package Manager → + → Add package from git URL\nhttps://github.com/ramansw/MayhemEngine.git?path=/Unity`} />
                    )}
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-start text-[11px] font-montserrat font-semibold flex items-center gap-1.5 transition-opacity hover:opacity-70"
                      style={{ color: "rgb(var(--color-primary))" }}
                    >
                      <FiGithub size={12} />
                      View on GitHub →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomeMayhemEngine;
