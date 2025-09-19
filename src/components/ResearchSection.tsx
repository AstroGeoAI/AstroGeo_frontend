import earthImg from "@/assets/earth-space.jpg";

const ResearchSection = () => {
  return (
    <section id="research" className="section-space gradient-stellar">
      <div className="cosmic-container py-32">
        <div className="text-center mb-20 cosmic-fade-in">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Cutting-Edge
            <br />
            <span className="text-primary">Research</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pioneering discoveries at the intersection of geology and space science
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="cosmic-fade-in bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/30">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-primary rounded-full stellar-glow" />
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Planetary Sciences</h3>
            <p className="text-muted-foreground leading-relaxed">
              Comprehensive study of planetary formation, evolution, and composition 
              across our solar system and beyond.
            </p>
          </div>

          <div className="cosmic-fade-in bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/30">
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-accent rounded-full stellar-glow" />
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Astrogeology</h3>
            <p className="text-muted-foreground leading-relaxed">
              Bridging Earth sciences with space exploration to understand 
              geological processes on other worlds.
            </p>
          </div>

          <div className="cosmic-fade-in bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/30">
            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-secondary rounded-full stellar-glow" />
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Space Mining</h3>
            <p className="text-muted-foreground leading-relaxed">
              Investigating the potential for resource extraction from asteroids 
              and other celestial bodies.
            </p>
          </div>
        </div>

        <div className="relative cosmic-fade-in">
          <div className="overflow-hidden rounded-3xl nebula-glow">
            <img
              src={earthImg}
              alt="Earth from space with aurora"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <h3 className="text-3xl font-playfair font-bold text-space-white mb-4">
                Our Home Planet
              </h3>
              <p className="text-lg text-space-white/80 max-w-2xl mx-auto">
                Understanding Earth's systems provides the foundation for 
                exploring and understanding other worlds
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;