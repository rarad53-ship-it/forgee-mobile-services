import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import HeroSection from "@/sections/HeroSection";
import SocialProofSection from "@/sections/SocialProofSection";
import ServicesSection from "@/sections/ServicesSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import Footer from "@/sections/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <SocialProofSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
