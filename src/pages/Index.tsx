import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import MusicSection from "@/components/MusicSection";
import DJSection from "@/components/DJSection";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSlider />
        <MusicSection />
        <DJSection />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
