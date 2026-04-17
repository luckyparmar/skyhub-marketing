document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Header
    const headerHTML = `
        <nav class="navbar" id="navbar">
            <div class="nav-container" style="width: 100%; padding: 0 3vw;">
                <div class="nav-logo">
                    <a href="index.html" style="display: flex; align-items: center; margin-left: -1vw;">
                        <img src="images/logo.png" alt="SkyHub Marketing Logo" style="height: 100px; width: auto; object-fit: contain; transform: scale(1.5); transform-origin: left center;">
                    </a>
                </div>
                <div class="nav-right" style="display: flex; align-items: center; gap: 2rem;">
                    <ul class="nav-links" id="nav-links">
                        <li><a href="index.html" class="nav-link">Home</a></li>
                        <li><a href="about.html" class="nav-link">About Us</a></li>
                        <li><a href="services.html" class="nav-link">Services</a></li>
                        <li><a href="portfolio.html" class="nav-link">Portfolio</a></li>
                        <li><a href="contact.html" class="nav-link">Contact</a></li>
                    </ul>
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <button class="mobile-menu-btn" id="mobile-menu-btn">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    `;
    
    // 2. Render Footer
    const footerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-col">
                        <a href="index.html" class="footer-logo" style="display: flex; align-items: center; justify-content: flex-start;">
                            <img src="images/logo.png" alt="SkyHub Marketing Logo" style="height: 150px; width: auto; object-fit: contain; transform: scale(1.3); transform-origin: left center; margin-bottom: 1rem;">
                        </a>
                        <p>We help brands scale with powerful digital marketing strategies. Your digital growth partner.</p>
                        <div class="social-links">
                            <a href="https://www.instagram.com/skyhub_marketing?igsh=M2JyNW5hdnV0b3Vr&utm_source=qr" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/skyhub-marketing/?viewAsMember=true" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h3>Quick Links</h3>
                        <ul class="footer-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h3>Services</h3>
                        <ul class="footer-links">
                            <li><a href="services.html#templates-design">Templates Design</a></li>
                            <li><a href="services.html#web-design">Web Design</a></li>
                            <li><a href="services.html#social-media">Social Media Management</a></li>
                            <li><a href="services.html#content-creation">Content Creation</a></li>
                            <li><a href="services.html#graphic-design">Graphic Design</a></li>
                            <li><a href="services.html#logo-design">Logo Design</a></li>
                            <li><a href="services.html#seo">Search Engine Optimization</a></li>
                            <li><a href="services.html#digital-marketing">Digital Marketing</a></li>
                            <li><a href="services.html#advertising">Advertising</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h3>Contact Info</h3>
                        <ul class="footer-links">
                            <li style="display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;">
                                <i class="fas fa-envelope" style="color: var(--accent-blue); width: 20px; text-align: center;"></i>
                                <a href="mailto:enquiry.skyhubmarketing@gmail.com" style="white-space: nowrap; font-size: 0.95rem;">enquiry.skyhubmarketing@gmail.com</a>
                            </li>
                            <li style="display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;">
                                <i class="fas fa-phone-alt" style="color: var(--accent-purple); width: 20px; text-align: center;"></i>
                                <a href="tel:+919407499075">+91 9407499075</a>
                            </li>
                            <li style="display: flex; align-items: center; gap: 10px;">
                                <i class="fas fa-map-marker-alt" style="color: var(--accent-blue); width: 20px; text-align: center;"></i>
                                <a href="#">India</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} SkyHub Marketing. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;

    const orbsHTML = `
        <div class="bg-orb bg-orb-1"></div>
        <div class="bg-orb bg-orb-2"></div>
        <div class="bg-orb bg-orb-3"></div>
    `;

    const whatsappHTML = `
        <a href="https://wa.me/919407499075" target="_blank" rel="noreferrer" class="pulse-anim" style="position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px; background: #25D366; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4); z-index: 1000; text-decoration: none; transition: transform 0.3s;">
            <i class="fab fa-whatsapp"></i>
        </a>
    `;

    document.body.insertAdjacentHTML('afterbegin', orbsHTML);
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    document.body.insertAdjacentHTML('beforeend', whatsappHTML);

    // Set Active Nav Link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinksList = document.getElementById('nav-links');
    
    const toggleMenu = () => {
        if(navLinksList) {
            navLinksList.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if(navLinksList.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    };

    if(mobileBtn) {
        mobileBtn.addEventListener('click', toggleMenu);
    }

    // Close mobile menu when nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if(navLinksList && navLinksList.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Auto-stagger grid items for better animations
    document.querySelectorAll('.grid').forEach(grid => {
        const items = grid.querySelectorAll('.card, .stat-item, .testimonial-card, .team-card, .portfolio-card');
        items.forEach((item, index) => {
            if(index < 5) item.classList.add(`delay-${index + 1}`);
            // Also enable reveal utility on all grid items if not already set
            if(!item.classList.contains('reveal') && !item.classList.contains('reveal-zoom')) {
                item.classList.add('reveal');
            }
        });
    });

    // Scroll Reveal Animations
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        
        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load

    // Premium Mouse Parallax Effect on Background Orbs
    document.addEventListener('mousemove', (e) => {
        const orbs = document.querySelectorAll('.bg-orb');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 30; // Different depth layers map to different speeds
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            orb.style.marginLeft = `${xOffset}px`;
            orb.style.marginTop = `${yOffset}px`;
            orb.style.transition = 'margin 0.3s ease-out'; // smooth fluid movement
        });
        
        // Ambient cursor aura implementation
        if (typeof cursorGlow !== 'undefined' && cursorGlow) {
            cursorGlow.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`; // offset by half width/height
        }
    });

    // Ambient Glowing Cursor System
    const cursorGlow = document.createElement('div');
    cursorGlow.classList.add('cursor-glow');
    document.body.appendChild(cursorGlow);

    // Scroll Progress Bar System
    const scrollBar = document.createElement('div');
    scrollBar.classList.add('scroll-progress');
    document.body.appendChild(scrollBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        scrollBar.style.width = progress + '%';
    });

    // Advanced 3D Hover Tilt Tracking for Cards with Flashlight Spotlight
    document.querySelectorAll('.card').forEach(card => {
        const spotlight = document.createElement('div');
        spotlight.classList.add('spotlight');
        card.appendChild(spotlight);

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -18; // Increased tilt depth
            const rotateY = ((x - centerX) / centerX) * 18;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.08, 1.08, 1.08)`;
            card.style.transition = 'none'; // Instant snappy tracking

            // Translate Spotlight
            spotlight.style.left = `${x}px`;
            spotlight.style.top = `${y}px`;
            spotlight.style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)'; // bouncy reset
            spotlight.style.opacity = '0';
        });
    });

    // Explosive Click Sparks on Primary Buttons
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', (e) => {
            for(let i=0; i < 12; i++) {
                const spark = document.createElement('div');
                spark.classList.add('click-spark');
                spark.style.left = `${e.clientX}px`;
                spark.style.top = `${e.clientY}px`;
                
                const angle = Math.random() * Math.PI * 2;
                const velocity = 60 + Math.random() * 80; // random strength
                spark.style.setProperty('--tx', `${Math.cos(angle) * velocity}px`);
                spark.style.setProperty('--ty', `${Math.sin(angle) * velocity}px`);
                
                document.body.appendChild(spark);
                setTimeout(() => spark.remove(), 600);
            }
        });
    });

    // Magic Particle Generator System
    const hero = document.querySelector('.hero');
    if(hero) {
        setInterval(() => {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 4 + 2; // Size between 2 and 6px
            const x = Math.random() * window.innerWidth;
            const duration = Math.random() * 4 + 3; // 3 to 7 seconds float time
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${x}px`;
            particle.style.animationDuration = `${duration}s`;
            
            hero.appendChild(particle);
            
            // Clean up DOM recursively
            setTimeout(() => particle.remove(), duration * 1000);
        }, 120); // Spawns a new particle very rapidly
    }

    // Dynamic Number Counter Animation
    const counters = document.querySelectorAll('.stat-item h3');
    const speed = 100; // Lower is faster animation
    
    const animateCounters = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const counter = entry.target;
                const targetText = counter.getAttribute('data-target');
                const targetNum = +targetText.replace(/\D/g, ''); // Extract digits
                const suffix = targetText.replace(/[0-9]/g, ''); // Extract extra characters (+, M)
                
                const updateCount = () => {
                    const currentString = counter.innerText || '0';
                    const count = +currentString.replace(/\D/g, '') || 0;
                    const increment = targetNum / speed;

                    if (count < targetNum) {
                        const newCount = Math.ceil(count + increment);
                        counter.innerText = newCount + suffix;
                        setTimeout(updateCount, 25);
                    } else {
                        counter.innerText = targetNum + suffix;
                    }
                };
                
                updateCount();
                observer.unobserve(counter);
            }
        });
    };

    const counterObserver = new IntersectionObserver(animateCounters, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counter.setAttribute('data-target', counter.innerText);
        counter.innerText = '0' + counter.innerText.replace(/[0-9]/g, '');
        counterObserver.observe(counter);
    });
});
