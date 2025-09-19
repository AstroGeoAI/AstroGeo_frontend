import floatingAsteroids from "@/assets/floating-asteroids.jpg";

const StrategySection = () => {
  const strategies = [
    {
      title: "Data  Aggregation",
      description: "Collecting real-time Earth & space data from NASA, ISRO, and IMD sources.",
      position: "top-20 left-16",
      delay: "0s"
    },
    {
      title: "AI Analytics", 
      description: "Applying LLM to analyze satellite imagery and cosmic datasets efficiently.",
      position: "top-32 right-20",
      delay: "1s"
    },
    {
      title: "Pattern Discovery",
      description: "Detecting hidden correlations in geospatial and astronomical observations to unlock insights.",
      position: "bottom-40 left-20",
      delay: "2s"
    },
    {
      title: "Predictive Insights",
      description: "Forecasting natural disasters, space weather, and environmental changes using AI models.",
      position: "bottom-24 right-24",
      delay: "3s"
    }
  ];

  return (
    <section className="section-space gradient-space relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${floatingAsteroids})` }}
      />
      
      <div className="cosmic-container py-32 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold cosmic-text-glow mb-8">
            OUR STRATEGY
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leveraging cutting-edge technology and innovative approaches to unlock the mysteries 
            of the universe through strategic data analysis and AI-driven insights.
          </p>
        </div>

        {/* Floating Strategy Cards */}
        <div className="relative h-[600px] lg:h-[800px]">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className={`absolute ${strategy.position} floating-animation`}
              style={{ animationDelay: strategy.delay }}
            >
              <div className="bg-card/40 backdrop-blur-md rounded-2xl p-6 border border-border/30 stellar-glow max-w-xs">
                <div className="w-3 h-3 rounded-full bg-primary mb-4 animate-pulse"></div>
                <h3 className="text-xl font-playfair font-semibold mb-3 cosmic-text-glow">
                  {strategy.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {strategy.description}
                </p>
              </div>
            </div>
          ))}

          {/* Central Visualization */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              {/* Central Core */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse"></div>
              </div>
              
              {/* Orbital Rings */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: "20s"}}>
                <div className="w-48 h-48 border border-primary/20 rounded-full absolute -inset-8"></div>
              </div>
              
              <div className="absolute inset-0 animate-spin" style={{animationDuration: "15s", animationDirection: "reverse"}}>
                <div className="w-60 h-60 border border-accent/15 rounded-full absolute -inset-14"></div>
              </div>
            </div>
          </div>

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(180, 200, 255)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgb(180, 200, 255)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="rgb(180, 200, 255)" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            <path
              d="M100 150 Q400 200 500 400 M600 250 Q400 200 300 500"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4,4"
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;