import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Menon",
    role: "Year 3 Student → SDE Intern @ Razorpay",
    avatar: "PM",
    color: "from-indigo-500 to-violet-600",
    stipend: "₹28,000/mo",
    quote: "I shipped a feature used by 10,000 merchants in my first month as an intern. No traditional college could have prepared me for this.",
    stars: 5,
  },
  {
    name: "Arjun Kamath",
    role: "Year 4 Student → Backend Intern @ Zepto",
    avatar: "AK",
    color: "from-emerald-500 to-teal-600",
    stipend: "₹35,000/mo",
    quote: "My friends in regular B.Tech are still doing theory exams. I already have 2 years of real engineering on my resume — employers notice.",
    stars: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Graduated → Full-Stack Engineer @ Swiggy",
    avatar: "SR",
    color: "from-amber-500 to-orange-600",
    stipend: "₹18 LPA",
    quote: "The internship model is genius. I graduated debt-light and job-ready with a portfolio of 6 shipped products. Day-1 ready isn't marketing — it's real.",
    stars: 5,
  },
];

const logos = ["Razorpay", "Swiggy", "Zepto", "CRED", "Meesho", "BrowserStack", "Groww", "Freshworks"];

export default function SocialProofSection() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3.5 py-1.5 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-full mb-5 tracking-widest uppercase">
            Student Results
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
            Real Students.{" "}
            <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
            Our students don&apos;t just graduate — they ship, earn, and lead.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-3xl border border-slate-800/60 bg-slate-900/30 p-6 hover:border-slate-700/80 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group"
            >
              {/* Corner quote */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-slate-800 group-hover:text-slate-700 transition-colors" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array(t.stars).fill(null).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-black text-white flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white truncate">{t.name}</p>
                  <p className="text-[11px] text-slate-500 truncate">{t.role}</p>
                </div>
                <div className="ml-auto flex-shrink-0">
                  <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    {t.stipend}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner logos */}
        <div className="text-center">
          <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-6">
            Our students intern & work at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {logos.map((logo) => (
              <div
                key={logo}
                className="px-5 py-2.5 rounded-xl border border-slate-800/60 bg-slate-900/30 text-sm font-bold text-slate-500 hover:text-slate-300 hover:border-slate-700/80 transition-all duration-200"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
