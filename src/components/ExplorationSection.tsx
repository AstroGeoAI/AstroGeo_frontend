import asteroidsImg from "@/assets/asteroids.jpg";

const ExplorationSection = () => {
  return (
    <section id="exploration" className="section-space gradient-cosmic">
      <div className="cosmic-container py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="cosmic-fade-in floating-animation order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl stellar-glow">
              <img
                src={asteroidsImg}
                alt="Asteroid field in deep space"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-space-black/30" />
            </div>
          </div>
          
          <div className="cosmic-fade-in order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8 text-space-white">
              Deep Space
              <br />
              <span className="text-space-teal cosmic-text-glow">Exploration</span>
            </h2>
            
            <p className="text-lg text-space-white/80 mb-6 leading-relaxed">
              Venturing into the vast expanse of space to uncover the mysteries 
              of asteroid fields, distant worlds, and cosmic phenomena.
            </p>
            
            <p className="text-lg text-space-white/80 mb-8 leading-relaxed">
              Our exploration missions combine advanced technology with scientific 
              rigor to push the boundaries of human knowledge.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-space-white/5 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-space-teal mb-2">250+</div>
                <div className="text-sm text-space-white/70">Asteroids Catalogued</div>
              </div>
              <div className="text-center p-6 bg-space-white/5 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-space-teal mb-2">15</div>
                <div className="text-sm text-space-white/70">Active Missions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplorationSection;