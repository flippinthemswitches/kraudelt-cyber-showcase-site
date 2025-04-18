
import { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Security', href: '#services' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Awards', href: '#awards' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-12',
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-cyber-blue" /> {/* Reduced icon size */}
            <span className="font-bold text-base"> {/* Reduced from text-xl to text-base */}
              Kraudelt<span className="text-cyber-blue">.com</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-sm text-muted-foreground hover:text-cyber-blue transition-colors" // Reduced from text-base to text-sm
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-cyber-blue hover:bg-cyber-lightBlue text-white text-sm"> {/* Reduced button text size */}
              Get in Touch <ChevronRight className="ml-1 h-3 w-3" /> {/* Reduced chevron icon size */}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-5 w-5 text-foreground" /> {/* Reduced icon size */}
            ) : (
              <Menu className="h-5 w-5 text-foreground" /> {/* Reduced icon size */}
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'md:hidden absolute left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg px-6 pb-6 pt-2 transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden',
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="flex flex-col space-y-4 mt-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium py-2 text-sm text-muted-foreground hover:text-cyber-blue transition-colors" // Reduced from text-base to text-sm
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-cyber-blue hover:bg-cyber-lightBlue text-white w-full mt-4 text-sm"> {/* Reduced button text size */}
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
