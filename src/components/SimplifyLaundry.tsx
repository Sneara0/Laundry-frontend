"use client";

import React from "react";
import Image from "next/image";
import {
  Shirt,
  WashingMachine,
  MessageCircle,
  ShoppingBag,
  Layers,
  FileText,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function SimplifyLaundry() {
  return (
    <section className="relative overflow-hidden min-h-[620px] sm:min-h-[660px] flex items-center bg-[#375a79]" id="simplify-laundry">
      
      {/* Edge-to-Edge Full Section Background Image Layer - Top Head View Preserved */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/simplify-laundry.jpg"
          alt="We simplify your laundry routine"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_top] sm:object-[75%_top] lg:object-top w-full h-full opacity-100"
        />
        {/* Hero Brand Tint Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#375a79]/90 via-[#375a79]/45 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Main Title & Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md mb-4 shadow-md">
                <span className="h-2 w-2 rounded-full bg-[#a8d14a] animate-pulse" />
                <span className="text-xs font-semibold tracking-wider text-white/90 uppercase">
                  Effortless Laundry Care
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-lg">
                We simplify your <br className="hidden sm:inline" />
                <span className="text-[#a8d14a]">laundry routine</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/90 max-w-lg leading-relaxed font-normal drop-shadow">
                Spend less time on laundry chores and more time enjoying life. Our 5-star wash &amp; fold delivery service handles it all with care.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="/schedule-pickup"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#a8d14a] px-8 py-4 text-base font-bold text-[#375a79] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#b5e052] active:scale-[0.98]"
              >
                Schedule Free Pickup
                <ArrowRight className="w-5 h-5 text-[#375a79]" />
              </a>
            </div>
          </div>

          {/* Right Side: Compact Glass Feature Cards */}
          <div className="lg:col-span-5 max-w-sm mx-auto lg:ml-auto space-y-3.5 z-20 w-full">
            
            {/* Feature Card 1: Spotless every time */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-white/60 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[#375a79] text-[#a8d14a] flex items-center justify-center shadow-md shadow-[#375a79]/30 shrink-0">
                  <Shirt className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#375a79]">
                    Spotless every time
                  </h3>
                  <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    100% Quality Protection
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trust us to handle your laundry so you can focus on what matters.
              </p>
            </div>

            {/* Feature Card 2: Eco-Friendly Care */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-white/60 hover:-translate-y-1 transition-all duration-300 relative">
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-bold text-[10px] shadow-sm">
                  Chat with us!
                </span>
                <a
                  href="#chat"
                  aria-label="Chat with support"
                  className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md hover:bg-emerald-600 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                </a>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[#375a79] text-[#a8d14a] flex items-center justify-center shadow-md shadow-[#375a79]/30 shrink-0">
                  <WashingMachine className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#375a79]">
                    Eco-Friendly Care
                  </h3>
                  <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    Organic Detergents
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pr-14">
                Hypoallergenic organic detergents gentle on your clothes &amp; skin.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Floating Action Right Sidebar Widget */}
      <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-1 bg-[#375a79]/80 backdrop-blur-md p-1.5 rounded-l-2xl border-l border-y border-white/20 shadow-2xl">
        <button
          aria-label="View Cart"
          className="p-3 text-white hover:bg-white/20 rounded-xl transition-colors"
        >
          <ShoppingBag className="w-5 h-5" />
        </button>
        <button
          aria-label="View Gallery"
          className="p-3 text-white hover:bg-white/20 rounded-xl transition-colors"
        >
          <Layers className="w-5 h-5" />
        </button>
        <button
          aria-label="Documentation"
          className="p-3 text-white hover:bg-white/20 rounded-xl transition-colors"
        >
          <FileText className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
