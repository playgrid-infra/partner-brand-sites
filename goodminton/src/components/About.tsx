
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-goodminton-black mb-6">
              About <span className="text-goodminton-green">Our Zone</span>
            </h2>
            <div className="w-24 h-1 bg-goodminton-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Goodminton Smash Zone, we're more than just a badminton facility – we're a community of passionate players dedicated to excellence, growth, and fun.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-goodminton-green">
                <h3 className="text-2xl font-bold text-goodminton-black mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide world-class badminton facilities and professional coaching that helps players of all levels achieve their goals while fostering a supportive community atmosphere.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-goodminton-green">
                <h3 className="text-2xl font-bold text-goodminton-black mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the premier badminton destination where champions are made, friendships are forged, and the love for the sport continues to grow.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              <div className="text-center p-6 bg-goodminton-green rounded-2xl text-white">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm uppercase tracking-wide">Active Members</div>
              </div>
              
              <div className="text-center p-6 bg-goodminton-black rounded-2xl text-white">
                <div className="text-3xl font-bold mb-2">8</div>
                <div className="text-sm uppercase tracking-wide">Professional Courts</div>
              </div>
              
              <div className="text-center p-6 bg-goodminton-black rounded-2xl text-white">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm uppercase tracking-wide">Expert Coaches</div>
              </div>
              
              <div className="text-center p-6 bg-goodminton-green rounded-2xl text-white">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm uppercase tracking-wide">Tournaments</div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-gradient-to-r from-goodminton-green to-goodminton-green-dark p-8 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Goodminton Smash Zone?</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏸</span>
                  </div>
                  <h4 className="font-semibold mb-2">Professional Coaching</h4>
                  <p className="text-sm opacity-90">Expert guidance from certified coaches</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h4 className="font-semibold mb-2">Competitive Events</h4>
                  <p className="text-sm opacity-90">Regular tournaments and competitions</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="font-semibold mb-2">Community Spirit</h4>
                  <p className="text-sm opacity-90">Welcoming environment for all players</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
