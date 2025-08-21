import EleosNavbar from '@/components/EleosNavbar';
import EleosFooter from '@/components/EleosFooter';
import SEO from '@/components/SEO';
import { motion } from "framer-motion";
import { Search, TrendingUp, Target, BarChart3, Globe, Zap } from "lucide-react";

const SEOSEM = () => {
  const features = [
    {
      icon: Search,
      title: "Keyword Research",
      description: "Data-driven keyword analysis to target the most valuable search terms for your business"
    },
    {
      icon: Globe,
      title: "On-Page SEO",
      description: "Technical optimization of your website content and structure for search engines"
    },
    {
      icon: Target,
      title: "Google Ads",
      description: "Strategic paid search campaigns that drive qualified traffic and conversions"
    },
    {
      icon: TrendingUp,
      title: "Local SEO",
      description: "Location-based optimization to dominate local search results and drive foot traffic"
    }
  ];

  const seoTypes = [
    {
      name: "Technical SEO",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      description: "Site speed, mobile optimization, and technical improvements"
    },
    {
      name: "Content SEO",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      description: "Keyword-optimized content that ranks and converts"
    },
    {
      name: "Local SEO",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      description: "Google My Business and local search optimization"
    },
    {
      name: "E-commerce SEO",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop",
      description: "Product page optimization and shopping feed management"
    }
  ];

  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      <SEO 
        title="SEO & SEM - Eleos Marketing Group" 
        description="Increase your online visibility and drive qualified traffic through strategic search engine optimization and marketing campaigns."
        keywords={['SEO', 'SEM', 'search engine optimization', 'Google Ads', 'keyword research', 'local SEO', 'on-page SEO']}
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
              <Search size={16} className="text-violet-400" />
              <span className="text-sm font-medium text-violet-200">SEO & SEM</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8"
            >
              Dominate Search Results
              <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                & Drive Traffic
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            >
              From organic search optimization to strategic paid campaigns, we help you increase your online 
              visibility and drive qualified traffic that converts into customers.
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
                Comprehensive search engine optimization and marketing solutions designed to boost your rankings and drive results.
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

        {/* SEO Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-slate-900/30 to-background">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                SEO Services We Offer
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From technical optimization to content strategy, we cover all aspects of search engine optimization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {seoTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group text-center"
                >
                  <div className="aspect-square overflow-hidden rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={type.image} 
                      alt={type.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-violet-400 transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {type.description}
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
                Ready to Dominate Search Results?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can improve your search rankings and drive qualified traffic to your website.
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

export default SEOSEM;
