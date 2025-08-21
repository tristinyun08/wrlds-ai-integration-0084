import EleosNavbar from '@/components/EleosNavbar';
import EleosFooter from '@/components/EleosFooter';
import SEO from '@/components/SEO';
import { motion } from "framer-motion";
import { Megaphone, TrendingUp, Users, BarChart3, Heart, Zap } from "lucide-react";

const SocialMediaMarketing = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Content Strategy",
      description: "Data-driven content planning that resonates with your audience and drives engagement"
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Building and nurturing authentic relationships with your followers and customers"
    },
    {
      icon: Heart,
      title: "Influencer Campaigns",
      description: "Strategic partnerships with relevant influencers to amplify your brand message"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive insights and performance tracking to optimize your social media ROI"
    }
  ];

  const platforms = [
    {
      name: "Instagram",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop",
      description: "Visual storytelling and community building"
    },
    {
      name: "LinkedIn",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      description: "Professional networking and B2B marketing"
    },
    {
      name: "Facebook",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop",
      description: "Community engagement and brand awareness"
    },
    {
      name: "TikTok",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      description: "Trending content and viral marketing"
    }
  ];

  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      <SEO 
        title="Social Media Marketing - Eleos Marketing Group" 
        description="Amplify your brand voice across all major platforms with engaging content strategies that build authentic communities and drive meaningful engagement."
        keywords={['social media marketing', 'content strategy', 'community management', 'influencer campaigns', 'social media analytics']}
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
              <Megaphone size={16} className="text-violet-400" />
              <span className="text-sm font-medium text-violet-200">Social Media Marketing</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8"
            >
              Amplify Your Brand Voice
              <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Across All Platforms
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            >
              Build authentic communities, drive meaningful engagement, and create lasting brand relationships 
              through strategic social media marketing that resonates with your audience.
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
                Comprehensive social media solutions designed to elevate your brand presence and drive real results.
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

        {/* Platforms Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-slate-900/30 to-background">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Platform Expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We specialize in all major social media platforms to ensure your brand reaches its audience wherever they are.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group text-center"
                >
                  <div className="aspect-square overflow-hidden rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={platform.image} 
                      alt={platform.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-violet-400 transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {platform.description}
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
                Ready to Transform Your Social Media Presence?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can help you build authentic connections and drive real engagement across all your social platforms.
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

export default SocialMediaMarketing;
