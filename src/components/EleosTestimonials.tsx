import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const EleosTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      company: "SANPAW",
      logo: "🐕", // Placeholder - you can replace with actual logo
      text: "Eleos Marketing Group transformed our online presence with a tailored social media strategy and a revamped website. Their expertise and personalized approach helped increase engagement and our customer base.",
    },
    {
      company: "Secure Eats",
      logo: "🥄", // Placeholder - you can replace with actual logo  
      text: "Working with Eleos Marketing Group has been a game-changer for our nonprofit. Their team brought a fresh perspective to our social media strategy, helping us connect with our community in ways we never thought possible.",
    },
    {
      company: "Justice By Objectives",
      logo: "⚖️", // Placeholder - you can replace with actual logo
      text: "Eleos Marketing Group has proven to be an outstanding partner in elevating our digital presence. They have exceeded our expectations in every aspect—from design to communication to responsiveness. I would confidently recommend Eleos to anyone in need of marketing and web development services. Their work speaks for itself, and their dedication to customer satisfaction is truly exceptional.",
    },
    {
      company: "Seeds To Flowers, Inc",
      logo: "🌸", // Placeholder - you can replace with actual logo
      text: "Eleos Marketing Group exceeded our expectations in every way! They completed our website efficiently and with outstanding attention to detail. The end result is a stunning, highly functional site that perfectly captures our vision and brand identity. Their services were impeccable, characterized by top-tier professionalism, creativity, and seamless communication. Throughout the entire process, the Eleos team consistently went above and beyond, keeping us informed and ensuring every element met our standards. We are thrilled with the results and highly recommend Eleos Marketing to anyone seeking a high-quality, hassle-free web development experience! Thank you for an exceptional job!",
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/10 to-background"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Testimonial Card */}
        <div className="bg-muted/50 rounded-3xl p-8 sm:p-12 mb-12 backdrop-blur-sm border border-border">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{testimonials[currentTestimonial].logo}</div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {testimonials[currentTestimonial].company}
            </h3>
          </div>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-center mb-8">
            {testimonials[currentTestimonial].text}
          </p>
          
          <p className="text-center text-foreground font-semibold">
            {testimonials[currentTestimonial].company}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-muted/50 hover:bg-muted text-foreground"
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-muted/50 hover:bg-muted text-foreground"
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EleosTestimonials;