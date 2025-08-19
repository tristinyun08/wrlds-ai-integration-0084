import { Button } from "@/components/ui/button";

const EleosHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-background to-blue-900/30"></div>
      
      {/* Flowing gradient shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-600/20 to-transparent rounded-full blur-3xl animate-pulse-slow animation-delay-300"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
          Your Vision, Our Mission,{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            No Fees.
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Empower your nonprofit or business with our no-cost marketing expertise. 
          Start today and see the difference.
        </p>
        
        <Button 
          size="lg" 
          className="bg-white text-background hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
        >
          CONTACT US
        </Button>
      </div>
    </section>
  );
};

export default EleosHero;