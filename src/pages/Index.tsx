import { Navigation } from "@/components/Navigation";
import { HeroSlider } from "@/components/HeroSlider";
import { FeaturedWork } from "@/components/FeaturedWork";
import { AboutPreview } from "@/components/AboutPreview";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <HeroSlider />
      <FeaturedWork />
      <AboutPreview />
      <ServicesSection />
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default Index;
