import { Mail, Send, Instagram } from "lucide-react";

const EleosContact = () => {
  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-900/50 to-background"></div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-violet-600/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-purple-600/10 to-transparent blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-sm border border-violet-500/20 rounded-full px-6 py-3 mb-8 glass">
            <Send size={16} className="text-violet-400" />
            <span className="text-sm font-medium text-violet-200">Get In Touch</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Ready to Transform
            <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Your Organization?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Let's discuss how we can help amplify your mission and drive meaningful impact 
            through strategic marketing solutions.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Get in touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">eleosmarketinggroup@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Instagram size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Instagram</div>
                    <a 
                      href="https://www.instagram.com/eleosmarketinggroup" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-violet-400 transition-colors"
                    >
                      @eleosmarketinggroup
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 border border-white/10">
              <h4 className="text-xl font-bold text-foreground mb-4 text-center">Why choose us?</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                  No costs for nonprofits
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                  Expert team with proven results
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                  Tailored strategies for your mission
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                  Ongoing support and optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EleosContact;