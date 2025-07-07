
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tud-navy mb-4">
            Membership Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible membership options to fit your lifestyle and fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-tud-orange shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardHeader className="bg-gradient-to-r from-tud-orange to-orange-400 text-white text-center py-8">
              <CardTitle className="text-3xl font-bold">Monthly Pass</CardTitle>
              <div className="text-5xl font-bold mt-4">₱3,500</div>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="text-tud-orange mr-3">✓</span>
                  Unlimited fitness gym access
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-tud-orange mr-3">✓</span>
                  Open Daily 6am-10pm
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-tud-orange mr-3">✓</span>
                  No hidden charges
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-tud-orange mr-3">✓</span>
                  Access to all facilities
                </li>
              </ul>
              <Button className="w-full bg-tud-orange hover:bg-tud-orange/90 text-white font-semibold py-3">
                <Phone className="mr-2" size={18} />
                Get Monthly Pass
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-tud-navy shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardHeader className="bg-gradient-to-r from-tud-navy to-blue-600 text-white text-center py-8">
              <CardTitle className="text-3xl font-bold">Day Pass</CardTitle>
              <div className="text-5xl font-bold mt-4">₱800</div>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="text-tud-orange mr-3">✓</span>
                  Full day access
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-tud-orange mr-3">✓</span>
                  Perfect for visitors
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-tud-orange mr-3">✓</span>
                  No commitments
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-tud-orange mr-3">✓</span>
                  Try before you buy
                </li>
              </ul>
              <Button className="w-full bg-tud-navy hover:bg-tud-navy/90 text-white font-semibold py-3">
                <Phone className="mr-2" size={18} />
                Get Day Pass
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need more information about our services and pricing?
          </p>
          <Button variant="outline" size="lg" className="border-tud-navy text-tud-navy hover:bg-tud-navy hover:text-white">
            <Phone className="mr-2" size={18} />
            Contact Us: 0917 621 0643
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
