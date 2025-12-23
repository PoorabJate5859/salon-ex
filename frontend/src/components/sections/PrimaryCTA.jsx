import React, { useState } from 'react';
import { Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { salonData } from '../../mock';

const PrimaryCTA = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    console.log('Booking request:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl" style={{ backgroundColor: '#61525a' }}>
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
              Book Your Appointment Today
            </h2>
            <p className="text-base sm:text-lg md:text-xl px-2" style={{ color: '#bbb5ae' }}>
              Experience luxury and professional care. We're ready to serve you.
            </p>
          </div>

          {!isSubmitted ? (
            <>
              {/* Booking Form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6 sm:mb-8">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-base"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all active:scale-95 md:hover:scale-105 hover:shadow-xl"
                    style={{ backgroundColor: '#fad24b', color: '#1e1919' }}
                  >
                    Request Callback
                  </button>
                </div>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="flex-1 h-px bg-white/20"></div>
                <span className="text-white/70 font-medium text-sm sm:text-base">OR</span>
                <div className="flex-1 h-px bg-white/20"></div>
              </div>

              {/* Direct Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href={`tel:${salonData.phone}`}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all active:scale-95 md:hover:scale-105 hover:shadow-xl bg-white"
                  style={{ color: '#61525a' }}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="hidden sm:inline">Call {salonData.phone}</span>
                  <span className="sm:hidden">Call Now</span>
                </a>
                <a
                  href={`https://wa.me/${salonData.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all active:scale-95 md:hover:scale-105 hover:shadow-xl"
                  style={{ backgroundColor: '#3dd3ee', color: '#1e1919' }}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  WhatsApp Us
                </a>
              </div>
            </>
          ) : (
            <div className="text-center py-6 sm:py-8">
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" style={{ color: '#3dd3ee' }} />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Thank You!</h3>
              <p className="text-base sm:text-lg" style={{ color: '#bbb5ae' }}>
                We'll call you back shortly to confirm your appointment.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PrimaryCTA;