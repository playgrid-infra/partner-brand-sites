
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Phone, MapPin, Calendar, Activity } from 'lucide-react';
import { Button } from '../components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      category: "Sports Facility",
      description: "Basketball, Volleyball, Badminton, Table Tennis",
      contact: "Mavic 0919 0834142",
      email: "tudfrontdesk@gmail.com",
      icon: <Activity className="h-8 w-8 text-tud-orange" />
    },
    {
      category: "Fitness Facility", 
      description: "Fitness Gym, Fitness Studios, Edge Climb Gym, Plunge Dive Club",
      contact: "Jes 0919 0834143",
      email: "jes.theupperdeckph@gmail.com",
      icon: <Activity className="h-8 w-8 text-tud-orange" />
    },
    {
      category: "Wellness Facility",
      description: "Recovery Spa, Holistic Clinic, Spaces for Lease",
      contact: "Grace 0919 0821762", 
      email: "recoveryspaph@gmail.com",
      icon: <Activity className="h-8 w-8 text-tud-orange" />
    }
  ];

  const generalContact = {
    phone: "Myles 0917 8169537",
    email: "theupperdeck.ph@yahoo.com",
    social: "@TheUpperDeckPh",
    viber: "https://tinyurl.com/TUDonViber"
  };

  const courtBookingInfo = {
    phones: ["+63 916 3734428", "+632 83530631"],
    email: "courtbookings@theupperdeckph.com",
    hours: "10am - 6pm",
    days: "Tuesdays - Sundays ONLY"
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tud-navy to-tud-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Contact <span className="text-tud-orange">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Get in touch with our team for bookings, inquiries, and more information
          </p>
        </div>
      </section>

      {/* Court Booking Section */}
      <section className="py-20 bg-tud-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl">
            <CardHeader className="bg-tud-navy text-white text-center py-8">
              <CardTitle className="text-3xl font-bold">Game Court Booking & Inquiries</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <p className="text-2xl font-bold text-tud-navy mb-2">{courtBookingInfo.hours}</p>
                <p className="text-xl text-gray-700 mb-6">{courtBookingInfo.days}</p>
                
                <div className="space-y-4 mb-8">
                  {courtBookingInfo.phones.map((phone, index) => (
                    <div key={index} className="flex items-center justify-center space-x-3">
                      <Phone className="h-6 w-6 text-tud-orange" />
                      <span className="text-2xl font-bold text-tud-navy">{phone}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-3 mb-8">
                  <MapPin className="h-6 w-6 text-tud-orange" />
                  <span className="text-lg text-gray-700">{courtBookingInfo.email}</span>
                </div>

                <div className="bg-tud-orange/10 p-6 rounded-lg">
                  <p className="text-gray-700 font-medium mb-4">
                    Due to the surge of inquiries, please allow 24 hours response time.
                    Thank you for the kind understanding!
                  </p>
                  
                  <div className="text-left space-y-2">
                    <p className="font-semibold text-tud-navy">Please remember to mention in the inquiry:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>1/ Date & Time of preferred usage</li>
                      <li>2/ Number of Courts</li>
                      <li>3/ Contact Name</li>
                      <li>4/ Mobile & Email</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-4 font-medium">
                    All inquiries need booking confirmation before payment. Please be guided accordingly. Thank you!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Facility Contacts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tud-navy mb-4">Facility Contacts</h2>
            <p className="text-xl text-gray-600">Direct contacts for each specialized facility</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-tud-navy mb-2">{info.category}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{info.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-3">
                      <Phone className="h-5 w-5 text-tud-orange" />
                      <span className="text-gray-700 font-semibold">{info.contact}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <MapPin className="h-5 w-5 text-tud-orange" />
                      <span className="text-gray-700 text-sm">{info.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* General Inquiries */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-tud-navy shadow-xl">
            <CardHeader className="bg-tud-navy text-white text-center py-8">
              <CardTitle className="text-3xl font-bold">General Inquiry</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-6 w-6 text-tud-orange" />
                  <span className="text-2xl font-bold text-tud-navy">{generalContact.phone}</span>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="h-6 w-6 text-tud-orange" />
                  <span className="text-lg text-gray-700">{generalContact.email}</span>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold">Instagram, Facebook, Twitter:</span> {generalContact.social}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Viber:</span> {generalContact.viber}
                  </p>
                </div>

                <div className="pt-6">
                  <Button 
                    size="lg" 
                    className="bg-tud-orange hover:bg-tud-orange/90 text-white font-semibold px-8 py-4"
                  >
                    <Phone className="mr-2" size={18} />
                    Call Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-20 bg-tud-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">Operating Hours</h2>
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

export default Contact;
