import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import satellitesImage from "@/assets/satellites-collection.jpg";

const Satellites = () => {
  const satellites = [
    {
      name: "Hubble Space Telescope",
      type: "Space Telescope",
      launched: "1990",
      altitude: "547 km",
      purpose: "Deep space observation and astronomical research",
      status: "Active",
      dataCapability: "Space Science",
      aiEnabled: true,
      description: "The Hubble Space Telescope has revolutionized our understanding of the universe with its stunning images and groundbreaking discoveries."
    },
    {
      name: "International Space Station",
      type: "Space Station",
      launched: "1998",
      altitude: "408 km", 
      purpose: "Scientific research and international cooperation",
      status: "Active",
      dataCapability: "Earth Observation",
      aiEnabled: true,
      description: "A multinational collaborative project serving as a microgravity and space environment research laboratory."
    },
    {
      name: "James Webb Space Telescope",
      type: "Space Telescope", 
      launched: "2021",
      altitude: "L2 Lagrange Point",
      purpose: "Infrared astronomy and early universe observation",
      status: "Active",
      dataCapability: "Space Science",
      aiEnabled: true,
      description: "The most powerful space telescope ever built, designed to observe the universe's first galaxies and stars."
    },
    {
      name: "Starlink Constellation",
      type: "Communication",
      launched: "2019-Present", 
      altitude: "550 km",
      purpose: "Global internet coverage via satellite constellation",
      status: "Expanding",
      dataCapability: "Communication",
      aiEnabled: false,
      description: "A mega-constellation of satellites providing high-speed internet access across the globe."
    },
    {
      name: "GPS Satellites",
      type: "Navigation",
      launched: "1978-Present",
      altitude: "20,200 km",
      purpose: "Global positioning and navigation services", 
      status: "Active",
      dataCapability: "Navigation",
      aiEnabled: true,
      description: "A network of satellites enabling precise location services worldwide for both civilian and military use."
    },
    {
      name: "Chandra X-ray Observatory",
      type: "Space Telescope",
      launched: "1999",
      altitude: "139,000 km",
      purpose: "X-ray astronomy and high-energy phenomena study",
      status: "Active", 
      dataCapability: "Space Science",
      aiEnabled: true,
      description: "NASA's flagship X-ray observatory studying black holes, supernovas, and other high-energy cosmic phenomena."
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Active": return "bg-green-500 text-white";
      case "Expanding": return "bg-blue-500 text-white";
      case "Retired": return "bg-gray-500 text-white";
      default: return "bg-primary/20 text-primary";
    }
  };

  return (
    <div className="cosmic-scroll min-h-screen gradient-space">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="cosmic-container">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 cosmic-text-glow">
              Satellites Explorer
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore the satellites shaping our understanding of Earth and space. 
              AstroGeo AI integrates real-time satellite data and AI insights to track, analyze, and visualize orbital systems worldwide.
            </p>
            <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
              <img 
                src={satellitesImage} 
                alt="Satellites in orbit around Earth"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>

          {/* Satellites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {satellites.map((satellite, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 stellar-glow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-playfair text-foreground">
                      {satellite.name}
                    </CardTitle>
                    <Badge className={`${getStatusColor(satellite.status)} px-2 py-1 rounded-full text-xs`}>
                      {satellite.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {satellite.type} • Launched {satellite.launched}
                  </CardDescription>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-sm">{satellite.dataCapability}</Badge>
                    {satellite.aiEnabled && (
                      <Badge variant="outline" className="text-sm bg-accent/20 text-accent">
                        AI Analytics Enabled
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Altitude:</span>
                      <span className="text-sm font-medium">{satellite.altitude}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Purpose:</span>
                      <span className="text-sm font-medium">{satellite.purpose}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {satellite.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 text-center">
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             
              <div className="text-center">
  
              </div>
            
                    </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Satellites;
