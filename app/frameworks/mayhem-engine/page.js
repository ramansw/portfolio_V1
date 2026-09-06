"use client";

import { useState } from "react";
import { FiGithub, FiCopy, FiCheck, FiExternalLink } from "react-icons/fi";

const GITHUB = "https://github.com/ramansw/MayhemEngine";
const RELEASES = "https://github.com/ramansw/MayhemEngine/releases";

// ── Code block with copy button ───────────────────────────────────────────────
function Code({ children, lang = "" }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative rounded-lg overflow-hidden border border-white/10 my-4 group">
      {lang && (
        <div className="flex items-center justify-between px-4 py-1.5 border-b border-white/8" style={{ background: "rgba(255,255,255,0.04)" }}>
          <span className="text-[10px] font-mono text-white/30 uppercase tracking-wider">{lang}</span>
          <button onClick={copy} className="flex items-center gap-1.5 text-[10px] text-white/30 hover:text-white/60 transition-colors">
            {copied ? <FiCheck size={11} className="text-green-400" /> : <FiCopy size={11} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      )}
      <pre className="text-[12px] font-mono leading-relaxed p-4 overflow-x-auto text-white/70" style={{ background: "#0a0a0a" }}>
        {children}
      </pre>
    </div>
  );
}

// ── Inline code ───────────────────────────────────────────────────────────────
function C({ children }) {
  return (
    <code className="text-[12px] font-mono px-1.5 py-0.5 rounded text-white/80" style={{ background: "rgba(255,255,255,0.08)" }}>
      {children}
    </code>
  );
}

// ── Section heading ───────────────────────────────────────────────────────────
function H2({ id, children }) {
  return (
    <h2 id={id} className="text-xl font-bold text-white mt-12 mb-3 scroll-mt-24 pb-2 border-b border-white/10">
      {children}
    </h2>
  );
}
function H3({ children }) {
  return <h3 className="text-base font-semibold text-white/85 mt-6 mb-2">{children}</h3>;
}

