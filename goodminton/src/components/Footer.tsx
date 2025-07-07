
import { Facebook, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-goodminton-gray-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="text-2xl font-bold">
                  <span className="text-goodminton-green">GOODMINTON</span>
                  <span className="text-white"> SMASH ZONE</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Dedicated to all badminton enthusiasts looking to elevate their game & have fun on the court. Join our community today!
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com/goodmintonsmashzone" 
                  className="w-10 h-10 bg-goodminton-green hover:bg-goodminton-green-dark rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://instagram.com/goodmintonsmashzone" 
                  className="w-10 h-10 bg-goodminton-green hover:bg-goodminton-green-dark rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-goodminton-green mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-goodminton-green transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-goodminton-green transition-colors">About</a></li>
                <li><a href="#programs" className="hover:text-goodminton-green transition-colors">Programs</a></li>
                <li><a href="#gallery" className="hover:text-goodminton-green transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-goodminton-green transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-goodminton-green mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-goodminton-green mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    442 F. Legaspi St.<br />
                    Brgy Maybunga, Pasig City
                  </div>
                </div>
                <div className="text-sm">
                  <strong>FB & IG:</strong> @goodmintonsmashzone
                </div>
                <div className="text-sm">
                  <strong>Hours:</strong> 6:00 AM - 10:00 PM Daily
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 mb-4">
              "Make time for GOOD things"
            </p>
            <p className="text-sm text-gray-500">
              © {currentYear} Goodminton Smash Zone. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
