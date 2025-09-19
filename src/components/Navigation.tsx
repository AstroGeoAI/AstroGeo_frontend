import "@splinetool/viewer";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="cosmic-container">
        <div className="flex items-center justify-between py-3">
          
          {/* Left: Spline Logo */}
          <div className="w-28 h-12 flex items-center ">
            <h1 className="whitespace-nowrap text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,200,255,0.7)]">
          AstroGeo AI
        </h1>
          </div>

          {/* Right: Menu Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </a>
            <a
              href="#research"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Research
            </a>
            <a
              href="#geology"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Geology
            </a>
            <a
              href="#exploration"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Exploration
            </a>
            <a
              href="/satellites"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Satellites
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
