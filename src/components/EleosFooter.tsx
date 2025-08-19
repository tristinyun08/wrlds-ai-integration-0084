import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const EleosFooter = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-background border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">
                  <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    Eleos
                  </span>
                </div>
                <div className="text-xs text-muted-foreground font-medium tracking-wider">
                  MARKETING GROUP
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering nonprofits and businesses with no-cost marketing expertise. 
              Your mission is our mission.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-muted-foreground hover:text-violet-400 hover:bg-violet-500/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-violet-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {["Social Media", "Web Design", "Content Creation", "SEO", "Digital Strategy"].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-muted-foreground hover:text-violet-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Eleos Marketing Group. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-violet-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-violet-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-violet-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EleosFooter;