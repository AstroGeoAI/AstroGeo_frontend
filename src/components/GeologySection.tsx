import crystalsImg from "@/assets/geology-crystals.jpg";

const GeologySection = () => {
  return (
    <section id="geology" className="section-space bg-background">
      <div className="cosmic-container py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="cosmic-fade-in">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
              Geological
              <br />
              <span className="text-primary">Formations</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Understanding Earth's geological processes provides crucial insights 
              into planetary formation and evolution across the cosmos.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our research bridges terrestrial geology with extraterrestrial studies, 
              revealing universal patterns in planetary development.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full stellar-glow" />
                <span className="text-foreground">Crystal Structure Analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full stellar-glow" />
                <span className="text-foreground">Mineral Composition Studies</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full stellar-glow" />
                <span className="text-foreground">Planetary Formation Models</span>
              </div>
            </div>
          </div>
          
          <div className="cosmic-fade-in floating-animation">
            <div className="relative overflow-hidden rounded-2xl nebula-glow">
              <img
                src={crystalsImg}
                alt="Crystalline geological formations"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeologySection;