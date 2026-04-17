import React, { useState } from 'react';
import { Reveal } from '../components/Animations';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
      } else {
        setStatus({ loading: false, success: false, error: data.message || 'Error submitting form' });
      }
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, success: false, error: 'Network error. Make sure the backend server is running.' });
    }
  };

  return (
    <>
      <header className="page-header">
        <Reveal className="container">
          <h1 className="hero-heading">Let's <span className="text-gradient">Connect</span></h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem' }}>Ready to take your digital presence to the next level? Drop us a message.</p>
        </Reveal>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem' }}>
            <Reveal direction="left">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get In Touch</h2>
              <p style={{ marginBottom: '2rem' }}>Whether you have a specific project in mind or just want to explore possibilities, our team is ready to listen.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(21, 65, 152, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'var(--accent-purple)' }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Location</h3>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>India (Serving Clients Worldwide)</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'var(--accent-blue)' }}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Email Us</h3>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>enquiry.skyhubmarketing@gmail.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(27, 73, 168, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#1b49a8' }}>
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Contact Number</h3>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>+91 9407499075</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" className="card" style={{ padding: '3rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Send a Message</h3>
              {status.success && (
                  <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '1rem', borderRadius: '10px', marginBottom: '1.5rem', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                      Successfully submitted! We will get in touch with you right away.
                  </div>
              )}
              {status.error && (
                  <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '1rem', borderRadius: '10px', marginBottom: '1.5rem', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                      {status.error}
                  </div>
              )}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="name" style={{ fontWeight: 600 }}>Full Name</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required style={{ width: '100%', padding: '1rem', background: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '10px', color: 'var(--text-main)', outline: 'none', transition: 'border 0.3s' }} />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email" style={{ fontWeight: 600 }}>Email Address</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required style={{ width: '100%', padding: '1rem', background: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '10px', color: 'var(--text-main)', outline: 'none', transition: 'border 0.3s' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="phone" style={{ fontWeight: 600 }}>Contact Number</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (234) 567-8900" required style={{ width: '100%', padding: '1rem', background: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '10px', color: 'var(--text-main)', outline: 'none', transition: 'border 0.3s' }} />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="service" style={{ fontWeight: 600 }}>Service of Interest</label>
                  <select id="service" value={formData.service} onChange={handleChange} required style={{ width: '100%', padding: '1rem', background: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '10px', color: 'var(--text-main)', outline: 'none', transition: 'border 0.3s' }}>
                    <option value="">Select a service...</option>
                    <option value="templates">Templates Design</option>
                    <option value="web">Web Design</option>
                    <option value="social">Social Media Management</option>
                    <option value="content">Content Creation (Reels & Posts)</option>
                    <option value="graphics">Graphic Design</option>
                    <option value="logo">Logo Design</option>
                    <option value="seo">Search Engine Optimization (SEO)</option>
                    <option value="digital">Digital Marketing</option>
                    <option value="ads">Advertising</option>
                  </select>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="budget" style={{ fontWeight: 600 }}>Estimated Budget</label>
                  <select id="budget" value={formData.budget} onChange={handleChange} required style={{ width: '100%', padding: '1rem', background: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '10px', color: 'var(--text-main)', outline: 'none', transition: 'border 0.3s' }}>
                    <option value="">Select budget range...</option>
                    <option value="less_1000">&lt; $1,000</option>
                    <option value="1000_5000">$1,000 - $5,000</option>
                    <option value="5000_10000">$5,000 - $10,000</option>
                    <option value="more_10000">$10,000+</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="message" style={{ fontWeight: 600 }}>Your Message</label>
                  <textarea id="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us about your project..." required style={{ width: '100%', padding: '1rem', background: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '10px', color: 'var(--text-main)', outline: 'none', transition: 'border 0.3s', resize: 'vertical' }}></textarea>
                </div>
                
                <button type="submit" disabled={status.loading} className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', opacity: status.loading ? 0.7 : 1 }}>
                  {status.loading ? 'Sending...' : 'Send Message'} <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
