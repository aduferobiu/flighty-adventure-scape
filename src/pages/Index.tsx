import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HomeSection from '@/components/sections/HomeSection';
import TripsSection from '@/components/sections/TripsSection';
import AboutSection from '@/components/sections/AboutSection';
import EventsSection from '@/components/sections/EventsSection';
import MoreSection from '@/components/sections/MoreSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'trips':
        return <TripsSection />;
      case 'about':
        return <AboutSection />;
      case 'events':
        return <EventsSection />;
      case 'more':
        return <MoreSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      {renderActiveSection()}
    </div>
  );
};

export default Index;
