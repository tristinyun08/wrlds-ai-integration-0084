import { Button } from "@/components/ui/button";

const EleosServices = () => {
  const services = [
    {
      title: "Social Media",
      description: "Grow your audience size and brand loyalty through online engagement, influencer campaigns, and more. Our organic social media services cover the major platforms"
    },
    {
      title: "Web Design", 
      description: "We help enhance the user experience with an engaging website to help attract more customers"
    },
    {
      title: "Content",
      description: "We provide customized marketing copy and long-form content based on insights to grow your audience, build brand authority, position your brand as a thought leader, and promote landing pages that encourage readers to buy."
    }
  ];

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient background with flowing shapes */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-background to-blue-900/20"></div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-purple-600/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-blue-600/10 to-transparent blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-16 text-center">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-white text-background hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            SERVICES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EleosServices;