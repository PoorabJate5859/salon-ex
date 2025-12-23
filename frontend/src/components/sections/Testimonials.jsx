import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../mock';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24" style={{ backgroundColor: '#f7f5f2' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1e1919' }}>
            Client Reviews
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#736c64' }}>
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" style={{ color: '#fad24b' }} />
              ))}
            </div>

            {/* Review Text */}
            <blockquote className="text-xl md:text-2xl text-center mb-8 leading-relaxed" style={{ color: '#1e1919' }}>
              "{testimonials[currentIndex].text}"
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <p className="font-bold text-lg mb-1" style={{ color: '#1e1919' }}>
                {testimonials[currentIndex].name}
              </p>
              <p className="text-sm" style={{ color: '#736c64' }}>
                {testimonials[currentIndex].date}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:shadow-lg hover:scale-110"
                style={{ backgroundColor: '#f7f5f2', color: '#61525a' }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'w-8' : 'opacity-50'
                    }`}
                    style={{ backgroundColor: '#61525a' }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:shadow-lg hover:scale-110"
                style={{ backgroundColor: '#f7f5f2', color: '#61525a' }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-12">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#fad24b' }} />
                ))}
              </div>
              <p className="mb-4 leading-relaxed" style={{ color: '#1e1919' }}>
                "{testimonial.text}"
              </p>
              <p className="font-bold" style={{ color: '#1e1919' }}>
                {testimonial.name}
              </p>
              <p className="text-sm" style={{ color: '#736c64' }}>
                {testimonial.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;