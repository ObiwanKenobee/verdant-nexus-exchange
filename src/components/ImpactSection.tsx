import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Globe, DollarSign, Users, TreePine, Zap, Heart } from "lucide-react";

const metrics = [
  {
    category: "Financial Impact",
    icon: DollarSign,
    color: "text-primary",
    bgColor: "bg-primary/10",
    metrics: [
      { label: "Market Cap Target 2040", value: "$3T", trend: "↗️", color: "text-primary" },
      { label: "Current Exchange Volume", value: "$12.4B", trend: "↗️", color: "text-success" },
      { label: "Regenerative Assets", value: "$847M", trend: "↗️", color: "text-secondary" },
      { label: "Desert Fund Deployed", value: "$203M", trend: "↗️", color: "text-accent" },
    ],
  },
  {
    category: "Environmental Impact",
    icon: TreePine,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    metrics: [
      { label: "CO₂ Traded Annually", value: "1B tons", trend: "↗️", color: "text-secondary" },
      { label: "Desert Hectares Restored", value: "10M", trend: "↗️", color: "text-success" },
      { label: "Carbon Sequestered", value: "203M tons", trend: "↗️", color: "text-secondary" },
      { label: "Ecosystems Regenerated", value: "1,247", trend: "↗️", color: "text-accent" },
    ],
  },
  {
    category: "Social Impact",
    icon: Users,
    color: "text-accent",
    bgColor: "bg-accent/10",
    metrics: [
      { label: "Communities Empowered", value: "50K+", trend: "↗️", color: "text-accent" },
      { label: "Women Entrepreneurs", value: "12K+", trend: "↗️", color: "text-success" },
      { label: "Youth Leaders", value: "25K+", trend: "↗️", color: "text-primary" },
      { label: "Cultural Projects", value: "3,400", trend: "↗️", color: "text-secondary" },
    ],
  },
];

const achievements = [
  {
    title: "Global North-South Rebalancing",
    description: "Transparent wealth flows redirected to Global South communities",
    icon: Globe,
    value: "$2.1B",
    label: "Transferred to Developing Nations",
  },
  {
    title: "Civilizational Palimpsest",
    description: "Every trade heals the planet and honors cultural heritage",
    icon: Heart,
    value: "847",
    label: "Cultural Heritage Sites Supported",
  },
  {
    title: "AI-Verified Transparency",
    description: "Blockchain eliminating greenwashing with 99.9% accuracy",
    icon: Zap,
    value: "99.9%",
    label: "Verification Accuracy",
  },
];

export const ImpactSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unicorn Impact Metrics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond traditional unicorn valuations — we measure civilization-scale regeneration 
            across financial, environmental, and social dimensions.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {metrics.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-regenerative transition-all duration-300 group">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${category.bgColor}`}>
                      <IconComponent className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                      <Badge variant="secondary" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Live Data
                      </Badge>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-4">
                    {category.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                        <div>
                          <div className="text-sm text-muted-foreground">{metric.label}</div>
                          <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                        </div>
                        <div className="text-2xl">{metric.trend}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Major Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-golden transition-all duration-300 hover:scale-105">
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">{achievement.value}</div>
                    <div className="text-xs text-muted-foreground">{achievement.label}</div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-desert-to-garden rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Beyond Wall Street</h3>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
            Project Verdant Nexus becomes the super-unicorn that replaces Wall Street's extractive finance 
            with regenerative trade. Where PAN (Abraham Nexus) was about peace via political statesmanship, 
            PVN is about peace via economic and ecological regeneration.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold">$3T</div>
              <div className="text-sm text-white/80">Target Valuation</div>
            </div>
            <div>
              <div className="text-4xl font-bold">1B</div>
              <div className="text-sm text-white/80">Tons CO₂/Year</div>
            </div>
            <div>
              <div className="text-4xl font-bold">∞</div>
              <div className="text-sm text-white/80">Civilizations Healed</div>
            </div>
            <div>
              <div className="text-4xl font-bold">🌍</div>
              <div className="text-sm text-white/80">Planet Regenerated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};