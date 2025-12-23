import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { salonData } from '../../mock';

const Footer = () => {
  return (
    <footer className="py-10 sm:py-12 md:py-16" style={{ backgroundColor: '#1e1919' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{salonData.name}</h3>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ color: '#bbb5ae' }}>
              Your trusted destination for premium beauty and grooming services.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href={salonData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all active:scale-90 md:hover:scale-110"
                style={{ backgroundColor: '#61525a' }}
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a
                href={salonData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all active:scale-90 md:hover:scale-110"
                style={{ backgroundColor: '#61525a' }}
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a
                href={salonData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all active:scale-90 md:hover:scale-110"
                style={{ backgroundColor: '#61525a' }}
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Contact Us</h4>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <a
                href={`tel:${salonData.phone}`}
                className="flex items-start gap-2 sm:gap-3 transition-colors hover:opacity-70"
                style={{ color: '#bbb5ae' }}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span className="break-all">{salonData.phone}</span>
              </a>
              <a
                href={`mailto:${salonData.email}`}
                className="flex items-start gap-2 sm:gap-3 transition-colors hover:opacity-70"
                style={{ color: '#bbb5ae' }}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span className="break-all">{salonData.email}</span>
              </a>
              <div className="flex items-start gap-2 sm:gap-3" style={{ color: '#bbb5ae' }}>
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span>{salonData.address}</span>
              </div>
            </div>
          </div>

          {/* Hours Column */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Opening Hours</h4>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base" style={{ color: '#bbb5ae' }}>
              <div className="flex items-start gap-2 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Mon - Fri</p>
                  <p>{salonData.hours.weekdays}</p>
                </div>
              </div>
              <div className="ml-6 sm:ml-8">
                <p className="font-medium text-white">Saturday</p>
                <p>{salonData.hours.saturday}</p>
              </div>
              <div className="ml-6 sm:ml-8">
                <p className="font-medium text-white">Sunday</p>
                <p>{salonData.hours.sunday}</p>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Find Us</h4>
            <a
              href={salonData.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden transition-all active:scale-95 md:hover:scale-105 hover:shadow-xl"
            >
              <div className="aspect-square bg-gray-800 flex items-center justify-center">
                <MapPin className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: '#61525a' }} />
              </div>
            </a>
            <a
              href={salonData.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-center py-2 px-4 rounded-lg font-medium text-sm sm:text-base transition-all hover:opacity-80"
              style={{ backgroundColor: '#61525a', color: 'white' }}
            >
              View on Google Maps
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t" style={{ borderColor: '#61525a' }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm" style={{ color: '#bbb5ae' }}>
            <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} {salonData.name}. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <button className="transition-colors hover:text-white">Privacy Policy</button>
              <button className="transition-colors hover:text-white">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;