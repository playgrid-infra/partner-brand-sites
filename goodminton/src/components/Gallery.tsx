
const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/6d6514e4-69f6-4e2d-9f9b-3086f122c8e9.png",
      alt: "Award ceremony at Goodminton Smash Zone",
      title: "Championship Moments"
    },
    {
      src: "/lovable-uploads/de7d1384-f4fa-402f-a6b0-64b80d9bcf2f.png", 
      alt: "Young champions celebrating victory",
      title: "Future Champions"
    },
    {
      src: "/lovable-uploads/0781710c-e7c0-4c89-99d7-7b63f2c40b06.png",
      alt: "Community gathering at the facility",
      title: "Our Community"
    },
    {
      src: "/lovable-uploads/54a2fd5b-c6c4-48ce-a046-ded7e2c795cc.png",
      alt: "Professional badminton courts",
      title: "World-Class Facilities"
    },
    {
      src: "/lovable-uploads/b3cb457e-8c00-40cd-a5fe-b328f61d0ee5.png",
      alt: "Tournament medal and achievement",
      title: "Achievements & Recognition"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-goodminton-black mb-6">
              Our <span className="text-goodminton-green">Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-goodminton-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Witness the excitement, achievements, and community spirit that makes Goodminton Smash Zone special.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-gradient-to-r from-goodminton-green to-goodminton-green-dark rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Be Part of Our Story</h3>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Join our community of champions and create your own success story at Goodminton Smash Zone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-goodminton-green hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  Join Our Community
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-goodminton-green px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  View More Photos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
