import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { salonData } from '../../mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold" style={{ color: '#61525a' }}>
              {salonData.name}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-base font-medium hover:opacity-70 transition-opacity"
              style={{ color: '#1e1919' }}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-base font-medium hover:opacity-70 transition-opacity"
              style={{ color: '#1e1919' }}
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-base font-medium hover:opacity-70 transition-opacity"
              style={{ color: '#1e1919' }}
            >
              Reviews
            </button>
            <a
              href={`tel:${salonData.phone}`}
              className="inline-flex items-center px-6 py-2.5 rounded-md font-medium text-white transition-all hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: '#61525a' }}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: '#61525a' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: '#61525a' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t" style={{ borderColor: '#f7f5f2' }}>
          <nav className="px-4 py-4 space-y-3 bg-white">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-base font-medium rounded-md hover:bg-gray-50 transition-colors"
              style={{ color: '#1e1919' }}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left px-4 py-2 text-base font-medium rounded-md hover:bg-gray-50 transition-colors"
              style={{ color: '#1e1919' }}
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-4 py-2 text-base font-medium rounded-md hover:bg-gray-50 transition-colors"
              style={{ color: '#1e1919' }}
            >
              Reviews
            </button>
            <a
              href={`tel:${salonData.phone}`}
              className="block w-full text-center px-4 py-3 rounded-md font-medium text-white transition-all"
              style={{ backgroundColor: '#61525a' }}
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;