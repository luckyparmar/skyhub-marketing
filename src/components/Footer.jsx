import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="footer-logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <img src="/images/logo.png" alt="SkyHub Marketing Logo" style={{ height: '150px', width: 'auto', objectFit: 'contain', transform: 'scale(1.3)', transformOrigin: 'left center', marginBottom: '1rem' }} />
            </Link>
            <p>We help brands scale with powerful digital marketing strategies. Your digital growth partner.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/skyhub_marketing?igsh=M2JyNW5hdnV0b3Vr&utm_source=qr" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/skyhub-marketing/?viewAsMember=true" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link to="/services#templates-design">Templates Design</Link></li>
              <li><Link to="/services#web-design">Web Design</Link></li>
              <li><Link to="/services#social-media">Social Media Management</Link></li>
              <li><Link to="/services#content-creation">Content Creation (Reels & Posts)</Link></li>
              <li><Link to="/services#graphic-design">Graphic Design</Link></li>
              <li><Link to="/services#logo-design">Logo Design</Link></li>
              <li><Link to="/services#seo">Search Engine Optimization (SEO)</Link></li>
              <li><Link to="/services#digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/services#advertising">Advertising</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact Info</h3>
            <ul className="footer-links">
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <i className="fas fa-envelope" style={{ color: 'var(--accent-blue)', width: '20px', textAlign: 'center' }}></i>
                <a href="mailto:enquiry.skyhubmarketing@gmail.com" style={{ whiteSpace: 'nowrap', fontSize: '0.95rem' }}>enquiry.skyhubmarketing@gmail.com</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <i className="fas fa-phone-alt" style={{ color: 'var(--accent-purple)', width: '20px', textAlign: 'center' }}></i>
                <a href="tel:+919407499075">+91 9407499075</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-map-marker-alt" style={{ color: 'var(--accent-blue)', width: '20px', textAlign: 'center' }}></i>
                <a href="#">India</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SkyHub Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
