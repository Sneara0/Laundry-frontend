import Hero from "@/components/hero";
import Services from "@/components/Services";
import SimplifyLaundry from "@/components/SimplifyLaundry";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans">
      <Hero />
      <SimplifyLaundry />
      <Services />
      <HowItWorks />
      <Footer />
    </div>
  );
}
