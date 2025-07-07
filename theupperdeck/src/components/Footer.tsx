
import { Phone, Calendar, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tud-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold">The</h3>
              <div className="flex items-center space-x-1">
                <span className="text-tud-orange font-bold text-sm">SPORTS CENTER</span>
              </div>
              <h3 className="text-2xl font-bold -mt-1">Upper Deck</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your premier destination for fitness, sports, and wellness. 
              Experience world-class facilities and professional service.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-tud-orange">Quick Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-tud-orange" />
                <span className="text-sm">0917 621 0643</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-tud-orange" />
                <span className="text-sm">Open Daily 6am-10pm</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-tud-orange" />
                <span className="text-sm">Philippines</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-tud-orange">Our Facilities</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• Fitness Gym</li>
              <li>• Sports Courts</li>
              <li>• Recovery Spa</li>
              <li>• Plunge Dive Club</li>
              <li>• Wellness Services</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 The Upper Deck Sports Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
