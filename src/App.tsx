import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import CasesSection from "./components/CasesSection";
import TrialSection from "./components/TrialSection";
import InvestmentSection from "./components/InvestmentSection";
import SupportSection from "./components/SupportSection";
import Footer from "./components/Footer";
import PartnershipModal from "./components/PartnershipModal";

import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [isPartnershipModalOpen, setIsPartnershipModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection 
        onPartnershipClick={() => setIsPartnershipModalOpen(true)}
      />
      <FeaturesSection />
      <PricingSection />
      <CasesSection />
      <TrialSection />
      <InvestmentSection 
        onPartnershipClick={() => setIsPartnershipModalOpen(true)}
      />
      <SupportSection />
      <Footer 
        onPartnershipClick={() => setIsPartnershipModalOpen(true)}
      />
      
      <PartnershipModal 
        isOpen={isPartnershipModalOpen}
        onClose={() => setIsPartnershipModalOpen(false)}
      />

      <Toaster />
    </div>
  );
}