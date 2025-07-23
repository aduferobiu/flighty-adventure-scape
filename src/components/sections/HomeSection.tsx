import Hero from '@/components/Hero';
import DestinationCard from '@/components/DestinationCard';
import { Button } from '@/components/ui/button';
import { MapPin, Compass, Plane, Shield } from 'lucide-react';
import mountainsImage from '@/assets/destination-mountains.jpg';
import cityImage from '@/assets/destination-city.jpg';
import tropicalImage from '@/assets/destination-tropical.jpg';
import historicImage from '@/assets/destination-historic.jpg';

const HomeSection = () => {
  const popularDestinations = [
    {
      image: tropicalImage,
      title: 'Maldives Paradise',
      location: 'Maldives, Indian Ocean',
      price: '$2,899',
      rating: 4.9,
      reviews: 245,
      description: 'Crystal clear waters and overwater bungalows await in this tropical paradise.'
    },
    {
      image: mountainsImage,
      title: 'Swiss Alps Adventure',
      location: 'Switzerland, Europe',
      price: '$1,799',
      rating: 4.8,
      reviews: 189,
      description: 'Breathtaking mountain peaks and pristine alpine lakes for the ultimate adventure.'
    },
    {
      image: cityImage,
      title: 'Tokyo Nights',
      location: 'Tokyo, Japan',
      price: '$1,299',
      rating: 4.7,
      reviews: 356,
      description: 'Experience the vibrant culture and neon-lit streets of modern Japan.'
    },
    {
      image: historicImage,
      title: 'European Heritage',
      location: 'Prague, Czech Republic',
      price: '$899',
      rating: 4.6,
      reviews: 278,
      description: 'Step back in time through cobblestone streets and medieval architecture.'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your safety is our priority with 24/7 support and verified accommodations.'
    },
    {
      icon: Compass,
      title: 'Expert Guides',
      description: 'Local expert guides to show you hidden gems and authentic experiences.'
    },
    {
      icon: Plane,
      title: 'Easy Booking',
      description: 'Book your entire trip in minutes with our streamlined booking process.'
    },
    {
      icon: MapPin,
      title: 'Global Reach',
      description: 'Access to over 500 destinations worldwide with exclusive local partnerships.'
    }
  ];

  return (
    <div className="pt-16">
      <Hero />
      
      {/* Popular Destinations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Popular Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the world's most breathtaking destinations, handpicked by our travel experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {popularDestinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Flighty */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose Flighty?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make travel simple, safe, and unforgettable with our comprehensive travel solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-ocean rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-medium">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered their dream destinations with Flighty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Start Planning
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
              View Packages
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;