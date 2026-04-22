import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Explore Culture', href: '#explore' },
    { name: 'Events', href: '#events' },
    { name: 'Local Businesses', href: '#local-businesses' },
    { name: 'About Us', href: '#about' },
  ];

  const categories = [
    { name: 'Festivals', href: '#' },
    { name: 'Food & Cuisine', href: '#' },
    { name: 'Dance & Music', href: '#' },
    { name: 'Traditions', href: '#' },
    { name: 'Handicrafts', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">CC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">Cultural Connect</span>
                <span className="text-xs text-orange-400 -mt-1">India</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Connecting India with its rich cultural heritage, traditions, and local artisans.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">info@culturalconnect.in</p>
                  <p className="text-sm text-gray-400">support@culturalconnect.in</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400">+91 7351254104</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400">
                  New Delhi, India
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 Cultural Connect India. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
