const TrajectorySection = () => {
  return (
    <section 
      className="section-space bg-background relative overflow-hidden -mt-24" 
      // 👆 pull this section upward to hide watermark
    >
      <div className="cosmic-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Constellation Visualization */}
          <div className="relative h-96 lg:h-[500px]">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              {/* Constellation Lines */}
              <path
                d="M50 300 L150 200 L250 250 L350 150 M150 200 L200 100 M250 250 L300 350 M200 100 L280 80 M280 80 L350 150"
                stroke="rgba(180, 200, 255, 0.4)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="2,2"
                className="animate-pulse"
              />
              
              {/* Constellation Points */}
              <g>
                <circle cx="50" cy="300" r="4" fill="#FFE135" className="animate-pulse" />
                <circle cx="150" cy="200" r="5" fill="#FFE135" className="animate-pulse" style={{animationDelay: "0.5s"}} />
                <circle cx="200" cy="100" r="4" fill="#FFE135" className="animate-pulse" style={{animationDelay: "1s"}} />
                <circle cx="250" cy="250" r="5" fill="#FFE135" className="animate-pulse" style={{animationDelay: "1.5s"}} />
                <circle cx="280" cy="80" r="4" fill="#FFE135" className="animate-pulse" style={{animationDelay: "2s"}} />
                <circle cx="300" cy="350" r="4" fill="#FFE135" className="animate-pulse" style={{animationDelay: "2.5s"}} />
                <circle cx="350" cy="150" r="5" fill="#FFE135" className="animate-pulse" style={{animationDelay: "3s"}} />
              </g>

              {/* Glow Filter */}
              <defs>
                <filter id="glow">
                  <feMorphology operator="dilate" radius="2"/>
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
            </svg>
            
            {/* Background Stars */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold leading-tight">
              <span className="text-muted-foreground">New lens on the universe —</span>
              <br />
              <span className="cosmic-text-glow">
                turning raw space data into stories and
              </span>
              <br />
              <span className="text-muted-foreground italic">discoveries</span>
            </h2>
            
            <div className="w-24 h-px bg-primary"></div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              <span className="text-foreground font-medium">We revolutionize space exploration</span> by transforming 
              complex astronomical data into accessible insights. Through advanced AI algorithms, 
              we make space science accessible through AI-powered search, visualization, and
              <span className="italic text-primary"> storytelling</span>
            </p>

            {/* Progress Dots */}
            <div className="flex space-x-2">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary animate-pulse"
                  style={{animationDelay: `${i * 0.2}s`}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrajectorySection;
