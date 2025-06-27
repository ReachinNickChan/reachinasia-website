import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Reachin</h3>
            <p className="text-gray-300 mb-4 text-sm max-w-xs">
              Leading Business Development Solution. Reachin connects B2B companies to business opportunities with lower cost, reach into more customers, make business even more successful than before.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Reachin</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/customer-wins" className="text-gray-300 hover:text-blue-400 transition-colors">Customer Wins</Link></li>
              <li><Link to="/partnership" className="text-gray-300 hover:text-blue-400 transition-colors">Partnership Program</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-300">Business Development Outsourcing</li>
              <li className="text-gray-300">Reachin G</li>
              <li className="text-gray-300">ReachinLink</li>
              <li className="text-gray-300">ReachinMail</li>
              <li className="text-gray-300">ReachinChat</li>
              <li className="text-gray-300">ReachinSalesForce</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span className="text-sm">ir@reachinasia.com (APAC)</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span className="text-sm">ir@reachinglobal.com (Global)</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-6 mb-4 tracking-wider uppercase">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="text-gray-400 hover:text-blue-400">
                  <span className="sr-only">{social.name}</span>
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Reachin Asia Limited. All rights reserved.
          </p>
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            Global Coverage: 34 countries, 160+ cities
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
