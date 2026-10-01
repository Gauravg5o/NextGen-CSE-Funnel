import { GraduationCap, Phone, Mail, ExternalLink, Globe, Link2, Play } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060610] to-[#080814]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA band */}
        <div className="py-12 border-b border-slate-800/50">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-1.5">
                Ready to build your <span className="gradient-text">future?</span>
              </h3>
              <p className="text-slate-500 text-sm">
                2027 batch is filling up. Book your free counseling session today.
              </p>
            </div>
            <a
              href="#lead-form"
              className="group relative overflow-hidden flex-shrink-0 flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black rounded-2xl transition-all duration-300 shadow-xl shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:scale-[1.02] text-sm animate-pulse-glow"
            >
              <div className="absolute inset-0 animate-shimmer" />
              Book Free Session →
            </a>
          </div>
        </div>

        {/* Links grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-slate-800/50">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-500" />
                <div className="absolute inset-[2px] rounded-[6px] bg-[#080814] flex items-center justify-center">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400" strokeWidth={2.5} />
                </div>
              </div>
              <span className="text-sm font-black text-white">TechGrad <span className="gradient-text">CSE</span></span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-5 max-w-48">
              India&apos;s first work-integrated B.Tech CSE — engineered to produce Day-1-ready engineers.
            </p>
            <div className="space-y-2">
              <a href="tel:+919999999999" className="flex items-center gap-2 text-xs text-slate-600 hover:text-indigo-400 transition-colors">
                <Phone className="w-3.5 h-3.5" /> +91-99999-99999
              </a>
              <a href="mailto:admissions@techgradcse.in" className="flex items-center gap-2 text-xs text-slate-600 hover:text-indigo-400 transition-colors">
                <Mail className="w-3.5 h-3.5" /> admissions@techgradcse.in
              </a>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-2 mt-5">
            {[Globe, Link2, Play].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg border border-slate-800 hover:border-indigo-500/40 bg-slate-900/50 hover:bg-indigo-500/10 flex items-center justify-center text-slate-600 hover:text-indigo-400 transition-all duration-200">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Program */}
          <div>
            <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">Program</h4>
            <ul className="space-y-2.5">
              {["Program Overview", "4-Year Curriculum", "Internship Model", "Placement Stats"].map((l) => (
                <li key={l}><a href="#" className="text-xs text-slate-600 hover:text-slate-300 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">Admissions</h4>
            <ul className="space-y-2.5">
              {["Book Counseling", "Eligibility Criteria", "Fee Structure", "Scholarships"].map((l) => (
                <li key={l}><a href="#lead-form" className="text-xs text-slate-600 hover:text-slate-300 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {["Privacy Policy", "Terms & Conditions", "Refund Policy", "Affiliations"].map((l) => (
                <li key={l}>
                  <a href="#" className="flex items-center gap-1 text-xs text-slate-600 hover:text-slate-300 transition-colors">
                    {l} <ExternalLink className="w-2.5 h-2.5 opacity-40" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[11px] text-slate-700 leading-relaxed max-w-2xl">
            <strong className="text-slate-600">Disclaimer:</strong> TechGrad CSE is a marketing entity representing a work-integrated B.Tech CSE program delivered in partnership with UGC-recognized universities. Degree certificates are issued by the affiliated university. Internship stipends are indicative and vary by partner company. This website does not guarantee employment.
          </p>
          <p className="text-[11px] text-slate-700 flex-shrink-0">© {year} TechGrad CSE.</p>
        </div>
      </div>
    </footer>
  );
}
