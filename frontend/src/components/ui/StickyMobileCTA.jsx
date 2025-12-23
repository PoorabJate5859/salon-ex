import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { salonData } from '../../mock';

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        {isExpanded ? (
          <div
            className="rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom duration-300"
            style={{ backgroundColor: '#61525a' }}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-white font-bold">Quick Contact</span>
              <button
                onClick={() => setIsExpanded(false)}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="flex gap-2">
              <a
                href={`tel:${salonData.phone}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all hover:scale-105 bg-white"
                style={{ color: '#61525a' }}
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
              <a
                href={`https://wa.me/${salonData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: '#3dd3ee', color: '#1e1919' }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full py-4 rounded-xl font-bold text-white text-lg shadow-2xl transition-all hover:scale-105 animate-in slide-in-from-bottom duration-300"
            style={{ backgroundColor: '#61525a' }}
          >
            Book Appointment
          </button>
        )}
      </div>

      {/* Desktop Sticky CTA */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <div className="flex gap-3">
          <a
            href={`tel:${salonData.phone}`}
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
            style={{ backgroundColor: '#61525a' }}
            aria-label="Call us"
          >
            <Phone className="w-6 h-6 text-white" />
          </a>
          <a
            href={`https://wa.me/${salonData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
            style={{ backgroundColor: '#3dd3ee' }}
            aria-label="WhatsApp us"
          >
            <MessageCircle className="w-6 h-6" style={{ color: '#1e1919' }} />
          </a>
        </div>
      </div>
    </>
  );
};

export default StickyMobileCTA;