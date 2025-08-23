import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const EleosTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      company: "SANPAW",
      logo: "🐕",
      name: "Sarah Mitchell",
      role: "Executive Director",
      text: "Eleos Marketing Group transformed our online presence with a tailored social media strategy and a revamped website. Their expertise and personalized approach helped increase engagement and our customer base by 150%.",
      rating: 5
    },
    {
      company: "Secure Eats",
      logo: "🥄",
      name: "Michael Rodriguez", 
      role: "Founder",
      text: "Working with Eleos Marketing Group has been a game-changer for our nonprofit. Their team brought a fresh perspective to our social media strategy, helping us connect with our community in ways we never thought possible.",
      rating: 5
    },
    {
      company: "Justice By Objectives",
      logo: "⚖️",
      name: "Jessica Chen",
      role: "Marketing Director",
      text: "Eleos Marketing Group has proven to be an outstanding partner in elevating our digital presence. They exceeded our expectations in every aspect—from design to communication to responsiveness. Their dedication to customer satisfaction is truly exceptional.",
      rating: 5
    },
    {
      company: "Seeds To Flowers, Inc",
      logo: "🌸",
      name: "David Thompson",
      role: "CEO",
      text: "Eleos Marketing Group exceeded our expectations in every way! They completed our website efficiently with outstanding attention to detail. The end result is a stunning, highly functional site that perfectly captures our vision and brand identity.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative pt-16 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-900/30 to-background"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-sm border border-violet-500/20 rounded-full px-6 py-3 mb-8 glass">
            <Star size={16} className="text-violet-400" />
            <span className="text-sm font-medium text-violet-200">Client Success Stories</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            What Our
            <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how we've helped nonprofits and businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Testimonial */}
          <div className="lg:col-span-2">
            <div className="relative p-10 rounded-3xl glass border border-white/10 hover:border-violet-500/30 transition-all duration-300 h-full">
              <Quote size={48} className="text-violet-400 mb-6 opacity-50" />
              
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center text-2xl mr-4">
                  {testimonials[currentTestimonial].logo}
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Testimonials */}
          <div className="space-y-6">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl glass border border-white/10 hover:border-violet-500/30 transition-all duration-300 cursor-pointer hover-lift"
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center text-lg mr-3">
                    {testimonial.logo}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{testimonial.text.substring(0, 120)}..."
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-2xl glass hover:bg-violet-500/20 text-foreground border border-white/10"
          >
            <ChevronLeft size={20} />
          </Button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-violet-400' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-2xl glass hover:bg-violet-500/20 text-foreground border border-white/10"
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EleosTestimonials;