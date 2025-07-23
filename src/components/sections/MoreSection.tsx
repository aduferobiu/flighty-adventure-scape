import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, Phone, Mail, MapPin, Send } from 'lucide-react';

const MoreSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const faqs = [
    {
      question: 'How far in advance should I book my trip?',
      answer: 'We recommend booking 2-3 months in advance for the best availability and prices. However, we also offer last-minute deals for flexible travelers. Popular destinations during peak seasons may require earlier booking.'
    },
    {
      question: 'What is included in my trip package?',
      answer: 'Our packages typically include accommodation, guided tours, some meals, transportation between destinations, and 24/7 support. Specific inclusions vary by trip - check the detailed itinerary for your chosen package.'
    },
    {
      question: 'Can I customize my itinerary?',
      answer: 'Absolutely! We specialize in creating personalized travel experiences. Contact our travel experts to discuss modifications to any existing package or to create a completely custom itinerary.'
    },
    {
      question: 'What if I need to cancel my trip?',
      answer: 'We offer flexible cancellation policies depending on the trip and timing. Most bookings can be cancelled up to 30 days before departure for a full refund. Travel insurance is also available for additional protection.'
    },
    {
      question: 'Do you provide travel insurance?',
      answer: 'Yes, we offer comprehensive travel insurance options that cover trip cancellation, medical emergencies, lost luggage, and other unforeseen circumstances. We highly recommend adding this to your booking.'
    },
    {
      question: 'What safety measures do you have in place?',
      answer: 'Safety is our top priority. We work only with vetted local partners, provide 24/7 emergency support, conduct regular safety assessments of all destinations, and keep updated on travel advisories.'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      location: 'San Francisco, CA',
      rating: 5,
      text: 'Flighty planned the most incredible honeymoon to Bali. Every detail was perfect, from the overwater bungalow to the private cooking class. We felt so taken care of throughout the entire trip.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      location: 'Toronto, Canada',
      rating: 5,
      text: 'The Swiss Alps hiking tour exceeded all expectations. Our guide was knowledgeable, the accommodations were fantastic, and the views were breathtaking. Already planning our next adventure with Flighty!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Sarah Thompson',
      location: 'London, UK',
      rating: 5,
      text: 'As a solo female traveler, I was initially nervous about my Japan trip. Flighty\'s support team was incredible - I felt safe and supported every step of the way. The cultural experiences were authentic and unforgettable.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'David Rodriguez',
      location: 'Mexico City, Mexico',
      rating: 5,
      text: 'The African safari was a dream come true. Seeing the Big Five in their natural habitat was incredible, and the photography workshop really helped me capture amazing shots. Top-notch service throughout.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Emma Wilson',
      location: 'Sydney, Australia',
      rating: 5,
      text: 'Flighty organized our family trip to Costa Rica perfectly. The kids loved the wildlife encounters, and my husband and I appreciated the eco-friendly accommodations. Great value for such a comprehensive experience.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'James Miller',
      location: 'New York, NY',
      rating: 5,
      text: 'The European heritage tour was exceptional. The historical sites were fascinating, and our guide brought each city\'s story to life. The small group size made it feel very personal and intimate.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-adventure/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Help & Support
          </h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions, read traveler testimonials, and get in touch with our support team.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to the most common questions about traveling with Flighty.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-xl border border-border/50 shadow-soft">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from real travelers who chose Flighty for their adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have a question about a specific destination or need help planning your perfect trip? 
                Our travel experts are here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">hello@flighty.travel</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office</h3>
                    <p className="text-muted-foreground">123 Travel Street<br />San Francisco, CA 94102</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="Tell us about your travel plans or ask us anything..."
                  />
                </div>

                <Button type="submit" variant="default" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreSection;