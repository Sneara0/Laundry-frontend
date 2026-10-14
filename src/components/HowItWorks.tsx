"use client";

import React, { useState } from "react";
import {
  CalendarCheck,
  Truck,
  Sparkles,
  Shirt,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MapPin,
  Leaf,
  Zap,
  ChevronRight,
  Star,
  Check,
  Sparkle,
  Sparkles as SparklesIcon,
  ShoppingBag,
  BadgeCheck,
} from "lucide-react";

interface Step {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  timeEstimate: string;
  badge: string;
  perks: string[];
  mockType: "booking" | "tracking" | "wash" | "delivery";
}

const steps: Step[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Schedule Pickup",
    subtitle: "Easy 1-Min Booking",
    description:
      "Select your preferred pickup time slot, address, and garment care preferences in just a few clicks.",
    icon: CalendarCheck,
    timeEstimate: "⚡ 60-Sec Booking",
    badge: "Fast & Convenient",
    perks: ["Flexible time slots", "Custom detergent options", "Instant SMS update"],
    mockType: "booking",
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "We Collect",
    subtitle: "Free Doorstep Pickup",
    description:
      "Our friendly valet arrives at your doorstep with reusable hampers to securely bag and weigh your garments.",
    icon: Truck,
    timeEstimate: "🚚 Free Doorstep Pickup",
    badge: "GPS Tracked Valet",
    perks: ["Digital weigh receipt", "Eco-friendly hampers", "Live driver tracking"],
    mockType: "tracking",
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "Eco-Friendly Care",
    subtitle: "Expert Wash & Steam Press",
    description:
      "Clothes are sorted, pre-treated for stains, washed with non-toxic organic detergent, and steam ironed.",
    icon: Sparkles,
    timeEstimate: "🌿 100% Non-Toxic",
    badge: "Fabric Protection",
    perks: ["Hypoallergenic wash", "Separate batch treatment", "Sanitizing steam press"],
    mockType: "wash",
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "Delivered Fresh",
    subtitle: "Express 24h Return",
    description:
      "Your clothes are returned crisp, stainless, and neatly folded or hung in garment covers within 24–48 hours.",
    icon: Shirt,
    timeEstimate: "📦 24-48h Express",
    badge: "Guaranteed Quality",
    perks: ["Folded or hanger options", "Fresh scent guarantee", "Contactless delivery"],
    mockType: "delivery",
  },
];

