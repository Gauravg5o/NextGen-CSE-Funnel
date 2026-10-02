"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import {
  User, Phone, Mail, BookOpen, MapPin, Clock,
  ArrowRight, CheckCircle2, MessageCircle,
  Calendar, Loader2, Shield, Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ── Schema ──────────────────────────────────────────────────────────────────
const formSchema = z.object({
  fullName: z.string().min(2, "At least 2 characters").max(60).regex(/^[a-zA-Z\s]+$/, "Letters only"),
  whatsapp: z.string().regex(/^[6-9]\d{9}$/, "Valid 10-digit Indian number required"),
  email: z.string().email("Valid email required"),
  academicStatus: z.enum(["class12_appearing","class12_passed","dropper","first_year_college"], {
    error: "Please select your status",
  }),
  targetCity: z.string().min(2, "Enter your city / state").max(80),
  preferredSlot: z.enum(["morning","afternoon","evening"], {
    error: "Please pick a slot",
  }),
});
type FormValues = z.infer<typeof formSchema>;

async function submitLeadForm(data: FormValues): Promise<void> {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || !result?.success) {
    throw new Error(result?.error || "Failed to submit counseling request");
  }
}

// ── Success card ─────────────────────────────────────────────────────────────
function SuccessCard({ name }: { name: string }) {
  return (
    <div className="text-center py-8 px-2 animate-fade-in-up">
      {/* Animated checkmark */}
      <div className="relative mx-auto w-24 h-24 mb-6">
        <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-ping" style={{ animationDuration: "2s" }} />
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-2 border-emerald-500/40 flex items-center justify-center">
          <CheckCircle2 className="w-12 h-12 text-emerald-400" />
        </div>
      </div>

      <h3 className="text-2xl font-black text-white mb-2">
        You&apos;re Confirmed, {name.split(" ")[0]}! 🎉
      </h3>
      <p className="text-slate-400 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
        Your slot is reserved. Our academic counselor will call you on WhatsApp within{" "}
        <span className="text-emerald-400 font-bold">24 hours</span> to confirm your appointment.
      </p>

      {/* What happens next */}
      <div className="text-left mb-7 space-y-2.5 max-w-xs mx-auto">
        {["Counselor calls on your WhatsApp", "30-min deep-dive into the program", "Get personalised fee & scholarship plan"].map((step, i) => (
          <div key={step} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-[10px] font-black text-emerald-400 flex-shrink-0">
              {i + 1}
            </div>
            <span className="text-xs text-slate-300">{step}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
        <a
          href="https://wa.me/917667873988?text=Hi%2C+I+just+booked+a+TechGrad+CSE+counseling+session!"
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#25D366]/25 w-full sm:w-auto justify-center"
        >
          <MessageCircle className="w-4 h-4" />
          Join WhatsApp Group
        </a>
        <a
          href="#curriculum"
          className="flex items-center gap-2 px-6 py-3.5 glass-card border border-slate-700/50 hover:border-indigo-500/40 text-slate-200 font-semibold rounded-xl transition-all w-full sm:w-auto justify-center"
        >
          Explore Curriculum →
        </a>
      </div>
      <p className="mt-5 text-xs text-slate-600">
        Need immediate help?{" "}
        <a href="tel:+917667873988" className="text-indigo-400 hover:underline">
          +91-76678-73988
        </a>
      </p>
    </div>
  );
}

// ── Field wrapper ─────────────────────────────────────────────────────────────
const inputBase =
  "w-full px-4 py-3 bg-slate-900/80 border border-slate-700/50 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200";
const inputError = "border-red-500/50 focus:border-red-500 focus:ring-red-500/20";

function Field({ label, htmlFor, error, icon: Icon, children }: {
  label: string; htmlFor: string; error?: string; icon: React.ElementType; children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest">
        <Icon className="w-3 h-3 text-slate-600" />
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-400 flex items-center gap-1.5 mt-1">
          <span className="w-1 h-1 rounded-full bg-red-400 flex-shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function LeadCaptureForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await submitLeadForm(data);
      setSubmittedName(data.fullName);
      setSubmitted(true);
      toast.success("Slot reserved! We'll call you within 24 hours.", { duration: 5000 });
    } catch {
      toast.error("Something went wrong. Please call us directly.");
    }
  };

  const slots = [
    { value: "morning", label: "Morning", time: "10 AM–1 PM", emoji: "🌅" },
    { value: "afternoon", label: "Afternoon", time: "2 PM–5 PM", emoji: "☀️" },
    { value: "evening", label: "Evening", time: "6 PM–9 PM", emoji: "🌆" },
  ] as const;

  return (
    <section id="lead-form" className="py-20 lg:py-28 relative scroll-mt-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-600/6 rounded-full blur-3xl" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/25 bg-indigo-500/8 text-indigo-300 text-xs font-bold tracking-wide mb-5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Limited Slots This Week
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
            Reserve Your{" "}
            <span className="gradient-text">Free 1-on-1</span>
            <br />Counseling Slot
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-md mx-auto">
            30 minutes. Zero commitment.{" "}
            <span className="text-amber-400 font-semibold">Parents encouraged to attend.</span>
          </p>

          {/* Quick chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
            {[
              { icon: Calendar, label: "Slots available today" },
              { icon: Clock, label: "30-min session" },
              { icon: Shield, label: "100% free, no pressure" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-900/50 border border-slate-800/60 rounded-full px-3 py-1.5">
                <Icon className="w-3 h-3 text-indigo-400" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Form card */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Gradient border via pseudo-background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-slate-800/30 to-emerald-500/10 rounded-3xl" />
          <div className="absolute inset-[1px] rounded-[23px] bg-[#0a0a18]" />

          {/* Top accent bar */}
          <div className="relative h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-emerald-500 animate-gradient" />

          <div className="relative p-6 sm:p-8">
            {submitted ? (
              <SuccessCard name={submittedName} />
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Student Full Name" htmlFor="fullName" error={errors.fullName?.message} icon={User}>
                    <input id="fullName" type="text" placeholder="Arjun Sharma" autoComplete="name"
                      {...register("fullName")}
                      className={cn(inputBase, errors.fullName && inputError)} />
                  </Field>
                  <Field label="WhatsApp Number" htmlFor="whatsapp" error={errors.whatsapp?.message} icon={Phone}>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 select-none pointer-events-none border-r border-slate-700/50 pr-3">
                        <span className="text-base leading-none">🇮🇳</span>
                        <span className="text-sm font-bold text-slate-400">+91</span>
                      </div>
                      <input id="whatsapp" type="tel" placeholder="9876543210" maxLength={10}
                        {...register("whatsapp")}
                        className={cn(inputBase, "pl-20", errors.whatsapp && inputError)} />
                    </div>
                  </Field>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Email Address" htmlFor="email" error={errors.email?.message} icon={Mail}>
                    <input id="email" type="email" placeholder="arjun@gmail.com" autoComplete="email"
                      {...register("email")}
                      className={cn(inputBase, errors.email && inputError)} />
                  </Field>
                  <Field label="City / State" htmlFor="targetCity" error={errors.targetCity?.message} icon={MapPin}>
                    <input id="targetCity" type="text" placeholder="e.g. Delhi, Maharashtra"
                      {...register("targetCity")}
                      className={cn(inputBase, errors.targetCity && inputError)} />
                  </Field>
                </div>

                {/* Academic status */}
                <Field label="Current Academic Status" htmlFor="academicStatus" error={errors.academicStatus?.message} icon={BookOpen}>
                  <select id="academicStatus" defaultValue="" {...register("academicStatus")}
                    className={cn(inputBase, "appearance-none cursor-pointer", errors.academicStatus && inputError)}>
                    <option value="" disabled>Select your current status…</option>
                    <option value="class12_appearing">Class 12th — Currently Appearing</option>
                    <option value="class12_passed">Class 12th — Passed (PCM)</option>
                    <option value="dropper">Dropper (Preparing for Re-Attempt)</option>
                    <option value="first_year_college">1st Year College Student</option>
                  </select>
                </Field>

                {/* Time slot */}
                <div className="space-y-2">
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <Clock className="w-3 h-3 text-slate-600" />
                    Preferred Counseling Slot
                  </label>
                  <div className="grid grid-cols-3 gap-3" role="radiogroup">
                    {slots.map((slot) => (
                      <label key={slot.value} className="cursor-pointer select-none">
                        <input type="radio" value={slot.value} {...register("preferredSlot")} className="sr-only peer" />
                        <div className="flex flex-col items-center p-3.5 rounded-2xl border border-slate-700/50 bg-slate-900/50 transition-all duration-200 peer-checked:border-indigo-500/60 peer-checked:bg-indigo-500/10 peer-checked:shadow-lg peer-checked:shadow-indigo-500/10 hover:border-slate-600/80 hover:bg-slate-800/50">
                          <span className="text-2xl mb-1.5">{slot.emoji}</span>
                          <span className="text-xs font-black text-slate-200">{slot.label}</span>
                          <span className="text-[10px] text-slate-500 mt-0.5">{slot.time}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.preferredSlot && (
                    <p className="text-xs text-red-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-red-400" />
                      {errors.preferredSlot.message}
                    </p>
                  )}
                </div>

                {/* Trust note */}
                <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
                  <Shield className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <p className="text-xs text-slate-500">
                    Your data is encrypted and <span className="text-slate-400">never shared or sold</span>. Used solely to schedule your session.
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative overflow-hidden w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 animate-gradient disabled:opacity-60 disabled:cursor-not-allowed text-white font-black text-base rounded-2xl transition-all duration-300 shadow-2xl shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:scale-[1.01] mt-1"
                >
                  <div className="absolute inset-0 animate-shimmer" />
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Reserving Your Slot…
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      Reserve My Free Counseling Slot
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
