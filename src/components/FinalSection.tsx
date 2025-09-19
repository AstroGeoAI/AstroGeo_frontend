const FinalSection = () => {
  return (
    <section className="section-space bg-gradient-to-b from-background to-space-black relative overflow-hidden">
      <div className="cosmic-container py-32 text-center relative z-10">
        {/* Background Circular Element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl animate-pulse"></div>
        
        {/* Main Content */}
        <div className="relative">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold mb-16">
            <span className="text-foreground">AND </span>
            <span className="cosmic-text-glow">FINALLY</span>
            <span className="text-primary">...</span>
          </h2>

          {/* Circular Futuristic Element */}
          <div className="relative mx-auto mb-12 w-48 h-48 lg:w-64 lg:h-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-primary to-secondary p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-background/90 to-space-black/90 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary animate-pulse"></div>
                  <div className="text-lg font-playfair font-semibold cosmic-text-glow">SPACE MEETS</div>
                  <div className="text-sm text-muted-foreground">AI</div>
                </div>
              </div>
            </div>
            
            {/* Orbital Elements */}
            <div className="absolute inset-0 animate-spin" style={{animationDuration: "30s"}}>
              <div className="w-2 h-2 bg-accent rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-1 h-1 bg-primary rounded-full absolute top-1/2 -right-1 transform -translate-y-1/2"></div>
              <div className="w-2 h-2 bg-secondary rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-1 h-1 bg-accent rounded-full absolute top-1/2 -left-1 transform -translate-y-1/2"></div>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="text-4xl md:text-5xl font-playfair font-bold mb-8">
            <span className="text-foreground">THANK YOU</span>
            <span className="text-accent">!</span>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Join us on this incredible journey.  
            From orbit to insight, the universe unfolds, transforming space data into cosmic revelations.”
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 nebula-glow transition-all duration-300"
              onClick={() => window.location.href = '/register'}
            >
              Start Your Journey
            </button>
            <button 
              className="px-8 py-4 border border-accent/30 text-accent rounded-lg font-medium hover:bg-accent/10 transition-all duration-300"
              onClick={() => window.location.href = '/satellites'}
            >
              Explore Satellites
            </button>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-20 flex justify-center space-x-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse"
              style={{animationDelay: `${i * 0.2}s`}}
            />
          ))}
        </div>
      </div>

      {/* Background Stars */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default FinalSection;