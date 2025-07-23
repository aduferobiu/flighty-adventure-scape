import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Clock, Tag } from 'lucide-react';

const EventsSection = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Northern Lights Photography Workshop',
      date: '2024-02-15',
      time: '6:00 PM - 10:00 PM',
      location: 'Reykjavik, Iceland',
      price: '$299',
      type: 'Workshop',
      participants: '8-12 people',
      description: 'Learn professional photography techniques while chasing the magical Aurora Borealis in Iceland.',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop',
      status: 'Available'
    },
    {
      id: 2,
      title: 'Group Trip: Bali Wellness Retreat',
      date: '2024-03-08',
      time: '7 Days, 6 Nights',
      location: 'Ubud, Bali',
      price: '$1,899',
      type: 'Group Trip',
      participants: '10-15 people',
      description: 'A transformative wellness journey combining yoga, meditation, and cultural exploration in paradise.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
      status: 'Limited Spots'
    },
    {
      id: 3,
      title: 'Travel Planning Masterclass',
      date: '2024-02-28',
      time: '2:00 PM - 5:00 PM',
      location: 'Virtual Event',
      price: 'Free',
      type: 'Webinar',
      participants: 'Unlimited',
      description: 'Expert tips on budget travel, itinerary planning, and making the most of your adventures.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
      status: 'Available'
    },
    {
      id: 4,
      title: 'Culinary Tour: Japan Food Adventure',
      date: '2024-04-12',
      time: '10 Days, 9 Nights',
      location: 'Tokyo & Osaka, Japan',
      price: '$3,299',
      type: 'Culinary Tour',
      participants: '6-10 people',
      description: 'Discover authentic Japanese cuisine from street food to Michelin-starred restaurants.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      status: 'Filling Fast'
    },
    {
      id: 5,
      title: 'Adventure Skills Bootcamp',
      date: '2024-03-22',
      time: '9:00 AM - 6:00 PM',
      location: 'Blue Mountains, Australia',
      price: '$199',
      type: 'Training',
      participants: '12-20 people',
      description: 'Learn essential outdoor skills: rock climbing, navigation, and wilderness survival.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
      status: 'Available'
    },
    {
      id: 6,
      title: 'Photography Safari: Kenya Wildlife',
      date: '2024-05-18',
      time: '12 Days, 11 Nights',
      location: 'Masai Mara, Kenya',
      price: '$4,599',
      type: 'Photography Tour',
      participants: '4-8 people',
      description: 'Capture the Big Five and witness the Great Migration with professional photography guidance.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      status: 'Limited Spots'
    }
  ];

  const specialOffers = [
    {
      title: 'Early Bird Special',
      description: 'Book any trip 3 months in advance and save 15%',
      discount: '15% OFF',
      validUntil: 'March 31, 2024'
    },
    {
      title: 'Group Booking Discount',
      description: 'Bring 4+ friends and everyone saves 20%',
      discount: '20% OFF',
      validUntil: 'Ongoing'
    },
    {
      title: 'First-Time Traveler',
      description: 'New customers get $200 off their first booking',
      discount: '$200 OFF',
      validUntil: 'Limited Time'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-adventure text-adventure-foreground';
      case 'Limited Spots': return 'bg-secondary text-secondary-foreground';
      case 'Filling Fast': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-adventure/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Travel Events & Experiences
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join fellow adventurers at our exclusive events, workshops, and group trips. 
            Create connections, learn new skills, and discover amazing destinations together.
          </p>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Special Offers
            </h2>
            <p className="text-lg text-muted-foreground">
              Limited-time deals to make your dream trip more affordable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 text-center group">
                <div className="w-16 h-16 bg-gradient-sunset rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Tag className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {offer.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {offer.description}
                </p>
                <div className="text-2xl font-bold text-primary mb-2">
                  {offer.discount}
                </div>
                <p className="text-sm text-muted-foreground">
                  Valid until {offer.validUntil}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't miss out on these amazing opportunities to explore, learn, and connect with fellow travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-border/50 group">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-sm font-medium ${getStatusColor(event.status)}`}>
                    {event.status}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-medium text-gray-800">{event.type}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {event.participants}
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-primary">
                      {event.price}
                    </div>
                    <Button variant="default" size="sm">
                      {event.price === 'Free' ? 'Register' : 'Book Now'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-ocean text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Be the first to know about new events, exclusive offers, and special group trips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsSection;