import { Button } from "@/components/ui/button";
import { Megaphone, Globe, PenTool, BarChart3, Search, Smartphone } from "lucide-react";

const EleosServices = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Social Media Marketing",
      description: "Amplify your brand voice across all major platforms with engaging content strategies that build authentic communities and drive meaningful engagement.",
      features: ["Content Strategy", "Community Management", "Influencer Campaigns", "Analytics & Reporting"]
    },
    {
      icon: Globe,
      title: "Web Design & Development", 
      description: "Create stunning, high-performing websites that convert visitors into supporters and customers with modern design and seamless user experiences.",
      features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "CMS Integration"]
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Develop compelling copy and long-form content that resonates with your audience, builds authority, and drives action across all channels.",
      features: ["Brand Messaging", "Blog Content", "Email Campaigns", "Video Scripts"]
    },
    {
      icon: BarChart3,
      title: "Digital Strategy",
      description: "Comprehensive digital marketing strategies backed by data insights to maximize your ROI and achieve sustainable growth.",
      features: ["Market Research", "Competitor Analysis", "KPI Tracking", "Campaign Optimization"]
    },
    {
      icon: Search,
      title: "SEO & SEM",
      description: "Increase your online visibility and drive qualified traffic through strategic search engine optimization and marketing campaigns.",
      features: ["Keyword Research", "On-Page SEO", "Google Ads", "Local SEO"]
    },
    {
      icon: Smartphone,
      title: "Mobile Marketing",
      description: "Reach your audience where they are with mobile-first strategies that drive engagement and conversions on all devices.",
      features: ["App Marketing", "SMS Campaigns", "Mobile UX", "Location-Based Marketing"]
    }
  ];

  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-900/30 to-background"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <span className="text-sm font-medium text-white">What We Do</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Our
            <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive marketing solutions designed to elevate your organization's 
            digital presence and drive measurable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl glass border border-white/10 hover:border-violet-500/30 hover-lift-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-violet-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-violet-500/25"
          >
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EleosServices;