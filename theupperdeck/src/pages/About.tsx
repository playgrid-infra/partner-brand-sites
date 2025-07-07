
import Layout from '../components/Layout';
import { Card, CardContent } from '../components/ui/card';
import { Activity, MapPin, Phone, Calendar } from 'lucide-react';

const About = () => {
  const facilities = [
    {
      name: "Sports Facility",
      description: "Basketball, Volleyball, Badminton, Table Tennis",
      contact: "Mavic 0919 0834142",
      email: "tudfrontdesk@gmail.com"
    },
    {
      name: "Fitness Facility", 
      description: "Fitness Gym, Fitness Studios, Edge Climb Gym, Plunge Dive Club",
      contact: "Jes 0919 0834143",
      email: "jes.theupperdeckph@gmail.com"
    },
    {
      name: "Wellness Facility",
      description: "Recovery Spa, Holistic Clinic, Spaces for Lease",
      contact: "Grace 0919 0821762", 
      email: "recoveryspaph@gmail.com"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tud-navy to-tud-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            About <span className="text-tud-orange">The Upper Deck</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Your premier sports center offering world-class facilities for fitness, sports, and wellness
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-tud-navy mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At The Upper Deck Sports Center, we are committed to providing exceptional facilities and services 
                that promote health, wellness, and athletic excellence. Our state-of-the-art complex houses multiple 
                specialized facilities designed to meet diverse fitness and recreational needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in creating a community where people can pursue their fitness goals, develop their athletic 
                skills, and find balance through wellness services - all under one roof.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-tud-orange/10 rounded-lg">
                <Activity className="h-12 w-12 text-tud-orange mx-auto mb-4" />
                <h3 className="font-bold text-tud-navy text-xl">Excellence</h3>
                <p className="text-gray-600 text-sm">World-class facilities and equipment</p>
              </div>
              <div className="text-center p-6 bg-tud-navy/10 rounded-lg">
                <MapPin className="h-12 w-12 text-tud-navy mx-auto mb-4" />
                <h3 className="font-bold text-tud-navy text-xl">Community</h3>
                <p className="text-gray-600 text-sm">Building connections through sports</p>
              </div>
              <div className="text-center p-6 bg-tud-navy/10 rounded-lg">
                <Phone className="h-12 w-12 text-tud-navy mx-auto mb-4" />
                <h3 className="font-bold text-tud-navy text-xl">Service</h3>
                <p className="text-gray-600 text-sm">Professional and dedicated support</p>
              </div>
              <div className="text-center p-6 bg-tud-orange/10 rounded-lg">
                <Calendar className="h-12 w-12 text-tud-orange mx-auto mb-4" />
                <h3 className="font-bold text-tud-navy text-xl">Accessibility</h3>
                <p className="text-gray-600 text-sm">Open daily with flexible schedules</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-tud-navy mb-4">
              Our Specialized Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three distinct facilities managed by dedicated professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-tud-navy mb-4">{facility.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{facility.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-tud-orange" />
                      <span className="text-gray-700 font-medium">{facility.contact}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-tud-orange" />
                      <span className="text-gray-700 text-sm">{facility.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-20 bg-tud-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Operating Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-tud-orange border-2">
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 text-tud-orange mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Fitness Gym</h3>
                <p className="text-xl">Daily: 6:00 AM - 10:00 PM</p>
                <p className="text-gray-300 mt-2">Open 7 days a week</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-tud-orange border-2">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 text-tud-orange mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Sports Courts</h3>
                <p className="text-xl">Booking: 10:00 AM - 6:00 PM</p>
                <p className="text-gray-300 mt-2">Tuesday - Sunday Only</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
