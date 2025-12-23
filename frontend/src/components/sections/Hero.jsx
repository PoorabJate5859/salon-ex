import React from 'react';
import { Phone, MessageCircle, Star, Award } from 'lucide-react';
import { salonData } from '../../mock';

const Hero = () => {
  const handleBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24" style={{ backgroundColor: '#f7f5f2' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Trust Badges */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#fad24b' }} />
                ))}
                <span className="ml-2 font-medium" style={{ color: '#1e1919' }}>
                  {salonData.rating} ({salonData.reviewCount}+ reviews)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" style={{ color: '#61525a' }} />
                <span className="font-medium" style={{ color: '#1e1919' }}>
                  {salonData.yearsInBusiness}+ Years of Excellence
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#1e1919' }}>
              {salonData.tagline}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#736c64' }}>
              {salonData.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleBooking}
                className="px-8 py-4 rounded-md font-semibold text-white text-lg transition-all hover:opacity-90 hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: '#61525a' }}
              >
                Book Appointment
              </button>
              <div className="flex gap-3">
                <a
                  href={`tel:${salonData.phone}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center px-6 py-4 rounded-md font-semibold border-2 transition-all hover:bg-white hover:shadow-lg"
                  style={{ borderColor: '#61525a', color: '#61525a' }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${salonData.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center px-6 py-4 rounded-md font-semibold border-2 transition-all hover:bg-white hover:shadow-lg"
                  style={{ borderColor: '#61525a', color: '#61525a' }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="pt-4 flex items-center gap-2 text-sm" style={{ color: '#736c64' }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#3dd3ee' }}></div>
              <span>Walk-ins welcome · Online booking available</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80"
                alt="Luxury salon interior"
                className="w-full h-[400px] md:h-[600px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
              <p className="text-sm font-medium mb-1" style={{ color: '#736c64' }}>
                Opening Hours
              </p>
              <p className="font-bold text-lg" style={{ color: '#1e1919' }}>
                {salonData.hours.weekdays}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;