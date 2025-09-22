import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TreePine, Palette, Users, TrendingUp, Shield, Globe2 } from "lucide-react";

const creditTypes = [
  {
    id: "carbon",
    title: "Carbon Credits",
    icon: TreePine,
    description: "Verified biochar, green hydrogen, and carbon sequestration",
    price: "$85.50",
    change: "+12.3%",
    volume: "2.4M tons",
    items: ["Biochar Certificates", "Green Hydrogen", "Forest Carbon", "Ocean Blue Carbon"],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    id: "cultural",
    title: "Cultural Credits",
    icon: Palette,
    description: "Poetry festivals, art restoration, indigenous stewardship",
    price: "$45.20",
    change: "+8.7%",
    volume: "847K credits",
    items: ["Art Restoration", "Poetry Festivals", "Heritage Sites", "Indigenous Wisdom"],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: "human",
    title: "Human Credits",
    icon: Users,
    description: "Worker rights, women's inclusion, youth opportunities",
    price: "$62.30",
    change: "+15.4%",
    volume: "1.8M credits",
    items: ["Worker Rights", "Women's Inclusion", "Youth Development", "Fair Trade"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export const ExchangeSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Living Exchange
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trade beyond traditional carbon markets. Our exchange includes cultural preservation 
            and human rights as measurable, valuable assets in the regenerative economy.
          </p>
        </div>

        {/* Credit Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {creditTypes.map((credit) => {
            const IconComponent = credit.icon;
            return (
              <Card key={credit.id} className="p-8 hover:shadow-golden transition-all duration-300 hover:scale-105 group">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${credit.bgColor}`}>
                      <IconComponent className={`h-8 w-8 ${credit.color}`} />
                    </div>
                    <Badge variant="secondary" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Active
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{credit.title}</h3>
                    <p className="text-muted-foreground">{credit.description}</p>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Current Price</span>
                      <span className="text-2xl font-bold text-foreground">{credit.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">24h Change</span>
                      <span className="text-sm font-semibold text-success flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        {credit.change}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Volume</span>
                      <span className="text-sm font-medium text-foreground">{credit.volume}</span>
                    </div>
                  </div>

                  {/* Available Items */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Available Assets</h4>
                    <div className="space-y-2">
                      {credit.items.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                          <span className="text-sm text-foreground">{item}</span>
                          <Shield className="h-4 w-4 text-secondary" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant={credit.id === "carbon" ? "regenerative" : credit.id === "cultural" ? "cultural" : "default"} 
                    className="w-full"
                  >
                    Trade {credit.title}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Blockchain Verified</h3>
            <p className="text-muted-foreground">Every transaction is immutably recorded, eliminating greenwashing</p>
          </div>

          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Globe2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Global Access</h3>
            <p className="text-muted-foreground">Digital caravans connecting smallholder farmers to global markets</p>
          </div>

          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Real Impact</h3>
            <p className="text-muted-foreground">Measurable outcomes for planet, people, and cultural preservation</p>
          </div>
        </div>
      </div>
    </section>
  );
};