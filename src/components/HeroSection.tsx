import { Button } from "@/components/ui/button";
import { Shield, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center binary-bg"
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-cyber-dark/60 to-background z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyber-blue/30 bg-cyber-blue/5 text-sm text-cyber-blue mb-4">
              <Shield className="mr-2 h-4 w-4" />
              <span>Cybersecurity Professional</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Anthony <span className="cyber-text-gradient">Kraudelt</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Securing Digital Landscapes with <span className="text-cyber-blue">Strategic Expertise</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              A dedicated cybersecurity professional with extensive experience in protecting
              organizations from emerging threats while ensuring business continuity and risk management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 px-8 py-6">
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-blue to-cyber-accent rounded-lg blur opacity-30 animate-pulse-glow"></div>
              <div className="relative bg-card rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=800&q=80" 
                  alt="Anthony Kraudelt" 
                  className="w-full h-auto max-w-md object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg border border-cyber-blue/20">
                <div className="text-sm font-mono">
                  <span className="text-cyber-blue">function</span> <span className="text-cyber-accent">secureSystems</span>() &#123;
                  <br />
                  &nbsp;&nbsp;return <span className="text-cyber-blue">true</span>;
                  <br />
                  &#125;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="bg-card p-3 rounded-full border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-cyber-blue"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
