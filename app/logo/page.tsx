import type { Metadata } from "next";
/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Brand Reference — Orangutany",
  robots: { index: false, follow: false },
};

/* ─── Section IDs for nav ─── */
const SECTIONS = [
  { id: "logo", label: "Logo" },
  { id: "sub-brands", label: "Sub-Brands" },
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "backgrounds", label: "Backgrounds" },
  { id: "mockups", label: "Mockups" },
  { id: "app-icon", label: "App Icon" },
];

/* ─── Color Palette ─── */
const COLORS = [
  { name: "Forest Black", hex: "#0e1a0e", desc: "Primary background", text: "#f0e4cc" },
  { name: "Warm Cream", hex: "#f0e4cc", desc: "Primary text", text: "#0e1a0e" },
  { name: "Copper", hex: "#c8956c", desc: "Accent, links, CTAs", text: "#0e1a0e" },
  { name: "Tan", hex: "#c4b49a", desc: "Secondary text", text: "#0e1a0e" },
  { name: "Deep Forest", hex: "#1a2a1a", desc: "Card / muted bg", text: "#f0e4cc" },
  { name: "Border Green", hex: "#648c64", desc: "Borders (at 15% opacity)", text: "#0e1a0e" },
  { name: "Card BG", hex: "#122012", desc: "Card surfaces (95% opacity)", text: "#f0e4cc" },
  { name: "True Black", hex: "#0a0a0a", desc: "Page-level background", text: "#f0e4cc" },
];

