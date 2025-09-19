import "@splinetool/viewer";
import { useEffect } from "react";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  useEffect(() => {
    const viewer = document.querySelector("spline-viewer");

    if (viewer) {
      const removeWatermark = () => {
        const shadowRoot = (viewer as any).shadowRoot;
        if (shadowRoot) {
          const watermark = shadowRoot.querySelector('[part="watermark"]');
          if (watermark) {
            (watermark as HTMLElement).style.display = "none";
          }
        }
      };

      removeWatermark();
      const interval = setInterval(removeWatermark, 500);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen bg-black">
      {/* Navigation / Logo Bar */}
      <div className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-8 py-4 bg-black/60 backdrop-blur-md">
        {/* Logo text */}
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,200,255,0.7)]">
          AstroGeo AI
        </h1>

        {/* Menu links */}
        <nav className="flex items-center gap-6 text-gray-200 font-medium">
          <a href="/" className="hover:text-cyan-400 transition">
            Home
          </a>
          <a href="/about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="/satellites" className="hover:text-cyan-400 transition">
            Satellites
          </a>
          <a href="/contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
          <a
            href="/login"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md hover:scale-105 transition"
          >
            Login
          </a>
        </nav>
      </div>

      {/* Hero Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,200,255,0.6)] mb-6">
          Unify Space & Earth Data with Natural Language
        </h1>
        <p className="text-lg md:text-xl text-gray-200/95 max-w-3xl mb-10 leading-relaxed">
          AstroGeo AI is a unified, AI-powered assistant that makes complex satellite data
          searchable, understandable, and actionable for everyone.
        </p>
        <a
          href="/login"
          className="flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-semibold text-lg shadow-xl hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300"
        >
          <Sparkles className="w-5 h-5 text-white" /> Try AstroGeo AI
        </a>
      </div>

      {/* Animation Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <spline-viewer
          url="https://prod.spline.design/fHj6lTnLVa9rhkAt/scene.splinecode"
          className="absolute inset-0 w-full h-full"
        />
        {/* Overlay at bottom-right to hide watermark */}
        <div className="absolute bottom-0 right-0 w-48 h-24 bg-black z-30 pointer-events-none"></div>

        {/* Top fade overlay */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/70 to-transparent z-18"></div>
      </div>
    </section>
  );
};

export default HeroSection;
