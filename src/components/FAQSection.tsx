"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is this an accredited UGC-approved degree?",
    answer:
      "Yes, absolutely. The B.Tech CSE degree is fully UGC-recognized and delivered in partnership with established, accredited universities. Your degree holds the same legal academic validity as any conventional B.Tech from a recognized institution — valid for higher studies (M.Tech, MS abroad, MBA) and government jobs.",
    tag: "Accreditation",
  },
  {
    question: "How does the paid internship model work?",
    answer:
      "From Year 2, students are matched with our 50+ corporate tech partners as embedded junior engineers. You work real engineering hours while credit hours count toward your degree. Monthly stipends range from ₹15,000 to ₹40,000 depending on company and role. Internship performance feeds directly into your academic assessment.",
    tag: "Internship",
  },
  {
    question: "Can parents attend the 1-on-1 counseling session?",
    answer:
      "Parent participation is strongly encouraged! Our counselors cover the complete fee structure, scholarship options, hostel details, UGC degree recognition documents, and the corporate internship model. Having parents present ensures every family member is fully aligned before making a decision.",
    tag: "Counseling",
  },
  {
    question: "What are the eligibility criteria?",
    answer:
      "Applicants must have completed (or be appearing for) Class 12th with PCM. There is no minimum percentage cutoff — we assess candidates through a brief evaluation test covering logical thinking, problem-solving aptitude, and English comprehension. Dropper students are welcome.",
    tag: "Eligibility",
  },
  {
    question: "What is the fee structure and are scholarships available?",
    answer:
      "The program fee is significantly offset by internship stipends in Years 3–4. We offer merit-based scholarships and need-based financial aid. EMI options are available. All costs are disclosed upfront — zero hidden fees. The counseling session includes a detailed financial breakdown.",
    tag: "Fees",
  },
  {
    question: "What if I don't get an internship placement?",
    answer:
      "We have a 100% internship placement commitment for students who complete Years 1–2 with satisfactory performance. Our corporate relations team works with 50+ tech companies to place every student. In the rare case someone isn't placed, we provide additional skill-up support at no extra cost.",
    tag: "Placement",
  },
];

const tagColors: Record<string, string> = {
  Accreditation: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  Internship: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  Counseling: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  Eligibility: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  Fees: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  Placement: "bg-rose-500/10 text-rose-300 border-rose-500/20",
};

function FAQItem({ question, answer, tag, isOpen, onToggle, index }: {
  question: string; answer: string; tag: string;
  isOpen: boolean; onToggle: () => void; index: number;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border overflow-hidden transition-all duration-300",
        isOpen
          ? "border-indigo-500/30 bg-indigo-500/5 shadow-lg shadow-indigo-500/5"
          : "border-slate-800/60 bg-slate-900/30 hover:border-slate-700/80 hover:bg-slate-900/50"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-5 py-4 text-left group"
        aria-expanded={isOpen}
        id={`faq-q-${index}`}
      >
        {/* Number */}
        <span className={cn(
          "flex-shrink-0 w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black transition-all duration-300",
          isOpen
            ? "bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30"
            : "bg-slate-800 text-slate-500 group-hover:bg-slate-700"
        )}>
          {index + 1}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${tagColors[tag]}`}>
              {tag}
            </span>
          </div>
          <span className={cn(
            "text-sm font-bold leading-snug transition-colors",
            isOpen ? "text-white" : "text-slate-200 group-hover:text-white"
          )}>
            {question}
          </span>
        </div>

        <ChevronDown
          className={cn(
            "w-4 h-4 flex-shrink-0 text-slate-500 transition-all duration-300",
            isOpen && "rotate-180 text-indigo-400"
          )}
        />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-400 ease-in-out",
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-5 pb-5 ml-11">
          <p className="text-sm text-slate-400 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 mb-5 shadow-lg shadow-violet-500/30">
            <HelpCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
            Got Questions?{" "}
            <span className="gradient-text">We Answer.</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-lg mx-auto">
            Everything students and parents ask before booking their counseling session.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              {...faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 p-6 rounded-3xl border border-indigo-500/15 bg-gradient-to-br from-indigo-500/8 to-violet-500/5 text-center">
          <p className="text-sm font-semibold text-slate-300 mb-1">Still have more questions?</p>
          <p className="text-xs text-slate-500 mb-5">Our academic counselors are available Mon–Sat, 9 AM – 9 PM IST.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#lead-form"
              className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/25 w-full sm:w-auto justify-center"
            >
              Book Counseling Session
            </a>
            <a
              href="https://wa.me/917667873988"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/15 border border-[#25D366]/25 rounded-xl transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
