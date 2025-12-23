import React from 'react';
import { Award, Star, ShieldCheck, BadgeCheck } from 'lucide-react';
import { whyChooseUs } from '../../mock';

const iconMap = {
  award: Award,
  star: Star,
  'shield-check': ShieldCheck,
  'badge-check': BadgeCheck
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#f7f5f2' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1e1919' }}>
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#736c64' }}>
            Your trusted partner for premium beauty and grooming services
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {whyChooseUs.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className="bg-white rounded-xl p-6 md:p-8 text-center transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: '#f7f5f2' }}
                >
                  <IconComponent className="w-8 h-8" style={{ color: '#61525a' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1e1919' }}>
                  {feature.title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#736c64' }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;