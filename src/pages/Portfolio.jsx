import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Animations';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioItems = [
  { category: 'web', title: 'TechNova Corporate Website', desc: 'A complete redesign focusing on high performance, SEO, and dark-mode aesthetics.' },
  { category: 'social', title: 'Elevate Fitness Campaign', desc: 'Instagram and TikTok strategy resulting in 400% engagement growth over 3 months.' },
  { category: 'ads', title: 'Aura Boutique ROI Scaling', desc: 'Meta Ads campaign optimization that dropped Cost Per Acquisition by 45%.' },
  { category: 'web', title: 'Nexus E-Commerce App', desc: 'Built a lightning-fast React storefront handling 10k+ daily visitors effortlessly.' },
  { category: 'social', title: 'Bean & Brew Rebranding', desc: 'Visual identity overhaul and social media launch for an artisan coffee chain.' },
  { category: 'ads', title: 'SaaS Leads Generation', desc: 'Google Search Ads strategy yielding 500+ qualified B2B leads in Q1.' }
];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

  return (
    <>
      <header className="page-header">
        <Reveal className="container">
          <h1 className="hero-heading">Our <span className="text-gradient">Portfolio</span></h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem' }}>We don't just make promises; we deliver results. Explore our latest success stories.</p>
        </Reveal>
      </header>

      <section className="section">
        <div className="container text-center">
          <Reveal className="portfolio-filters" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <button className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setFilter('all')}>All Projects</button>
            <button className={`btn ${filter === 'web' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setFilter('web')}>Web Design</button>
            <button className={`btn ${filter === 'social' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setFilter('social')}>Social Media</button>
            <button className={`btn ${filter === 'ads' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setFilter('ads')}>Paid Ads</button>
          </Reveal>

          <motion.div layout className="grid grid-3 portfolio-grid">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="portfolio-card card"
                  style={{ textAlign: 'left', padding: '0', overflow: 'hidden', position: 'relative' }}
                >
                  {/* Premium Abstract Mockup Area */}
                  <div style={{ height: '220px', background: item.category === 'web' ? 'linear-gradient(45deg, #0f172a, #1e293b)' : item.category === 'social' ? 'linear-gradient(45deg, #312e81, #1e1b4b)' : 'linear-gradient(45deg, #082f49, #020617)', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                    
                    {/* Abstract Decorative Elements */}
                    <div style={{ position: 'absolute', width: '150px', height: '150px', background: 'var(--gradient-main)', borderRadius: '50%', filter: 'blur(40px)', opacity: 0.3, top: '-20%', left: '-10%' }}></div>
                    <div style={{ position: 'absolute', width: '100px', height: '100px', background: 'var(--accent-blue)', borderRadius: '50%', filter: 'blur(30px)', opacity: 0.2, bottom: '-10%', right: '-10%' }}></div>

                    {/* Mockup Windows */}
                    {item.category === 'web' && (
                      <div style={{ width: '80%', height: '70%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px 8px 0 0', display: 'flex', flexDirection: 'column', position: 'absolute', bottom: 0, backdropFilter: 'blur(5px)', boxShadow: '0 -10px 30px rgba(0,0,0,0.5)' }}>
                        <div style={{ width: '100%', height: '15px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '5px', padding: '0 8px', alignItems: 'center' }}>
                           <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }}></div>
                           <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b' }}></div>
                           <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></div>
                        </div>
                        <div style={{ flex: 1, padding: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                           <div style={{ width: '60%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                           <div style={{ width: '40%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}></div>
                           <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                             <div style={{ flex: 1, height: '40px', background: 'var(--gradient-main)', borderRadius: '4px', opacity: 0.8 }}></div>
                             <div style={{ flex: 1, height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}></div>
                           </div>
                        </div>
                      </div>
                    )}

                    {item.category === 'social' && (
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <div style={{ width: '80px', height: '140px', background: 'var(--gradient-main)', borderRadius: '12px', border: '2px solid rgba(255,255,255,0.2)', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', transform: 'rotate(-10deg)', opacity: 0.8 }}></div>
                        <div style={{ width: '90px', height: '160px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 15px 30px rgba(0,0,0,0.5)', zIndex: 2, backdropFilter: 'blur(5px)', display: 'flex', flexDirection: 'column', padding: '10px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
                             <div style={{ width: '15px', height: '15px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}></div>
                             <div style={{ width: '40px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}></div>
                          </div>
                          <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '8px', marginBottom: '10px' }}></div>
                        </div>
                        <div style={{ width: '80px', height: '140px', background: 'var(--accent-blue)', borderRadius: '12px', border: '2px solid rgba(255,255,255,0.2)', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', transform: 'rotate(10deg)', opacity: 0.6 }}></div>
                      </div>
                    )}

                    {item.category === 'ads' && (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="pulse-anim" style={{ width: '150px', height: '150px', borderRadius: '50%', border: '1px dashed rgba(74, 207, 250, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(21, 65, 152, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <i className="fas fa-bullseye" style={{ fontSize: '3rem', color: 'var(--accent-blue)', textShadow: '0 0 20px var(--accent-blue)' }}></i>
                           </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Floating Badge overlay */}
                    <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <i className="fas fa-star" style={{ color: '#f59e0b', marginRight: '5px' }}></i> Featured
                    </div>
                  </div>
                  
                  <div style={{ padding: '2rem', position: 'relative' }}>
                    <span style={{ display: 'inline-block', padding: '4px 10px', background: 'rgba(74, 207, 250, 0.1)', color: 'var(--accent-blue)', borderRadius: '20px', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '1rem' }}>
                      {item.category === 'web' ? 'Web Platform' : item.category === 'social' ? 'Social Campaign' : 'Ad Strategy'}
                    </span>
                    <h3 style={{ fontSize: '1.5rem', margin: '0 0 1rem 0', color: 'var(--text-main)', lineHeight: '1.3' }}>{item.title}</h3>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                    
                    <Link to="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-blue)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-main)'}>
                      View Case Study <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }}></i>
                    </Link>
                  </div>
                  
                  {/* Hover Accent Line */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, height: '4px', width: '100%', background: 'var(--gradient-main)', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s ease' }} className="card-hover-line"></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="cta-global">
        <Reveal className="container">
          <h2>Ready to be our next success story?</h2>
          <Link to="/contact" className="btn btn-primary btn-large" style={{ marginTop: '2rem' }}>Get in Touch</Link>
        </Reveal>
      </section>
    </>
  );
}
