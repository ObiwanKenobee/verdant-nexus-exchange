import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import desertImage from "@/assets/desert-restoration.jpg";
import { Droplets, Sun, Zap, TreePine, Target, MapPin } from "lucide-react";

const projects = [
  {
    name: "Sinai Regeneration",
    location: "Egypt",
    area: "2.3M hectares",
    progress: 34,
    investment: "$1.2B",
    co2Capture: "45M tons/year",
    icon: Sun,
  },
  {
    name: "Sahara Greenbelt",
    location: "North Africa", 
    area: "5.8M hectares",
    progress: 18,
    investment: "$3.4B",
    co2Capture: "120M tons/year",
    icon: TreePine,
  },
  {
    name: "Arabian Oasis Network",
    location: "Arabian Peninsula",
    area: "1.9M hectares", 
    progress: 52,
    investment: "$890M",
    co2Capture: "38M tons/year",
    icon: Droplets,
  },
];

const technologies = [
  { name: "Solar Desalination", icon: Sun, description: "Converting seawater to irrigation" },
  { name: "Biochar Soil Enhancement", icon: TreePine, description: "Carbon capture in soil" },
  { name: "IoT Monitoring", icon: Zap, description: "AI-powered ecosystem tracking" },
  { name: "Indigenous Methods", icon: Target, description: "Traditional water harvesting" },
];

export const DesertGardenSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-gradient-desert-to-garden opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Desert-to-Garden Fund
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            5% of all exchange fees flow into the Greenbelt Trust, financing large-scale desert 
            regeneration across Sinai, Sahara, and Arabian Peninsula.
          </p>
          <div className="flex items-center justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">$847M</div>
              <div className="text-sm text-muted-foreground">Funds Deployed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">203M</div>
              <div className="text-sm text-muted-foreground">CO₂ Captured (tons/year)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">10M</div>
              <div className="text-sm text-muted-foreground">Hectares Under Restoration</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-16 relative rounded-2xl overflow-hidden shadow-regenerative">
          <img 
            src={desertImage} 
            alt="Desert transformation visualization"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-transparent to-secondary/60 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-2">Living Transformation</h3>
              <p className="text-lg">Desert → Oasis → Carbon Sink → Ecosystem</p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-regenerative transition-all duration-300 group">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-secondary/10 rounded-xl">
                      <IconComponent className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Target Area</span>
                        <span className="font-medium text-foreground">{project.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Investment</span>
                        <span className="font-medium text-foreground">{project.investment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">CO₂ Capture</span>
                        <span className="font-medium text-secondary">{project.co2Capture}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm font-semibold text-foreground">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  {/* Action */}
                  <Button variant="regenerative" className="w-full group-hover:scale-105 transition-transform">
                    Support Project
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Technologies */}
        <div className="bg-card rounded-2xl p-8 shadow-earth">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Restoration Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="text-center space-y-4 group hover:scale-105 transition-transform">
                  <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};