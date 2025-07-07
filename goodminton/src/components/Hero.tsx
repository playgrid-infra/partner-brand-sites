
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with grid pattern */}
      <div className="absolute inset-0 bg-hero-gradient">
        <div className="absolute inset-0 grid-pattern-dark opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-goodminton-green/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-goodminton-green/20 rounded-lg rotate-45 animate-bounce"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-goodminton-green">GOODMINTON</span>
            <br />
            <span className="text-white">SMASH ZONE</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Dedicated to all badminton enthusiasts looking to elevate their game & have fun on the court.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('programs')}
              size="lg"
              className="bg-goodminton-green hover:bg-goodminton-green-dark text-white px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Explore Programs
            </Button>
            
            <Button 
              onClick={() => scrollToSection('about')}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-goodminton-green-light text-lg italic font-medium">
              "Make time for GOOD things"
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
