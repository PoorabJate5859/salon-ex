import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { salonData } from '../../mock';

const Footer = () => {
  return (
    <footer className="py-12 md:py-16" style={{ backgroundColor: '#1e1919' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">{salonData.name}</h3>
            <p className="mb-6" style={{ color: '#bbb5ae' }}>
              Your trusted destination for premium beauty and grooming services.
            </p>
            <div className="flex gap-4">
              <a
                href={salonData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#61525a' }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href={salonData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#61525a' }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href={salonData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#61525a' }}
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3">
              <a
                href={`tel:${salonData.phone}`}
                className="flex items-start gap-3 transition-colors hover:opacity-70"
                style={{ color: '#bbb5ae' }}
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{salonData.phone}</span>
              </a>
              <a
                href={`mailto:${salonData.email}`}
                className="flex items-start gap-3 transition-colors hover:opacity-70"
                style={{ color: '#bbb5ae' }}
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{salonData.email}</span>
              </a>
              <div className="flex items-start gap-3" style={{ color: '#bbb5ae' }}>
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{salonData.address}</span>
              </div>
            </div>
          </div>

          {/* Hours Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Opening Hours</h4>
            <div className="space-y-3" style={{ color: '#bbb5ae' }}>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Mon - Fri</p>
                  <p>{salonData.hours.weekdays}</p>
                </div>
              </div>
              <div className="ml-8">
                <p className="font-medium text-white">Saturday</p>
                <p>{salonData.hours.saturday}</p>
              </div>
              <div className="ml-8">
                <p className="font-medium text-white">Sunday</p>
                <p>{salonData.hours.sunday}</p>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Find Us</h4>
            <a
              href={salonData.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="aspect-square bg-gray-800 flex items-center justify-center">
                <MapPin className="w-12 h-12" style={{ color: '#61525a' }} />
              </div>
            </a>
            <a
              href={salonData.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-center py-2 px-4 rounded-lg font-medium transition-all hover:opacity-80"
              style={{ backgroundColor: '#61525a', color: 'white' }}
            >
              View on Google Maps
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t" style={{ borderColor: '#61525a' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm" style={{ color: '#bbb5ae' }}>
            <p>&copy; {new Date().getFullYear()} {salonData.name}. All rights reserved.</p>
            <div className="flex gap-6">
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