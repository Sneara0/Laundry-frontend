"use client";

import React from "react";
import Link from "next/link";
import {
  MessageCircle,
  ChevronUp,
  Globe,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#090b14] text-white pt-20 pb-12 relative overflow-hidden font-sans border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Top Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-slate-800/80 items-start">
          
          {/* Column 1: Contact & Address */}
          <div className="md:col-span-4 lg:col-span-3 space-y-6 text-sm text-slate-300 font-light leading-relaxed">
            <div>
              <p className="text-slate-300">785 15th Street, Office 47</p>
              <p className="text-slate-400">Berlin, De 81566</p>
            </div>

            <div className="pt-2 space-y-1">
              <p className="hover:text-white transition-colors cursor-pointer">
                info@pressiolaundry.com
              </p>
              <p className="hover:text-white transition-colors font-mono">
                +1 840 841 25 69
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links Navigation */}
          <div className="md:col-span-3 lg:col-span-2">
            <ul className="space-y-3.5 text-sm font-medium text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-white transition-colors block">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Large Display Typography Statement */}
          <div className="md:col-span-5 lg:col-span-7 lg:pl-10 space-y-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Everyday laundry care, <br />
              <span className="text-white">done right</span>
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-slate-400 max-w-xl leading-relaxed font-light pt-2">
              Pressio keeps your clothes fresh, clean, and ready for life. Book a pickup, visit our shop, or contact us today for laundry care now.
            </p>
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:border-white hover:text-white hover:scale-105 transition-all text-sm font-semibold"
            >
              f
            </a>
            <a
              href="#"
              aria-label="Behance"
              className="w-10 h-10 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:border-white hover:text-white hover:scale-105 transition-all text-xs font-bold"
            >
              Bē
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:border-white hover:text-white hover:scale-105 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="#"
              aria-label="Website"
              className="w-10 h-10 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:border-white hover:text-white hover:scale-105 transition-all"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Chat Pill & Scroll to top */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-xs">
            {/* Floating Chat Pill */}
            <div className="flex items-center gap-2">
              <div className="bg-white text-slate-950 font-bold px-4 py-2 rounded-full shadow-md text-xs">
                Chat with us!
              </div>
              <button
                aria-label="Open Chat"
                className="w-10 h-10 rounded-full bg-[#22c55e] text-white flex items-center justify-center shadow-lg hover:bg-[#1ea34d] hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </button>
            </div>

            {/* Copyright Notice */}
            <span className="text-slate-400 text-xs font-light">
              &copy; Pressio. 2026. All Rights Reserved.
            </span>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-white flex items-center justify-center hover:bg-slate-700 transition-colors ml-2"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
