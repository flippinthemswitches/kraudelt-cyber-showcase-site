
import { Shield, Linkedin, Twitter, Mail, GitHub } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-dark py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="h-8 w-8 text-cyber-blue mr-2" />
            <span className="font-bold text-xl">
              Kraudelt<span className="text-cyber-blue">.</span>
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="bg-card p-2 rounded-full border border-cyber-blue/20 hover:border-cyber-blue transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-cyber-blue" />
            </a>
            <a 
              href="#" 
              className="bg-card p-2 rounded-full border border-cyber-blue/20 hover:border-cyber-blue transition-all"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 text-cyber-blue" />
            </a>
            <a 
              href="mailto:contact@kraudelt.com" 
              className="bg-card p-2 rounded-full border border-cyber-blue/20 hover:border-cyber-blue transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-cyber-blue" />
            </a>
            <a 
              href="#" 
              className="bg-card p-2 rounded-full border border-cyber-blue/20 hover:border-cyber-blue transition-all"
              aria-label="GitHub"
            >
              <GitHub className="h-5 w-5 text-cyber-blue" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-cyber-blue/20 pt-8 flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-muted-foreground">
              &copy; {currentYear} Anthony Kraudelt. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <a href="#home" className="text-muted-foreground hover:text-cyber-blue transition-colors">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-cyber-blue transition-colors">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-cyber-blue transition-colors">
              Services
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-cyber-blue transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-cyber-blue transition-colors">
              Contact
            </a>
            <a href="#" className="text-muted-foreground hover:text-cyber-blue transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
