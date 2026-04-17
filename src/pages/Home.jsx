import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Animations';

export default function Home() {
  return (
    <>
      <header className="hero" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 'var(--nav-height)' }}>
        {/* Background Atmosphere */}
        <div className="bg-orb bg-orb-1" style={{ top: '-10%', left: '-10%' }}></div>
        <div className="bg-orb bg-orb-2" style={{ bottom: '10%', right: '5%' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <Reveal className="hero-content" direction="left">
              <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginBottom: '1.5rem' }}>
                <span className="hero-badge"><i className="fas fa-rocket"></i> Welcome to SkyHub</span>
              </div>
              <h1 className="hero-heading" style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)' }}>Scale Faster<br/>with <span className="text-gradient">SkyHub</span></h1>
              <p className="hero-subtitle" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '90%' }}>We design cutting-edge websites, viral social media campaigns, and high-converting marketing strategies for top-tier brands.</p>
              <div className="hero-buttons" style={{ justifyContent: 'flex-start' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem' }}>Get Started <i className="fas fa-arrow-right"></i></Link>
                <Link to="/services" className="btn btn-outline" style={{ padding: '1.2rem 2.5rem' }}>Our Services</Link>
              </div>
            </Reveal>

            <Reveal direction="right" className="hero-visual" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '500px' }}>
              <div className="glass-ring" style={{ width: '400px', height: '400px' }}></div>
              <div className="glass-ring" style={{ width: '300px', height: '300px', animationDirection: 'reverse', animationDuration: '15s' }}></div>
              
              <div className="float-anim" style={{ 
                background: 'var(--glass-bg)', 
                border: 'var(--glass-border)', 
                borderRadius: '24px', 
                padding: '2.5rem', 
                boxShadow: 'var(--shadow-glow)', 
                backdropFilter: 'blur(20px)',
                position: 'relative',
                zIndex: 10,
                width: '100%',
                maxWidth: '400px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                transform: 'rotateY(-15deg) rotateX(10deg)',
                transformStyle: 'preserve-3d'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--gradient-main)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fas fa-chart-pie" style={{ color: '#fff' }}></i></div>
                    <div style={{ width: '120px', height: '12px', borderRadius: '6px', background: 'rgba(255,255,255,0.1)' }}></div>
                  </div>
                  <div style={{ fontSize: '1.5rem', color: 'var(--accent-blue)' }}><i className="fas fa-arrow-trend-up"></i></div>
                </div>
                
                <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0 0', fontWeight: 500 }}>Revenue Growth</h3>
                <h2 style={{ fontSize: '2.5rem', margin: 0, color: 'var(--text-main)' }}>+248%</h2>

                <div style={{ width: '100%', height: '120px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'flex-end', padding: '1rem 1.5rem', gap: '1rem' }}>
                    <div style={{ flex: 1, background: 'rgba(21, 65, 152, 0.5)', height: '30%', borderRadius: '4px 4px 0 0', transition: 'height 1s' }}></div>
                    <div style={{ flex: 1, background: 'rgba(74, 207, 250, 0.6)', height: '50%', borderRadius: '4px 4px 0 0' }}></div>
                    <div style={{ flex: 1, background: 'var(--gradient-main)', height: '90%', borderRadius: '4px 4px 0 0', position: 'relative' }}>
                      <div className="pulse-anim" style={{ position: 'absolute', top: '-15px', right: '-15px', padding: '4px 8px', background: 'var(--accent-blue)', color: '#fff', fontSize: '0.7rem', borderRadius: '20px', fontWeight: 'bold' }}>MAX</div>
                    </div>
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.2)', height: '70%', borderRadius: '4px 4px 0 0' }}></div>
                </div>
                <div style={{ width: '85%', height: '10px', borderRadius: '5px', background: 'rgba(255,255,255,0.07)' }}></div>
                <div style={{ width: '55%', height: '10px', borderRadius: '5px', background: 'rgba(255,255,255,0.07)' }}></div>
              </div>
            </Reveal>
          </div>
        </div>
      </header>



      <section className="section">
        <div className="container">
          <Reveal className="text-center mb-6">
            <span className="section-subtitle">What We Do</span>
            <h2>Our Core Services</h2>
            <p>Comprehensive digital solutions tailored for your brand's explosive growth.</p>
          </Reveal>
          
          <div className="grid grid-3">
            {[ 
              { icon: 'layer-group', title: 'Templates Design', desc: 'Custom, reusable marketing templates for your brand.' },
              { icon: 'laptop-code', title: 'Web Design', desc: 'Beautiful, fast, and conversion-optimized websites.' },
              { icon: 'share-nodes', title: 'Social Media Management', desc: 'We handle your entire social media presence and growth.' },
              { icon: 'video', title: 'Content Creation (Reels & Posts)', desc: 'Viral short-form Reels and high-retention image posts.' },
              { icon: 'bezier-curve', title: 'Graphic Design', desc: 'Striking, original graphics that instantly grab attention.' },
              { icon: 'pen-nib', title: 'Logo Design', desc: 'We design premium, scalable logos for your business.' },
              { icon: 'chart-line', title: 'Search Engine Optimization (SEO)', desc: 'SEO strategies driving high-intent organic traffic.' },
              { icon: 'bullseye', title: 'Digital Marketing', desc: 'A comprehensive approach to scale your revenue through interconnected campaigns.' },
              { icon: 'ad', title: 'Advertising', desc: 'Highly targeted, data-backed ad campaigns across multiple networks.' }
            ].map((srv, i) => (
              <Reveal key={i} direction="up" delay={i * 0.1} className="card">
                <div className="card-icon"><i className={`fas fa-${srv.icon}`}></i></div>
                <h3 className="card-title">{srv.title}</h3>
                <p>{srv.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.5} className="text-center" style={{ marginTop: '3rem' }}>
              <Link to="/services" className="btn btn-outline">Explore All Services <i className="fas fa-arrow-right"></i></Link>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-tertiary)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <Reveal direction="left">
              <span className="section-subtitle">The SkyHub Advantage</span>
              <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Why Partners Choose <span className="text-gradient">SkyHub</span></h2>
              <p style={{ marginBottom: '2rem' }}>We don't just execute services; we partner with you to understand your ultimate business goals. Our strategies are crafted to deliver measurable ROI, fast.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[ 
                  { title: 'Result-Driven Strategies', desc: 'Every campaign is built on data and aimed at clear KPIs to ensure maximum success.', color: 'blue' },
                  { title: 'Client-Focused Approach', desc: 'Transparent communication and dedicated account managers so you are always in the loop.', color: 'purple' },
                  { title: 'Fast & Affordable', desc: 'Premium quality that doesn\'t break the bank, delivered seamlessly on time.', color: 'blue' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ color: `var(--accent-${item.color})`, fontSize: '1.5rem', marginTop: '0.2rem' }}><i className="fas fa-check-circle"></i></div>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{item.title}</h4>
                      <p style={{ marginBottom: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            
            <Reveal direction="right" style={{ position: 'relative' }}>
              <div className="pulse-anim" style={{ width: '100%', aspectRatio: '1', background: 'var(--gradient-main)', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', animation: 'morph 8s ease-in-out infinite', opacity: 0.2 }}></div>
              <div className="float-anim hover-scale-anim" style={{ position: 'absolute', top: '10%', right: '10%', bottom: '10%', left: '10%', background: 'var(--bg-secondary)', borderRadius: '20px', border: 'var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', padding: '2rem' }}>
                <i className="fas fa-rocket" style={{ fontSize: '5rem', color: 'var(--accent-purple)', marginBottom: '2rem' }}></i>
                <h3 style={{ fontSize: '2rem' }}>Ready to Launch?</h3>
                <p>Join our successful businesses.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="text-center mb-6">
            <span className="section-subtitle">Testimonials</span>
            <h2>What Our Clients Say</h2>
          </Reveal>
          
          <div className="grid grid-3">
            {[ 
              { review: "SkyHub transformed our online presence! Within 3 months, our website traffic tripled, and our leads went through the roof. Truly a game changer for our agency.", name: "Sarah Jenkins", role: "CEO, TechNova Solutions" },
              { review: "The team's dedication to our Meta ads campaign was incredible. Not only did they lower our CPA, but the creative assets they designed were visually stunning.", name: "Michael Chang", role: "Founder, Elevate Fitness" },
              { review: "If you want an agency that actually cares about your ROI, SkyHub is it. They completely overhauled our branding and built a premium website that converts.", name: "Priya Patel", role: "Marketing Director, Aura Boutique" }
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.15} className="testimonial-card card">
                <i className="fas fa-quote-left quote-icon" style={{ fontSize: '2rem', color: 'rgba(21, 65, 152, 0.3)', marginBottom: '1rem' }}></i>
                <p>"{t.review}"</p>
                <div className="client-name" style={{ color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.2rem', marginTop: '1.5rem' }}>{t.name}</div>
                <div className="client-role" style={{ fontSize: '0.9rem', color: 'var(--accent-purple)' }}>{t.role}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-global">
        <Reveal className="container">
          <h2>Ready to dominate your market?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.2rem' }}>Let's build a tailored marketing strategy to elevate your brand.</p>
          <Link to="/contact" className="btn btn-primary btn-large" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>Get Your Free Consultation</Link>
        </Reveal>
      </section>
    </>
  );
}
