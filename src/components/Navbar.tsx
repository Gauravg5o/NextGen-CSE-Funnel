"use client";

import { useState, useEffect } from "react";
import { GraduationCap, Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Why Us", href: "#comparison" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Colleges", href: "#colleges" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass-card border-b border-indigo-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              {/* Spinning ring */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-emerald-500 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-[2px] rounded-[10px] bg-[#060610] flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-indigo-400" strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <span className="block text-sm font-black text-white tracking-tight leading-none">
                TechGrad <span className="gradient-text">CSE</span>
              </span>
              <span className="block text-[9px] text-slate-500 tracking-[0.15em] uppercase mt-0.5">
                Future-Ready B.Tech
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              2027 Batch Open
            </span>
            <button
              onClick={scrollToForm}
              className="group relative overflow-hidden flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-indigo-600/25 animate-pulse-glow"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Book Free Session
              <div className="absolute inset-0 animate-shimmer" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-card border border-slate-700/40 rounded-2xl mb-4 p-4 space-y-2 animate-fade-in-up">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={scrollToForm}
              className="w-full mt-1 px-5 py-3 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600"
            >
              Book Free 1-on-1 Session →
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
