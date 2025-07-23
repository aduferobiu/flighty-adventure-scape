import { Button } from '@/components/ui/button';
import { Award, Globe, Heart, Users, Compass, Shield } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: '50K+', label: 'Happy Travelers' },
    { number: '500+', label: 'Destinations' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Customer Satisfaction' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We believe travel transforms lives and opens minds to new possibilities and cultures.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety and security are our top priorities in every destination we offer.'
    },
    {
      icon: Globe,
      title: 'Sustainable Tourism',
      description: 'We are committed to responsible travel that benefits local communities and preserves natural beauty.'
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'Every traveler is unique, and we provide personalized experiences tailored to your dreams.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      description: 'A passionate traveler with 20+ years in the industry, Sarah founded Flighty to make authentic travel accessible to everyone.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Operations',
      description: 'With expertise in logistics and destination management, Marcus ensures every trip runs smoothly from start to finish.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Elena Kovač',
      role: 'Travel Experience Designer',
      description: 'Elena crafts unique itineraries that balance must-see attractions with hidden local gems for authentic experiences.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-adventure/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About Flighty
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Born from a love of adventure and discovery, Flighty was created to make the world more accessible. 
            We believe that travel isn't just about reaching a destination—it's about the journey, 
            the connections you make, and the stories you bring home.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Flighty began in 2008 when our founder, Sarah Chen, was backpacking through Southeast Asia. 
                  Frustrated by the gap between guidebook recommendations and authentic local experiences, 
                  she envisioned a travel company that would bridge this divide.
                </p>
                <p>
                  Starting with just a handful of carefully curated trips, we've grown into a trusted partner 
                  for adventurous souls seeking meaningful travel experiences. Our success comes from our 
                  commitment to authentic connections—with destinations, cultures, and the local communities 
                  that make each place special.
                </p>
                <p>
                  Today, we're proud to have helped over 50,000 travelers discover the world in ways they 
                  never imagined possible. Every trip we design reflects our core belief: that travel should 
                  be transformative, sustainable, and deeply personal.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="default" size="lg">
                  Start Your Journey
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-ocean rounded-2xl p-8 text-white">
                <Compass className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  To make travel easy and inspiring by creating authentic experiences 
                  that connect people with the world's most beautiful destinations and cultures, 
                  while supporting local communities and preserving natural environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our values guide every decision we make and every experience we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 text-center border border-border/50">
                <div className="w-16 h-16 bg-gradient-ocean rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate travelers and experts behind your unforgettable adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 text-center border border-border/50 group">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-medium group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-gradient-ocean text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recognized Excellence
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our commitment to exceptional travel experiences has been recognized by industry leaders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Travel + Leisure</h3>
              <p className="opacity-80">World's Best Travel Company 2023</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Condé Nast Traveler</h3>
              <p className="opacity-80">Top Travel Specialist 2022</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">World Travel Awards</h3>
              <p className="opacity-80">Leading Adventure Tour Operator</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;