import EleosNavbar from '@/components/EleosNavbar';
import EleosFooter from '@/components/EleosFooter';
import SEO from '@/components/SEO';
import { motion } from "framer-motion";
import { Smartphone, Target, BarChart3, Users, Zap, MessageSquare } from "lucide-react";

const MobileMarketing = () => {
  const features = [
    {
      icon: Target,
      title: "Mobile-First Strategy",
      description: "Optimized campaigns designed specifically for mobile users and their behaviors"
    },
    {
      icon: MessageSquare,
      title: "SMS Marketing",
      description: "Direct, high-engagement text message campaigns that drive immediate action"
    },
    {
      icon: Users,
      title: "App Marketing",
      description: "Strategic promotion and optimization of mobile applications for maximum downloads"
    },
    {
      icon: BarChart3,
      title: "Mobile Analytics",
      description: "Comprehensive tracking and insights to optimize your mobile marketing performance"
    }
  ];

  const mobileChannels = [
    {
      name: "SMS Campaigns",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      description: "High-converting text message marketing"
    },
    {
      name: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      description: "App store optimization and promotion"
    },
    {
      name: "Mobile Ads",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop",
      description: "Targeted mobile advertising campaigns"
    },
    {
      name: "Push Notifications",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      description: "Engaging mobile push notifications"
    }
  ];

  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      <SEO 
        title="Mobile Marketing - Eleos Marketing Group" 
        description="Reach your audience where they spend most of their time - on mobile devices. Drive engagement and conversions through strategic mobile marketing campaigns."
        keywords={['mobile marketing', 'SMS marketing', 'app marketing', 'mobile ads', 'push notifications', 'mobile-first strategy']}
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
              <Smartphone size={16} className="text-violet-400" />
              <span className="text-sm font-medium text-violet-200">Mobile Marketing</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8"
            >
              Reach Your Audience
              <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                On Mobile Devices
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            >
              With over 60% of web traffic coming from mobile devices, we help you create 
              mobile-first marketing strategies that drive engagement and conversions.
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
                Comprehensive mobile marketing solutions designed to maximize your reach and engagement on mobile devices.
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

        {/* Mobile Channels Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-slate-900/30 to-background">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Mobile Marketing Channels
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We specialize in all major mobile marketing channels to ensure your message reaches your audience wherever they are.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mobileChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group text-center"
                >
                  <div className="aspect-square overflow-hidden rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={channel.image} 
                      alt={channel.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-violet-400 transition-colors">
                    {channel.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {channel.description}
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
                Ready to Dominate Mobile Marketing?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can help you reach your audience on mobile devices and drive real engagement and conversions.
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

export default MobileMarketing;
