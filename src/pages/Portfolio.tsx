import EleosNavbar from '@/components/EleosNavbar';
import EleosFooter from '@/components/EleosFooter';
import SEO from '@/components/SEO';
import { motion } from "framer-motion";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Nonprofit Marketing Campaigns",
      description: "Strategic marketing campaigns that increased donor engagement and community awareness for various nonprofit organizations.",
      category: "Nonprofit",
      image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
    },
    {
      title: "Business Brand Development",
      description: "Complete brand identity development including logos, color schemes, and brand guidelines for local businesses.",
      category: "Branding",
      image: "/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png"
    },
    {
      title: "Digital Marketing Strategies",
      description: "Comprehensive digital marketing strategies that improved online presence and customer engagement.",
      category: "Digital Marketing",
      image: "/lovable-uploads/39605e90-8478-4fee-b1b9-cee41df66f10.png"
    },
    {
      title: "Web Design & Development",
      description: "Modern, responsive websites that enhance user experience and drive conversions.",
      category: "Web Design",
      image: "/lovable-uploads/6739bd63-bf19-4abd-bb23-0b613bbf7ac8.png"
    },
    {
      title: "Social Media Management",
      description: "Strategic social media campaigns that build brand awareness and foster community engagement.",
      category: "Social Media",
      image: "/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
    },
    {
      title: "Content Marketing",
      description: "Engaging content strategies that tell compelling stories and connect with target audiences.",
      category: "Content",
      image: "/lovable-uploads/5463c9c5-0946-4280-a14b-17636ff69a98.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      <SEO 
        title="Portfolio - Eleos Marketing Group" 
        description="Explore our portfolio of successful marketing campaigns, web design projects, and strategic initiatives."
        keywords={['portfolio', 'case studies', 'marketing campaigns', 'web design', 'branding', 'digital marketing']}
      />
      <EleosNavbar />
      <div className="pt-20 pb-8">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Our Portfolio
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how we've helped nonprofits and businesses achieve their marketing goals through strategic, 
                creative, and effective solutions - all at no cost.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-105">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-400 text-sm font-medium rounded-full mb-3">
                        {item.category}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-violet-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how we can help you achieve your marketing goals with our no-cost services.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <EleosFooter />
    </div>
  );
};

export default Portfolio;
