
import { Calendar, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-tud-navy via-tud-light-blue to-tud-navy text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Welcome to
            <span className="block text-tud-orange">The Upper Deck</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-medium mt-2">
              Sports Center
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Your premier destination for fitness, sports, and wellness. 
            Experience world-class facilities with professional service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-tud-orange hover:bg-tud-orange/90 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="mr-2" size={20} />
              Book Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-tud-navy font-semibold px-8 py-4 text-lg transition-all duration-300"
            >
              <Phone className="mr-2" size={20} />
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-tud-orange">10+</div>
              <div className="text-lg">Years of Excellence</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-tud-orange">5</div>
              <div className="text-lg">Premium Facilities</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-tud-orange">1000+</div>
              <div className="text-lg">Happy Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
