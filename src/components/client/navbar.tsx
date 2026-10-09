"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import {
  Shirt,
  Sparkles,
  Droplets,
  Wind,
  Brush,
  BedDouble,
  Star,
  Building2,
  ChevronDown,
  Phone,
  MapPin,
  Clock,
  HelpCircle,
  Menu,
  X,
  CalendarCheck,
} from "lucide-react";

const services = [
  { name: "Wash & Fold", href: "/services/wash-fold", icon: Shirt },
  { name: "Dry Cleaning", href: "/services/dry-cleaning", icon: Sparkles },
  { name: "Ironing & Pressing", href: "/services/ironing-pressing", icon: Wind },
  { name: "Stain Removal", href: "/services/stain-removal", icon: Droplets },
  { name: "Bedding & Linens", href: "/services/bedding-linens", icon: BedDouble },
  { name: "Specialty Care", href: "/services/specialty-care", icon: Star },
  { name: "Commercial Laundry", href: "/services/commercial-laundry", icon: Building2 },
];

const aboutLinks = [
  { name: "Our Story", href: "/about", icon: Shirt },
  { name: "Why Choose Us", href: "/about/why-choose-us", icon: Star },
  { name: "Quality & Care", href: "/about/quality-care", icon: Brush },
  { name: "FAQ", href: "/faq", icon: HelpCircle },
];

const navLinks = [
  { name: "Pricing", href: "/pricing" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Track Order", href: "/track-order" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (servicesDropdownRef.current) {
      gsap.fromTo(
        servicesDropdownRef.current,
        { y: -12, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [servicesOpen]);

  useEffect(() => {
    if (aboutDropdownRef.current) {
      gsap.fromTo(
        aboutDropdownRef.current,
        { y: -12, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [aboutOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [mobileOpen]);

  const closeDropdowns = () => {
    setServicesOpen(false);
    setAboutOpen(false);
  };

  return (
    <>
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 border-b-2 border-transparent hover:border-[#2ea2cc] ${
        scrolled
          ? "shadow-[0_4px_30px_rgba(219,112,147,0.12)]"
          : "shadow-[0_2px_20px_rgba(219,112,147,0.08)]"
      }`}
      style={{
        opacity: 0,
        fontFamily: "var(--font-montserrat)",
        fontSize: "100%",
        fontStyle: "inherit",
        fontWeight: "inherit",
        lineHeight: "inherit",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" style={{ fontFamily: "var(--font-montserrat)", fontSize: "100%", fontStyle: "inherit", fontWeight: "inherit", lineHeight: "inherit" }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl shadow-lg shadow-[#375a79]/25 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[#375a79]/40">
            <img src="/images/logo.png" alt="Pressio Logo" className="h-full w-full object-contain" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#375a79]">
            PRESSIO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              setServicesOpen(true);
              setAboutOpen(false);
            }}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div
                ref={servicesDropdownRef}
                className="absolute left-0 top-full mt-6 w-[320px] rounded-2xl border border-[#375a79]/20 bg-[#375a79] p-3 shadow-2xl shadow-[#375a79]/20"
                style={{ opacity: 0 }}
              >
                <div className="mb-2 px-3 pt-1 pb-2">
                 
                </div>
                {services.map((service) => {
          
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={closeDropdowns}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white group/item"
                    >
                      
                      {service.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              {link.name}
            </Link>
          ))}

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              setAboutOpen(true);
              setServicesOpen(false);
            }}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              About
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  aboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {aboutOpen && (
              <div
                ref={aboutDropdownRef}
                className="absolute left-0 top-full mt-6 w-[260px] rounded-2xl border border-[#375a79]/20 bg-[#375a79] p-3 shadow-2xl shadow-[#375a79]/20"
                style={{ opacity: 0 }}
              >
                <div className="mb-1 px-3 pt-0 pb-2">
                 
                </div>
                {aboutLinks.map((item) => {
             
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeDropdowns}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white group/item"
                    >
                    
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-full px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/schedule-pickup"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#375a79] to-[#2d4a63] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#375a79]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#375a79]/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-2">
          
              Schedule Pickup
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#375a79] to-[#2d4a63] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
    </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-0 z-[60] bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed right-0 top-0 z-[70] flex h-full w-[300px] flex-col bg-white shadow-2xl transition-transform duration-400 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
          {/* Mobile Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setMobileOpen(false)}
            >
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl">
                <img src="/images/logo.png" alt="Pressio Logo" className="h-full w-full object-contain" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-[#375a79] to-[#2d4a63] bg-clip-text text-transparent">
                PRESSIO
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex-1 overflow-y-auto custom-scrollbar px-4 py-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Home
            </Link>

            {/* Services Accordion */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 text-gray-400 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {servicesOpen && (
              <div className="ml-3 border-l-2 border-[#375a79]/20 pl-3">
                {services.map((service) => {
   
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-[#375a79]/10 hover:text-[#375a79]"
                    >
                    
                      {service.name}
                    </Link>
                  );
                })}
              </div>
            )}

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}

            {/* About Accordion */}
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              About
              <ChevronDown
                className={`h-4 w-4 text-gray-400 transition-transform ${
                  aboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {aboutOpen && (
              <div className="ml-3 border-l-2 border-[#375a79]/20 pl-3">
                {aboutLinks.map((item) => {
        
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-[#375a79]/10 hover:text-[#375a79]"
                    >
                
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Mobile Bottom */}
          <div className="shrink-0 border-t border-gray-100 px-5 py-5 space-y-3">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Login
            </Link>
            <Link
              href="/schedule-pickup"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#375a79] to-[#2d4a63] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#375a79]/25"
            >
          
              Schedule Pickup
            </Link>
          </div>
      </div>
    </>
  );
}
