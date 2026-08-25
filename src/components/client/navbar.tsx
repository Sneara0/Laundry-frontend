"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const services = [
  {
    name: "Wash & Fold",
    href: "/services/wash-fold",
  },
  {
    name: "Dry Cleaning",
    href: "/services/dry-cleaning",
  },
  {
    name: "Ironing & Pressing",
    href: "/services/ironing-pressing",
  },
  {
    name: "Stain Removal",
    href: "/services/stain-removal",
  },
  {
    name: "Bedding & Linens",
    href: "/services/bedding-linens",
  },
  {
    name: "Specialty Care",
    href: "/services/specialty-care",
  },
  {
    name: "Commercial Laundry",
    href: "/services/commercial-laundry",
  },
];

const aboutLinks = [
  {
    name: "Our Story",
    href: "/about",
  },
  {
    name: "Why Choose Us",
    href: "/about/why-choose-us",
  },
  {
    name: "Quality & Care",
    href: "/about/quality-care",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (servicesDropdownRef.current) {
      gsap.fromTo(
        servicesDropdownRef.current,
        { y: -8, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [servicesOpen]);

  useEffect(() => {
    if (aboutDropdownRef.current) {
      gsap.fromTo(
        aboutDropdownRef.current,
        { y: -8, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [aboutOpen]);

  return (
    <header ref={navRef} className="sticky top-0 z-50 border-b bg-white" style={{ opacity: 0 }}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Laundry
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">

          <Link href="/" className="text-sm font-medium hover:text-blue-600">
            Home
          </Link>

          {/* Services */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-sm font-medium hover:text-blue-600"
            >
              Services
              <span>⌄</span>
            </button>

            {servicesOpen && (
              <div ref={servicesDropdownRef} className="absolute left-0 top-full mt-3 w-64 rounded-xl border bg-white p-2 shadow-xl">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setServicesOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-600"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            className="text-sm font-medium hover:text-blue-600"
          >
            Pricing
          </Link>

          <Link
            href="/how-it-works"
            className="text-sm font-medium hover:text-blue-600"
          >
            How It Works
          </Link>

          <Link
            href="/service-areas"
            className="text-sm font-medium hover:text-blue-600"
          >
            Service Areas
          </Link>

          <Link
            href="/track-order"
            className="text-sm font-medium hover:text-blue-600"
          >
            Track Order
          </Link>

          {/* About */}
          <div className="relative">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center gap-1 text-sm font-medium hover:text-blue-600"
            >
              About
              <span>⌄</span>
            </button>

            {aboutOpen && (
              <div ref={aboutDropdownRef} className="absolute left-0 top-full mt-3 w-56 rounded-xl border bg-white p-2 shadow-xl">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setAboutOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="text-sm font-medium hover:text-blue-600"
          >
            Contact
          </Link>
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/login"
            className="text-sm font-semibold hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            href="/schedule-pickup"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Schedule Pickup
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-gray-700 lg:hidden"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">

            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 hover:bg-gray-100"
            >
              Home
            </Link>

            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex justify-between rounded-lg px-4 py-3 text-left hover:bg-gray-100"
            >
              Services
              <span>⌄</span>
            </button>

            {servicesOpen && (
              <div className="ml-4 border-l pl-3">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-blue-600"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 hover:bg-gray-100"
            >
              Pricing
            </Link>

            <Link
              href="/how-it-works"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 hover:bg-gray-100"
            >
              How It Works
            </Link>

            <Link
              href="/service-areas"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 hover:bg-gray-100"
            >
              Service Areas
            </Link>

            <Link
              href="/track-order"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 hover:bg-gray-100"
            >
              Track Order
            </Link>

            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex justify-between rounded-lg px-4 py-3 text-left hover:bg-gray-100"
            >
              About
              <span>⌄</span>
            </button>

            {aboutOpen && (
              <div className="ml-4 border-l pl-3">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 hover:bg-gray-100"
            >
              Contact
            </Link>

            <div className="mt-3 flex flex-col gap-3 border-t pt-4">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg border px-4 py-3 text-center font-semibold"
              >
                Login
              </Link>

              <Link
                href="/schedule-pickup"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white"
              >
                Schedule Pickup
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}