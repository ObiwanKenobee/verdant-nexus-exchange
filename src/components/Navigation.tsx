import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, TreePine, Globe, Users, BarChart3 } from "lucide-react";

const navItems = [
  { name: "Exchange", href: "#exchange", icon: BarChart3 },
  { name: "Desert Fund", href: "#desert", icon: TreePine },
  { name: "Council", href: "#council", icon: Users },
  { name: "Impact", href: "#impact", icon: Globe },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-desert-to-garden rounded-lg flex items-center justify-center">
              <TreePine className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-foreground">Verdant Nexus</div>
              <div className="text-xs text-muted-foreground">Regenerative Exchange</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <IconComponent className="h-4 w-4 group-hover:text-primary transition-colors" />
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
              Live Trading
            </Badge>
            <Button variant="outline" size="sm">
              Connect Wallet
            </Button>
            <Button variant="hero" size="sm">
              Join Exchange
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-lg">
            <div className="space-y-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </a>
                );
              })}
              <div className="px-4 pt-4 border-t border-border space-y-3">
                <Button variant="outline" className="w-full" size="sm">
                  Connect Wallet
                </Button>
                <Button variant="hero" className="w-full" size="sm">
                  Join Exchange
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};