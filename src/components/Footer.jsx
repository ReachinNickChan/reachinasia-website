import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-blue-400 mb-4">Reachin</div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading Business Development Solution. Reachin connects B2B companies to business 
              opportunities with lower cost, reach into more customers, make business even more 
              successful than before.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2" />
                <span>ir@reachinasia.com (APAC)</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2" />
                <span>ir@reachinglobal.com (Global)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Reachin
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/customer-wins" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Customer Wins
                </Link>
              </li>
              <li>
                <Link to="/partnership" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Partnership Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Business Development Outsourcing</span>
              </li>
              <li>
                <span className="text-gray-300">Reachin G</span>
              </li>
              <li>
                <span className="text-gray-300">ReachinLink</span>
              </li>
              <li>
                <span className="text-gray-300">ReachinMail</span>
              </li>
              <li>
                <span className="text-gray-300">ReachinChat</span>
              </li>
              <li>
                <span className="text-gray-300">ReachinSalesForce</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Reachin Asia Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Global Coverage: 34 countries, 160+ cities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

