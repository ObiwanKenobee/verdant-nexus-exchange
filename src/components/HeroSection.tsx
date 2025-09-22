import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-transformation.jpg";
import { ArrowRight, Globe, Leaf, Heart } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Project <span className="bg-gradient-desert-to-garden bg-clip-text text-transparent animate-float">Verdant</span> Nexus
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light">
              The Regenerative Value Exchange
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Where carbon, culture, and compassion become tradeable assets — 
            shifting civilization from extractive economies to regenerative ones.
          </p>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto my-12">
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Globe className="h-8 w-8 text-primary-glow" />
              <h3 className="text-lg font-semibold text-white">Carbon + Beyond</h3>
              <p className="text-white/70 text-center text-sm">Biochar, green hydrogen, cultural credits, and human rights impact</p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Leaf className="h-8 w-8 text-secondary-glow" />
              <h3 className="text-lg font-semibold text-white">Desert-to-Garden</h3>
              <p className="text-white/70 text-center text-sm">5% of trade fees fund massive desert regeneration across three continents</p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Heart className="h-8 w-8 text-accent" />
              <h3 className="text-lg font-semibold text-white">Transparent Impact</h3>
              <p className="text-white/70 text-center text-sm">Blockchain-verified trades eliminating greenwashing forever</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="xl" className="group">
              Enter the Exchange
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="oasis" size="xl">
              Join the Council
            </Button>
          </div>

          {/* Impact Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-16 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow">$3T</div>
              <div className="text-sm text-white/70">Target Market Cap 2040</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-glow">1B</div>
              <div className="text-sm text-white/70">Tons CO₂ Annually</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">10M</div>
              <div className="text-sm text-white/70">Desert Hectares Restored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow">∞</div>
              <div className="text-sm text-white/70">Civilization Impact</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};