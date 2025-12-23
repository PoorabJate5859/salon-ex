import React from 'react';
import { Scissors, Palette, Sparkles, Flower, Crown, User } from 'lucide-react';
import { services } from '../../mock';

const iconMap = {
  scissors: Scissors,
  palette: Palette,
  sparkles: Sparkles,
  flower: Flower,
  crown: Crown,
  user: User
};

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1e1919' }}>
            Our Services
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#736c64' }}>
            Premium beauty and grooming services tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-white rounded-xl p-6 md:p-8 border-2 transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{ borderColor: '#f7f5f2' }}
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-colors"
                  style={{ backgroundColor: '#f7f5f2' }}
                >
                  <IconComponent className="w-7 h-7" style={{ color: '#61525a' }} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#1e1919' }}>
                  {service.name}
                </h3>
                <p className="mb-4 leading-relaxed" style={{ color: '#736c64' }}>
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#f7f5f2' }}>
                  <span className="text-sm font-medium" style={{ color: '#736c64' }}>
                    Starting from
                  </span>
                  <span className="text-2xl font-bold" style={{ color: '#61525a' }}>
                    ${service.startingPrice}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Below Services */}
        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-flex items-center px-8 py-4 rounded-md font-semibold text-white text-lg transition-all hover:opacity-90 hover:shadow-xl hover:scale-105"
            style={{ backgroundColor: '#61525a' }}
          >
            View Full Price List
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;