import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Animations';

const servicesList = [
  {
    id: 'templates-design',
    icon: 'layer-group',
    title: 'Templates Design',
    desc: 'Custom, reusable marketing templates for your brand to maintain visual consistency across all your campaigns and social media presence.',
    benefits: ['Brand Kit Integration', 'Scalable Assets', 'Social Media Packs', 'Presentation Decks']
  },
  {
    id: 'web-design',
    icon: 'laptop-code',
    title: 'Web Design',
    desc: 'Visually stunning, fast-loading, and conversion-optimized websites specifically engineered to represent your brand authority.',
    benefits: ['Mobile-Responsive Layouts', 'Custom UI/UX', 'E-Commerce Solutions', 'High Performance']
  },
  {
    id: 'social-media',
    icon: 'share-nodes',
    title: 'Social Media Management',
    desc: 'We handle your entire social media presence. From scheduling to community engagement, we build a loyal and vibrant audience.',
    benefits: ['Community Engagement', 'Content Calendars', 'Platform Growth', 'Analytics Tracking']
  },
  {
    id: 'content-creation',
    icon: 'video',
    title: 'Content Creation (Reels & Posts)',
    desc: 'Viral-worthy short-form vertical videos and high-retention image posts perfectly tailored for modern social algorithms.',
    benefits: ['TikTok & Reels Production', 'Trend-Based Scripts', 'Professional Editing', 'High-Quality Graphics']
  },
  {
    id: 'graphic-design',
    icon: 'bezier-curve',
    title: 'Graphic Design',
    desc: 'Striking, original graphics that instantly grab attention. We create everything from marketing collateral to digital ad creatives.',
    benefits: ['Custom Illustrations', 'Ad Creatives', 'Print Materials', 'Infographics']
  },
  {
    id: 'logo-design',
    icon: 'pen-nib',
    title: 'Logo Design',
    desc: 'A great brand starts with an unforgettable identity. We design premium, scalable logos that capture the core essence of your business.',
    benefits: ['Custom Iconography', 'Typography Selection', 'Scalable Vectors', 'Brand Guidelines']
  },
  {
    id: 'seo',
    icon: 'chart-line',
    title: 'Search Engine Optimization (SEO)',
    desc: 'Stop hiding on the second page of Google. Our rigorous SEO strategies drive high-intent, targeted organic traffic directly to your site.',
    benefits: ['Keyword Research', 'On-Page Optimization', 'Backlink Campaigns', 'Local SEO']
  },
  {
    id: 'digital-marketing',
    icon: 'bullseye',
    title: 'Digital Marketing',
    desc: 'A comprehensive, 360-degree digital approach to scale your revenue through interconnected multi-channel campaigns.',
    benefits: ['Holistic Strategy', 'Funnel Optimization', 'Conversion Tracking', 'Brand Positioning']
  },
  {
    id: 'advertising',
    icon: 'ad',
    title: 'Advertising',
    desc: 'Unlock immense scale. We run highly targeted, data-backed ad campaigns across multiple networks to ensure maximum return on ad spend.',
    benefits: ['Google Search Ads', 'Display Networks', 'A/B Testing Outbound', 'Lead Generation']
  }
];

export default function Services() {
  return (
    <>
      <header className="page-header">
        <Reveal className="container">
          <h1 className="hero-heading">Our <span className="text-gradient">Services</span></h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem' }}>Comprehensive digital solutions engineered for unparalleled growth.</p>
        </Reveal>
      </header>

      {servicesList.map((srv, index) => (
        <section key={index} className="service-page-section" id={srv.id} style={index % 2 !== 0 ? { background: 'var(--bg-tertiary)' } : {}}>
          <div className="container">
            <div className="grid grid-2" style={{ alignItems: 'center' }}>
                <Reveal direction={index % 2 === 0 ? "left" : "right"} className="service-visual float-anim" style={{ order: index % 2 === 0 ? 1 : 2, background: 'var(--bg-secondary)', border: 'var(--glass-border)', borderRadius: '30px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', boxShadow: 'inset 0 0 40px rgba(21, 65, 152, 0.1)' }}>
                  {/* Concentric Decorative Rings */}
                  <div className="glass-ring" style={{ width: '280px', height: '280px', position: 'absolute' }}></div>
                  <div className="glass-ring" style={{ width: '180px', height: '180px', position: 'absolute', animationDirection: 'reverse', animationDuration: '10s', borderColor: 'rgba(74, 207, 250, 0.3)' }}></div>
                  
                  {/* Vibrant Glowing Core */}
                  <div className="pulse-anim" style={{ position: 'absolute', width: '140px', height: '140px', background: 'var(--gradient-main)', borderRadius: '50%', filter: 'blur(35px)', opacity: 0.5, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
                  
                  {/* 3D Glass Icon Container */}
                  <div style={{ width: '140px', height: '140px', borderRadius: '30px', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(15px)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, boxShadow: '0 25px 50px rgba(0,0,0,0.5)', transform: 'rotate(-5deg) translateY(-10px)' }}>
                    <i className={`fas fa-${srv.icon}`} style={{ fontSize: '5rem', color: '#fff', textShadow: '0 0 25px rgba(255,255,255,0.5)' }}></i>
                  </div>
                </Reveal>
                <Reveal direction={index % 2 === 0 ? "right" : "left"} className="service-details" style={{ order: index % 2 === 0 ? 2 : 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <h2 style={{ fontSize: '2.5rem' }}>{srv.title}</h2>
                  <p>{srv.desc}</p>
                  <ul className="service-benefits" style={{ listStyle: 'none', marginTop: '1rem' }}>
                    {srv.benefits.map((b, i) => (
                      <li key={i} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                        <i className="fas fa-check" style={{ color: 'var(--accent-purple)', background: 'rgba(21, 65, 152, 0.1)', padding: '5px', borderRadius: '50%', fontSize: '0.9rem' }}></i> {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Link to="/contact" className="btn btn-outline">Contact Us <i className="fas fa-arrow-right"></i></Link>
                  </div>
                </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="cta-global">
        <Reveal className="container">
          <h2>Ready to transform your brand?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.2rem' }}>Pick the services that align with your goals and let's make magic happen.</p>
          <Link to="/contact" className="btn btn-primary btn-large">Start Your Project</Link>
        </Reveal>
      </section>
    </>
  );
}
