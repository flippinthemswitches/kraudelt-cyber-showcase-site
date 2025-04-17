
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CertificationsSection from "@/components/CertificationsSection";
import EducationSection from "@/components/EducationSection";
import AwardsSection from "@/components/AwardsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CertificationsSection />
      <EducationSection />
      <AwardsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
