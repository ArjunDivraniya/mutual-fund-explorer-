import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { SIPCalculator } from "@/components/SIPCalculator";
import { FundExplorer } from "@/components/FundExplorer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <SIPCalculator />
      <FundExplorer />
    </div>
  );
};

export default Index;
