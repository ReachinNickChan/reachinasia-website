import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import reachinLogo from '../assets/reachin-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Customer Wins', href: '/customer-wins' },
    { name: 'Partnership', href: '/partnership' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img 
              src={reachinLogo} 
              alt="Reachin - Business Development Outsourcing" 
              className="navbar-logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar-nav desktop-nav">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button and Mobile Menu */}
          <div className="navbar-actions">
            <Link to="/contact" className="btn btn-primary">
              Get Started
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <nav className="mobile-nav-content">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`mobile-nav-link ${isActive(item.href) ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mobile-nav-actions">
                <Link
                  to="/contact"
                  className="btn btn-primary btn-large"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--medium-text);
          cursor: pointer;
          padding: 0.75rem;
          border-radius: 8px;
          transition: all var(--transition-fast);
        }

        .mobile-menu-btn:hover {
          background-color: var(--background-light);
          color: var(--dark-text);
        }

        .mobile-nav {
          border-top: 1px solid var(--border-light);
          background: var(--white);
          box-shadow: var(--shadow-md);
          border-radius: 0 0 16px 16px;
        }

        .mobile-nav-content {
          padding: 1.5rem 0;
        }

        .mobile-nav-link {
          display: block;
          color: var(--medium-text);
          text-decoration: none;
          font-weight: 500;
          padding: 1rem 0;
          border-bottom: 1px solid var(--border-light);
          transition: color var(--transition-fast);
          font-size: 1.125rem;
        }

        .mobile-nav-link:last-of-type {
          border-bottom: none;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--primary-blue);
        }

        .mobile-nav-actions {
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-light);
          margin-top: 1.5rem;
        }

        .desktop-nav {
          display: flex;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .navbar-content {
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .navbar-content {
            padding: 1rem 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;

