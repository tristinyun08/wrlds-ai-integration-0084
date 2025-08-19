import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const EleosHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-slate-900 to-background">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/30 to-purple-600/30 rounded-full blur-3xl animate-float-slow opacity-60"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-600/30 to-rose-600/30 rounded-full blur-3xl animate-float-slow animation-delay-300 opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e")`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-sm border border-violet-500/20 rounded-full px-6 py-3 mb-8 glass">
          <Sparkles size={16} className="text-violet-400" />
          <span className="text-sm font-medium text-violet-200">No-Cost Marketing Excellence</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
          <span className="block text-foreground">Your Vision,</span>
          <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Our Mission,
          </span>
          <span className="block text-foreground">No Fees.</span>
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Empowering nonprofits and businesses with cutting-edge marketing strategies 
          and digital solutions that drive real impact.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover-lift shadow-lg hover:shadow-violet-500/25"
          >
            Get Started Today
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-6 text-lg font-semibold rounded-2xl border-2 border-violet-500/30 text-foreground hover:bg-violet-500/10 transition-all duration-300 glass"
          >
            View Our Work
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "$0", label: "Cost to Nonprofits" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EleosHero;