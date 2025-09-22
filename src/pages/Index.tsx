import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ExchangeSection } from "@/components/ExchangeSection";
import { DesertGardenSection } from "@/components/DesertGardenSection";
import { CouncilSection } from "@/components/CouncilSection";
import { ImpactSection } from "@/components/ImpactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <section id="exchange">
        <ExchangeSection />
      </section>
      <section id="desert">
        <DesertGardenSection />
      </section>
      <section id="council">
        <CouncilSection />
      </section>
      <section id="impact">
        <ImpactSection />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
