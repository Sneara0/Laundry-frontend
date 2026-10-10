"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Smile,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  X,
  SlidersHorizontal,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  category: "garments" | "delicate" | "home";
  image: string;
  startingPrice: string;
  turnaround: string;
  description: string;
  features: string[];
}

const services: ServiceItem[] = [
  {
    id: "dry-cleaning",
    title: "DRY CLEANING",
    category: "garments",
    image: "/images/services/dry-cleaning.jpg",
    startingPrice: "$4.50 / item",
    turnaround: "24h Express",
    description:
      "Eco-friendly solvent cleaning for suits, dresses, coats, and formal wear with hand-finished steam pressing.",
    features: ["Stain removal treatment", "Hand-finished steam iron", "Garment bag protection"],
  },
  {
    id: "wedding-gowns",
    title: "WEDDING GOWNS",
    category: "delicate",
    image: "/images/services/wedding-gown.jpg",
    startingPrice: "$49.00 / gown",
    turnaround: "48-72h Museum Care",
    description:
      "Museum-quality preservation, delicate beadwork care, and acid-free archival storage packaging for bridal wear.",
    features: ["Hand inspection & spot test", "Acid-free box storage", "Lifetime anti-yellow guarantee"],
  },
  {
    id: "leather-suede",
    title: "LEATHER & SUEDE",
    category: "delicate",
    image: "/images/services/leather-suede.jpg",
    startingPrice: "$29.00 / item",
    turnaround: "48h Expert Care",
    description:
      "Specialized deep cleaning, oil reconditioning, and color restoration for genuine leather & suede garments.",
    features: ["Natural oil conditioning", "Color restoration", "Water repellent finish"],
  },
  {
    id: "curtains",
    title: "CURTAINS & DRAPES",
    category: "home",
    image: "/images/services/curtains.jpg",
    startingPrice: "$8.50 / panel",
    turnaround: "24-48h Service",
    description:
      "Deep dust extraction, eco-sanitization, and precise pleat pressing for heavy drapes, sheer curtains & linens.",
    features: ["Dust & allergen removal", "Flame-retardant safe", "Pleat re-shaping & pressing"],
  },
  {
    id: "suit-press",
    title: "SUIT & TUXEDO CARE",
    category: "garments",
    image: "/images/services/suit-press.jpg",
    startingPrice: "$12.00 / suit",
    turnaround: "24h Express",
    description:
      "Precision steam shaping, collar stiffening, and crease alignment for luxury suits, tuxedos, and blazers.",
    features: ["Hand steam shaping", "Form-retaining hanger", "Anti-wrinkle finish"],
  },
  {
    id: "wash-fold",
    title: "WASH & FOLD",
    category: "garments",
    image: "/images/services/wash-fold.jpg",
    startingPrice: "$2.20 / lb",
    turnaround: "Same-Day / 24h",
    description:
      "Everyday laundry washed in individual batches with hypoallergenic detergents, neatly folded & packaged.",
    features: ["Separate batch washing", "Premium fabric softener", "Neat Marie Kondo fold"],
  },
];

const categories = [
  { id: "all", label: "All Services" },
  { id: "garments", label: "Garments & Suits" },
  { id: "delicate", label: "Delicate & Couture" },
  { id: "home", label: "Home & Curtains" },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = 310;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 310;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleScrollEvent = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = 310;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>Guaranteed Premium Care</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-slate-800 tracking-tight">
            Always the <span className="font-extrabold text-[#375a79]">Best Service</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Professional garment care tailored for every fabric type with doorstep pickup &amp; delivery.
          </p>

          {/* Filter Categories Pill Bar (Responsive Wrap & Touch Friendly) */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveIndex(0);
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
                  }
                }}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#375a79] text-white shadow-md shadow-[#375a79]/20 scale-105"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Carousel / Cards Slider */}
        <div className="relative group/carousel">
          
          {/* Mobile & Desktop Left/Right Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-2 mb-4 sm:mb-0 sm:absolute sm:-top-16 sm:right-0 z-20">
            <span className="text-xs font-semibold text-slate-400 sm:hidden flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Swipe or use arrows
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => handleScroll("left")}
                aria-label="Previous services"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 text-slate-700 shadow-md flex items-center justify-center hover:bg-[#375a79] hover:text-white active:scale-95 transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => handleScroll("right")}
                aria-label="Next services"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 text-slate-700 shadow-md flex items-center justify-center hover:bg-[#375a79] hover:text-white active:scale-95 transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Cards Grid with Smooth Slide Animation */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScrollEvent}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory touch-pan-x"
          >
            {filteredServices.map((service, idx) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group relative flex-none w-[82vw] max-w-[280px] sm:w-[300px] bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#18b5fd] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer snap-start flex flex-col justify-between animate-in fade-in slide-in-from-right-4 duration-300"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                {/* Image Section */}
                <div className="relative h-56 sm:h-64 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 82vw, 300px"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-slate-900/75 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[11px] font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#a8d14a]" />
                    {service.turnaround}
                  </div>

                  {/* Circular Smiley Icon Badge */}
                  <div className="absolute -bottom-4 right-5 w-11 h-11 rounded-full bg-[#18b5fd] text-white flex items-center justify-center shadow-md shadow-[#18b5fd]/40 group-hover:scale-110 group-hover:bg-[#0fa4ea] transition-all duration-300 border-2 border-white z-10">
                    <Smile className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>

                {/* Service Title Section */}
                <div className="pt-7 pb-5 px-4 text-center bg-white flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-[#526475] tracking-wider group-hover:text-[#18b5fd] transition-colors uppercase">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed px-1">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-semibold uppercase text-[10px]">Starts from</span>
                    <span className="font-extrabold text-[#375a79]">{service.startingPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation Indicator */}
          <div className="flex justify-center items-center gap-2 mt-4 sm:mt-6">
            {filteredServices.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "w-7 bg-[#18b5fd]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Modal for Service Deep Dive */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative border border-slate-100 animate-in zoom-in-95 duration-200">
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/60 text-white flex items-center justify-center hover:bg-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-56 sm:h-64 w-full">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-5 sm:p-6">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-[#18b5fd] text-white font-extrabold text-xs uppercase tracking-wider mb-2 inline-block shadow-md">
                      {selectedService.turnaround}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-4 sm:space-y-5">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedService.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#375a79]">
                    Included Features:
                  </h4>
                  <div className="space-y-2">
                    {selectedService.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#18b5fd] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Starting Price</span>
                    <span className="text-base sm:text-lg font-black text-[#375a79]">{selectedService.startingPrice}</span>
                  </div>

                  <a
                    href="/schedule-pickup"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#a8d14a] hover:bg-[#b8e354] text-slate-950 font-bold text-xs sm:text-sm rounded-full shadow-md shadow-[#a8d14a]/30 transition-all hover:scale-105"
                  >
                    Book This Service
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