export default function HowItWorks() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = steps[activeStepIndex];

  return (
    <section
      className="py-24 sm:py-28 bg-gradient-to-b from-white via-sky-50/50 to-slate-50 text-slate-900 relative overflow-hidden"
      id="how-it-works"
    >
      {/* Background Decorative Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 left-1/4 w-[35rem] h-[35rem] bg-sky-200/50 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-10 w-[30rem] h-[30rem] bg-emerald-100/60 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-10 w-[20rem] h-[20rem] bg-blue-100/50 rounded-full blur-[120px]" />
      </div>

      {/* Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(55,90,121,0.8) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#375a79]/10 border border-[#375a79]/20 backdrop-blur-md mb-6 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#375a79] animate-ping" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#375a79]">
              Simple 4-Step Process
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How It <span className="text-[#375a79] underline decoration-[#375a79]/30 decoration-wavy underline-offset-8">Works</span>
          </h2>

          <p className="mt-5 text-base sm:text-xl text-slate-600 leading-relaxed font-light">
            Laundry day made effortless. From your doorstep and back, experience 5-star garment care in 4 simple steps.
          </p>
        </div>

        {/* Desktop Connected Steps Cards */}
        <div className="relative mb-16">
          {/* Connecting Laser Line (Desktop) */}
          <div className="hidden lg:block absolute top-[72px] left-[8%] right-[8%] h-1 bg-slate-200 rounded-full z-0">
            <div
              className="h-full bg-[#375a79] transition-all duration-500 rounded-full shadow-[0_0_12px_rgba(55,90,121,0.4)]"
              style={{ width: `${(activeStepIndex / (steps.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStepIndex === idx;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`group relative rounded-3xl p-6 sm:p-7 cursor-pointer transition-all duration-300 flex flex-col justify-between border ${isActive
                    ? "bg-white border-[#375a79] shadow-xl shadow-[#375a79]/10 -translate-y-2 ring-2 ring-[#375a79]/30"
                    : "bg-white/80 border-slate-200/80 shadow-sm hover:bg-white hover:border-slate-300 hover:shadow-md hover:-translate-y-1"
                    }`}
                >
                  {/* Step Active Pill Glow */}
                  {isActive && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#375a79] text-white font-extrabold text-[10px] uppercase tracking-wider shadow-md">
                      Selected Step
                    </div>
                  )}

                  <div>
                    {/* Top Row: Icon Container */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="relative">
                        <div
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${isActive
                            ? "bg-[#375a79] text-white shadow-lg shadow-[#375a79]/25 scale-110"
                            : "bg-sky-100/80 text-[#375a79] group-hover:bg-[#375a79] group-hover:text-white"
                            }`}
                        >
                          <Icon className="w-7 h-7 stroke-[2.2]" />
                        </div>
                      </div>
                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="mb-3">
                      <span className="text-xs font-bold text-[#375a79] tracking-wide uppercase block mb-1">
                        {step.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#375a79] transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Highlight perk & badge */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#375a79]" />
                      {step.badge}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {step.timeEstimate.split(" ")[0]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Deep-Dive Preview Section */}
        <div className="rounded-3xl bg-white/90 border border-slate-200/90 p-6 sm:p-10 backdrop-blur-xl shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Step Breakdown details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#375a79]/10 border border-[#375a79]/20 text-[#375a79] text-xs font-bold uppercase tracking-wider">
                <Sparkle className="w-3.5 h-3.5 fill-[#375a79]" />
                Step {activeStep.stepNumber} Spotlight
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                  {activeStep.title}
                </h3>
                <p className="text-[#375a79] font-bold text-sm sm:text-base">
                  {activeStep.subtitle} &bull; <span className="text-slate-600">{activeStep.timeEstimate}</span>
                </p>
              </div>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {activeStep.description} Our modern system provides end-to-end transparency, real-time alerts, and meticulous fabric protection at every stage.
              </p>

              {/* Key Feature Perks List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  What you get at this step:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.perks.map((perk, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/80 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-slate-800"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#375a79]/15 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#375a79]" />
                      </div>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Navigation Dots */}
              <div className="flex items-center gap-2 pt-4">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStepIndex(idx)}
                    aria-label={`Go to step ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${activeStepIndex === idx
                      ? "w-8 bg-[#375a79]"
                      : "w-2.5 bg-slate-200 hover:bg-slate-400"
                      }`}
                  />
                ))}
                <span className="text-xs text-slate-500 ml-2 font-mono">
                  0{activeStepIndex + 1} / 04
                </span>
              </div>
            </div>

            {/* Right: Interactive Graphic Visual Mockup */}
            <div className="lg:col-span-6 flex justify-center w-full">
              <div className="relative w-full max-w-lg group">
                {/* Dynamic Ambient Glow Behind Card */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#375a79]/40 via-sky-500/20 to-[#a8d14a]/30 rounded-[32px] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 pointer-events-none" />

                {/* Main Glassmorphic Chassis */}
                <div className="relative w-full bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-[28px] p-5 sm:p-7 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.6)] text-white overflow-hidden">
                  {/* Subtle Top Specular Lighting Highlight */}
                  <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

                  {/* Card Radial Spotlight */}
                  <div className="absolute -top-24 -right-24 w-60 h-60 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#a8d14a]/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Visual Header */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/90 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/90 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                      <span className="ml-2 text-[11px] font-mono font-medium text-slate-400 hidden sm:inline">
                        pressio-os // v2.4
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        Live Workflow
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Content Mockup Based on Active Step */}
                  {activeStep.mockType === "booking" && (
                    <div className="space-y-4 animate-in fade-in duration-300 relative z-10">
                      {/* Top Header Card */}
                      <div className="flex items-center justify-between bg-white/[0.04] p-4 rounded-2xl border border-white/10 shadow-inner">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-gradient-to-br from-[#375a79] to-[#253f56] text-[#a8d14a] rounded-xl shadow-md shadow-[#375a79]/40 border border-[#a8d14a]/20">
                            <CalendarCheck className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="text-xs font-mono text-slate-400">Order #PR-8924</p>
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#375a79]/40 text-sky-200 font-semibold border border-sky-400/20">
                                Express Wash
                              </span>
                            </div>
                            <p className="text-sm font-bold text-white mt-0.5">Today, 5:00 PM – 7:00 PM</p>
                          </div>
                        </div>
                        <span className="text-[11px] font-bold px-2.5 py-1 bg-emerald-500/15 text-emerald-300 rounded-lg border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)] flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Confirmed
                        </span>
                      </div>

                      {/* Care Preferences */}
                      <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/[0.08] space-y-2.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                            <Sparkle className="w-3.5 h-3.5 text-[#a8d14a]" /> Selected Care Profile:
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">Custom Spec</span>
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/90 text-slate-200 rounded-xl border border-white/10 shadow-sm">
                            <Leaf className="w-3.5 h-3.5 text-[#a8d14a]" /> Eco Lavender Soap
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/90 text-slate-200 rounded-xl border border-white/10 shadow-sm">
                            <Shirt className="w-3.5 h-3.5 text-sky-300" /> Steam Press Finish
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/90 text-slate-200 rounded-xl border border-white/10 shadow-sm">
                            <ShoppingBag className="w-3.5 h-3.5 text-amber-300" /> Sealed Reusable Hamper
                          </span>
                        </div>
                      </div>

                      {/* ETA Countdown status bar */}
                      <div className="p-3.5 bg-gradient-to-r from-[#a8d14a]/15 via-[#a8d14a]/10 to-[#375a79]/20 border border-[#a8d14a]/30 rounded-2xl flex items-center justify-between text-xs text-white">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-[#a8d14a]/20 flex items-center justify-center text-[#a8d14a]">
                            <Clock className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-300 uppercase block font-semibold">Valet Pickup Window</span>
                            <span className="text-xs font-bold text-[#a8d14a]">Arriving in ~25 Minutes</span>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-[#a8d14a] text-slate-950 font-extrabold text-[10px]">
                          ON SCHEDULE
                        </span>
                      </div>
                    </div>
                  )}

                  {activeStep.mockType === "tracking" && (
                    <div className="space-y-4 animate-in fade-in duration-300 relative z-10">
                      {/* Valet Driver Profile */}
                      <div className="flex items-center gap-3.5 bg-white/[0.04] p-4 rounded-2xl border border-white/10">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#375a79] to-sky-600 flex items-center justify-center text-white font-extrabold text-lg shadow-lg border border-white/20">
                            RK
                          </div>
                          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-950" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-bold text-white truncate">Rahat Karim</p>
                            <span className="flex items-center text-xs text-amber-400 font-bold gap-1 bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/20">
                              <Star className="w-3.5 h-3.5 fill-amber-400" /> 4.98
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#a8d14a]" /> Verified Senior Valet &bull; 640+ Trips
                          </p>
                        </div>
                      </div>

                      {/* Live GPS Track Visualization */}
                      <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/[0.08] space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-300 font-medium flex items-center gap-1.5">
                            <Truck className="w-4 h-4 text-[#a8d14a]" /> Live Transit Tracking
                          </span>
                          <span className="text-[#a8d14a] font-mono font-bold text-xs bg-[#a8d14a]/10 px-2 py-0.5 rounded-md border border-[#a8d14a]/20">
                            0.8 km away &bull; 6m ETA
                          </span>
                        </div>

                        {/* Interactive Route Track */}
                        <div className="relative pt-2 pb-1">
                          <div className="w-full bg-slate-800 rounded-full h-2 relative overflow-hidden">
                            <div className="bg-gradient-to-r from-[#375a79] via-sky-400 to-[#a8d14a] h-full rounded-full w-4/5 animate-pulse" />
                          </div>
                          <div className="flex justify-between items-center text-[10px] text-slate-400 mt-2 font-mono">
                            <span>Hub Depot</span>
                            <span className="text-[#a8d14a] font-semibold flex items-center gap-1">
                              <MapPin className="w-3 h-3" /> Your Doorstep
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Digital Weigh & Tag Banner */}
                      <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/25 rounded-2xl flex items-center justify-between text-xs text-emerald-300">
                        <span className="flex items-center gap-2 font-medium">
                          <BadgeCheck className="w-4 h-4 text-emerald-400" /> Smart Tagged &amp; Weighed
                        </span>
                        <span className="font-mono font-bold text-white bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                          4.6 kg Verified
                        </span>
                      </div>
                    </div>
                  )}

                  {activeStep.mockType === "wash" && (
                    <div className="space-y-4 animate-in fade-in duration-300 relative z-10">
                      {/* Telemetry Sensor Gauges */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/[0.04] p-3.5 rounded-2xl border border-white/10 text-center relative overflow-hidden">
                          <div className="absolute top-0 inset-x-4 h-0.5 bg-gradient-to-r from-transparent via-[#a8d14a] to-transparent opacity-60" />
                          <p className="text-[11px] text-slate-400 uppercase font-mono tracking-wider">Water Temp</p>
                          <p className="text-xl font-black text-[#a8d14a] mt-1 tracking-tight">30°C Cold</p>
                          <span className="text-[10px] text-slate-400 block mt-0.5">Zero Fiber Stress</span>
                        </div>
                        <div className="bg-white/[0.04] p-3.5 rounded-2xl border border-white/10 text-center relative overflow-hidden">
                          <div className="absolute top-0 inset-x-4 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />
                          <p className="text-[11px] text-slate-400 uppercase font-mono tracking-wider">Detergent Formula</p>
                          <p className="text-xl font-black text-cyan-300 mt-1 tracking-tight">100% Bio</p>
                          <span className="text-[10px] text-slate-400 block mt-0.5">Organic &amp; Hypoallergenic</span>
                        </div>
                      </div>

                      {/* Multi-Stage Wash Progress */}
                      <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/[0.08] space-y-3">
                        <div className="flex items-center justify-between text-xs pb-1 border-b border-white/5">
                          <span className="text-slate-300 font-medium">Care Process Checklist</span>
                          <span className="text-[10px] font-mono text-emerald-400 font-semibold">2 of 3 Completed</span>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-slate-200">
                            <span className="flex items-center gap-2">
                              <SparklesIcon className="w-3.5 h-3.5 text-[#a8d14a]" /> Pre-stain Inspection &amp; Spotting
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                              Done
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-white font-medium">
                            <span className="flex items-center gap-2">
                              <Leaf className="w-3.5 h-3.5 text-cyan-300" /> Hydro-Sonic Gentle Wash (850 RPM)
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30 animate-pulse">
                              Active
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-slate-400">
                            <span className="flex items-center gap-2">
                              <Shirt className="w-3.5 h-3.5 text-slate-500" /> Sanitizing Steam Finishing (99.9%)
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-semibold border border-white/5">
                              Queued
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Eco Impact Footer */}
                      <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center justify-between text-xs text-cyan-300">
                        <span className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-cyan-400" /> Eco Water Conservation
                        </span>
                        <span className="font-mono font-bold text-white">42L Saved Today</span>
                      </div>
                    </div>
                  )}

                  {activeStep.mockType === "delivery" && (
                    <div className="space-y-4 animate-in fade-in duration-300 relative z-10">
                      {/* Quality Shield Banner */}
                      <div className="bg-white/[0.04] p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 text-[#a8d14a] text-xs font-bold mb-0.5">
                            <ShieldCheck className="w-4 h-4" /> 100% Quality Inspected
                          </div>
                          <p className="text-sm font-bold text-white">Dust-Proof Eco Packaging</p>
                        </div>
                        <span className="px-3 py-1 bg-[#a8d14a]/20 text-[#a8d14a] rounded-xl text-xs font-black border border-[#a8d14a]/30 shadow-[0_0_12px_rgba(168,209,74,0.2)]">
                          GRADE A+
                        </span>
                      </div>

                      {/* Garment Breakdown */}
                      <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/[0.08] space-y-2.5 text-xs">
                        <div className="flex justify-between items-center text-slate-300 pb-2 border-b border-white/5">
                          <span>Folded Garments:</span>
                          <span className="font-mono font-bold text-white bg-slate-800 px-2 py-0.5 rounded">6 Shirts / Tees</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-300 pb-2 border-b border-white/5">
                          <span>Hung on Wooden Hangers:</span>
                          <span className="font-mono font-bold text-white bg-slate-800 px-2 py-0.5 rounded">3 Suits / Blazers</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-300">
                          <span>Packaging:</span>
                          <span className="font-bold text-[#a8d14a]">100% Biodegradable Cover</span>
                        </div>
                      </div>

                      {/* Fast Express Delivery Capsule */}
                      <div className="p-3.5 bg-gradient-to-r from-emerald-500/15 via-[#a8d14a]/10 to-sky-500/15 border border-emerald-500/30 rounded-2xl flex items-center justify-between text-xs text-emerald-300">
                        <span className="flex items-center gap-2 font-bold text-white">
                          <ShoppingBag className="w-4 h-4 text-emerald-400" /> Doorstep Express Handover
                        </span>
                        <span className="font-mono font-extrabold text-[#a8d14a] bg-slate-900/80 px-2.5 py-1 rounded-lg border border-[#a8d14a]/30">
                          24h Guaranteed
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Promises Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white border border-slate-200/80 p-4 rounded-2xl flex flex-col items-center justify-center shadow-sm">
            <ShieldCheck className="w-6 h-6 text-[#375a79] mb-2" />
            <span className="text-sm font-bold text-slate-900">100% Garment Care</span>
            <span className="text-[11px] text-slate-500">Protection Guarantee</span>
          </div>
          <div className="bg-white border border-slate-200/80 p-4 rounded-2xl flex flex-col items-center justify-center shadow-sm">
            <Clock className="w-6 h-6 text-[#375a79] mb-2" />
            <span className="text-sm font-bold text-slate-900">Fast 24h Turnaround</span>
            <span className="text-[11px] text-slate-500">On-Time Delivery</span>
          </div>
          <div className="bg-white border border-slate-200/80 p-4 rounded-2xl flex flex-col items-center justify-center shadow-sm">
            <Leaf className="w-6 h-6 text-[#375a79] mb-2" />
            <span className="text-sm font-bold text-slate-900">Eco Detergents</span>
            <span className="text-[11px] text-slate-500">Non-Toxic &amp; Gentle</span>
          </div>
          <div className="bg-white border border-slate-200/80 p-4 rounded-2xl flex flex-col items-center justify-center shadow-sm">
            <Zap className="w-6 h-6 text-[#375a79] mb-2" />
            <span className="text-sm font-bold text-slate-900">Transparent Pricing</span>
            <span className="text-[11px] text-slate-500">No Hidden Charges</span>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center">
          <a
            href="/schedule-pickup"
            className="group inline-flex items-center justify-center gap-3 px-10 py-4.5 text-base font-extrabold text-white bg-[#375a79] hover:bg-[#2b4760] rounded-full shadow-lg shadow-[#375a79]/20 hover:shadow-xl hover:shadow-[#375a79]/35 hover:scale-105 active:scale-[0.98] transition-all duration-300"
          >
            Schedule Your Free Pickup
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

