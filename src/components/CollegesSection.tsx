"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin, GraduationCap, Building2, ExternalLink, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const colleges = [
  {
    id: "amet",
    name: "AMET University",
    location: "Chennai, Tamil Nadu",
    state: "Tamil Nadu",
    region: "South" as const,
    accreditations: ["UGC Recognized", "AICTE Approved"],
    highlight: "Unique coastal campus right by the sea — India's only maritime university offering tech degrees.",
    image: "/colleges/amet.jpg",
    website: "https://www.ametuniv.ac.in",
  },
  {
    id: "jecrc",
    name: "JECRC University",
    location: "Jaipur, Rajasthan",
    state: "Rajasthan",
    region: "North" as const,
    accreditations: ["UGC Recognized", "NAAC Accredited"],
    highlight: "Top-ranked private university in Rajasthan with Rajput-inspired heritage architecture.",
    image: "/colleges/jecrc.jpg",
    website: "https://jecrcuniversity.edu.in",
  },
  {
    id: "kare",
    name: "Kalasalingam Academy",
    shortName: "KARE",
    location: "Krishnankoil, Tamil Nadu",
    state: "Tamil Nadu",
    region: "South" as const,
    accreditations: ["UGC Recognized", "NAAC A++"],
    highlight: "Nestled in the hills of Tamil Nadu — India's highest NAAC A++ rated autonomous university.",
    image: "/colleges/kare.jpg",
    website: "https://www.kalasalingam.ac.in",
  },
  {
    id: "lpu",
    name: "Lovely Professional University",
    shortName: "LPU",
    location: "Phagwara, Punjab",
    state: "Punjab",
    region: "North" as const,
    accreditations: ["UGC Recognized", "NAAC A+"],
    highlight: "India's largest private university by enrolment — a self-contained city-sized campus in Punjab.",
    image: "/colleges/lpu.jpg",
    website: "https://www.lpu.in",
  },
  {
    id: "sgt",
    name: "SGT University",
    location: "Gurugram, Haryana",
    state: "Haryana",
    region: "North" as const,
    accreditations: ["UGC Recognized", "AICTE Approved"],
    highlight: "Located in India's corporate capital Gurugram — unmatched proximity to top tech companies.",
    image: "/colleges/sgt.jpg",
    website: "https://sgtuniversity.ac.in",
  },
  {
    id: "srm_ap",
    name: "SRM University – AP",
    location: "Amaravati, Andhra Pradesh",
    state: "Andhra Pradesh",
    region: "South" as const,
    accreditations: ["UGC Recognized", "NAAC A+"],
    highlight: "Futuristic greenfield campus in AP's new capital city — built for the next generation of engineers.",
    image: "/colleges/srm_ap.jpg",
    website: "https://www.srmap.edu.in",
  },
  {
    id: "st_joseph",
    name: "St. Joseph University",
    location: "Chennai, Tamil Nadu",
    state: "Tamil Nadu",
    region: "South" as const,
    accreditations: ["UGC Recognized", "AICTE Approved"],
    highlight: "A prestigious heritage institution in Chennai blending century-old tradition with modern education.",
    image: "/colleges/st_joseph.jpg",
    website: "https://www.sjuniversity.ac.in",
  },
  {
    id: "yenepoya_bengaluru",
    name: "Yenepoya University",
    shortName: "Bengaluru Campus",
    location: "Bengaluru, Karnataka",
    state: "Karnataka",
    region: "South" as const,
    accreditations: ["UGC Recognized", "NAAC Accredited"],
    highlight: "Right in the heart of India's Silicon Valley — intern at top tech companies walking distance away.",
    image: "/colleges/yenepoya_bengaluru.jpg",
    website: "https://yenepoya.edu.in",
  },
  {
    id: "yenepoya_mangaluru",
    name: "Yenepoya University",
    shortName: "Mangaluru Campus",
    location: "Mangaluru, Karnataka",
    state: "Karnataka",
    region: "South" as const,
    accreditations: ["UGC Recognized", "NAAC Accredited"],
    highlight: "Flagship coastal campus surrounded by the Western Ghats and Arabian Sea — stunning environment.",
    image: "/colleges/yenepoya_mangaluru.jpg",
    website: "https://yenepoya.edu.in",
  },
];

type Region = "All" | "North" | "South";

const regionStyle = {
  North: {
    badge: "bg-indigo-500/15 text-indigo-300 border-indigo-500/25",
    dot:   "bg-indigo-400",
    glow:  "group-hover:shadow-indigo-500/20",
    bar:   "from-indigo-500 to-violet-500",
  },
  South: {
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
    dot:   "bg-emerald-400",
    glow:  "group-hover:shadow-emerald-500/20",
    bar:   "from-emerald-500 to-teal-500",
  },
};