// ── Callout box ───────────────────────────────────────────────────────────────
function Note({ children }) {
  return (
    <div className="rounded-lg border border-white/10 px-4 py-3 my-4 text-sm text-white/50 leading-relaxed" style={{ background: "rgba(255,255,255,0.03)" }}>
      {children}
    </div>
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const toc = [
  { id: "what",          label: "What is MayhemEngine?" },
  { id: "debugger",      label: "MayhemDebugger" },
  { id: "nettrace",      label: "NetTrace" },
  { id: "install-ue",    label: "Install: Unreal Engine" },
  { id: "install-unity", label: "Install: Unity" },
  { id: "api",           label: "API Reference" },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function MayhemEngineDocs() {
  return (
    <div className="min-h-screen text-white" style={{ background: "#0d0d0d", fontFamily: "var(--font-montserrat)" }}>

      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-white/10 px-6 py-3 flex items-center justify-between" style={{ background: "rgba(13,13,13,0.9)", backdropFilter: "blur(10px)" }}>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-white">MayhemEngine</span>
          <span className="text-[10px] text-white/30 border border-white/15 rounded px-1.5 py-0.5">v1.0.0</span>
        </div>
        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
        >
          <FiGithub size={14} />
          ramansw/MayhemEngine
        </a>
      </header>

      <div className="max-w-4xl mx-auto flex gap-0 px-6 py-10">

        {/* Sidebar TOC */}
        <aside className="hidden lg:block w-52 shrink-0 sticky top-20 self-start pr-8">
          <p className="text-[10px] uppercase tracking-widest text-white/25 font-semibold mb-3">On this page</p>
          <nav className="flex flex-col gap-0.5">
            {toc.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="text-xs text-white/35 hover:text-white/80 transition-colors py-1 pl-3 border-l border-white/10 hover:border-white/30"
              >
                {t.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 text-sm text-white/55 leading-relaxed">

          {/* Title */}
          <div className="mb-10">
            <p className="text-xs text-white/30 mb-2 uppercase tracking-widest">Framework Documentation</p>
            <h1 className="text-3xl font-bold text-white mb-3">MayhemEngine</h1>
            <p className="text-white/50 text-base">
              A game debugging toolset: a decision-chain debugger and a network event tracer for Unreal Engine and Unity.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Open Source", "MIT License", "C++17", "UE 5.3+", "Unity 2020+", "Zero Dependencies"].map(b => (
                <span key={b} className="text-[10px] text-white/35 border border-white/10 rounded px-2 py-0.5">{b}</span>
              ))}
            </div>
            <div className="flex gap-3 mt-5">
              <a href={GITHUB} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white border border-white/15 rounded-lg px-3 py-1.5 transition-colors">
                <FiGithub size={12} /> GitHub <FiExternalLink size={10} />
              </a>
              <a href={RELEASES} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white border border-white/15 rounded-lg px-3 py-1.5 transition-colors">
                Releases <FiExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* ── What is it ── */}
          <H2 id="what">What is MayhemEngine?</H2>
          <p>
            MayhemEngine is an open-source game debugging toolset I built to solve two problems that come up constantly in game development:
          </p>
          <ul className="list-disc pl-5 mt-3 flex flex-col gap-2">
            <li><strong className="text-white/80">Why did this decision happen?</strong> <C>MayhemDebugger</C> records every condition checked before a decision and shows exactly which one failed, with the actual values at that moment.</li>
            <li><strong className="text-white/80">What actually went over the wire?</strong> <C>NetTrace</C> captures every network send and receive as a structured event with byte counts, tagged values, and rolling aggregate stats.</li>
          </ul>
          <p className="mt-3">Both tools work in the same plugin/package for Unreal Engine and Unity. No external dependencies. No heap allocation in hot paths.</p>

          {/* ── MayhemDebugger ── */}
          <H2 id="debugger">MayhemDebugger</H2>
          <p>
            Wrap any decision with <C>DEBUG_CHAIN</C> and tag each condition with <C>DEBUG_CHECK</C>. The live editor panel shows every chain, every step, whether it passed or failed, and the values that were attached. The panel updates every 200ms and only redraws when something actually changed.
          </p>

          <H3>Unreal Engine</H3>
          <Code lang="cpp">{`#include "MayhemDebugger.h"

void AMyCharacter::DoJump()
{
    DEBUG_CHAIN("DoJump");
    if (!DEBUG_CHECK("IsAlive", currentHealth > 0.f, mdbg::V("health", currentHealth))) return;
    if (!DEBUG_CHECK("HasController", GetController() != nullptr)) return;
    Jump();
}

void AMyCharacter::DoAttack()
{
    DEBUG_CHAIN("DoAttack");
    DEBUG_CHECK("TargetVisible", bHasLOS,         mdbg::V("dist", distToTarget));
    DEBUG_CHECK("CooldownDone",  attackTimer <= 0, mdbg::V("timer", attackTimer));
    DEBUG_CHECK("HasAmmo",       ammo > 0,         mdbg::V("ammo", ammo));
    Fire();
}`}</Code>

          <H3>Unity</H3>
          <Code lang="csharp">{`using MayhemDebugger;

void Attack()
{
    using var chain = MDBG.Chain("Attack");
    if (!chain.Check("TargetInRange", dist < attackRange)) return;
    if (!chain.Check("CooldownReady", cooldownTimer <= 0f)) return;
    if (!chain.Check("HasAmmo",       ammo > 0))           return;
    Fire();
}`}</Code>

          <H3>Break on Fail</H3>
          <p>
            Pause execution the instant a specific step fails, without adding a breakpoint manually to every callsite.
          </p>
          <Code lang="cpp">{`// UE: pause when "IsAlive" fails inside the "DoJump" chain
mdbg::SetBreakOnFail("DoJump", "IsAlive", true);`}</Code>
          <Code lang="csharp">{`// Unity: triggers a debug break in Play Mode
MDBG.SetBreakOnFail("Attack", "CooldownReady", true);`}</Code>

          <H3>Attaching values with V()</H3>
          <p>Tag any check with named values and they will appear next to the pass/fail result in the panel.</p>
          <Code lang="cpp">{`DEBUG_CHECK("HealthInRange",
    hp >= 0.f && hp <= maxHp,
    mdbg::V("hp", hp),
    mdbg::V("max", maxHp));
// Accepts: float, int, bool, const char*`}</Code>

          {/* ── NetTrace ── */}
          <H2 id="nettrace">NetTrace</H2>
          <p>
            Records every network send and receive as a structured event into a fixed 512-slot ring buffer. Aggregate byte and event totals are tracked separately in atomics so they are never lost to ring eviction. The editor panel shows the last 64 events and live totals, updated every 200ms.
          </p>
          <Note>NetTrace is thread-safe. You can call it from a background network I/O thread concurrently with the editor panel reading from the main thread.</Note>

          <H3>Unreal Engine</H3>
          <Code lang="cpp">{`#include "MayhemDebuggerNetTrace.h"

// Server: replicating health to all clients
void AMyCharacter::OnHealthUpdated()
{
    if (GetLocalRole() == ROLE_Authority)
    {
        NET_TRACE_SEND("Rep_Health")
            .Bytes(sizeof(float))
            .Value("health", currentHealth)
            .Value("actor", TCHAR_TO_UTF8(*GetNameSafe(this)))
            .Record();
    }
}

// Client: replication received
void AMyCharacter::OnRep_CurrentHealth()
{
    NET_TRACE_RECEIVE("Rep_Health")
        .Bytes(sizeof(float))
        .Value("health", currentHealth)
        .Record();
}`}</Code>

          <H3>Unity</H3>
          <Code lang="csharp">{`using MayhemDebugger.NetTrace;

void SendMovement(Vector3 pos, int bytes)
{
    NTR.RecordSend("PlayerMovement")
       .Bytes(bytes)
       .Value("pos", pos.ToString())
       .Record();
}

void OnMovementReceived(Vector3 pos, int bytes)
{
    NTR.RecordReceive("PlayerMovement")
       .Bytes(bytes)
       .Value("pos", pos.ToString())
       .Record();
}`}</Code>

          {/* ── Install UE ── */}
          <H2 id="install-ue">Install: Unreal Engine</H2>
          <p>Supported: <strong className="text-white/70">UE 5.3 and above.</strong></p>

          <H3>1. Copy the plugin</H3>
          <p>Download <a href={RELEASES} target="_blank" rel="noopener noreferrer" className="text-white/70 underline hover:text-white">MayhemDebugger-UE-v1.0.0.zip</a> from Releases. Extract and copy the <C>MayhemDebugger/</C> folder into your project:</p>
          <Code>{`YourProject/
└── Plugins/
    └── MayhemDebugger/      ← paste here
        ├── MayhemDebugger.uplugin
        └── Source/`}</Code>

          <H3>2. Enable in .uproject</H3>
          <Code lang="json">{`{
  "Plugins": [
    { "Name": "MayhemDebugger", "Enabled": true }
  ]
}`}</Code>

          <H3>3. Add to Build.cs</H3>
          <Code lang="csharp">{`PublicDependencyModuleNames.AddRange(new string[] {
    "Core", "CoreUObject", "Engine", "MayhemDebugger"
});`}</Code>

          <H3>4. Right-click .uproject → Generate Visual Studio Project Files, then build.</H3>
          <p className="mt-2">Open the editor. The panels are under <strong className="text-white/70">Tools → Debug → MayhemDebugger</strong> and <strong className="text-white/70">Tools → Debug → NetTrace</strong>.</p>

          {/* ── Install Unity ── */}
          <H2 id="install-unity">Install: Unity</H2>
          <p>Supported: <strong className="text-white/70">Unity 2020.3 and above.</strong></p>

          <H3>Option A: UPM Git URL (recommended)</H3>
          <p>Open <strong className="text-white/70">Window → Package Manager → + → Add package from git URL</strong> and paste:</p>
          <Code>{`https://github.com/ramansw/MayhemEngine.git?path=/Unity`}</Code>
          <p className="mt-2">To lock to a specific version:</p>
          <Code>{`https://github.com/ramansw/MayhemEngine.git?path=/Unity#v1.0.0`}</Code>

          <H3>Option B: Download zip</H3>
          <p>Download <a href={RELEASES} target="_blank" rel="noopener noreferrer" className="text-white/70 underline hover:text-white">MayhemDebugger-Unity-v1.0.0.zip</a> from Releases and import via <strong className="text-white/70">Assets → Import Package → Custom Package</strong>.</p>
          <Note>After installing, the viewers are at <strong>Window → MayhemDebugger → Debugger</strong> and <strong>Window → MayhemDebugger → NetTrace</strong>.</Note>

          {/* ── API Reference ── */}
          <H2 id="api">API Reference</H2>

          <H3>MayhemDebugger: Unreal Engine</H3>
          <div className="rounded-lg border border-white/10 overflow-hidden mb-6">
            {[
              ["DEBUG_CHAIN(key)", "Opens a new chain for this frame. Call once at the top of a function."],
              ["DEBUG_CHECK(step, cond, ...V())", "Records a named check. Returns the bool result so you can use it in an if."],
              ["mdbg::V(name, value)", "Creates a named value to attach to a check. Accepts float, int, bool, const char*."],
              ["mdbg::SetBreakOnFail(key, step, true)", "Registers a break that fires when the named step fails in the named chain."],
            ].map(([api, desc], i) => (
              <div key={api} className={`flex gap-4 px-4 py-3 ${i > 0 ? "border-t border-white/8" : ""}`}>
                <code className="text-[11px] font-mono text-white/65 shrink-0 w-56">{api}</code>
                <p className="text-xs text-white/35">{desc}</p>
              </div>
            ))}
          </div>

          <H3>MayhemDebugger: Unity</H3>
          <div className="rounded-lg border border-white/10 overflow-hidden mb-6">
            {[
              ["MDBG.Chain(key)", "Opens a chain (IDisposable). Use with the using keyword so it auto-closes."],
              ["chain.Check(step, cond)", "Records a named check. Returns bool."],
              ["MDBG.SetBreakOnFail(key, step)", "Triggers a debug break in Play Mode when the step fails."],
            ].map(([api, desc], i) => (
              <div key={api} className={`flex gap-4 px-4 py-3 ${i > 0 ? "border-t border-white/8" : ""}`}>
                <code className="text-[11px] font-mono text-white/65 shrink-0 w-56">{api}</code>
                <p className="text-xs text-white/35">{desc}</p>
              </div>
            ))}
          </div>

          <H3>NetTrace: Unreal Engine</H3>
          <div className="rounded-lg border border-white/10 overflow-hidden mb-6">
            {[
              ["NET_TRACE_SEND(name)", "Starts a send event builder."],
              ["NET_TRACE_RECEIVE(name)", "Starts a receive event builder."],
              [".Bytes(n)", "Attaches a byte count to the event."],
              [".Value(name, val)", "Attaches a named value. Accepts float, int, bool, const char*."],
              [".Record()", "Commits the event to the ring buffer. Must be the last call."],
            ].map(([api, desc], i) => (
              <div key={api} className={`flex gap-4 px-4 py-3 ${i > 0 ? "border-t border-white/8" : ""}`}>
                <code className="text-[11px] font-mono text-white/65 shrink-0 w-56">{api}</code>
                <p className="text-xs text-white/35">{desc}</p>
              </div>
            ))}
          </div>

          <H3>NetTrace: Unity</H3>
          <div className="rounded-lg border border-white/10 overflow-hidden mb-10">
            {[
              ["NTR.RecordSend(name)", "Starts a send event builder."],
              ["NTR.RecordReceive(name)", "Starts a receive event builder."],
              [".Bytes(n)", "Attaches a byte count."],
              [".Value(name, formatted)", "Attaches a named value as an already-formatted string."],
              [".Record()", "Commits the event."],
            ].map(([api, desc], i) => (
              <div key={api} className={`flex gap-4 px-4 py-3 ${i > 0 ? "border-t border-white/8" : ""}`}>
                <code className="text-[11px] font-mono text-white/65 shrink-0 w-56">{api}</code>
                <p className="text-xs text-white/35">{desc}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex items-center justify-between">
            <p className="text-xs text-white/25">MIT License. Free to use, modify, and distribute.</p>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors">
              <FiGithub size={13} /> View on GitHub
            </a>
          </div>

        </main>
      </div>
    </div>
  );
}