/* ─── 30 Sub-Brand Styles ─── */
const STYLES: { num: number; tag: string; render: () => React.ReactNode }[] = [
  {
    num: 1, tag: "Pill Tabs", render: () => (
      <div className="flex flex-wrap justify-center gap-2 mt-3.5">
        <span className="rounded-full bg-[#c8956c] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-[#0e1a0e]">Mushroom ID</span>
        <span className="rounded-full border border-[rgba(200,149,108,0.3)] px-3.5 py-1 text-[10px] font-medium uppercase tracking-[1.5px] text-[#c4b49a]">Guide</span>
        <span className="rounded-full border border-[rgba(200,149,108,0.3)] px-3.5 py-1 text-[10px] font-medium uppercase tracking-[1.5px] text-[#c4b49a]">Proteins</span>
      </div>
    ),
  },
  {
    num: 2, tag: "Underline Tabs", render: () => (
      <div className="flex gap-6 mt-4">
        <span className="border-b-2 border-[#c8956c] pb-1 text-[11px] font-semibold uppercase tracking-[2px] text-[#c8956c]">Mushroom ID</span>
        <span className="pb-1 text-[11px] uppercase tracking-[2px] text-[#c4b49a]">Guide</span>
        <span className="pb-1 text-[11px] uppercase tracking-[2px] text-[#c4b49a]">Proteins</span>
      </div>
    ),
  },
  {
    num: 3, tag: "Dot Separator", render: () => (
      <div className="mt-3 text-[11px] uppercase tracking-[2px] text-[#c4b49a]">
        <span className="font-bold text-[#c8956c]">Mushroom ID</span>
        <span className="mx-2.5 text-[#c8956c]">&bull;</span>
        <span>Guide</span>
        <span className="mx-2.5 text-[#c8956c]">&bull;</span>
        <span>Proteins</span>
      </div>
    ),
  },
  {
    num: 4, tag: "Slash System", render: () => (
      <div className="mt-3 font-[family-name:var(--font-sora)] text-xs text-[#c4b49a]">
        <span className="font-semibold text-[#c8956c]">ID</span>
        <span className="mx-2 text-[#3a5a3a]">/</span>
        <span>Guide</span>
        <span className="mx-2 text-[#3a5a3a]">/</span>
        <span>Proteins</span>
      </div>
    ),
  },
  {
    num: 5, tag: "Boxed Label", render: () => (
      <div className="mt-3 inline-block rounded border-[1.5px] border-[#c8956c] px-5 py-1">
        <span className="text-[11px] font-semibold uppercase tracking-[4px] text-[#c8956c]">Mushroom ID</span>
      </div>
    ),
  },
  {
    num: 6, tag: "Vertical Stack", render: () => (
      <>
        <div className="mx-auto my-3 h-px w-9 bg-[#c8956c]" />
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-semibold uppercase tracking-[3px] text-[#c8956c]">Mushroom ID</span>
          <span className="text-[10px] uppercase tracking-[3px] text-[#c4b49a]">Guide</span>
          <span className="text-[10px] uppercase tracking-[3px] text-[#c4b49a]">Proteins</span>
        </div>
      </>
    ),
  },
  {
    num: 7, tag: "Circle Icons", render: () => (
      <div className="flex gap-5 mt-4">
        {[{ emoji: "🔍", label: "ID", active: true }, { emoji: "📖", label: "Guide", active: false }, { emoji: "💊", label: "Proteins", active: false }].map((i) => (
          <div key={i.label} className="text-center">
            <div className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] ${i.active ? "border-[#c8956c]" : "border-[rgba(200,149,108,0.3)]"}`}>
              <span className="text-sm">{i.emoji}</span>
            </div>
            <span className={`mt-1 block text-[9px] uppercase tracking-[1px] ${i.active ? "text-[#c8956c]" : "text-[#c4b49a]"}`}>{i.label}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: 8, tag: "Pipe Separator", render: () => (
      <div className="flex items-center gap-3 mt-3">
        <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#c8956c]">Mushroom ID</span>
        <span className="text-base text-[#3a5a3a]">|</span>
        <span className="text-[11px] uppercase tracking-[2px] text-[#c4b49a]">Guide</span>
        <span className="text-base text-[#3a5a3a]">|</span>
        <span className="text-[11px] uppercase tracking-[2px] text-[#c4b49a]">Proteins</span>
      </div>
    ),
  },
  {
    num: 9, tag: "Badge Chip", render: () => (
      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[rgba(200,149,108,0.25)] bg-[rgba(200,149,108,0.1)] px-4 py-1">
        <div className="h-1.5 w-1.5 rounded-full bg-[#c8956c]" />
        <span className="text-[11px] font-medium uppercase tracking-[2px] text-[#c8956c]">Mushroom ID</span>
      </div>
    ),
  },
  {
    num: 10, tag: "Grid Cards", render: () => (
      <div className="mt-3.5 grid w-full max-w-[280px] grid-cols-3 gap-2">
        {[{ label: "Mushroom ID", active: true }, { label: "Guide", active: false }, { label: "Proteins", active: false }].map((c) => (
          <div key={c.label} className={`rounded-lg border p-2.5 text-center ${c.active ? "border-[#c8956c]" : "border-[rgba(100,140,100,0.15)]"}`}>
            <div className={`text-[9px] font-bold uppercase tracking-[1px] ${c.active ? "text-[#c8956c]" : "text-[#c4b49a]"}`}>{c.label}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: 11, tag: "Serif Match", render: () => (
      <div className="mt-1 text-xl font-light tracking-[2px] text-[#c8956c]" style={{ fontFamily: "Georgia, serif" }}>Mushroom ID</div>
    ),
  },
  {
    num: 12, tag: "Tagline", render: () => (
      <div className="mt-2 text-sm italic text-[#c4b49a]" style={{ fontFamily: "Georgia, serif" }}>identify &middot; learn &middot; nourish</div>
    ),
  },
  {
    num: 13, tag: "Rounded Tabs", render: () => (
      <div className="mt-3.5 flex gap-1.5 rounded-[10px] bg-[rgba(26,42,26,0.8)] p-1">
        <span className="rounded-[7px] bg-[#c8956c] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[1px] text-[#0e1a0e]">ID</span>
        <span className="px-3 py-1.5 text-[10px] font-medium uppercase tracking-[1px] text-[#c4b49a]">Guide</span>
        <span className="px-3 py-1.5 text-[10px] font-medium uppercase tracking-[1px] text-[#c4b49a]">Proteins</span>
      </div>
    ),
  },
  {
    num: 14, tag: "Left Aligned", render: () => (
      <div className="flex gap-4 mt-2.5 self-start">
        <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#c8956c]">Mushroom ID</span>
        <span className="text-[11px] uppercase tracking-[2px] text-[#c4b49a]">Guide</span>
        <span className="text-[11px] uppercase tracking-[2px] text-[#c4b49a]">Proteins</span>
      </div>
    ),
  },
  {
    num: 15, tag: "Diamond Sep", render: () => (
      <div className="mt-3 text-[11px] uppercase tracking-[2px] text-[#c4b49a]">
        <span className="font-semibold text-[#c8956c]">Mushroom ID</span>
        <span className="mx-2 text-[6px] text-[#c8956c]">◆</span>
        <span>Guide</span>
        <span className="mx-2 text-[6px] text-[#c8956c]">◆</span>
        <span>Proteins</span>
      </div>
    ),
  },
  {
    num: 16, tag: "Two Row", render: () => (
      <>
        <div className="mx-auto my-2.5 h-px w-10 bg-[#c8956c]" />
        <div className="text-xs font-semibold uppercase tracking-[3px] text-[#c8956c]">Mushroom ID</div>
        <div className="mt-1.5 flex gap-4 text-[10px] text-[#c4b49a]">
          <span>Guide</span><span>Proteins</span><span>Store</span>
        </div>
      </>
    ),
  },
  {
    num: 17, tag: "Outlined Pills", render: () => (
      <div className="flex flex-wrap justify-center gap-2 mt-3.5">
        <span className="rounded-full border-[1.5px] border-[#c8956c] px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[1.5px] text-[#c8956c]">Mushroom ID</span>
        <span className="rounded-full border-[1.5px] border-[rgba(200,149,108,0.25)] px-3.5 py-1 text-[10px] font-medium uppercase tracking-[1.5px] text-[#c4b49a]">Guide</span>
        <span className="rounded-full border-[1.5px] border-[rgba(200,149,108,0.25)] px-3.5 py-1 text-[10px] font-medium uppercase tracking-[1.5px] text-[#c4b49a]">Proteins</span>
      </div>
    ),
  },
  {
    num: 18, tag: "Arrow Active", render: () => (
      <div className="flex gap-5 mt-3.5">
        <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#c8956c]">→ Mushroom ID</span>
        <span className="text-[11px] uppercase tracking-[2px] text-[#c4b49a]">Guide</span>
        <span className="text-[11px] uppercase tracking-[2px] text-[#c4b49a]">Proteins</span>
      </div>
    ),
  },
  {
    num: 19, tag: "Border Cards", render: () => (
      <div className="flex gap-3 mt-4">
        {[{ label: "Mushroom ID", active: true }, { label: "Guide", active: false }, { label: "Proteins", active: false }].map((c) => (
          <div key={c.label} className={`border-b-2 px-3.5 py-2 text-center ${c.active ? "border-[#c8956c]" : "border-transparent"}`}>
            <div className={`text-[10px] font-bold uppercase tracking-[1.5px] ${c.active ? "text-[#c8956c]" : "text-[#c4b49a]"}`}>{c.label}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: 20, tag: "Line + Word", render: () => (
      <div className="flex items-center gap-2.5 mt-2.5">
        <div className="h-px w-6 bg-[#c8956c]" />
        <span className="text-[11px] uppercase tracking-[3px] text-[#c8956c]">Mushroom ID</span>
        <div className="h-px w-6 bg-[#c8956c]" />
      </div>
    ),
  },
  {
    num: 21, tag: "Square Icons", render: () => (
      <div className="flex gap-2.5 mt-4">
        {[{ emoji: "🍄", label: "ID", active: true }, { emoji: "📚", label: "Guide", active: false }, { emoji: "💪", label: "Proteins", active: false }].map((i) => (
          <div key={i.label} className={`flex h-[72px] w-[72px] flex-col items-center justify-center gap-1 rounded-xl border-[1.5px] ${i.active ? "border-[#c8956c]" : "border-[rgba(100,140,100,0.15)]"}`}>
            <span className="text-lg">{i.emoji}</span>
            <span className={`text-[8px] font-semibold uppercase tracking-[1px] ${i.active ? "text-[#c8956c]" : "text-[#c4b49a]"}`}>{i.label}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: 22, tag: "Side By Side", render: () => (
      <div className="flex items-center gap-5 mt-0">
        <div className="h-10 w-px bg-[rgba(200,149,108,0.3)]" />
        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#c8956c]">Mushroom ID</span>
          <span className="text-[9px] uppercase tracking-[1.5px] text-[#c4b49a]">Guide</span>
          <span className="text-[9px] uppercase tracking-[1.5px] text-[#c4b49a]">Proteins</span>
        </div>
      </div>
    ),
  },
  {
    num: 23, tag: "Gradient Pill", render: () => (
      <div className="mt-3.5 inline-flex items-center gap-2 rounded-3xl bg-gradient-to-r from-[rgba(200,149,108,0.15)] to-[rgba(200,149,108,0.05)] px-5 py-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#c8956c]">Mushroom ID</span>
        <span className="text-[rgba(200,149,108,0.3)]">·</span>
        <span className="text-[11px] uppercase tracking-[2px] text-[#c4b49a]">Guide</span>
        <span className="text-[rgba(200,149,108,0.3)]">·</span>
        <span className="text-[11px] uppercase tracking-[2px] text-[#c4b49a]">Proteins</span>
      </div>
    ),
  },
  {
    num: 24, tag: "Stacked Serif", render: () => (
      <>
        <div className="mt-1.5 text-lg tracking-[3px] text-[#c8956c]" style={{ fontFamily: "Georgia, serif" }}>Mushroom ID</div>
        <div className="mt-1.5 flex gap-4">
          {["Guide", "Proteins", "Store"].map((t) => (
            <span key={t} className="text-[13px] tracking-[2px] text-[#c4b49a]" style={{ fontFamily: "Georgia, serif" }}>{t}</span>
          ))}
        </div>
      </>
    ),
  },
  {
    num: 25, tag: "Full Width Bar", render: () => (
      <div className="mt-5 flex w-full justify-center border-t border-[rgba(200,149,108,0.2)]">
        <span className="-mt-px border-t-2 border-[#c8956c] px-4 py-3 text-[10px] font-semibold uppercase tracking-[2px] text-[#c8956c]">Mushroom ID</span>
        <span className="px-4 py-3 text-[10px] uppercase tracking-[2px] text-[#c4b49a]">Guide</span>
        <span className="px-4 py-3 text-[10px] uppercase tracking-[2px] text-[#c4b49a]">Proteins</span>
        <span className="px-4 py-3 text-[10px] uppercase tracking-[2px] text-[#c4b49a]">Store</span>
      </div>
    ),
  },
  {
    num: 26, tag: "Circular Badge", render: () => (
      <div className="flex gap-3.5 mt-4">
        {[{ label: "ID", active: true }, { label: "Guide", active: false }, { label: "Proteins", active: false }].map((c) => (
          <div key={c.label} className={`flex h-14 w-14 items-center justify-center rounded-full ${c.active ? "border-[1.5px] border-[#c8956c] bg-[rgba(200,149,108,0.1)]" : "border border-[rgba(100,140,100,0.2)] bg-[rgba(26,42,26,0.5)]"}`}>
            <span className={`text-[9px] font-semibold uppercase tracking-[1px] ${c.active ? "text-[#c8956c]" : "text-[#c4b49a]"}`}>{c.label}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: 27, tag: "Breadcrumb", render: () => (
      <div className="mt-3 font-[family-name:var(--font-sora)] text-[11px] text-[#c4b49a]">
        <span className="font-semibold text-[#c8956c]">Orangutany</span>
        <span className="mx-1.5 text-[#3a5a3a]">›</span>
        <span className="text-[#c8956c]">Mushroom ID</span>
      </div>
    ),
  },
  {
    num: 28, tag: "Icon + Text Row", render: () => (
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {[{ emoji: "🔬", label: "ID", active: true }, { emoji: "📖", label: "Guide", active: false }, { emoji: "⚡", label: "Proteins", active: false }].map((i) => (
          <div key={i.label} className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 ${i.active ? "border border-[rgba(200,149,108,0.2)] bg-[rgba(200,149,108,0.08)]" : "border border-[rgba(100,140,100,0.12)]"}`}>
            <span className="text-xs">{i.emoji}</span>
            <span className={`text-[10px] font-semibold uppercase tracking-[1px] ${i.active ? "text-[#c8956c]" : "text-[#c4b49a]"}`}>{i.label}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: 29, tag: "Dash Separator", render: () => (
      <div className="mt-3 text-[11px] uppercase tracking-[2px] text-[#c4b49a]">
        <span className="font-semibold text-[#c8956c]">Mushroom ID</span>
        <span className="mx-2 text-[#3a5a3a]">&mdash;</span>
        <span>Guide</span>
        <span className="mx-2 text-[#3a5a3a]">&mdash;</span>
        <span>Proteins</span>
      </div>
    ),
  },
  {
    num: 30, tag: "Descriptive Cards", render: () => (
      <div className="mt-3.5 grid w-full max-w-[300px] grid-cols-3 gap-2">
        {[{ label: "ID", desc: "Identify species", active: true }, { label: "Guide", desc: "Learn foraging", active: false }, { label: "Proteins", desc: "Capsules & more", active: false }].map((c) => (
          <div key={c.label} className={`rounded-[10px] border p-2.5 text-center ${c.active ? "border-[#c8956c]" : "border-[rgba(100,140,100,0.15)]"}`}>
            <div className={`text-[10px] font-bold uppercase tracking-[1px] ${c.active ? "text-[#c8956c]" : "text-[#c4b49a]"}`}>{c.label}</div>
            <div className="mt-0.5 text-[8px] text-[#c4b49a]">{c.desc}</div>
          </div>
        ))}
      </div>
    ),
  },
];

export default function LogoPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0e4cc]">

      {/* ─── Sticky Section Nav ─── */}
      <nav className="sticky top-0 z-50 border-b border-[rgba(100,140,100,0.1)] bg-[#0a0a0a]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1200px] items-center gap-1 overflow-x-auto px-5 py-2.5 scrollbar-none">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 rounded-full border border-[rgba(200,149,108,0.2)] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[1.5px] text-[#c4b49a] transition-colors hover:border-[#c8956c] hover:text-[#c8956c]"
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ─── Header ─── */}
      <div className="border-b border-[rgba(100,140,100,0.1)] bg-[#0e1a0e] px-5 py-12 text-center">
        <h1 className="font-[family-name:var(--font-sora)] text-2xl text-[#c8956c]">Orangutany Brand Reference</h1>
        <p className="mt-1 text-xs text-[#c4b49a]">Internal guide. Logo, colors, typography, mockups, and sub-brand styles.</p>
      </div>

      {/* ═══════════════════════════════════════════
          SECTION: Primary Logo
          ═══════════════════════════════════════════ */}
      <section id="logo" className="scroll-mt-[52px] border-b border-[rgba(100,140,100,0.08)] px-5 py-16">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="font-[family-name:var(--font-sora)] text-lg uppercase tracking-[4px] text-[#c8956c]">Primary Logo</h2>
          <p className="mt-2 text-xs text-[#c4b49a]">The Orangutany wordmark. Always use this file. Do not recreate, stretch, or recolor.</p>
          <div className="mt-10 flex flex-col items-center gap-8">
            <div className="rounded-2xl border border-[rgba(100,140,100,0.15)] bg-[#0e1a0e] p-12">
              <img src="/images/logo.png" alt="Orangutany logo" className="h-auto w-[320px]" />
            </div>
            <div className="flex gap-3">
              <span className="rounded border border-[rgba(200,149,108,0.2)] px-3 py-1 text-[10px] text-[#c4b49a]">PNG</span>
              <span className="rounded border border-[rgba(200,149,108,0.2)] px-3 py-1 text-[10px] text-[#c4b49a]">Min width: 120px</span>
              <span className="rounded border border-[rgba(200,149,108,0.2)] px-3 py-1 text-[10px] text-[#c4b49a]">Clear space: 1x logo height</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: 30 Sub-Brand Styles
          ═══════════════════════════════════════════ */}
      <section id="sub-brands" className="scroll-mt-[52px] border-b border-[rgba(100,140,100,0.08)] px-5 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center font-[family-name:var(--font-sora)] text-lg uppercase tracking-[4px] text-[#c8956c]">30 Sub-Brand Styles</h2>
          <p className="mt-2 text-center text-xs text-[#c4b49a]">Same logo. 30 ways to present Mushroom ID / Guide / Proteins underneath.</p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STYLES.map(({ num, tag, render }) => (
              <div key={num} className="group relative overflow-hidden rounded-[14px] border border-[#222] transition-colors hover:border-[#c8956c]">
                <span className="absolute left-3 top-2.5 z-10 rounded bg-[rgba(14,26,14,0.85)] px-2 py-0.5 text-[10px] font-bold text-[#c8956c]">#{num}</span>
                <span className="absolute right-3 top-2.5 z-10 text-[9px] uppercase tracking-[1px] text-[#555]">{tag}</span>
                <div className="flex min-h-[220px] flex-col items-center justify-center bg-[#0e1a0e] px-6 py-9">
                  <img src="/images/logo.png" alt="Orangutany logo" className="h-auto w-[200px]" />
                  {render()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: Color Palette
          ═══════════════════════════════════════════ */}
      <section id="colors" className="scroll-mt-[52px] border-b border-[rgba(100,140,100,0.08)] px-5 py-16">
        <div className="mx-auto max-w-[900px]">
          <h2 className="text-center font-[family-name:var(--font-sora)] text-lg uppercase tracking-[4px] text-[#c8956c]">Color Palette</h2>
          <p className="mt-2 text-center text-xs text-[#c4b49a]">Dark forest theme. Copper accents on deep green backgrounds.</p>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {COLORS.map((c) => (
              <div key={c.hex} className="overflow-hidden rounded-xl border border-[rgba(100,140,100,0.15)]">
                <div className="flex h-24 items-end p-3" style={{ backgroundColor: c.hex }}>
                  <span className="text-[10px] font-bold uppercase tracking-[1px]" style={{ color: c.text }}>{c.name}</span>
                </div>
                <div className="bg-[#0e1a0e] px-3 py-2.5">
                  <div className="font-mono text-xs text-[#c8956c]">{c.hex}</div>
                  <div className="mt-0.5 text-[10px] text-[#c4b49a]">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient & opacity examples */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-[rgba(100,140,100,0.15)]">
              <div className="flex h-16 items-center justify-center bg-gradient-to-r from-[#0e1a0e] to-[#1a2a1a]">
                <span className="text-xs text-[#c4b49a]">Background Gradient</span>
              </div>
              <div className="bg-[#0e1a0e] px-3 py-2 font-mono text-[10px] text-[#c8956c]">#0e1a0e → #1a2a1a</div>
            </div>
            <div className="overflow-hidden rounded-xl border border-[rgba(100,140,100,0.15)]">
              <div className="flex h-16 items-center justify-center bg-gradient-to-r from-[rgba(200,149,108,0.15)] to-[rgba(200,149,108,0.05)]" style={{ backgroundColor: "#0e1a0e" }}>
                <span className="text-xs text-[#c8956c]">Copper Glow</span>
              </div>
              <div className="bg-[#0e1a0e] px-3 py-2 font-mono text-[10px] text-[#c8956c]">rgba(200,149,108, 0.15 → 0.05)</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: Typography
          ═══════════════════════════════════════════ */}
      <section id="typography" className="scroll-mt-[52px] border-b border-[rgba(100,140,100,0.08)] px-5 py-16">
        <div className="mx-auto max-w-[900px]">
          <h2 className="text-center font-[family-name:var(--font-sora)] text-lg uppercase tracking-[4px] text-[#c8956c]">Typography</h2>
          <p className="mt-2 text-center text-xs text-[#c4b49a]">Two typefaces. Sora for headings, Manrope for body text.</p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Sora */}
            <div className="rounded-xl border border-[rgba(100,140,100,0.15)] bg-[#0e1a0e] p-6">
              <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#c8956c]">Headings</div>
              <div className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-bold text-[#f0e4cc]">Sora</div>
              <div className="mt-1 text-xs text-[#c4b49a]">Google Fonts, 300-700 weight</div>
              <div className="mt-5 space-y-2 border-t border-[rgba(100,140,100,0.1)] pt-4">
                <div className="font-[family-name:var(--font-sora)] text-2xl font-bold text-[#f0e4cc]">H1 Bold 24px</div>
                <div className="font-[family-name:var(--font-sora)] text-xl font-semibold text-[#f0e4cc]">H2 Semibold 20px</div>
                <div className="font-[family-name:var(--font-sora)] text-lg font-medium text-[#f0e4cc]">H3 Medium 18px</div>
                <div className="font-[family-name:var(--font-sora)] text-base font-medium text-[#c4b49a]">H4 Medium 16px</div>
              </div>
            </div>

            {/* Manrope */}
            <div className="rounded-xl border border-[rgba(100,140,100,0.15)] bg-[#0e1a0e] p-6">
              <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#c8956c]">Body</div>
              <div className="mt-4 text-3xl font-bold text-[#f0e4cc]">Manrope</div>
              <div className="mt-1 text-xs text-[#c4b49a]">Google Fonts, 300-800 weight</div>
              <div className="mt-5 space-y-2 border-t border-[rgba(100,140,100,0.1)] pt-4">
                <div className="text-base text-[#f0e4cc]">Body Regular 16px</div>
                <div className="text-sm text-[#c4b49a]">Body Small 14px</div>
                <div className="text-xs text-[#c4b49a]">Caption 12px</div>
                <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#c8956c]">Label 10px Bold</div>
              </div>
            </div>
          </div>

          {/* Type scale specimen */}
          <div className="mt-8 rounded-xl border border-[rgba(100,140,100,0.15)] bg-[#0e1a0e] p-6">
            <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#c8956c]">Sample</div>
            <div className="mt-4 font-[family-name:var(--font-sora)] text-2xl font-bold text-[#f0e4cc]">Identify Wild Mushrooms</div>
            <p className="mt-3 max-w-[540px] text-sm leading-relaxed text-[#c4b49a]">
              Upload a photo and get instant species identification powered by AI. Know what you found before you cook it, with confidence scores, look-alike warnings, and edibility ratings.
            </p>
            <div className="mt-4 inline-block rounded-full bg-[#c8956c] px-5 py-2 text-xs font-bold text-[#0e1a0e]">Identify Now</div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: Logo on Backgrounds
          ═══════════════════════════════════════════ */}
      <section id="backgrounds" className="scroll-mt-[52px] border-b border-[rgba(100,140,100,0.08)] px-5 py-16">
        <div className="mx-auto max-w-[900px]">
          <h2 className="text-center font-[family-name:var(--font-sora)] text-lg uppercase tracking-[4px] text-[#c8956c]">Logo on Backgrounds</h2>
          <p className="mt-2 text-center text-xs text-[#c4b49a]">How the logo appears on different surface colors.</p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Dark forest (primary) */}
            <div className="overflow-hidden rounded-xl border border-[rgba(100,140,100,0.15)]">
              <div className="flex h-40 items-center justify-center bg-[#0e1a0e]">
                <img src="/images/logo.png" alt="Logo on dark" className="h-auto w-[200px]" />
              </div>
              <div className="bg-[#0e1a0e] border-t border-[rgba(100,140,100,0.1)] px-4 py-2.5">
                <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#c8956c]">Dark Forest</span>
                <span className="ml-2 font-mono text-[10px] text-[#c4b49a]">#0e1a0e</span>
                <span className="ml-2 rounded bg-[rgba(200,149,108,0.15)] px-1.5 py-0.5 text-[9px] font-semibold text-[#c8956c]">PRIMARY</span>
              </div>
            </div>

            {/* True black */}
            <div className="overflow-hidden rounded-xl border border-[rgba(100,140,100,0.15)]">
              <div className="flex h-40 items-center justify-center bg-[#000000]">
                <img src="/images/logo.png" alt="Logo on black" className="h-auto w-[200px]" />
              </div>
              <div className="bg-[#0e1a0e] border-t border-[rgba(100,140,100,0.1)] px-4 py-2.5">
                <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#c8956c]">True Black</span>
                <span className="ml-2 font-mono text-[10px] text-[#c4b49a]">#000000</span>
              </div>
            </div>

            {/* White */}
            <div className="overflow-hidden rounded-xl border border-[rgba(100,140,100,0.15)]">
              <div className="flex h-40 items-center justify-center bg-[#ffffff]">
                <img src="/images/logo.png" alt="Logo on white" className="h-auto w-[200px]" />
              </div>
              <div className="bg-[#0e1a0e] border-t border-[rgba(100,140,100,0.1)] px-4 py-2.5">
                <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#c8956c]">White</span>
                <span className="ml-2 font-mono text-[10px] text-[#c4b49a]">#ffffff</span>
              </div>
            </div>

            {/* Transparent (checkerboard) */}
            <div className="overflow-hidden rounded-xl border border-[rgba(100,140,100,0.15)]">
              <div
                className="flex h-40 items-center justify-center"
                style={{
                  backgroundImage: "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",
                  backgroundSize: "16px 16px",
                  backgroundPosition: "0 0, 0 8px, 8px -8px, -8px 0px",
                  backgroundColor: "#fff",
                }}
              >
                <img src="/images/logo.png" alt="Logo on transparent" className="h-auto w-[200px]" />
              </div>
              <div className="bg-[#0e1a0e] border-t border-[rgba(100,140,100,0.1)] px-4 py-2.5">
                <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#c8956c]">Transparent</span>
                <span className="ml-2 text-[10px] text-[#c4b49a]">PNG with alpha</span>
              </div>
            </div>

            {/* Copper */}
            <div className="overflow-hidden rounded-xl border border-[rgba(100,140,100,0.15)]">
              <div className="flex h-40 items-center justify-center bg-[#c8956c]">
                <img src="/images/logo.png" alt="Logo on copper" className="h-auto w-[200px]" />
              </div>
              <div className="bg-[#0e1a0e] border-t border-[rgba(100,140,100,0.1)] px-4 py-2.5">
                <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#c8956c]">Copper</span>
                <span className="ml-2 font-mono text-[10px] text-[#c4b49a]">#c8956c</span>
              </div>
            </div>

            {/* Photo background */}
            <div className="overflow-hidden rounded-xl border border-[rgba(100,140,100,0.15)]">
              <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-[#2d4a2d] via-[#1a3a1a] to-[#0e1a0e]">
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]" />
                <img src="/images/logo.png" alt="Logo on photo" className="relative z-10 h-auto w-[200px]" />
              </div>
              <div className="bg-[#0e1a0e] border-t border-[rgba(100,140,100,0.1)] px-4 py-2.5">
                <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#c8956c]">Photo / Gradient</span>
                <span className="ml-2 text-[10px] text-[#c4b49a]">Use 40% black overlay</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: Phone & Browser Mockups
          ═══════════════════════════════════════════ */}
      <section id="mockups" className="scroll-mt-[52px] border-b border-[rgba(100,140,100,0.08)] px-5 py-16">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="text-center font-[family-name:var(--font-sora)] text-lg uppercase tracking-[4px] text-[#c8956c]">Phone &amp; Browser Mockups</h2>
          <p className="mt-2 text-center text-xs text-[#c4b49a]">How the brand appears in real contexts.</p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Phone mockup */}
            <div className="flex flex-col items-center">
              <div className="relative w-[260px] rounded-[36px] border-[3px] border-[#333] bg-[#0e1a0e] p-3 shadow-2xl">
                {/* Notch */}
                <div className="mx-auto mb-3 h-5 w-24 rounded-full bg-[#1a1a1a]" />
                {/* Screen */}
                <div className="overflow-hidden rounded-[24px] bg-[#0e1a0e]">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-4 py-1.5">
                    <span className="text-[9px] font-semibold text-[#c4b49a]">9:41</span>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-3 rounded-sm bg-[#c4b49a]" />
                      <div className="h-1.5 w-1.5 rounded-full bg-[#c4b49a]" />
                    </div>
                  </div>
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-[rgba(100,140,100,0.1)] px-4 py-2.5">
                    <img src="/images/logo.png" alt="Logo" className="h-auto w-[100px]" />
                    <div className="flex gap-2">
                      <div className="h-5 w-5 rounded-full bg-[rgba(200,149,108,0.15)]" />
                    </div>
                  </div>
                  {/* Hero area */}
                  <div className="px-4 py-6 text-center">
                    <div className="font-[family-name:var(--font-sora)] text-sm font-bold text-[#f0e4cc]">Identify Mushrooms</div>
                    <div className="mt-1 text-[10px] text-[#c4b49a]">Upload a photo to get started</div>
                    <div className="mx-auto mt-4 grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex h-16 items-center justify-center rounded-lg border border-dashed border-[rgba(200,149,108,0.25)] bg-[rgba(200,149,108,0.05)]">
                          <span className="text-lg text-[rgba(200,149,108,0.3)]">+</span>
                        </div>
                      ))}
                    </div>
                    <div className="mx-auto mt-4 rounded-full bg-[#c8956c] px-6 py-2 text-[10px] font-bold text-[#0e1a0e]">Analyze</div>
                  </div>
                </div>
                {/* Home indicator */}
                <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-[#333]" />
              </div>
              <span className="mt-4 text-[10px] font-bold uppercase tracking-[2px] text-[#c4b49a]">iPhone 15</span>
            </div>

            {/* Browser mockup */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[480px] overflow-hidden rounded-xl border border-[#333] bg-[#1a1a1a] shadow-2xl">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 border-b border-[#222] px-3 py-2">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 rounded bg-[#0e1a0e] px-3 py-1 text-center">
                    <span className="text-[9px] text-[#c4b49a]">orangutany.com</span>
                  </div>
                </div>
                {/* Page content */}
                <div className="bg-[#0e1a0e]">
                  {/* Nav */}
                  <div className="flex items-center justify-between border-b border-[rgba(100,140,100,0.1)] px-5 py-3">
                    <img src="/images/logo.png" alt="Logo" className="h-auto w-[120px]" />
                    <div className="flex gap-4">
                      {["Species", "Articles", "Guides"].map((t) => (
                        <span key={t} className="text-[10px] text-[#c4b49a]">{t}</span>
                      ))}
                      <span className="rounded-full bg-[#c8956c] px-3 py-0.5 text-[9px] font-bold text-[#0e1a0e]">Sign In</span>
                    </div>
                  </div>
                  {/* Hero */}
                  <div className="px-5 py-8">
                    <div className="font-[family-name:var(--font-sora)] text-lg font-bold text-[#f0e4cc]">Identify Any Mushroom</div>
                    <div className="mt-1 text-xs text-[#c4b49a]">AI-powered species identification from a single photo</div>
                    <div className="mt-4 flex gap-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex h-12 w-12 items-center justify-center rounded-lg border border-dashed border-[rgba(200,149,108,0.25)] bg-[rgba(200,149,108,0.05)]">
                          <span className="text-sm text-[rgba(200,149,108,0.3)]">+</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 inline-block rounded-full bg-[#c8956c] px-5 py-1.5 text-[10px] font-bold text-[#0e1a0e]">Analyze</div>
                  </div>
                </div>
              </div>
              <span className="mt-4 text-[10px] font-bold uppercase tracking-[2px] text-[#c4b49a]">Desktop Browser</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: App Icon
          ═══════════════════════════════════════════ */}
      <section id="app-icon" className="scroll-mt-[52px] px-5 py-16">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-center font-[family-name:var(--font-sora)] text-lg uppercase tracking-[4px] text-[#c8956c]">App Icon</h2>
          <p className="mt-2 text-center text-xs text-[#c4b49a]">iOS and Android home screen icon. Forest background with copper mushroom mark.</p>

          {/* 3 Photo Options */}
          <div className="mt-10">
            <div className="text-center text-[10px] font-bold uppercase tracking-[2px] text-[#c4b49a] mb-6">App Icon Photo Options</div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { src: "/images/species/amanita-caesarea/cap-detail.jpg", label: "Option A", desc: "Caesar's Mushroom, emerging from volva" },
                { src: "/images/species/amanita-caesarea/01-mature-cap.jpg", label: "Option B", desc: "Caesar's Mushroom, mature group" },
                { src: "/images/species/amanita-muscaria/01-cap-top.jpg", label: "Option C", desc: "Fly Agaric, classic red cap" },
              ].map((opt) => (
                <div key={opt.label} className="text-center">
                  <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#c8956c] mb-3">{opt.label}</div>
                  {/* Large icon */}
                  <div className="mx-auto h-32 w-32 overflow-hidden rounded-[28px] shadow-xl ring-1 ring-[rgba(100,140,100,0.2)]">
                    <img src={opt.src} alt={opt.desc} className="h-full w-full object-cover" />
                  </div>
                  <div className="mt-2 text-[10px] text-[#c4b49a]">{opt.desc}</div>
                  {/* Size variants */}
                  <div className="mt-4 flex items-end justify-center gap-3">
                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 overflow-hidden rounded-[14px] shadow-lg ring-1 ring-[rgba(100,140,100,0.2)]">
                        <img src={opt.src} alt={opt.desc} className="h-full w-full object-cover" />
                      </div>
                      <span className="mt-1 text-[8px] text-[#555]">180px</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-10 overflow-hidden rounded-[9px] shadow ring-1 ring-[rgba(100,140,100,0.2)]">
                        <img src={opt.src} alt={opt.desc} className="h-full w-full object-cover" />
                      </div>
                      <span className="mt-1 text-[8px] text-[#555]">120px</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-6 w-6 overflow-hidden rounded-[4px] ring-1 ring-[rgba(100,140,100,0.2)]">
                        <img src={opt.src} alt={opt.desc} className="h-full w-full object-cover" />
                      </div>
                      <span className="mt-1 text-[8px] text-[#555]">32px</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustrated icon concepts */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Option D: Mushroom-head character */}
            <div className="text-center">
              <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#c8956c] mb-3">Option D — Mushroom Character</div>
              <div className="mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-[28px] bg-gradient-to-br from-[#1a2a1a] to-[#0e1a0e] shadow-xl ring-1 ring-[rgba(100,140,100,0.2)]">
                <svg viewBox="0 0 100 100" className="h-24 w-24">
                  {/* Mushroom cap head */}
                  <ellipse cx="50" cy="35" rx="32" ry="22" fill="#c8956c" />
                  <ellipse cx="50" cy="35" rx="32" ry="22" fill="url(#capShine)" />
                  {/* Cap spots */}
                  <circle cx="38" cy="28" r="4" fill="#f0e4cc" opacity="0.4" />
                  <circle cx="55" cy="24" r="3" fill="#f0e4cc" opacity="0.3" />
                  <circle cx="65" cy="32" r="2.5" fill="#f0e4cc" opacity="0.35" />
                  {/* Cap underside / face area */}
                  <rect x="38" y="35" width="24" height="6" rx="2" fill="#f0e4cc" />
                  {/* Eyes */}
                  <circle cx="44" cy="38" r="2" fill="#0e1a0e" />
                  <circle cx="56" cy="38" r="2" fill="#0e1a0e" />
                  {/* Body / stem */}
                  <rect x="42" y="41" width="16" height="20" rx="4" fill="#f0e4cc" />
                  {/* Arms */}
                  <rect x="32" y="46" width="12" height="4" rx="2" fill="#f0e4cc" />
                  <rect x="56" y="46" width="12" height="4" rx="2" fill="#f0e4cc" />
                  {/* Legs */}
                  <rect x="43" y="59" width="5" height="12" rx="2" fill="#f0e4cc" />
                  <rect x="52" y="59" width="5" height="12" rx="2" fill="#f0e4cc" />
                  {/* Shoes */}
                  <ellipse cx="45" cy="72" rx="5" ry="3" fill="#c8956c" />
                  <ellipse cx="55" cy="72" rx="5" ry="3" fill="#c8956c" />
                  <defs>
                    <radialGradient id="capShine" cx="40%" cy="30%">
                      <stop offset="0%" stopColor="#fff" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <div className="mt-2 text-[10px] text-[#c4b49a]">Friendly character with mushroom cap head</div>
              <div className="mt-3 flex items-end justify-center gap-3">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#1a2a1a] to-[#0e1a0e] shadow-lg ring-1 ring-[rgba(100,140,100,0.2)]">
                    <svg viewBox="0 0 100 100" className="h-12 w-12">
                      <ellipse cx="50" cy="35" rx="32" ry="22" fill="#c8956c" />
                      <circle cx="38" cy="28" r="4" fill="#f0e4cc" opacity="0.4" />
                      <circle cx="55" cy="24" r="3" fill="#f0e4cc" opacity="0.3" />
                      <rect x="38" y="35" width="24" height="6" rx="2" fill="#f0e4cc" />
                      <circle cx="44" cy="38" r="2" fill="#0e1a0e" />
                      <circle cx="56" cy="38" r="2" fill="#0e1a0e" />
                      <rect x="42" y="41" width="16" height="20" rx="4" fill="#f0e4cc" />
                      <rect x="32" y="46" width="12" height="4" rx="2" fill="#f0e4cc" />
                      <rect x="56" y="46" width="12" height="4" rx="2" fill="#f0e4cc" />
                      <rect x="43" y="59" width="5" height="12" rx="2" fill="#f0e4cc" />
                      <rect x="52" y="59" width="5" height="12" rx="2" fill="#f0e4cc" />
                      <ellipse cx="45" cy="72" rx="5" ry="3" fill="#c8956c" />
                      <ellipse cx="55" cy="72" rx="5" ry="3" fill="#c8956c" />
                    </svg>
                  </div>
                  <span className="mt-1 text-[8px] text-[#555]">180px</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[9px] bg-gradient-to-br from-[#1a2a1a] to-[#0e1a0e] shadow ring-1 ring-[rgba(100,140,100,0.2)]">
                    <svg viewBox="0 0 100 100" className="h-7 w-7">
                      <ellipse cx="50" cy="35" rx="32" ry="22" fill="#c8956c" />
                      <rect x="38" y="35" width="24" height="6" rx="2" fill="#f0e4cc" />
                      <circle cx="44" cy="38" r="2" fill="#0e1a0e" />
                      <circle cx="56" cy="38" r="2" fill="#0e1a0e" />
                      <rect x="42" y="41" width="16" height="20" rx="4" fill="#f0e4cc" />
                    </svg>
                  </div>
                  <span className="mt-1 text-[8px] text-[#555]">120px</span>
                </div>
              </div>
            </div>

            {/* Option E: O arch monogram */}
            <div className="text-center">
              <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#c8956c] mb-3">Option E — &ldquo;O&rdquo; Monogram</div>
              <div className="mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-[28px] bg-gradient-to-br from-[#1a2a1a] to-[#0e1a0e] shadow-xl ring-1 ring-[rgba(100,140,100,0.2)]">
                <svg viewBox="0 0 100 100" className="h-24 w-24">
                  {/* O arch */}
                  <path d="M 50 15 C 25 15, 15 35, 15 55 C 15 75, 25 85, 50 85 C 75 85, 85 75, 85 55 C 85 35, 75 15, 50 15 Z M 50 28 C 65 28, 72 40, 72 55 C 72 70, 65 78, 50 78 C 35 78, 28 70, 28 55 C 28 40, 35 28, 50 28 Z" fill="#c8956c" />
                  {/* Small mushroom inside the O */}
                  <ellipse cx="50" cy="48" rx="12" ry="8" fill="#f0e4cc" />
                  <rect x="47" y="48" width="6" height="14" rx="2" fill="#f0e4cc" opacity="0.8" />
                </svg>
              </div>
              <div className="mt-2 text-[10px] text-[#c4b49a]">Copper &ldquo;O&rdquo; arch with mushroom silhouette</div>
              <div className="mt-3 flex items-end justify-center gap-3">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#1a2a1a] to-[#0e1a0e] shadow-lg ring-1 ring-[rgba(100,140,100,0.2)]">
                    <svg viewBox="0 0 100 100" className="h-12 w-12">
                      <path d="M 50 15 C 25 15, 15 35, 15 55 C 15 75, 25 85, 50 85 C 75 85, 85 75, 85 55 C 85 35, 75 15, 50 15 Z M 50 28 C 65 28, 72 40, 72 55 C 72 70, 65 78, 50 78 C 35 78, 28 70, 28 55 C 28 40, 35 28, 50 28 Z" fill="#c8956c" />
                      <ellipse cx="50" cy="48" rx="12" ry="8" fill="#f0e4cc" />
                      <rect x="47" y="48" width="6" height="14" rx="2" fill="#f0e4cc" opacity="0.8" />
                    </svg>
                  </div>
                  <span className="mt-1 text-[8px] text-[#555]">180px</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[9px] bg-gradient-to-br from-[#1a2a1a] to-[#0e1a0e] shadow ring-1 ring-[rgba(100,140,100,0.2)]">
                    <svg viewBox="0 0 100 100" className="h-7 w-7">
                      <path d="M 50 15 C 25 15, 15 35, 15 55 C 15 75, 25 85, 50 85 C 75 85, 85 75, 85 55 C 85 35, 75 15, 50 15 Z M 50 28 C 65 28, 72 40, 72 55 C 72 70, 65 78, 50 78 C 35 78, 28 70, 28 55 C 28 40, 35 28, 50 28 Z" fill="#c8956c" />
                      <ellipse cx="50" cy="48" rx="12" ry="8" fill="#f0e4cc" />
                      <rect x="47" y="48" width="6" height="14" rx="2" fill="#f0e4cc" opacity="0.8" />
                    </svg>
                  </div>
                  <span className="mt-1 text-[8px] text-[#555]">120px</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-gradient-to-br from-[#1a2a1a] to-[#0e1a0e] ring-1 ring-[rgba(100,140,100,0.2)]">
                    <svg viewBox="0 0 100 100" className="h-4 w-4">
                      <path d="M 50 15 C 25 15, 15 35, 15 55 C 15 75, 25 85, 50 85 C 75 85, 85 75, 85 55 C 85 35, 75 15, 50 15 Z M 50 28 C 65 28, 72 40, 72 55 C 72 70, 65 78, 50 78 C 35 78, 28 70, 28 55 C 28 40, 35 28, 50 28 Z" fill="#c8956c" />
                    </svg>
                  </div>
                  <span className="mt-1 text-[8px] text-[#555]">32px</span>
                </div>
              </div>
            </div>
          </div>

          {/* Home screen mockup with Option A */}
          <div className="mt-12 flex justify-center">
            <div className="rounded-2xl border border-[#222] bg-[#111] px-8 py-6">
              <div className="text-center text-[9px] uppercase tracking-[2px] text-[#555]">Home Screen Preview (Option A)</div>
              <div className="mt-4 grid grid-cols-4 gap-5">
                {[
                  { name: "Camera", bg: "#333", isPhoto: false },
                  { name: "Orangutany", bg: "", isPhoto: true, active: true },
                  { name: "Maps", bg: "#333", isPhoto: false },
                  { name: "Weather", bg: "#333", isPhoto: false },
                ].map((app) => (
                  <div key={app.name} className="flex flex-col items-center gap-1">
                    <div
                      className={`flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl ${app.active ? "ring-2 ring-[#c8956c] ring-offset-1 ring-offset-[#111]" : ""}`}
                      style={app.isPhoto ? {} : { background: app.bg }}
                    >
                      {app.isPhoto ? (
                        <img src="/images/species/amanita-caesarea/cap-detail.jpg" alt="Orangutany" className="h-full w-full object-cover" />
                      ) : (
                        <span className="text-xl text-[#666]">{app.name === "Camera" ? "📸" : app.name === "Maps" ? "🗺️" : "☁️"}</span>
                      )}
                    </div>
                    <span className={`text-[8px] ${app.active ? "font-semibold text-[#c8956c]" : "text-[#666]"}`}>{app.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: Favicon / Browser Tab Preview
          ═══════════════════════════════════════════ */}
      <section className="border-b border-[rgba(100,140,100,0.08)] px-5 py-16">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-center font-[family-name:var(--font-sora)] text-lg uppercase tracking-[4px] text-[#c8956c]">Favicon in Browser Tabs</h2>
          <p className="mt-2 text-center text-xs text-[#c4b49a]">How the site icon appears when someone types the URL.</p>

          <div className="mt-10 space-y-6">
            {/* Chrome-style tab bar */}
            <div className="overflow-hidden rounded-t-xl border border-[#333]">
              <div className="bg-[#202124] px-2 pt-2">
                <div className="flex items-end gap-0.5">
                  {/* Active tab */}
                  <div className="flex items-center gap-2 rounded-t-lg bg-[#35363a] px-4 py-2">
                    <div className="flex h-4 w-4 items-center justify-center rounded bg-gradient-to-br from-[#1a2a1a] to-[#0e1a0e]">
                      <span className="text-[8px]">🍄</span>
                    </div>
                    <span className="text-[11px] text-[#e8eaed]">Orangutany - Identify Mushrooms</span>
                    <span className="ml-2 text-[10px] text-[#999]">×</span>
                  </div>
                  {/* Inactive tabs */}
                  <div className="flex items-center gap-2 rounded-t-lg bg-[#292a2d] px-4 py-2">
                    <div className="h-3.5 w-3.5 rounded bg-[#4285f4]" />
                    <span className="text-[11px] text-[#999]">Google</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-t-lg bg-[#292a2d] px-4 py-2">
                    <div className="h-3.5 w-3.5 rounded bg-[#333]" />
                    <span className="text-[11px] text-[#999]">New Tab</span>
                  </div>
                </div>
              </div>
              {/* Address bar */}
              <div className="flex items-center gap-3 bg-[#35363a] px-4 py-2">
                <div className="flex gap-2 text-[#999]">
                  <span className="text-xs">←</span>
                  <span className="text-xs">→</span>
                  <span className="text-xs">↻</span>
                </div>
                <div className="flex flex-1 items-center gap-2 rounded-full bg-[#202124] px-4 py-1.5">
                  <span className="text-[10px] text-[#999]">🔒</span>
                  <span className="text-[11px] text-[#e8eaed]">orangutany.com</span>
                </div>
              </div>
              {/* Tiny page preview */}
              <div className="h-16 bg-[#0e1a0e] px-4 pt-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-4 w-4 items-center justify-center rounded bg-gradient-to-br from-[#1a2a1a] to-[#0e1a0e]">
                    <span className="text-[7px]">🍄</span>
                  </div>
                  <span className="text-[10px] font-semibold text-[#f0e4cc]">Orangutany</span>
                </div>
              </div>
            </div>

            {/* Safari-style tab bar */}
            <div className="overflow-hidden rounded-xl border border-[#333]">
              <div className="flex items-center gap-2 bg-[#2a2a2c] px-4 py-2.5">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1" />
                {/* Active tab in address bar */}
                <div className="flex items-center gap-2 rounded-lg bg-[#1c1c1e] px-4 py-1.5">
                  <div className="flex h-4 w-4 items-center justify-center rounded bg-gradient-to-br from-[#1a2a1a] to-[#0e1a0e]">
                    <span className="text-[8px]">🍄</span>
                  </div>
                  <span className="text-[11px] text-[#e5e5e7]">orangutany.com</span>
                </div>
                <div className="flex-1" />
              </div>
              <div className="h-12 bg-[#0e1a0e]" />
            </div>

            {/* Bookmarks bar */}
            <div className="overflow-hidden rounded-xl border border-[#333]">
              <div className="bg-[#35363a] px-4 py-2">
                <span className="text-[9px] uppercase tracking-[1px] text-[#555]">Bookmarks Bar</span>
              </div>
              <div className="flex flex-wrap gap-3 bg-[#202124] px-4 py-3">
                {[
                  { icon: "🍄", name: "Orangutany", active: true },
                  { icon: "📧", name: "Gmail", active: false },
                  { icon: "📁", name: "Drive", active: false },
                  { icon: "🗓️", name: "Calendar", active: false },
                  { icon: "📝", name: "Docs", active: false },
                ].map((b) => (
                  <div key={b.name} className={`flex items-center gap-1.5 rounded px-2 py-1 ${b.active ? "bg-[rgba(200,149,108,0.1)]" : ""}`}>
                    <span className="text-xs">{b.icon}</span>
                    <span className={`text-[10px] ${b.active ? "font-semibold text-[#c8956c]" : "text-[#999]"}`}>{b.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <div className="border-t border-[rgba(100,140,100,0.08)] px-5 py-10 text-center text-xs text-[#555]">
        <p className="text-sm text-[#c8956c]">Internal brand reference. Do not distribute.</p>
        <p className="mt-1">orangutany.com</p>
      </div>
    </div>
  );
}
