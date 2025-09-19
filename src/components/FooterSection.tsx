import { Github, Linkedin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-space-black border-t border-border py-16 relative overflow-hidden">
      {/* Optional subtle star/particle background */}
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/stars-bg.png')] bg-cover bg-center pointer-events-none"></div>

      <div className="cosmic-container relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <div>
            <div className="text-2xl font-playfair font-bold cosmic-text-glow mb-6">
              ASTROGEO AI
            </div>
            <p className="text-muted-foreground leading-relaxed">
              AI-powered insights from Earth to space — bridging satellites, geospatial data, and cosmic discovery.
            </p>
          </div>

          {/* Data & Insights */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Data & Insights</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Planetary Data
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Earth Observation
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                AI Analytics
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Publications
              </a>
            </div>
          </div>

          {/* Missions & Projects */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Missions & Projects</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Current Missions
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Space–Earth Simulations
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Disaster Forecasts
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Collaborations
              </a>
            </div>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Get Involved</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                News & Updates
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Hackathons
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 AstroGeo AI. Empowering insights from satellites to stars.
            </p>

            {/* Social Icons + Legal Links */}
            <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github size={18} />
                </a>
              </div>

              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
