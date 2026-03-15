"use client";

import { useState } from "react";

const COUNTRIES = [
  "United States", "Canada", "United Kingdom", "Australia", "India", "Germany",
  "France", "Netherlands", "Sweden", "Italy", "Spain", "Brazil", "Japan",
  "South Korea", "New Zealand", "South Africa", "Mexico", "Ireland",
  "Norway", "Finland", "Denmark", "Switzerland", "Austria", "Belgium",
  "Poland", "Czech Republic", "Portugal", "Other",
];

export default function NewsletterPage() {
  const [form, setForm] = useState({ name: "", email: "", country: "", website: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://orangutany.com/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto max-w-lg px-6 py-12">
      <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground text-center">
        The Orangutany Quarterly
      </h1>
      <p className="mt-3 text-center text-sm text-foreground/80">
        Once a quarter, we send a short letter with the best stories from our
        authors: foraging expeditions, poisoning cases that made the news,
        species discoveries, and seasonal guides for wherever you are in the
        world. No spam, no filler. Just mushrooms.
      </p>

      {status === "success" ? (
        <div className="mt-8 rounded-xl border border-primary/30 bg-card p-6 text-center">
          <p className="text-lg font-semibold text-primary">Welcome aboard.</p>
          <p className="mt-2 text-sm text-foreground/70">
            You&apos;ll hear from us next quarter. In the meantime, explore the{" "}
            <a href="/articles" className="text-primary hover:underline">articles</a>{" "}
            or try{" "}
            <a href="https://orangutany.com" className="text-primary hover:underline">
              identifying a mushroom
            </a>.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-1">
              Your name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="First name is fine"
              className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-xs font-medium text-muted-foreground mb-1">
              Country
            </label>
            <select
              id="country"
              required
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
              className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
            >
              <option value="">Select your country</option>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Honeypot — hidden from real users, bots fill it */}
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
            aria-hidden="true"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-medium text-background transition hover:bg-primary/90 disabled:opacity-50"
          >
            {status === "sending" ? "Signing up..." : "Join the Quarterly"}
          </button>

          {status === "error" && (
            <p className="text-xs text-red-400 text-center">
              Something went wrong. Please try again later.
            </p>
          )}

          <p className="text-xs text-center text-muted-foreground/70">
            We value your readership. One email per quarter, unsubscribe anytime.
            We never share your information.
          </p>
        </form>
      )}
    </div>
  );
}
