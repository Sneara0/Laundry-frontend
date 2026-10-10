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
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl relative text-white">
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#a8d14a]" />
                    Pressio Live Workflow
                  </span>
                </div>

                {/* Dynamic Content Mockup Based on Active Step */}
                {activeStep.mockType === "booking" && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#375a79] text-[#a8d14a] rounded-lg">
                          <CalendarCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400">Pickup Date</p>
                          <p className="text-sm font-bold text-white">Today, 5:00 PM – 7:00 PM</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-500/20 text-emerald-400 rounded-md border border-emerald-500/30">
                        Confirmed
                      </span>
                    </div>

                    <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/60 space-y-2">
                      <p className="text-xs font-semibold text-slate-400">Selected Preferences:</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2.5 py-1 bg-slate-700/80 text-slate-200 rounded-lg">
                          🌿 Eco Lavender Soap
                        </span>
                        <span className="px-2.5 py-1 bg-slate-700/80 text-slate-200 rounded-lg">
                          👔 Steam Press
                        </span>
                        <span className="px-2.5 py-1 bg-slate-700/80 text-slate-200 rounded-lg">
                          📦 Folded &amp; Packaged
                        </span>
                      </div>
                    </div>

                    <div className="p-3 bg-[#a8d14a]/10 border border-[#a8d14a]/30 rounded-xl flex items-center gap-3 text-xs text-[#a8d14a]">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>Est. Pick Up Time: <b>25 Minutes from now</b></span>
                    </div>
                  </div>
                )}

                {activeStep.mockType === "tracking" && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center gap-3 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                      <div className="w-11 h-11 rounded-full bg-[#375a79] flex items-center justify-center text-white font-bold text-base shrink-0">
                        RK
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-bold text-white">Rahat K. (Valet)</p>
                          <span className="flex items-center text-xs text-amber-400 font-bold gap-1">
                            <Star className="w-3.5 h-3.5 fill-amber-400" /> 4.9
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                          <Truck className="w-3.5 h-3.5 text-[#a8d14a]" /> On route with Eco Hamper
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/60 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Live GPS Location:</span>
                        <span className="text-[#a8d14a] font-mono font-semibold">0.8 km away</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div className="bg-[#a8d14a] h-full rounded-full w-3/4 animate-pulse" />
                      </div>
                    </div>

                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-between text-xs text-emerald-400">
                      <span className="flex items-center gap-2">
                        <BadgeCheck className="w-4 h-4" /> Weighing &amp; Tagging
                      </span>
                      <span className="font-mono font-bold">100% Bagged</span>
                    </div>
                  </div>
                )}

                {activeStep.mockType === "wash" && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-center">
                        <p className="text-[11px] text-slate-400 uppercase font-medium">Wash Temp</p>
                        <p className="text-lg font-bold text-[#a8d14a] mt-1">30°C Eco Cold</p>
                      </div>
                      <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-center">
                        <p className="text-[11px] text-slate-400 uppercase font-medium">Detergent</p>
                        <p className="text-lg font-bold text-cyan-400 mt-1">100% Organic</p>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/60 space-y-2.5">
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <SparklesIcon className="w-3.5 h-3.5 text-[#a8d14a]" /> Pre-stain Treatment
                        </span>
                        <Check className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <Leaf className="w-3.5 h-3.5 text-[#a8d14a]" /> Allergen Free Rinse
                        </span>
                        <Check className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <Shirt className="w-3.5 h-3.5 text-[#a8d14a]" /> Professional Steam Iron
                        </span>
                        <Check className="w-4 h-4 text-emerald-400" />
                      </div>
                    </div>
                  </div>
                )}

                {activeStep.mockType === "delivery" && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-400">Garment Protection</p>
                        <p className="text-sm font-bold text-white">Dust-Proof Eco Cover</p>
                      </div>
                      <span className="px-2.5 py-1 bg-[#a8d14a]/20 text-[#a8d14a] rounded-lg text-xs font-bold">
                        Ready
                      </span>
                    </div>

                    <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/60 space-y-2 text-xs">
                      <div className="flex justify-between text-slate-300">
                        <span>Folded Shirts / Tops:</span>
                        <span className="font-bold text-white">6 Items</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Hung Suits &amp; Dresses:</span>
                        <span className="font-bold text-white">4 Items</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Quality Guarantee:</span>
                        <span className="font-bold text-[#a8d14a]">Passed 100%</span>
                      </div>
                    </div>

                    <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-between text-xs text-cyan-300">
                      <span className="flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4" /> Delivered to your Doorstep
                      </span>
                      <span className="font-mono font-bold">24-Hour Express</span>
                    </div>
                  </div>
                )}
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

