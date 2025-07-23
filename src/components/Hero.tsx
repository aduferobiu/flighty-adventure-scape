import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Calendar, Users, Compass, Star, ArrowRight, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-beach.jpg';

const Hero = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    dates: '',
    travelers: '1'
  });

  const [currentDestination, setCurrentDestination] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const featuredDestinations = [
    'Maldives', 'Swiss Alps', 'Tokyo', 'Santorini', 'Patagonia', 'Iceland'
  ];

  const quickStats = [
    { number: '500+', label: 'Destinations' },
    { number: '50K+', label: 'Happy Travelers' },
    { number: '4.9', label: 'Average Rating' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentDestination((prev) => (prev + 1) % featuredDestinations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    console.log('Search data:', searchData);
    // Handle search functionality
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
        <img 
          src={heroImage} 
          alt="Beautiful tropical beach destination" 
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-10 w-3 h-3 bg-adventure/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Animated Title */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-secondary mr-3 animate-pulse" />
              <span className="text-lg font-medium text-white/80 tracking-wide">DISCOVER THE WORLD</span>
              <Sparkles className="w-8 h-8 text-secondary ml-3 animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Find Your Next 
              <span className="block bg-gradient-sunset bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] bg-gradient-to-r from-secondary via-white to-secondary">
                Adventure
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">
                to{' '}
                <span className="inline-block min-w-[280px] text-left bg-gradient-ocean bg-clip-text text-transparent">
                  {featuredDestinations[currentDestination]}
                </span>
              </span>
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover breathtaking destinations, create unforgettable memories, and explore the world like never before with our expertly curated travel experiences.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl md:text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Search Card */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-strong border border-white/20 max-w-5xl mx-auto group hover:bg-white/15 transition-all duration-500">
              <div className="flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-white/80 mr-3 animate-pulse" />
                <h3 className="text-xl font-semibold text-white">Start Your Journey</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
                {/* Enhanced Destination Input */}
                <div className="space-y-3 group/input">
                  <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                    <MapPin className="w-4 h-4 group-hover/input:animate-bounce" />
                    Where to?
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search amazing destinations..."
                      value={searchData.destination}
                      onChange={(e) => setSearchData({ ...searchData, destination: e.target.value })}
                      className="w-full px-5 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/25 backdrop-blur transition-all duration-300 hover:bg-white/25"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                  </div>
                </div>

                {/* Enhanced Date Input */}
                <div className="space-y-3 group/input">
                  <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                    <Calendar className="w-4 h-4 group-hover/input:animate-bounce" />
                    When?
                  </label>
                  <input
                    type="date"
                    value={searchData.dates}
                    onChange={(e) => setSearchData({ ...searchData, dates: e.target.value })}
                    className="w-full px-5 py-4 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/25 backdrop-blur transition-all duration-300 hover:bg-white/25 [color-scheme:dark]"
                  />
                </div>

                {/* Enhanced Travelers Select */}
                <div className="space-y-3 group/input">
                  <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                    <Users className="w-4 h-4 group-hover/input:animate-bounce" />
                    Travelers
                  </label>
                  <select
                    value={searchData.travelers}
                    onChange={(e) => setSearchData({ ...searchData, travelers: e.target.value })}
                    className="w-full px-5 py-4 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/25 backdrop-blur transition-all duration-300 hover:bg-white/25"
                  >
                    <option value="1" className="text-gray-800">1 Traveler</option>
                    <option value="2" className="text-gray-800">2 Travelers</option>
                    <option value="3" className="text-gray-800">3 Travelers</option>
                    <option value="4+" className="text-gray-800">4+ Travelers</option>
                  </select>
                </div>

                {/* Enhanced Search Button */}
                <div className="flex items-end">
                  <Button 
                    onClick={handleSearch}
                    variant="secondary" 
                    size="lg" 
                    className="w-full md:h-14 group/btn relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/80 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <Search className="w-5 h-5 mr-2 group-hover/btn:animate-pulse relative z-10" />
                    <span className="relative z-10">Search Adventures</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Quick Actions */}
          <div className={`mt-12 flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {[
              { label: 'Popular Destinations', icon: Star },
              { label: 'Last-Minute Deals', icon: Sparkles },
              { label: 'Adventure Tours', icon: Compass }
            ].map((action, index) => (
              <Button 
                key={index}
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
              >
                <action.icon className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <div className="w-1 h-4 bg-white/70 rounded-full mt-3 animate-bounce"></div>
        </div>
        <p className="text-white/60 text-sm mt-2 text-center animate-pulse">Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;