import EleosNavbar from '@/components/EleosNavbar';
import EleosFooter from '@/components/EleosFooter';
import SEO from '@/components/SEO';
import { motion } from "framer-motion";
import { BarChart3, Target, TrendingUp, Users, Lightbulb, Zap } from "lucide-react";

const DigitalStrategy = () => {
  const features = [
    {
      icon: Target,
      title: "Market Research",
      description: "Comprehensive analysis of your market, competitors, and target audience to inform strategy"
    },
    {
      icon: BarChart3,
      title: "Competitor Analysis",
      description: "Deep dive into competitor strategies to identify opportunities and gaps in the market"
    },
    {
      icon: TrendingUp,
      title: "KPI Tracking",
      description: "Data-driven performance monitoring and optimization to maximize your marketing ROI"
    },
    {
      icon: Lightbulb,
      title: "Campaign Optimization",
      description: "Continuous improvement of campaigns based on real-time data and performance insights"
    }
  ];

  const strategyAreas = [
    {
      name: "Brand Strategy",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop",
      description: "Defining your unique value proposition and brand positioning"
    },
    {
      name: "Marketing Strategy",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      description: "Integrated marketing approaches across all channels"
    },
    {
      name: "Growth Strategy",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      description: "Scalable strategies for sustainable business growth"
    },
    {
      name: "Digital Transformation",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      description: "Modernizing your digital presence and processes"
    }
  ];

  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      <SEO 
        title="Digital Strategy - Eleos Marketing Group" 
        description="Comprehensive digital marketing strategies backed by data insights to maximize your ROI and achieve sustainable growth."
        keywords={['digital strategy', 'marketing strategy', 'market research', 'competitor analysis', 'KPI tracking', 'campaign optimization']}
      />
      <EleosNavbar />
      <div className="pt-20 pb-8">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-sm border border-violet-500/20 rounded-full px-6 py-3 mb-8 glass"
            >
              <BarChart3 size={16} className="text-violet-400" />
              <span className="text-sm font-medium text-violet-200">Digital Strategy</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8"
            >
              Data-Driven Strategies
              <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                That Drive Growth
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            >
              From market research to campaign optimization, we develop comprehensive digital strategies 
              that maximize your ROI and achieve sustainable business growth.
            </motion.p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What We Deliver
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Strategic digital marketing solutions designed to elevate your business and drive measurable results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-8 rounded-2xl glass border border-white/10 hover:border-violet-500/30 hover-lift-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 mb-6 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-violet-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategy Areas Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-slate-900/30 to-background">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Strategic Focus Areas
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We develop comprehensive strategies across all key areas of digital marketing and business growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {strategyAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group text-center"
                >
                  <div className="aspect-square overflow-hidden rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={area.image} 
                      alt={area.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-violet-400 transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Ready to Develop Your Digital Strategy?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can create a comprehensive digital strategy that drives sustainable growth for your business.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </a>
            </motion.div>
          </div>
        </section>
      </div>
      <EleosFooter />
    </div>
  );
};

export default DigitalStrategy;
