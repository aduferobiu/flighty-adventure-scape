import { Button } from '@/components/ui/button';
import { MapPin, Star, Heart } from 'lucide-react';
import { useState } from 'react';

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  description?: string;
}

const DestinationCard = ({ 
  image, 
  title, 
  location, 
  price, 
  rating, 
  reviews,
  description 
}: DestinationCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group bg-gradient-card rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-border/50">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Like Button */}
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-200"
        >
          <Heart 
            className={`w-5 h-5 transition-all duration-200 ${
              isLiked ? 'fill-red-500 text-red-500' : 'text-white'
            }`} 
          />
        </button>

        {/* Rating Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-gray-800">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">from</p>
            <p className="text-lg font-bold text-primary">{price}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{location}</span>
        </div>

        {description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>{reviews} reviews</span>
          </div>
          
          <Button variant="default" size="sm" className="group-hover:bg-primary-hover">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;