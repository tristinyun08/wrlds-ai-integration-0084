import { Button } from "@/components/ui/button";

const EleosAbout = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-12">
          About Us
        </h2>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-12">
          At Eleos Marketing Group, we are committed to partnering with nonprofits and small 
          businesses to amplify their impact through innovative marketing strategies. Our mission 
          is to provide compassionate, tailored solutions that empower organizations to reach 
          their full potential. By leveraging our expertise in digital marketing, website 
          development, and strategic consulting, we strive to build stronger, more connected 
          communities and drive meaningful change.
        </p>
        
        <Button 
          size="lg" 
          className="bg-white text-background hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
        >
          LEARN MORE
        </Button>
      </div>
    </section>
  );
};

export default EleosAbout;