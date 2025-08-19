const EleosFooter = () => {
  return (
    <footer className="relative bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Eleos
            </span>
            <span className="text-foreground ml-2 text-sm">MARKETING GROUP</span>
          </div>
          
          <p className="text-muted-foreground mb-8">
            Empowering nonprofits and businesses with no-cost marketing expertise.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#" className="text-muted-foreground hover:text-purple-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-purple-400 transition-colors">
              About Us
            </a>
            <a href="#services" className="text-muted-foreground hover:text-purple-400 transition-colors">
              Services
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              © 2024 Eleos Marketing Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EleosFooter;