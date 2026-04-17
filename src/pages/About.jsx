import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Animations';

export default function About() {
  return (
    <>
      <header className="page-header">
        <Reveal className="container">
          <h1 className="hero-heading">About <span className="text-gradient">Us</span></h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem' }}>We are a team of digital strategists, creatives, and technologists.</p>
        </Reveal>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <Reveal direction="left">
              <h2>The Story of <span className="text-gradient">SkyHub</span></h2>
              <p>Founded with a bold vision, SkyHub Marketing was created to bridge the gap between brilliant brands and their digital manifestation. In a world cluttered with generic templates and automated strategies, we decided to bring a human touch back to the digital frontier.</p>
              <p>Our team consists of passionate marketers, designers, and developers who obsess over metrics, aesthetics, and user experience. We don't just want to build campaigns; we want to build legacies.</p>
            </Reveal>
            <Reveal direction="right" className="float-anim">
              <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden', border: 'var(--glass-border)' }}>
                {/* Fallback pattern if no image */}
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fas fa-users" style={{ fontSize: '6rem', color: 'rgba(21, 65, 152, 0.2)' }}></i>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-tertiary)' }}>
        <div className="container text-center">
          <Reveal>
            <h2 style={{ marginBottom: '3rem' }}>Our Mission & Vision</h2>
          </Reveal>
          <div className="grid mission-vision-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <Reveal delay={0.1} className="card" style={{ textAlign: 'left', padding: '3rem' }}>
              <i className="fas fa-bullseye" style={{ fontSize: '3rem', color: 'var(--accent-blue)', marginBottom: '1.5rem' }}></i>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Our Mission</h3>
              <p>To empower businesses of all sizes with data-driven marketing strategies and breathtaking digital experiences that catalyze unparalleled growth and market dominance.</p>
            </Reveal>
            <Reveal delay={0.2} className="card" style={{ textAlign: 'left', padding: '3rem' }}>
              <i className="fas fa-eye" style={{ fontSize: '3rem', color: 'var(--accent-purple)', marginBottom: '1.5rem' }}></i>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Our Vision</h3>
              <p>To be the globally recognized vanguard of digital innovation, continually setting new benchmarks for creativity, performance, and client partnership.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="text-center mb-6">
            <span className="section-subtitle">Leadership</span>
            <h2>Meet The Founder</h2>
          </Reveal>
          <div className="grid" style={{ gridTemplateColumns: 'minmax(250px, 400px)', justifyContent: 'center', margin: '0 auto' }}>
            <Reveal className="team-card card text-center">
              <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'var(--gradient-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', overflow: 'hidden' }}>
                <img src="/images/Founder.png" alt="Mr. Lucky Parmar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3>Mr. Lucky Parmar</h3>
              <p style={{ color: 'var(--accent-purple)' }}>Founder & CEO</p>
              <div className="social-links" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      
      <section className="cta-global">
        <Reveal className="container">
          <h2>Want to join our amazing team?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.2rem' }}>We are always looking for passionate people. Check out our open positions.</p>
          <Link to="/contact" className="btn btn-primary btn-large">Contact Us</Link>
        </Reveal>
      </section>
    </>
  );
}
