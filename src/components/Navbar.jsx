import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container" style={{ width: '100%', padding: '0 3vw' }}>
        <div className="nav-logo">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', marginLeft: '-1vw' }}>
             <img src="/images/logo.png" alt="SkyHub Marketing Logo" style={{ height: '100px', width: 'auto', objectFit: 'contain', transform: 'scale(1.5)', transformOrigin: 'left center' }} />
          </Link>
        </div>
        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
            <li><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
