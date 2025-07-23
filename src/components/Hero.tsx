import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import heroImage from '@/assets/hero-beach.jpg';

const Hero = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    dates: '',
    travelers: '1'
  });

  const handleSearch = () => {
    console.log('Search data:', searchData);
    // Handle search functionality
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful tropical beach destination" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your Next 
            <span className="block bg-gradient-sunset bg-clip-text text-transparent">
              Adventure
            </span>
            with Flighty
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover breathtaking destinations, create unforgettable memories, and explore the world like never before.
          </p>

          {/* Search Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-strong border border-white/20 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              {/* Destination */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Where to?
                </label>
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchData.destination}
                  onChange={(e) => setSearchData({ ...searchData, destination: e.target.value })}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur"
                />
              </div>

              {/* Dates */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  When?
                </label>
                <input
                  type="date"
                  value={searchData.dates}
                  onChange={(e) => setSearchData({ ...searchData, dates: e.target.value })}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur [color-scheme:dark]"
                />
              </div>

              {/* Travelers */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Travelers
                </label>
                <select
                  value={searchData.travelers}
                  onChange={(e) => setSearchData({ ...searchData, travelers: e.target.value })}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur"
                >
                  <option value="1" className="text-gray-800">1 Traveler</option>
                  <option value="2" className="text-gray-800">2 Travelers</option>
                  <option value="3" className="text-gray-800">3 Travelers</option>
                  <option value="4+" className="text-gray-800">4+ Travelers</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button 
                  onClick={handleSearch}
                  variant="secondary" 
                  size="lg" 
                  className="w-full md:h-12"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Popular Destinations
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Last-Minute Deals
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Adventure Tours
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;