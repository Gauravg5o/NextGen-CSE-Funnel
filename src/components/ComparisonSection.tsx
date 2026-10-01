"use client";

import { X, Check, ArrowRight } from "lucide-react";

const oldSchool = [
  "Syllabus frozen since 2005 — outdated C++ & COBOL",
  "Theory-only paper exams, zero practical projects",
  "No Git, no Docker, no CI/CD — ever",
  "Placement panic starts in the final semester",
  "No real mentors, just lecturers reading from PDFs",
  "4 years of fees, ₹3–4 LPA outcome at best",
];

const workIntegrated = [
  "Next.js, TypeScript, Python, Rust, AI Engineering",
  "Portfolio over paper — build & ship real products",
  "Git, Docker, Kubernetes from Semester 1",
  "Paid internships starting Year 2 (₹15K–₹40K/mo)",
  "1-on-1 mentorship by senior engineers at top firms",
  "Earn while you study — 2 years of real experience",
];

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/4 rounded-full blur-3xl" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-5 tracking-widest uppercase">
            The Hard Truth
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
            The Engineering{" "}
            <span className="gradient-text">Gap Is Real</span>
          </h2>
          <p className="mt-5 text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Most colleges prepare you for an era that no longer exists.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch max-w-5xl mx-auto">

          {/* ── Old School Card ── */}
          <div className="relative rounded-3xl border border-red-500/15 bg-gradient-to-b from-red-950/20 to-transparent p-7 lg:p-9 glow-border-red overflow-hidden">
            {/* Diagonal stripe overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: "repeating-linear-gradient(-45deg, #ef4444 0, #ef4444 1px, transparent 0, transparent 50%)",
              backgroundSize: "12px 12px",
            }} />

            <div className="relative">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-base font-black text-red-300">Old-School Engineering</h3>
                  <p className="text-[11px] text-red-500/70 font-medium uppercase tracking-wide">The broken status quo</p>
                </div>
              </div>

              <ul className="space-y-3.5">
                {oldSchool.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-2.5 h-2.5 text-red-400" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-slate-500 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 p-4 rounded-2xl bg-red-500/8 border border-red-500/15">
                <p className="text-xs text-red-300/70 leading-relaxed italic">
                  Average outcome: <strong className="text-red-300">₹3–4 LPA</strong> after 4 years of fees, theoretical learning, and placement anxiety.
                </p>
              </div>
            </div>
          </div>

          {/* ── VS divider ── */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-4 py-4">
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-slate-700/50 to-transparent" />
            <div className="relative w-12 h-12 rounded-full flex items-center justify-center glass-card border border-slate-700/50">
              <span className="text-xs font-black text-slate-400">VS</span>
              <div className="absolute inset-0 rounded-full animate-spin-slow border-t border-indigo-500/30" />
            </div>
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-slate-700/50 to-transparent" />
          </div>

          {/* ── Work-Integrated Card ── */}
          <div className="relative rounded-3xl overflow-hidden glow-border-emerald">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-indigo-500/5 to-emerald-500/5" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

            <div className="relative p-7 lg:p-9">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-400" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-base font-black text-emerald-300">Work-Integrated B.Tech</h3>
                  <p className="text-[11px] text-emerald-500/70 font-medium uppercase tracking-wide">Industry-first, Day-1 ready</p>
                </div>
              </div>

              <ul className="space-y-3.5">
                {workIntegrated.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-emerald-400" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-slate-200 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 p-4 rounded-2xl bg-emerald-500/8 border border-emerald-500/20">
                <p className="text-xs text-emerald-300/80 leading-relaxed">
                  Students ship production code by <strong className="text-emerald-300">Semester 2</strong>. Internship stipends: <strong className="text-emerald-300">₹15,000–₹40,000/month</strong>.
                </p>
              </div>

              <button
                onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
                className="group mt-6 w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/25 text-emerald-300 font-bold text-sm transition-all duration-300"
              >
                Get Into This Program
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
