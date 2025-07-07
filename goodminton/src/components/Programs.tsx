
const Programs = () => {
  const programs = [
    {
      title: "GOOD Mornings",
      subtitle: "Daily Sessions",
      time: "8am - 1pm",
      price: "₱150 reg fee | ₱30 per game",
      description: "Start your day with energizing badminton sessions. Perfect for morning enthusiasts.",
      icon: "☀️",
      color: "bg-yellow-500"
    },
    {
      title: "GOOD Fridays",
      subtitle: "Weekly Tournament",
      time: "6pm - 10pm",
      price: "₱200 reg fee",
      description: "Every Friday night tournament with limited slots. First to pay, first to play!",
      icon: "🏆",
      color: "bg-red-500"
    },
    {
      title: "Queueing Sessions",
      subtitle: "Structured Training",
      time: "Various Times",
      price: "Contact for rates",
      description: "Professional coaching sessions with structured training programs for all skill levels.",
      icon: "🏸",
      color: "bg-goodminton-green"
    },
    {
      title: "Private Coaching",
      subtitle: "One-on-One Training",
      time: "By Appointment",
      price: "Contact for rates",
      description: "Personalized coaching sessions with our expert coaches to accelerate your progress.",
      icon: "👨‍🏫",
      color: "bg-blue-500"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-goodminton-black mb-6">
              Our <span className="text-goodminton-green">Programs</span>
            </h2>
            <div className="w-24 h-1 bg-goodminton-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our diverse range of programs designed to suit players of all levels and schedules.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <span className="text-2xl">{program.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-goodminton-black">{program.title}</h3>
                      <p className="text-gray-500 font-medium">{program.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <span className="font-semibold w-20">Time:</span>
                      <span>{program.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="font-semibold w-20">Price:</span>
                      <span className="text-goodminton-green font-bold">{program.price}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  
                  <button className="w-full bg-goodminton-green hover:bg-goodminton-green-dark text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-goodminton-black rounded-3xl p-8 text-white animate-fade-in">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h3>
              <p className="text-xl text-gray-300 mb-8">
                Experience the difference of training in a world-class facility with expert coaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-goodminton-green hover:bg-goodminton-green-dark px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  Book a Trial Session
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-goodminton-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
