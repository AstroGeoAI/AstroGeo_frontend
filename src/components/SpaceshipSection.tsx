import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

import planetTexture from "@/assets/earth-glow2.jpg";

const RotatingPlanet = () => {
  const planetRef = useRef<THREE.Mesh>(null!);

  // Load texture once and reuse
  const texture = useLoader(THREE.TextureLoader, planetTexture);

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={planetRef} rotation={[0, 0, 0]}>
      <sphereGeometry args={[3.1, 64, 64]} />
      {/* Always visible, no lighting */}
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

const SpaceshipSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Top: black background */}
      <div className="bg-black">
        <div className="cosmic-container py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold leading-tight cosmic-text-glow">
                OUR MISSION
              </h2>

              {/* Mission Cards */}
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
                  <h3 className="text-lg font-playfair font-semibold mb-2">
                    Earth Observation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Harnessing satellite and geospatial data to monitor climate, land use,
                    and natural resources in real-time.
                  </p>
                </div>

                <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
                  <h3 className="text-lg font-playfair font-semibold mb-2">
                    AI-Powered Insights
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Leveraging machine learning and multi-agent systems to analyze,
                    interpret, and make sense of complex Earth & space datasets.
                  </p>
                </div>

                <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/30 col-span-2">
                  <h3 className="text-lg font-playfair font-semibold mb-2">
                    Space–Earth Synergy
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Building a unified platform that bridges NASA, ISRO, and IMD datasets to
                    empower research, disaster management, and exploration of both our planet
                    and the cosmos.
                  </p>
                </div>
              </div>
            </div>

            {/* 3D Planet */}
            <div className="relative order-1 lg:order-2 h-96 lg:h-[400px]">
              <Canvas camera={{ position: [0, 0, 5.5] }}>
                <RotatingPlanet />
                <Stars
                  radius={50}
                  depth={50}
                  count={5000}
                  factor={4}
                  saturation={0}
                  fade
                />
                <OrbitControls enableZoom={false} enablePan={false} />
              </Canvas>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay after planet */}
      <div className="h-[400px] bg-gradient-to-b from-black via-[#2e1a47] to-[#0f2f3f]" />
    </section>
  );
};

export default SpaceshipSection;