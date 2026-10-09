import Image from "next/image";
import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#375a79] pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-5 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        {/* Left Content */}
        <div className="flex flex-1 flex-col items-start text-center lg:items-start lg:text-left">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#a8d14a] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-white/90 uppercase">
              Trusted by 10,000+ Customers
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[46px]">
            GLOBAL LEADERS IN
            <span className="mt-1 block text-[#a8d14a]">
              LAUNDRY &amp; DRY
              <br />
              CLEANING
              <br />
              SERVICES
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
            Redefining laundry through quick, efficient, reliable, and eco-friendly practices. Professional care for your garments.
          </p>

          {/* CTA Button */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/schedule-pickup"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#a8d14a] px-8 py-4 text-base font-bold text-[#375a79] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#b5e052] active:scale-[0.98]"
            >
              <Heart className="h-5 w-5 fill-current text-[#375a79]" />
              Schedule Free Pickup
            </a>
          </div>

          {/* App Download */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-white/70">
              Available On:
            </span>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.307 1.334c.8.46.8 1.602 0 2.063l-2.305 1.334L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] text-white/70 uppercase font-medium">GET IT ON</span>
                  <span className="block text-sm font-semibold text-white">Google Play</span>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] text-white/70 uppercase font-medium">Download on the</span>
                  <span className="block text-sm font-semibold text-white">App Store</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Content - Styled Image Frame Shape */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center items-center">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-white/15 to-white/5 p-4 sm:p-6 border border-white/20 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/images/hero1.png"
              alt="Laundry Service Professional"
              width={600}
              height={700}
              className="h-auto w-full max-h-[520px] object-contain rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}





