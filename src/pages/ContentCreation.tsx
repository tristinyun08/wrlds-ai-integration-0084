import EleosNavbar from '@/components/EleosNavbar';
import EleosFooter from '@/components/EleosFooter';
import SEO from '@/components/SEO';
import { motion } from "framer-motion";
import { PenTool, FileText, Mail, Video, MessageSquare, BookOpen } from "lucide-react";

const ContentCreation = () => {
  const features = [
    {
      icon: FileText,
      title: "Brand Messaging",
      description: "Compelling copy that captures your unique voice and resonates with your target audience"
    },
    {
      icon: BookOpen,
      title: "Blog Content",
      description: "Engaging articles and thought leadership pieces that establish your authority"
    },
    {
      icon: Mail,
      title: "Email Campaigns",
      description: "Strategic email sequences that nurture relationships and drive conversions"
    },
    {
      icon: Video,
      title: "Video Scripts",
      description: "Compelling scripts for videos that tell your story and engage viewers"
    }
  ];

  const contentTypes = [
    {
      name: "Blog Posts",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      description: "SEO-optimized articles that drive traffic"
    },
    {
      name: "Social Media",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop",
      description: "Engaging posts for all platforms"
    },
    {
      name: "Email Marketing",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      description: "Nurturing sequences and campaigns"
    },
    {
      name: "Case Studies",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      description: "Compelling success stories"
    }
  ];

  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      <SEO 
        title="Content Creation - Eleos Marketing Group" 
        description="Develop compelling copy and long-form content that resonates with your audience, builds authority, and drives action across all channels."
        keywords={['content creation', 'brand messaging', 'blog content', 'email campaigns', 'video scripts', 'copywriting']}
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
              <PenTool size={16} className="text-violet-400" />
              <span className="text-sm font-medium text-violet-200">Content Creation</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8"
            >
              Compelling Content That
              <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Drives Action
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            >
              From brand messaging to long-form content, we create compelling copy that resonates with your audience, 
              builds authority, and drives real business results across all channels.
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
                Comprehensive content solutions designed to elevate your brand voice and drive meaningful engagement.
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

        {/* Content Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-slate-900/30 to-background">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Content Types We Create
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From blog posts to email campaigns, we create diverse content that serves your audience at every stage of their journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentTypes.map((type, index) => (
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
                Ready to Elevate Your Content?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can create compelling content that resonates with your audience and drives real business results.
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

export default ContentCreation;
