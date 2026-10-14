"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Crown, Plus, Minus, ArrowRight, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(1); // Index 1 ("Can I book a pickup online?") open by default

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 25,
      yearlyPrice: 20,
      description: "Ideal for individuals & light laundry needs.",
      isPopular: false,
      features: [
        "Pickup at your door",
        "Eco wash cycles",
        "Fast 24h service",
        "No long contracts",
      ],
      buttonText: "Choose Starter",
      buttonVariant: "outline",
    },
    {
      name: "Professional",
      monthlyPrice: 50,
      yearlyPrice: 40,
      description: "Best for busy professionals & small families.",
      isPopular: true,
      features: [
        "Priority next-day wash",
        "Stain care included",
        "Delicate fabric safe",
        "Flexible delivery slots",
      ],
      buttonText: "Choose Professional",
      buttonVariant: "primary",
    },
    {
      name: "Advanced",
      monthlyPrice: 500,
      yearlyPrice: 400,
      description: "Comprehensive care for high volume & businesses.",
      isPopular: false,
      features: [
        "Business linen care",
        "Uniforms cleaned fast",
        "Bulk order savings",
        "Custom delivery slots",
      ],
      buttonText: "Choose Advanced",
      buttonVariant: "outline",
    },
  ];

  const faqs = [
    {
      question: "How do I get started with Washroom?",
      answer:
        "Getting started is fast and effortless! Choose a plan above or schedule your very first pickup. Our valet will provide you with custom reusable laundry bags during pickup.",
    },
    {
      question: "Can I book a pickup online?",
      answer:
        "Absolutely! Use our site or app to arrange pickups and deliveries—making laundry simple no matter where you are.",
    },
    {
      question: "What services does Washroom offer?",
      answer:
        "We offer complete wash & fold, premium eco-friendly dry cleaning, delicate steam pressing, intensive stain treatment, bedding & linen service, and bespoke commercial laundry packages.",
    },
    {
      question: "Do you serve local businesses in Toronto?",
      answer:
        "Yes, our Advanced commercial tier provides dedicated bulk pickups, custom delivery slots, business linen care, and priority turnarounds for restaurants, spas, gyms, and boutique hotels.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main className="min-h-screen bg-[#fafbfc] text-slate-900 font-sans">
      {/* 1. Header & Hero Section */}
      <section className="pt-24 sm:pt-28 pb-14 sm:pb-16 px-4 text-center max-w-4xl mx-auto">
        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#375a79] mb-4 sm:mb-5">
          Simple Pricing Options
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1e1324] tracking-tight leading-[1.15] mb-8 sm:mb-10">
          Choose the plan right <br className="hidden sm:inline" />
          for you
        </h1>

        {/* Monthly / Yearly Toggle Pill */}
        <div className="inline-flex items-center p-1 rounded-full bg-[#f4f6fa] border border-slate-200/80">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              billingCycle === "monthly"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              billingCycle === "yearly"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Yearly
          </button>
        </div>
      </section>

      {/* 2. Pricing Cards Grid */}
      <section className="pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 items-stretch pt-4">
          {plans.map((plan) => {
            const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? "rounded-3xl shadow-2xl bg-white border border-slate-200 lg:-translate-y-4 z-10 ring-1 ring-slate-900/5"
                    : "rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl"
                }`}
              >
                {/* Popular Crown Ribbon for Middle Card */}
                {plan.isPopular && (
                  <div className="bg-[#0b0c1b] text-white py-2.5 rounded-t-3xl text-center flex items-center justify-center gap-2 text-xs font-semibold tracking-wide">
                    <Crown className="w-3.5 h-3.5 stroke-[2] text-white" />
                    <span>Most popular</span>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-8 sm:p-9 flex-1 flex flex-col">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-[#1e1324] mb-3">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-6">
                    <span className="text-4xl sm:text-5xl font-black text-[#2e3e4e] tracking-tight">
                      ${price}
                    </span>
                    <span className="text-slate-400 font-medium text-sm">
                      / per month
                    </span>
                  </div>

                  {/* Horizontal Divider Line */}
                  <div className="border-b border-slate-100 mb-6" />

                  {/* Feature Checklist with Distinctive Pink Circles */}
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3.5 text-sm text-slate-500 font-medium">
                        <span className="w-5 h-5 rounded-full bg-[#f472b6] flex items-center justify-center text-white shrink-0 shadow-xs">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Action Button */}
                  <div className="pt-2">
                    {plan.isPopular ? (
                      <Link
                        href="/#pickup"
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-sm text-white bg-[#375a79] hover:bg-[#2b4760] shadow-lg shadow-[#375a79]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        {plan.buttonText}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <Link
                        href="/#pickup"
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-sm text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        {plan.buttonText}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Partner / Client Logos Row */}
      <section className="py-14 border-t border-slate-200/60 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-8 sm:gap-12 opacity-40 hover:opacity-70 transition-opacity duration-300 grayscale select-none">
            {/* wilko */}
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-700 lowercase">
              wilko
            </span>

            {/* ICA */}
            <span className="text-2xl sm:text-3xl font-black tracking-widest text-slate-700 uppercase">
              ICA
            </span>

            {/* RYOBI */}
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-slate-700 uppercase">
              RYOBI.
            </span>

            {/* Makita */}
            <span className="text-2xl sm:text-3xl font-black italic tracking-wide text-slate-700 font-sans">
              Makita
            </span>

            {/* D Symbol */}
            <div className="w-8 h-8 rounded-full border-[6px] border-slate-700 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            </div>

            {/* ENKA */}
            <span className="text-2xl sm:text-3xl font-black tracking-normal text-slate-700 uppercase">
              ENKA
            </span>
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headings & Intro */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#375a79]">
              Need Help With Laundry?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e1324] tracking-tight leading-[1.15]">
              Frequently asked <br />
              questions
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed pt-2 max-w-md">
              Washroom is here to make laundry care easy, sustainable, and stress-free for every client in Toronto.
            </p>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 divide-y divide-slate-200">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div key={idx} className="py-6 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none cursor-pointer"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-[#1e1324] group-hover:text-[#375a79] transition-colors">
                      {faq.question}
                    </h3>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 shrink-0 transition-transform">
                      {isOpen ? (
                        <Minus className="w-5 h-5 stroke-[2]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[2]" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8 text-sm sm:text-base text-slate-500 leading-relaxed animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Pink Statement Banner */}
      <section className="bg-[#f472b6] text-white py-16 sm:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed tracking-tight">
            Get in touch to discover how we can help your business thrive. Email us at{" "}
            <a
              href="mailto:hello@elementra.com"
              className="underline underline-offset-8 decoration-white/70 hover:decoration-white font-bold transition-all inline-block hover:scale-[1.01]"
            >
              hello@elementra.com
            </a>
          </p>
        </div>
      </section>

      {/* 6. Footer Integration */}
      <Footer />
    </main>
  );
}
