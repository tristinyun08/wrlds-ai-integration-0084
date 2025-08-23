import { Instagram, Linkedin } from "lucide-react";

const EleosFooter = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/eleosmarketinggroup", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/eleos-marketing", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Social Media Marketing", href: "/services/social-media-marketing" },
    { name: "Web Design & Development", href: "/services/web-design-development" },
    { name: "Content Creation", href: "/services/content-creation" },
    { name: "SEO & SEM", href: "/services/seo-sem" },
    { name: "Digital Strategy", href: "/services/digital-strategy" },
    { name: "Mobile Marketing", href: "/services/mobile-marketing" },
  ];

  return (
    <footer className="relative bg-background border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4E0BAQG2jeR4qosUqA/company-logo_100_100/company-logo_100_100/0/1730579467389/eleos_marketing_logo?e=1758758400&v=beta&t=JRsGu5Hm35UKLtWHslljO22UimkVrzG1-VF-h89taNY" 
                  alt="Eleos Marketing Group Logo"
                  className="w-full h-full object-cover"
                />
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
                  target="_blank"
                  rel="noopener noreferrer"
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
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-muted-foreground hover:text-violet-400 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-muted-foreground hover:text-violet-400 transition-colors duration-200"
                  >
                    {item.name}
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
            

          </div>
        </div>
      </div>
    </footer>
  );
};

export default EleosFooter;