import { Button } from '@/components/ui/button';
import { Clock, Users, MapPin, Star, Calendar } from 'lucide-react';
import mountainsImage from '@/assets/destination-mountains.jpg';
import cityImage from '@/assets/destination-city.jpg';
import tropicalImage from '@/assets/destination-tropical.jpg';
import historicImage from '@/assets/destination-historic.jpg';

const TripsSection = () => {
  const tripPackages = [
    {
      id: 1,
      image: tropicalImage,
      title: 'Tropical Paradise Escape',
      location: 'Maldives & Seychelles',
      duration: '7 Days, 6 Nights',
      price: '$3,299',
      originalPrice: '$4,199',
      rating: 4.9,
      reviews: 156,
      groupSize: '2-8 people',
      highlights: ['Overwater Bungalows', 'Private Beach Access', 'Snorkeling Tours', 'Spa Treatments'],
      departure: 'Available Year Round'
    },
    {
      id: 2,
      image: mountainsImage,
      title: 'Alpine Adventure Trek',
      location: 'Swiss Alps, Switzerland',
      duration: '10 Days, 9 Nights',
      price: '$2,899',
      originalPrice: '$3,599',
      rating: 4.8,
      reviews: 203,
      groupSize: '4-12 people',
      highlights: ['Mountain Hiking', 'Cable Car Rides', 'Alpine Lakes', 'Traditional Villages'],
      departure: 'Jun - Sep'
    },
    {
      id: 3,
      image: cityImage,
      title: 'Urban Discovery Tour',
      location: 'Tokyo & Kyoto, Japan',
      duration: '8 Days, 7 Nights',
      price: '$2,199',
      originalPrice: '$2,799',
      rating: 4.7,
      reviews: 189,
      groupSize: '2-6 people',
      highlights: ['Cultural Sites', 'Food Tours', 'Modern Architecture', 'Traditional Gardens'],
      departure: 'Mar - Nov'
    },
    {
      id: 4,
      image: historicImage,
      title: 'European Heritage Trail',
      location: 'Prague, Vienna & Budapest',
      duration: '12 Days, 11 Nights',
      price: '$1,899',
      originalPrice: '$2,499',
      rating: 4.6,
      reviews: 245,
      groupSize: '6-15 people',
      highlights: ['Historic Cities', 'Castle Tours', 'Local Cuisine', 'Cultural Shows'],
      departure: 'Apr - Oct'
    },
    {
      id: 5,
      image: tropicalImage,
      title: 'Island Hopping Adventure',
      location: 'Greek Islands',
      duration: '9 Days, 8 Nights',
      price: '$1,799',
      originalPrice: '$2,299',
      rating: 4.8,
      reviews: 178,
      groupSize: '4-10 people',
      highlights: ['Multiple Islands', 'Boat Tours', 'Ancient Ruins', 'Beach Relaxation'],
      departure: 'May - Sep'
    },
    {
      id: 6,
      image: mountainsImage,
      title: 'Wildlife Safari Experience',
      location: 'Kenya & Tanzania',
      duration: '14 Days, 13 Nights',
      price: '$4,299',
      originalPrice: '$5,199',
      rating: 4.9,
      reviews: 134,
      groupSize: '2-8 people',
      highlights: ['Big Five Safari', 'Masai Mara', 'Serengeti', 'Cultural Visits'],
      departure: 'Year Round'
    }
  ];

  const filters = [
    'All Trips',
    'Adventure',
    'Relaxation',
    'Cultural',
    'Wildlife',
    'Beach',
    'Mountain'
  ];

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-adventure/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Curated Travel Experiences
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover handpicked adventures designed to create unforgettable memories. 
            From tropical escapes to cultural immersions, find your perfect journey.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {filters.map((filter, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "" : "hover:bg-primary hover:text-primary-foreground"}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Trip Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tripPackages.map((trip) => (
              <div key={trip.id} className="bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-border/50 group">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={trip.image} 
                    alt={trip.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-lg text-sm font-medium">
                    Save ${parseInt(trip.originalPrice.replace('$', '').replace(',', '')) - parseInt(trip.price.replace('$', '').replace(',', ''))}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-800">{trip.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {trip.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {trip.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">{trip.price}</p>
                      <p className="text-sm text-muted-foreground line-through">{trip.originalPrice}</p>
                    </div>
                  </div>

                  {/* Trip Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {trip.duration}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {trip.groupSize}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {trip.departure}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Star className="w-4 h-4" />
                      {trip.reviews} reviews
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-2">Trip Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trip.highlights.map((highlight, index) => (
                        <span key={index} className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="default" className="flex-1">
                      Book Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Trips
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Never Miss a Deal
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to get exclusive offers and early access to new trip packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="default">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TripsSection;