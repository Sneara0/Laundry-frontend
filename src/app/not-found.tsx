import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-gradient-to-b from-sky-50/50 via-white to-slate-50 px-4 py-20 text-center font-sans">
      <div className="max-w-md mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#375a79]/20 bg-[#375a79]/10 px-4 py-1.5 text-xs font-bold text-[#375a79] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Page Not Found</span>
        </div>

        <h1 className="text-7xl sm:text-8xl font-black text-[#375a79] tracking-tight">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-800">
            Lost in the Laundry?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The page you are looking for doesn&apos;t exist or is still being washed and ironed.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#375a79] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#375a79]/25 transition-all duration-300 hover:bg-[#2b4760] hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
