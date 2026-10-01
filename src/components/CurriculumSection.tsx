import { Code2, Server, Briefcase, Trophy, ArrowRight } from "lucide-react";

const years = [
  {
    year: "Year 1",
    label: "Engineering Foundations",
    icon: Code2,
    gradient: "from-indigo-600 to-blue-600",
    glow: "shadow-indigo-500/30",
    border: "border-indigo-500/20",
    bg: "bg-indigo-500/5",
    textColor: "text-indigo-400",
    badgeBg: "bg-indigo-500/15 text-indigo-300 border-indigo-500/25",
    dotColor: "bg-indigo-400",
    description: "Build unshakeable CS fundamentals with hands-on projects from Day 1.",
    topics: [
      "Python & JavaScript from Scratch",
      "Data Structures & Algorithms (DSA)",
      "Full-Stack Web Dev (React + Node.js)",
      "SQL & NoSQL Databases",
      "Linux CLI, Git & Team Collaboration",
      "Math & Logic for Computer Science",
    ],
    deliverable: "Portfolio site + first open-source PR",
    stipend: null,
  },
  {
    year: "Year 2",
    label: "Product Engineering",
    icon: Server,
    gradient: "from-violet-600 to-purple-600",
    glow: "shadow-violet-500/30",
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
    textColor: "text-violet-400",
    badgeBg: "bg-violet-500/15 text-violet-300 border-violet-500/25",
    dotColor: "bg-violet-400",
    description: "Build production-grade SaaS products and prepare for your first internship.",
    topics: [
      "Advanced Backend & REST/GraphQL APIs",
      "Microservices & System Design",
      "AWS/GCP, Docker & Kubernetes",
      "AI/ML Integration & LLM Engineering",
      "TypeScript, Next.js & Modern Frontend",
      "Internship Readiness & Mock Interviews",
    ],
    deliverable: "Full-stack SaaS product + internship placement",
    stipend: null,
  },
  {
    year: "Year 3",
    label: "Corporate Internship I",
    icon: Briefcase,
    gradient: "from-emerald-600 to-teal-600",
    glow: "shadow-emerald-500/30",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    textColor: "text-emerald-400",
    badgeBg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
    dotColor: "bg-emerald-400",
    description: "Work as an embedded software engineer at a partner company.",
    topics: [
      "Full-Time Internship at Corporate Partner",
      "Real Engineering Team Dynamics",
      "Agile, Scrum & Sprint Planning",
      "Production Code Reviews & Deployments",
      "Elective Specialization Modules",
      "Credit hours counted toward degree",
    ],
    deliverable: "Industry certificate + LOR from tech lead",
    stipend: "₹15K–₹30K / month",
  },
  {
    year: "Year 4",
    label: "Senior Internship + Degree",
    icon: Trophy,
    gradient: "from-amber-500 to-orange-500",
    glow: "shadow-amber-500/30",
    border: "border-amber-500/20",
    bg: "bg-amber-500/5",
    textColor: "text-amber-400",
    badgeBg: "bg-amber-500/15 text-amber-300 border-amber-500/25",
    dotColor: "bg-amber-400",
    description: "Senior-level role with higher pay + capstone project + B.Tech conferral.",
    topics: [
      "Senior Engineering Internship (Higher Stipend)",
      "Capstone Research / Startup Project",
      "Advanced DSA & Competitive Programming",
      "System Design for Senior Roles",
      "Placement Drive & Offer Negotiation",
      "UGC B.Tech Degree Conferral",
    ],
    deliverable: "UGC B.Tech degree + 2 years industry XP",
    stipend: "₹25K–₹40K / month",
  },
];

export default function CurriculumSection() {
  return (
    <section id="curriculum" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      {/* Background orb */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3.5 py-1.5 text-xs font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-5 tracking-widest uppercase">
            4-Year Learning Roadmap
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
            From Zero to{" "}
            <span className="gradient-text">Senior Engineer</span>
          </h2>
          <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto">
            A curriculum engineered for the real world — every module maps to an actual skill hiring managers pay for.
          </p>
        </div>

        {/* Timeline connector — desktop */}
        <div className="hidden xl:flex items-center justify-between max-w-5xl mx-auto mb-8 px-6">
          {years.map((yr, i) => (
            <div key={yr.year} className="flex items-center flex-1">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${yr.gradient} flex items-center justify-center text-white text-xs font-black shadow-lg ${yr.glow} flex-shrink-0`}>
                {i + 1}
              </div>
              {i < years.length - 1 && (
                <div className="flex-1 h-px mx-2 bg-gradient-to-r from-slate-600/50 to-slate-700/30 relative">
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {years.map((yr) => {
            const Icon = yr.icon;
            return (
              <div
                key={yr.year}
                className={`relative rounded-3xl border ${yr.border} ${yr.bg} p-6 flex flex-col group hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent ${yr.textColor} opacity-50`} />

                {/* Icon + badge row */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${yr.gradient} flex items-center justify-center shadow-lg ${yr.glow}`}>
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <span className={`text-[11px] font-black px-2.5 py-1 rounded-full border ${yr.badgeBg}`}>
                    {yr.year}
                  </span>
                </div>

                <h3 className={`text-base font-black ${yr.textColor} mb-1.5`}>{yr.label}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{yr.description}</p>

                {/* Topic list */}
                <ul className="space-y-2 flex-1">
                  {yr.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${yr.dotColor} flex-shrink-0`} />
                      <span className="text-xs text-slate-300 leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </ul>

                {/* Stipend badge */}
                {yr.stipend && (
                  <div className="mt-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-base">💰</span>
                    <div>
                      <p className="text-[10px] font-semibold text-emerald-500 uppercase tracking-wide">Monthly Stipend</p>
                      <p className="text-sm font-black text-emerald-300">{yr.stipend}</p>
                    </div>
                  </div>
                )}

                {/* Deliverable */}
                <div className={`mt-4 pt-4 border-t ${yr.border}`}>
                  <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-1">
                    Year Outcome
                  </p>
                  <p className={`text-xs font-bold ${yr.textColor} leading-snug`}>
                    {yr.deliverable}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
