import { Button } from "@/components/ui/button";
import { TreePine, Globe, Heart, Shield, BookOpen, Users } from "lucide-react";

const footerSections = [
  {
    title: "Exchange",
    links: [
      { name: "Carbon Credits", href: "#" },
      { name: "Cultural Credits", href: "#" },
      { name: "Human Rights Credits", href: "#" },
      { name: "Trading Platform", href: "#" },
    ],
  },
  {
    title: "Impact",
    links: [
      { name: "Desert Restoration", href: "#" },
      { name: "Cultural Preservation", href: "#" },
      { name: "Community Empowerment", href: "#" },
      { name: "Impact Reports", href: "#" },
    ],
  },
  {
    title: "Governance", 
    links: [
      { name: "Council of Custodians", href: "#" },
      { name: "Decision History", href: "#" },
      { name: "Apply for Council", href: "#" },
      { name: "Governance Model", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#" },
      { name: "API Access", href: "#" },
      { name: "Developer Tools", href: "#" },
      { name: "Research Papers", href: "#" },
    ],
  },
];

const socialIcons = [
  { name: "Global Network", icon: Globe, href: "#" },
  { name: "Cultural Council", icon: BookOpen, href: "#" },
  { name: "Community", icon: Users, href: "#" },
  { name: "Regenerative Values", icon: Heart, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-earth text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-desert-to-garden rounded-lg flex items-center justify-center">
                <TreePine className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">Verdant Nexus</div>
                <div className="text-sm text-white/70">Regenerative Exchange</div>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-6">
              The world's first living exchange where carbon, culture, and compassion 
              become tradeable assets — shifting civilization from extractive to regenerative economies.
            </p>
            <div className="flex space-x-3">
              {socialIcons.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                    title={social.name}
                  >
                    <IconComponent className="h-5 w-5 text-white group-hover:text-primary-glow transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/20 pt-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Join the Regenerative Revolution
              </h3>
              <p className="text-white/80">
                Get updates on new trading opportunities, desert restoration progress, 
                and governance decisions from the Council of Custodians.
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-white/70">
              <span>© 2024 Project Verdant Nexus</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Code of Ethics</a>
            </div>
            <div className="flex items-center space-x-4 text-sm text-white/70">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-secondary" />
                <span>Blockchain Verified</span>
              </div>
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span>Live Trading Active</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};