
import { Activity, Calendar, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: <Activity className="h-12 w-12 text-tud-orange" />,
      title: "Fitness Gym & Studios",
      description: "State-of-the-art equipment and fitness studios for all your workout needs.",
      features: ["Modern Equipment", "Personal Training", "Group Classes"]
    },
    {
      icon: <MapPin className="h-12 w-12 text-tud-orange" />,
      title: "Sports Facilities",
      description: "Professional courts for basketball, volleyball, badminton, and table tennis.",
      features: ["Multi-Sport Courts", "Professional Standards", "Equipment Rental"]
    },
    {
      icon: <Calendar className="h-12 w-12 text-tud-orange" />,
      title: "Recovery & Wellness",
      description: "Recovery spa and wellness services to help you relax and rejuvenate.",
      features: ["Recovery Spa", "Holistic Treatments", "Wellness Programs"]
    },
    {
      icon: <Clock className="h-12 w-12 text-tud-orange" />,
      title: "Plunge Dive Club",
      description: "Unique aquatic experiences and diving facilities for enthusiasts.",
      features: ["Diving Training", "Aquatic Programs", "Safety Certified"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tud-navy mb-4">
            Our Premium Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover world-class facilities designed to meet all your fitness and sports needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-tud-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-tud-orange font-medium">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
