import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      // Add background when scrolled
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-elegant' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="animate-fade-in">
            <h1 className="heading-luxury text-2xl md:text-3xl tracking-widest">
              RAUNAQH
            </h1>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#collections" className="text-sm tracking-wider uppercase hover:text-accent transition-colors duration-300">
              Collections
            </a>
            <a href="#about" className="text-sm tracking-wider uppercase hover:text-accent transition-colors duration-300">
              About
            </a>
            <a href="#craftsmanship" className="text-sm tracking-wider uppercase hover:text-accent transition-colors duration-300">
              Craftsmanship
            </a>
            <a href="#contact" className="text-sm tracking-wider uppercase hover:text-accent transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center space-x-4">
            <button className="btn-luxury hidden md:inline-flex">
              Shop Now
            </button>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <div className="w-6 h-0.5 bg-foreground mb-1 transition-all duration-300"></div>
              <div className="w-6 h-0.5 bg-foreground mb-1 transition-all duration-300"></div>
              <div className="w-6 h-0.5 bg-foreground transition-all duration-300"></div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;