import { motion } from "framer-motion";

const WaveTimelineSection = () => {
  const events = [
    { year: "2022", text: "Launched AstroGeo research initiative" },
    { year: "1,034", text: "Iterations tested before reaching the perfect model" },
    { year: "2", text: "Core ideas that powered the project: Data + Imagination" },
    { year: "54", text: "Breakthrough insights discovered in the process" },
    { year: "25", text: "Cups of Coffee drank in the process" },
  ];

  return (
    <section className="relative w-full h-screen overflow-y-scroll snap-y snap-mandatory bg-gradient-to-b from-[#0f2f3f] via-[#008080] to-black">
      {/* SVG wave in background */}
      <svg
        className="absolute inset-0 w-full h-[500%] pointer-events-none"
        viewBox="0 0 800 4000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M400 0 C600 400, 200 800, 400 1200 C600 1600, 200 2000, 400 2400 C600 2800, 200 3200, 400 3600"
          stroke="url(#waveGradient)"
          strokeWidth="4"
          fill="none"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Timeline Sections */}
      {events.map((event, i) => (
        <div
          key={i}
          className="relative w-full h-screen flex items-center justify-center snap-start"
        >
          {/* Dot on the wave */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-6 h-6 rounded-full bg-purple-400 shadow-[0_0_25px_10px_rgba(167,139,250,0.7)] animate-pulse" />
          </div>

          {/* Event card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`absolute max-w-md p-8 rounded-2xl shadow-xl bg-black/50 backdrop-blur-lg border border-purple-400/20 ${
              i % 2 === 0 ? "left-[15%]" : "right-[15%]"
            }`}
          >
            <h3 className="text-3xl font-bold text-purple-300">{event.year}</h3>
            <p className="text-gray-200 mt-4">{event.text}</p>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default WaveTimelineSection;
