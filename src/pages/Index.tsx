import Navigation from "@/components/Navigation";
import NewHeroSection from "@/components/NewHeroSection";
import TrajectorySection from "@/components/TrajectorySection";
import SpaceshipSection from "@/components/SpaceshipSection";
import TimelineSection from "@/components/TimelineSection";
import StrategySection from "@/components/StrategySection";
import FinalSection from "@/components/FinalSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="cosmic-scroll">
      <Navigation />
      <NewHeroSection />
      <TrajectorySection />
      <SpaceshipSection />
      <TimelineSection />
      <StrategySection />
      <FinalSection />
      <FooterSection />
    </div>
  );
};

export default Index;
