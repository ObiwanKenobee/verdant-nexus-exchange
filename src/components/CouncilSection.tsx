import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Heart, Leaf, Globe, Users, BookOpen, Shield, Lightbulb } from "lucide-react";

const custodians = [
  {
    category: "Youth Climate Leaders",
    icon: Lightbulb,
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "Next-generation voices shaping regenerative futures",
    representatives: ["Climate Justice Advocates", "Youth Innovators", "Student Leaders"],
  },
  {
    category: "Women Entrepreneurs", 
    icon: Crown,
    color: "text-accent",
    bgColor: "bg-accent/10",
    description: "Leading sustainable business transformation globally",
    representatives: ["Social Enterprise Founders", "Green Tech Leaders", "Community Organizers"],
  },
  {
    category: "Indigenous Elders",
    icon: Heart,
    color: "text-secondary",
    bgColor: "bg-secondary/10", 
    description: "Guardians of traditional ecological knowledge",
    representatives: ["Traditional Keepers", "Land Stewards", "Cultural Preservers"],
  },
  {
    category: "Religious Scholars",
    icon: BookOpen,
    color: "text-warning",
    bgColor: "bg-warning/10",
    description: "Moral compass for ethical exchange practices",
    representatives: ["Interfaith Leaders", "Ethics Scholars", "Spiritual Guides"],
  },
];

const principles = [
  {
    title: "Regenerative First",
    description: "Every decision must enhance rather than extract from living systems",
    icon: Leaf,
  },
  {
    title: "Cultural Preservation",
    description: "Protect and celebrate the wisdom of diverse civilizations",
    icon: Globe,
  },
  {
    title: "Intergenerational Justice",
    description: "Consider impacts on seven generations ahead",
    icon: Users,
  },
  {
    title: "Transparent Accountability",
    description: "All actions open to public scrutiny and verification",
    icon: Shield,
  },
];

export const CouncilSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Council of Custodians
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Not just CEOs or politicians — youth climate leaders, women entrepreneurs, 
            indigenous elders, and religious scholars sit as custodians of the exchange's ethical direction.
          </p>
        </div>

        {/* Custodian Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {custodians.map((custodian, index) => {
            const IconComponent = custodian.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-golden transition-all duration-300 hover:scale-105 group">
                <div className="space-y-6">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${custodian.bgColor}`}>
                      <IconComponent className={`h-8 w-8 ${custodian.color}`} />
                    </div>
                    <Badge variant="secondary" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Active
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{custodian.category}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{custodian.description}</p>
                  </div>

                  {/* Representatives */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Representatives</h4>
                    <div className="space-y-2">
                      {custodian.representatives.map((rep, repIndex) => (
                        <div key={repIndex} className="text-xs text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                          {rep}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Governance Principles */}
        <div className="bg-card rounded-2xl p-8 shadow-earth mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Governing Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{principle.title}</h4>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decision Making Process */}
        <div className="bg-gradient-cultural rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Consensus Through Wisdom</h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Major decisions require alignment across all four custodian categories, ensuring 
            that youth vision, entrepreneurial innovation, indigenous wisdom, and moral guidance 
            shape every aspect of the exchange.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="oasis" size="lg">
              Apply for Council
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              View Decisions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};