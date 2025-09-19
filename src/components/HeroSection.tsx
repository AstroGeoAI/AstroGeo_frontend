import heroSpace from "@/assets/hero-space.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="section-space gradient-space">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroSpace})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-black/20 to-space-black/80" />
      
      <div className="relative z-10 cosmic-container flex items-center justify-center min-h-screen">
        <div className="text-center cosmic-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 cosmic-text-glow">
            Exploring the
            <br />
            <span className="bg-gradient-to-r from-space-teal via-space-blue to-primary bg-clip-text text-transparent">
              Cosmic Unknown
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Bridging the gap between Earth sciences and space exploration through 
            cutting-edge research and discovery
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 stellar-glow transition-all duration-300"
              onClick={() => window.location.href = '/login'}
            >
              Try Astrogeo AI
            </button>
            <button className="px-8 py-4 border border-primary/30 text-primary rounded-lg font-medium hover:bg-primary/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;