
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-goodminton-green">GOODMINTON</span>
              <span className={isScrolled ? 'text-black' : 'text-white'}>
                {' '}SMASH ZONE
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`hover:text-goodminton-green transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`hover:text-goodminton-green transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('programs')}
              className={`hover:text-goodminton-green transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className={`hover:text-goodminton-green transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`hover:text-goodminton-green transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-goodminton-green hover:bg-goodminton-green-dark text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Book Now
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
