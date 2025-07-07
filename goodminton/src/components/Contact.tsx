
import { Facebook, Instagram, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-goodminton-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-goodminton-green">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-goodminton-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to start your badminton journey? Contact us today and join the Goodminton family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold text-goodminton-green mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-goodminton-green rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Location</h4>
                      <p className="text-gray-300 leading-relaxed">
                        442 F. Legaspi St.<br />
                        Brgy Maybunga, Pasig City
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-goodminton-green rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">⏰</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Operating Hours</h4>
                      <div className="text-gray-300 space-y-1">
                        <p>Monday - Sunday: 6:00 AM - 10:00 PM</p>
                        <p>Special Events: Extended hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-goodminton-green rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Get in Touch</h4>
                      <p className="text-gray-300">
                        Call us for bookings and inquiries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-goodminton-green/10 p-6 rounded-2xl border border-goodminton-green/20">
                <h4 className="text-xl font-bold text-goodminton-green mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com/goodmintonsmashzone" 
                    className="w-12 h-12 bg-goodminton-green hover:bg-goodminton-green-dark rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="https://instagram.com/goodmintonsmashzone" 
                    className="w-12 h-12 bg-goodminton-green hover:bg-goodminton-green-dark rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  FB & IG: @goodmintonsmashzone
                </p>
              </div>
            </div>

            <div className="animate-scale-in">
              <div className="bg-white rounded-3xl p-8 text-goodminton-black">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-goodminton-green focus:border-transparent outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-goodminton-green focus:border-transparent outline-none transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-goodminton-green focus:border-transparent outline-none transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-goodminton-green focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your badminton goals or any questions you have..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-goodminton-green hover:bg-goodminton-green-dark text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
