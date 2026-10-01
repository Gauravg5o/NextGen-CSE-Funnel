"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download, Zap, CheckCircle2, Users, TrendingUp } from "lucide-react";

// ── Animated counter hook ──────────────────────────────────────────────────
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ── Tech badge data ────────────────────────────────────────────────────────
const techBadges = [
  { label: "Next.js", color: "bg-white/10 text-white border-white/20", position: "top-[22%] left-[5%]", delay: "animate-float" },
  { label: "Python", color: "bg-yellow-500/15 text-yellow-300 border-yellow-500/25", position: "top-[15%] right-[8%]", delay: "animate-float-2" },
  { label: "TypeScript", color: "bg-blue-500/15 text-blue-300 border-blue-500/25", position: "top-[55%] left-[2%]", delay: "animate-float-3" },
  { label: "AI / LLMs", color: "bg-violet-500/15 text-violet-300 border-violet-500/25", position: "top-[65%] right-[4%]", delay: "animate-float" },
  { label: "System Design", color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25", position: "top-[38%] right-[1%]", delay: "animate-float-2" },
  { label: "AWS / GCP", color: "bg-orange-500/15 text-orange-300 border-orange-500/25", position: "top-[80%] left-[6%]", delay: "animate-float-3" },
];

const stats = [
  { value: 100, suffix: "%", label: "Practical Curriculum", icon: CheckCircle2, color: "text-emerald-400" },
  { value: 40, suffix: "K+", label: "Monthly Stipend (₹)", icon: TrendingUp, color: "text-indigo-400" },
  { value: 50, suffix: "+", label: "Corporate Partners", icon: Zap, color: "text-violet-400" },
  { value: 4, suffix: " Yrs", label: "Industry Experience", icon: Users, color: "text-amber-400" },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const counters = [
    useCounter(stats[0].value, 1200, inView),
    useCounter(stats[1].value, 1500, inView),
    useCounter(stats[2].value, 1600, inView),
    useCounter(stats[3].value, 1000, inView),
  ];

  const scrollToForm = () =>
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden mesh-bg"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Rotating orb rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <div className="w-[600px] h-[600px] rounded-full border border-indigo-500/8 animate-spin-slow" />
        <div className="absolute inset-8 rounded-full border border-violet-500/6 animate-spin-slow-rev" />
        <div className="absolute inset-20 rounded-full border border-emerald-500/5 animate-spin-slow" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600/5 via-transparent to-emerald-600/5" />
      </div>

      {/* Floating tech badges — desktop only */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {techBadges.map((badge) => (
          <div
            key={badge.label}
            className={`absolute ${badge.position} ${badge.delay}`}
          >
            <div className={`px-3 py-1.5 rounded-full border text-xs font-bold ${badge.color} backdrop-blur-sm`}>
              {badge.label}
            </div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">

        {/* Batch badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-indigo-500/25 bg-indigo-500/8 backdrop-blur-sm text-indigo-300 text-xs font-bold tracking-wide mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          Applications Open for 2027 Batch
          <span className="w-px h-3 bg-indigo-500/40" />
          <span className="text-emerald-400">UGC Recognized</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-[80px] xl:text-[88px] font-black leading-[0.95] tracking-tighter mb-6 animate-fade-in-up anim-delay-1">
          <span className="block text-white">Ditch Outdated</span>
          <span className="block gradient-text">College Theory.</span>
          <span className="block text-white mt-2">Ship Real Code</span>
          <span className="block text-white">
            from{" "}
            <span className="relative inline-block">
              <span className="gradient-text">Day 1.</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="url(#ul)" strokeWidth="2.5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="ul" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#818cf8"/>
                    <stop offset="1" stopColor="#34d399"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up anim-delay-2">
          India&apos;s premier work-integrated B.Tech CSE. Master{" "}
          <span className="text-slate-200 font-semibold">full-stack engineering</span>,{" "}
          <span className="text-slate-200 font-semibold">AI workflows</span>, and land{" "}
          <span className="text-emerald-400 font-bold">paid corporate internships from Year 2</span>{" "}
          — while earning your degree.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up anim-delay-3">
          <button
            onClick={scrollToForm}
            className="group relative overflow-hidden flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 animate-gradient text-white font-black rounded-2xl transition-all duration-300 shadow-2xl shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:scale-[1.03] text-base w-full sm:w-auto justify-center animate-pulse-glow"
          >
            <div className="absolute inset-0 animate-shimmer" />
            Apply for 1-on-1 Counseling
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="group flex items-center gap-2.5 px-8 py-4 text-slate-200 font-semibold rounded-2xl border border-slate-700/60 hover:border-indigo-500/40 bg-white/[0.03] hover:bg-indigo-500/8 backdrop-blur-sm transition-all duration-300 text-base w-full sm:w-auto justify-center">
            <Download className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            Download Curriculum &amp; Report
          </button>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto animate-fade-in-up anim-delay-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="relative glass-card border border-slate-700/40 rounded-2xl p-4 hover:border-indigo-500/30 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/5 to-transparent" />
                <Icon className={`w-4 h-4 ${stat.color} mb-2`} />
                <div className="stat-number text-2xl font-black tabular-nums">
                  {counters[i]}{stat.suffix}
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5 leading-tight">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#060610] to-transparent pointer-events-none" />
    </section>
  );
}