export default function CollegesSection() {
  const [filter, setFilter] = useState<Region>("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = filter === "All" ? colleges : colleges.filter(c => c.region === filter);

  return (
    <section id="colleges" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Hero banner image ── */}
        <div className="relative rounded-3xl overflow-hidden mb-14 h-52 sm:h-64 lg:h-80">
          <Image
            src="/colleges/hero.jpg"
            alt="Kalvium partner university campus"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060610] via-[#060610]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060610]/60 via-transparent to-[#060610]/30" />

          {/* Overlay text */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[11px] font-bold tracking-widest uppercase w-fit mb-3">
              <Building2 className="w-3 h-3" />
              9 UGC-Recognized Partner Campuses
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.05]">
              Choose Your{" "}
              <span className="gradient-text">Campus City</span>
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-xl leading-relaxed">
              One KNET exam. 9 campuses across 6 states. Your B.Tech degree awarded by the university you enrol in.
            </p>
          </div>
        </div>

        {/* ── Filter tabs + stats ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* Region filter */}
          <div className="flex items-center gap-2 p-1 rounded-xl border border-slate-800/60 bg-slate-900/40">
            {(["All", "North", "South"] as Region[]).map((r) => (
              <button
                key={r}
                onClick={() => setFilter(r)}
                className={cn(
                  "px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200",
                  filter === r
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                    : "text-slate-500 hover:text-slate-300"
                )}
              >
                {r === "All" ? "All Campuses" : `${r} India`}
                <span className="ml-1.5 text-[10px] opacity-70">
                  ({r === "All" ? colleges.length : colleges.filter(c => c.region === r).length})
                </span>
              </button>
            ))}
          </div>

          {/* Quick stats */}
          <div className="flex items-center gap-4">
            {[
              { label: "6 States", dot: "bg-indigo-400" },
              { label: "All UGC Approved", dot: "bg-emerald-400" },
              { label: "Single KNET Exam", dot: "bg-amber-400" },
            ].map(({ label, dot }) => (
              <div key={label} className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* ── College cards grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {filtered.map((college) => {
            const s = regionStyle[college.region];
            const isSelected = selected === college.id;
            return (
              <div
                key={college.id}
                className={cn(
                  "group relative rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300",
                  isSelected
                    ? "border-indigo-500/50 shadow-xl shadow-indigo-500/15 scale-[1.01]"
                    : "border-slate-800/60 hover:border-slate-700/80 hover:-translate-y-0.5",
                  `hover:shadow-xl ${s.glow}`
                )}
                onClick={() => setSelected(isSelected ? null : college.id)}
              >
                {/* ── Campus photo ── */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={college.image}
                    alt={`${college.name} campus`}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a18] via-[#0a0a18]/30 to-transparent" />

                  {/* Region badge overlaid on image */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-full border backdrop-blur-sm ${s.badge}`}>
                      {college.region} India
                    </span>
                  </div>

                  {/* Gradient bar at bottom of image */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${s.bar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>

                {/* ── Card body ── */}
                <div className="p-5 bg-slate-900/80">
                  {/* Name */}
                  <h3 className="text-base font-black text-white leading-snug mb-0.5">
                    {college.name}
                    {college.shortName && (
                      <span className={`ml-1.5 text-xs font-bold ${
                        college.region === "North" ? "text-indigo-400" : "text-emerald-400"
                      }`}>
                        ({college.shortName})
                      </span>
                    )}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <MapPin className={`w-3 h-3 flex-shrink-0 ${
                      college.region === "North" ? "text-indigo-400" : "text-emerald-400"
                    }`} />
                    <span className="text-xs text-slate-500 font-medium">{college.location}</span>
                  </div>

                  {/* Highlight text — expands on click */}
                  <p className={cn(
                    "text-xs text-slate-400 leading-relaxed transition-all duration-300 overflow-hidden",
                    isSelected ? "max-h-24 opacity-100 mb-4" : "max-h-10 opacity-70 line-clamp-2"
                  )}>
                    {college.highlight}
                  </p>

                  {/* Accreditation pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {college.accreditations.map((a) => (
                      <span
                        key={a}
                        className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-slate-800/80 border border-slate-700/50 text-slate-400"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 flex-shrink-0" />
                        {a}
                      </span>
                    ))}
                  </div>

                  {/* Expanded action — visible on select */}
                  {isSelected && (
                    <div className="flex items-center gap-2 pt-2 animate-fade-in-up">
                      <a
                        href="#lead-form"
                        onClick={(e) => e.stopPropagation()}
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${s.bar} shadow-lg transition-all duration-200 hover:scale-[1.02]`}
                      >
                        Apply for This Campus
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={college.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2.5 rounded-xl border border-slate-700/50 hover:border-slate-600 bg-slate-800/50 text-slate-400 hover:text-white transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                  {/* Expand hint */}
                  {!isSelected && (
                    <p className="text-[10px] text-slate-700 font-medium flex items-center gap-1 mt-1">
                      <ChevronRight className="w-3 h-3" />
                      Click to explore &amp; apply
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── KNET process card ── */}
        <div className="relative rounded-3xl overflow-hidden border border-indigo-500/15 bg-gradient-to-br from-indigo-500/8 via-transparent to-emerald-500/5">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 p-6 sm:p-8">
            <div className="flex-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/25">
                  <GraduationCap className="w-4.5 h-4.5 text-white" />
                </div>
                <h3 className="text-lg font-black text-white">How Campus Selection Works via KNET</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                {[
                  { step: "01", title: "Take KNET", desc: "One aptitude + psychometric test for all 9 campuses. No separate entrance per college." },
                  { step: "02", title: "Pick Your Campus", desc: "After KNET results, select your preferred city and university from the partner list." },
                  { step: "03", title: "Enrol & Start", desc: "Fees paid directly to the university. Your B.Tech journey begins from Day 1." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-3">
                    <span className="text-xs font-black text-indigo-500 tabular-nums mt-0.5 flex-shrink-0 w-6">{step}</span>
                    <div>
                      <p className="text-sm font-black text-white mb-1">{title}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 flex-shrink-0 w-full sm:w-auto">
              <a
                href="#lead-form"
                className="group relative overflow-hidden flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all duration-300 justify-center"
              >
                <div className="absolute inset-0 animate-shimmer" />
                Book Campus Counseling
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://kalvium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 border border-slate-700/50 hover:border-slate-600 bg-slate-900/40 text-slate-400 hover:text-slate-200 font-semibold text-sm rounded-xl transition-all duration-200 justify-center"
              >
                <ChevronLeft className="w-3.5 h-3.5 rotate-180" />
                Visit Kalvium.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
