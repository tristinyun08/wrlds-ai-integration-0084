import { Button } from "@/components/ui/button";
import { Target, Heart, Users, Award } from "lucide-react";

const EleosAbout = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate",
      description: "We care deeply about our clients' missions and success"
    },
    {
      icon: Target,
      title: "Strategic",
      description: "Data-driven strategies that deliver measurable results"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Working together to amplify your organization's impact"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering top-tier solutions without compromising quality"
    }
  ];

  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-900/50 to-background"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-sm border border-violet-500/20 rounded-full px-6 py-3 mb-8 glass">
            <span className="text-sm font-medium text-violet-200">Our Story</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Transforming Organizations Through
            <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Strategic Marketing
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Eleos Marketing Group, we bridge the gap between mission-driven organizations 
            and the communities they serve. Our commitment to providing no-cost marketing 
            expertise empowers nonprofits and small businesses to maximize their impact 
            through innovative digital strategies.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group text-center p-8 rounded-2xl glass hover-lift-lg border border-white/10 hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <value.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-violet-500/25"
          >
            Learn About Our Process
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EleosAbout;