"use client";
import React, { useEffect, useState } from 'react';

export default function Portfolio() {
  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Form submission state handling
  const [formState, setFormState] = useState({
    status: 'idle', // idle, submitting, success
    buttonText: 'Send Message',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: 'submitting', buttonText: 'Sending...' });

    // Simulate API call
    setTimeout(() => {
      setFormState({ status: 'success', buttonText: 'Message Sent!' });
      (e.target as HTMLFormElement).reset();

      setTimeout(() => {
        setFormState({ status: 'idle', buttonText: 'Send Message' });
      }, 3000);
    }, 1500);
  };

  return (
    <>
      {/* External Fonts and Icons */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600&family=Geist:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <style>{`
        /* =========================================
           CSS VARIABLES & RESET
        ========================================= */
        :root {
          /* Colors */
          --bg-color: #030712;
          --background: #10131a;
          --surface: #1d2027;
          --surface-container-lowest: rgba(11, 14, 21, 0.5);
          --surface-container-low: rgba(25, 27, 35, 0.3);
          --surface-container-high: #272a31;
          
          --on-surface: #e1e2ec;
          --on-surface-variant: #c2c6d6;
          
          --primary: #adc6ff;
          --primary-fixed: #d8e2ff;
          --primary-container: #4d8eff;
          --on-primary-container: #00285d;
          --on-primary: #002e6a;
          
          --secondary: #d0bcff;
          --tertiary: #ffb786;

          /* Typography */
          --font-display: 'Plus Jakarta Sans', sans-serif;
          --font-body: 'Inter', sans-serif;
          --font-code: 'Geist', monospace;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background-color: var(--bg-color);
          color: var(--on-surface);
          font-family: var(--font-body);
          scroll-behavior: smooth;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        ul { list-style: none; }
        button { cursor: pointer; border: none; font-family: inherit; }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--background); }
        ::-webkit-scrollbar-thumb { background: #32353c; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #424754; }

        /* =========================================
           TYPOGRAPHY & UTILITIES
        ========================================= */
        .text-primary { color: var(--primary); }
        .text-secondary { color: var(--secondary); }
        .text-tertiary { color: var(--tertiary); }
        .text-on-surface-variant { color: var(--on-surface-variant); }
        
        .font-display-lg { font-family: var(--font-display); font-weight: 800; font-size: 40px; line-height: 1.2; letter-spacing: -0.02em; }
        .font-headline-md { font-family: var(--font-display); font-weight: 700; font-size: 32px; line-height: 1.3; }
        .font-body-lg { font-family: var(--font-body); font-size: 18px; }
        .font-body-md { font-family: var(--font-body); font-size: 16px; }
        .font-code { font-family: var(--font-code); }
        .font-label-caps { font-family: var(--font-code); font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }

        @media (min-width: 768px) {
          .font-display-lg { font-size: 64px; line-height: 1.1; letter-spacing: -0.04em; }
        }

        .gradient-text {
          background: linear-gradient(135deg, #adc6ff 0%, #d0bcff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        @media (min-width: 768px) {
          .container { padding: 0 1.5rem; }
        }

        /* Adjusted padding - significantly reduced top/bottom padding to tighten up sections */
        .section-padding { padding: 3rem 1rem; }
        @media (min-width: 768px) {
          .section-padding { padding: 4rem 1.5rem; }
        }

        /* =========================================
           COMPONENTS
        ========================================= */
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 1rem;
        }
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-4px);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 700;
          transition: all 0.3s ease;
          gap: 0.5rem;
        }
        .btn-primary {
          background-color: var(--primary);
          color: var(--on-primary);
        }
        .btn-primary:hover {
          background-color: var(--primary-fixed);
          box-shadow: 0 0 20px rgba(77, 142, 255, 0.3);
        }
        .btn-success { background-color: #22c55e; color: white; }
        .btn-success.pointer-events-none { pointer-events: none; opacity: 0.7; }
        
        .badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          border: 1px solid transparent;
        }
        .badge-outline-primary { background: rgba(173, 198, 255, 0.1); border-color: rgba(173, 198, 255, 0.2); color: var(--primary); }
        .badge-outline-secondary { background: rgba(208, 188, 255, 0.1); border-color: rgba(208, 188, 255, 0.2); color: var(--secondary); }
        .badge-outline-tertiary { background: rgba(255, 183, 134, 0.1); border-color: rgba(255, 183, 134, 0.2); color: var(--tertiary); }

        /* Animations */
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease-out;
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }

        /* =========================================
           LAYOUT SPECIFICS
        ========================================= */
        /* Header */
        .header {
          position: fixed;
          top: 0; width: 100%; z-index: 50;
          background-color: rgba(16, 19, 26, 0.85);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .header-content {
          display: flex; align-items: center; justify-content: space-between;
          height: 4.5rem;
        }
        
        /* Desktop Navigation Links */
        .nav-links { display: none; gap: 2rem; align-items: center; }
        .nav-links a { transition: color 0.3s; font-weight: 500; }
        .nav-links a:hover { color: var(--primary); }
        @media (min-width: 768px) { .nav-links { display: flex; } }
        
        /* Header Buttons */
        .header-btn {
          background: var(--primary-container); color: var(--on-primary-container);
          padding: 0.5rem 1.5rem; border-radius: 9999px; font-weight: 700;
          transition: all 0.3s;
        }
        .header-btn:hover { transform: scale(1.05); }
        
        .desktop-only-btn { display: none; }
        @media (min-width: 768px) { .desktop-only-btn { display: inline-flex; } }

        /* Mobile Menu Toggle Button */
        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: var(--on-surface);
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: background 0.3s;
        }
        .mobile-menu-btn:hover { background: rgba(255, 255, 255, 0.1); }
        @media (min-width: 768px) { .mobile-menu-btn { display: none; } }

        /* Mobile Menu Dropdown */
        .mobile-menu-dropdown {
          position: fixed;
          top: 4.5rem;
          left: 0;
          width: 100%;
          background: rgba(16, 19, 26, 0.98);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transform: translateY(-150%);
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 40;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }
        .mobile-menu-dropdown.open {
          transform: translateY(0);
          opacity: 1;
        }
        .mobile-menu-dropdown a {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--on-surface);
          transition: color 0.3s;
          display: block;
        }
        .mobile-menu-dropdown a:hover { color: var(--primary); }

        /* Hero Section */
        .hero { min-height: 100vh; display: flex; align-items: center; padding-top: 6rem; }
        .hero-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: center; }
        @media (min-width: 768px) { .hero-grid { grid-template-columns: 1fr 1fr; } }
        
        .hero-actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem; margin-top: 2rem;}
        .social-links { display: flex; gap: 1rem; }
        .social-icon { padding: 0.75rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: color 0.3s;}
        .social-icon:hover { color: var(--primary); }

        .hero-image-box { position: relative; padding: 1rem; border-radius: 1.5rem; aspect-ratio: 1; overflow: hidden; }
        .hero-image { width: 100%; height: 100%; object-fit: cover; border-radius: 1rem; opacity: 0.8; transition: transform 0.7s; }
        .hero-image-box:hover .hero-image { transform: scale(1.05); }
        .hero-gradient-overlay { position: absolute; inset: 0; background: linear-gradient(to top, var(--background), transparent, transparent); opacity: 0.6; pointer-events: none;}
        .abstract-shape-1 { position: absolute; z-index: -1; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 18rem; height: 18rem; background: rgba(173, 198, 255, 0.2); filter: blur(100px); border-radius: 50%; }
        .abstract-shape-2 { position: absolute; z-index: -1; top: 0; right: 0; width: 12rem; height: 12rem; background: rgba(208, 188, 255, 0.1); filter: blur(80px); border-radius: 50%; }

        /* About Section */
        .about-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
        @media (min-width: 768px) { .about-grid { grid-template-columns: 4fr 8fr; } }
        .about-line { height: 0.25rem; width: 3rem; background: var(--primary); border-radius: 999px; margin-top: 0.5rem;}
        .about-stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem; }
        
        /* Skills Section */
        .skills-bg { background: var(--surface-container-lowest); }
        .skills-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-top: 2.5rem; }
        @media (min-width: 768px) { .skills-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .skills-grid { grid-template-columns: repeat(4, 1fr); } }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem; }
        .skill-card { padding: 2rem; border-radius: 1.5rem; }

        /* Experience Section (Work Journey) */
        .timeline { position: relative; margin-top: 3rem; display: flex; flex-direction: column; gap: 3rem; }
        .timeline::before { content: ''; position: absolute; left: 0; top: 0; height: 100%; width: 1px; background: rgba(255,255,255,0.1); }
        
        .timeline-item { position: relative; display: flex; flex-direction: column; gap: 1rem; padding-left: 2rem;}
        .timeline-dot { position: absolute; left: -5px; top: 0.5rem; width: 12px; height: 12px; border-radius: 50%; z-index: 10; }
        .timeline-dot.primary { background: var(--primary); box-shadow: 0 0 0 4px rgba(173,198,255,0.2); }
        .timeline-dot.secondary { background: var(--secondary); box-shadow: 0 0 0 4px rgba(208,188,255,0.2); }
        
        /* Fixed Desktop Timeline */
        @media (min-width: 768px) {
          .timeline::before { left: 50%; transform: translateX(-50%); }
          .timeline-item { flex-direction: row; align-items: center; padding-left: 0; gap: 4rem; justify-content: space-between; }
          .timeline-item.reverse { flex-direction: row-reverse; }
          
          /* flex: 1 solves the width wrapping issue completely */
          .timeline-side-content { flex: 1; width: auto; }
          
          .timeline-item .timeline-side-content:first-child { text-align: right; }
          .timeline-item.reverse .timeline-side-content:first-child { text-align: left; }
          
          /* Perfectly center the dot on the line */
          .timeline-dot { left: 50%; top: 50%; transform: translate(-50%, -50%); }
        }
        
        .exp-card { padding: 1.5rem; }
        .exp-list li { display: flex; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.75rem; }

        /* Projects Section */
        .projects-header { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2.5rem; justify-content: space-between; align-items: flex-start; }
        @media (min-width: 768px) { .projects-header { flex-direction: row; align-items: flex-end; } }
        .projects-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
        @media (min-width: 1024px) { .projects-grid { grid-template-columns: 1fr 1fr; } }
        
        .project-card { overflow: hidden; border-radius: 1.5rem; }
        .project-img-box { height: 16rem; overflow: hidden; position: relative; }
        .project-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s; }
        .project-card:hover .project-img { transform: scale(1.1); }
        .project-content { padding: 2rem; }
        .project-actions { display: flex; gap: 1rem; margin-top: 2rem; }
        
        /* Achievements & Education */
        .achieve-bg { background: var(--surface-container-low); }
        .achieve-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
        @media (min-width: 768px) { .achieve-grid { grid-template-columns: 1fr 1fr; } }
        .ach-card { padding: 1.5rem; display: flex; gap: 1rem; margin-bottom: 1.5rem; }
        .ach-icon-box { width: 3rem; height: 3rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .ach-icon-box.primary { background: rgba(173,198,255,0.1); }
        .ach-icon-box.secondary { background: rgba(208,188,255,0.1); }
        .edu-card { padding: 2rem; border-left: 4px solid var(--secondary); }

        /* Contact Section */
        .contact-section { position: relative; overflow: hidden; }
        .contact-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; position: relative; z-index: 10; }
        @media (min-width: 768px) { .contact-grid { grid-template-columns: 1fr 1fr; } }
        .contact-bg-shape { position: absolute; bottom: -12rem; right: -12rem; width: 24rem; height: 24rem; background: rgba(173,198,255,0.05); filter: blur(120px); border-radius: 50%; }
        
        .contact-item { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
        .contact-icon { width: 3rem; height: 3rem; display: flex; align-items: center; justify-content: center; border-radius: 0.75rem; transition: color 0.3s;}
        .contact-item:hover .contact-icon { color: var(--primary); }
        
        .form-card { padding: 2rem; }
        .form-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; margin-bottom: 1.5rem; }
        @media (min-width: 768px) { .form-grid { grid-template-columns: 1fr 1fr; } }
        
        .form-group { margin-bottom: 1.5rem; }
        .form-label { display: block; font-size: 0.875rem; font-weight: 700; margin-bottom: 0.5rem; }
        .form-input { 
          width: 100%; background: var(--surface-container-high); border: 1px solid rgba(255,255,255,0.05); 
          border-radius: 0.75rem; padding: 0.75rem 1rem; color: var(--on-surface); font-family: inherit;
          transition: all 0.3s;
        }
        .form-input:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 2px rgba(173,198,255,0.2); }
        .submit-btn { width: 100%; padding: 1rem; font-size: 1rem; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;}

        /* Footer */
        .footer { background: var(--surface-container-lowest); border-top: 1px solid rgba(255,255,255,0.05); padding: 2rem 0; }
        .footer-content { display: flex; flex-direction: column; align-items: center; gap: 1rem; }
        @media (min-width: 768px) { .footer-content { flex-direction: row; justify-content: space-between; } }
        .footer-links { display: flex; gap: 1.5rem; }
        .footer-links a:hover { color: var(--primary); }
      `}</style>

      {/* TopNavBar */}
      <header className="header">
        <nav className="container header-content">
          <a href="#" className="font-headline-md text-primary" style={{ letterSpacing: '-0.05em', fontWeight: 800 }}>
            NB
          </a>
          
          {/* Desktop Links */}
          <div className="nav-links">
            <a href="#about" className="text-on-surface-variant font-body-md">About</a>
            <a href="#skills" className="text-on-surface-variant font-body-md">Skills</a>
            <a href="#experience" className="text-on-surface-variant font-body-md">Experience</a>
            <a href="#projects" className="text-on-surface-variant font-body-md">Projects</a>
            <a href="#contact" className="text-on-surface-variant font-body-md">Contact</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Hidden on mobile, visible on desktop */}
            <a 
              href="/naveen-resume.pdf" 
              download="Naveen_Kumar_Boppana_Resume.pdf" 
              className="header-btn font-body-md desktop-only-btn"
            >
              Resume
            </a>
            
            {/* Hamburger Button for Mobile */}
            <button 
              className="mobile-menu-btn" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-menu-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <a href="/naveen-resume.pdf" download="Naveen_Kumar_Boppana_Resume.pdf" className="header-btn" style={{ textAlign: 'center', marginTop: '1rem' }} onClick={() => setIsMobileMenuOpen(false)}>
            Resume
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero container">
          <div className="hero-grid">
            <div className="reveal">
              <span className="badge badge-outline-primary font-label-caps" style={{ marginBottom: '1rem' }}>
                Available for Hire • Bangalore
              </span>
              <h1 className="font-display-lg" style={{ marginBottom: '0.5rem' }}>
                Naveen Kumar <span className="gradient-text">Boppana</span>
              </h1>
              <p className="font-headline-md text-on-surface-variant" style={{ marginBottom: '1rem' }}>
                Full Stack Developer
              </p>
              <p className="font-body-lg text-on-surface-variant" style={{ maxWidth: '36rem' }}>
                Full Stack Developer with 2+ years of experience building scalable web and mobile applications using{' '}
                <span className="text-primary">React.js, Next.js, React Native, Django, Python, PostgreSQL, and CockroachDB.</span>
              </p>
              
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary font-body-md" style={{ padding: '0.875rem 2rem' }}>
                  View Projects
                </a>
                <a href="#contact" className="btn glass-card font-body-md" style={{ padding: '0.875rem 2rem' }}>
                  Contact Me
                </a>
              </div>
              
              <div className="social-links">
                <a href="#" className="social-icon glass-card">
                  <span className="material-symbols-outlined">link</span>
                </a>
                <a href="#" className="social-icon glass-card">
                  <span className="material-symbols-outlined">code</span>
                </a>
                <a href="#" className="social-icon glass-card">
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </div>
            </div>
            
            <div className="reveal delay-200">
              <div className="hero-image-box glass-card">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpfc9pzvmmUtMa9PHa8qpJ9auVVzOkgF7dQIIXBwwsWYC8dWz4UD693-PwSid2Q-mJbRi6jlrGLVU6mXCFpOf4lBQYQXAn398GjHA-2gQvqz09UiZrDE9BlPVESk2jeaOQRrbaPiMY0YJU8h5isx70q-qHA7F_HkgyyLBDNMOy3zZKi7WVDKuBMjVsTlOp7o08voZ1888pySqvEc-pp-6Y7R2ailY2y5Bjlv_4LoQQqmyvtyXQBU5WpLyUqYRddzVAyxrD_f-zREx2"
                  alt="Software Development Workspace"
                  className="hero-image"
                />
                <div className="hero-gradient-overlay"></div>
              </div>
              {/* Abstract Background Shapes */}
              <div className="abstract-shape-1"></div>
              <div className="abstract-shape-2"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding">
          <div className="container about-grid">
            <div className="reveal">
              <h2 className="font-headline-md text-primary">About Me</h2>
              <div className="about-line"></div>
            </div>
            <div className="reveal delay-100">
              <p className="font-body-lg text-on-surface-variant" style={{ marginBottom: '1.5rem' }}>
                I am a passionate Full Stack Developer with a strong foundation in building modern, scalable web and mobile applications. My expertise spans both frontend and backend development, allowing me to bridge the gap between user experience and system architecture.
              </p>
              <p className="font-body-lg text-on-surface-variant">
                Throughout my professional journey, I have specialized in performance optimization and creating robust systems that handle complex data flows. My technical philosophy centers on writing clean, maintainable code and leveraging the latest cloud-native technologies to deliver high-performance solutions.
              </p>
              
              <div className="about-stats-grid">
                <div className="glass-card" style={{ padding: '1rem' }}>
                  <h4 className="font-body-md text-primary" style={{ fontWeight: 700 }}>Architecture</h4>
                  <p className="text-on-surface-variant font-body-md" style={{ fontSize: '0.875rem' }}>Scalable Systems & Microservices</p>
                </div>
                <div className="glass-card" style={{ padding: '1rem' }}>
                  <h4 className="font-body-md text-primary" style={{ fontWeight: 700 }}>Performance</h4>
                  <p className="text-on-surface-variant font-body-md" style={{ fontSize: '0.875rem' }}>Optimization & Efficient APIs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-padding skills-bg">
          <div className="container">
            <div className="reveal" style={{ textAlign: 'center' }}>
              <h2 className="font-display-lg" style={{ fontSize: '40px', marginBottom: '0.5rem' }}>
                Technical <span className="gradient-text">Arsenal</span>
              </h2>
              <p className="text-on-surface-variant font-body-md" style={{ maxWidth: '42rem', margin: '0 auto' }}>
                Leveraging a modern tech stack to build future-ready applications.
              </p>
            </div>
            
            <div className="skills-grid">
              {/* Frontend */}
              <div className="glass-card skill-card reveal delay-100">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '36px', marginBottom: '1rem' }}>terminal</span>
                <h3 className="font-headline-md" style={{ fontSize: '20px', marginBottom: '1rem' }}>Frontend</h3>
                <div className="skill-tags">
                  <span className="badge badge-outline-primary">React.js</span>
                  <span className="badge badge-outline-primary">Next.js</span>
                  <span className="badge badge-outline-primary">React Native</span>
                  <span className="badge badge-outline-primary">TypeScript</span>
                  <span className="badge badge-outline-primary">Tailwind</span>
                </div>
              </div>
              
              {/* Backend */}
              <div className="glass-card skill-card reveal delay-200">
                <span className="material-symbols-outlined text-secondary" style={{ fontSize: '36px', marginBottom: '1rem' }}>settings_ethernet</span>
                <h3 className="font-headline-md" style={{ fontSize: '20px', marginBottom: '1rem' }}>Backend</h3>
                <div className="skill-tags">
                  <span className="badge badge-outline-secondary">Django</span>
                  <span className="badge badge-outline-secondary">DRF</span>
                  <span className="badge badge-outline-secondary">Python</span>
                  <span className="badge badge-outline-secondary">JWT</span>
                </div>
              </div>
              
              {/* Database */}
              <div className="glass-card skill-card reveal delay-300">
                <span className="material-symbols-outlined text-tertiary" style={{ fontSize: '36px', marginBottom: '1rem' }}>database</span>
                <h3 className="font-headline-md" style={{ fontSize: '20px', marginBottom: '1rem' }}>Database</h3>
                <div className="skill-tags">
                  <span className="badge badge-outline-tertiary">PostgreSQL</span>
                  <span className="badge badge-outline-tertiary">CockroachDB</span>
                  <span className="badge badge-outline-tertiary">Redis</span>
                </div>
              </div>
              
              {/* Tools */}
              <div className="glass-card skill-card reveal delay-400">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '36px', marginBottom: '1rem' }}>architecture</span>
                <h3 className="font-headline-md" style={{ fontSize: '20px', marginBottom: '1rem' }}>DevOps</h3>
                <div className="skill-tags">
                  <span className="badge badge-outline-primary">Docker</span>
                  <span className="badge badge-outline-primary">CI/CD</span>
                  <span className="badge badge-outline-primary">Git</span>
                  <span className="badge badge-outline-primary">Vercel</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section-padding">
          <div className="container">
            <h2 className="font-display-lg reveal" style={{ textAlign: 'center', fontSize: '40px', marginBottom: '2rem' }}>
              Work <span className="gradient-text">Journey</span>
            </h2>
            
            <div className="timeline">
              {/* Present Role */}
              <div className="timeline-item reveal">
                <div className="timeline-side-content">
                  <span className="text-primary font-code" style={{ fontSize: '0.875rem' }}>Dec 2024 - Present</span>
                  <h3 className="font-headline-md" style={{ fontSize: '24px', marginTop: '0.5rem' }}>Software Engineer</h3>
                  <p className="text-on-surface-variant font-body-md" style={{ fontWeight: 700 }}>Gowdanar Technologies</p>
                </div>
                <div className="timeline-dot primary"></div>
                <div className="timeline-side-content">
                  <div className="glass-card exp-card">
                    <ul className="text-on-surface-variant font-body-md exp-list">
                      <li>
                        <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', marginTop: '2px' }}>chevron_right</span>
                        Building scalable web applications using Next.js and Django.
                      </li>
                      <li>
                        <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', marginTop: '2px' }}>chevron_right</span>
                        Optimizing database performance with CockroachDB.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Internship */}
              <div className="timeline-item reverse reveal">
                <div className="timeline-side-content">
                  <span className="text-secondary font-code" style={{ fontSize: '0.875rem' }}>Jun 2024 - Dec 2024</span>
                  <h3 className="font-headline-md" style={{ fontSize: '24px', marginTop: '0.5rem' }}>Project Intern</h3>
                  <p className="text-on-surface-variant font-body-md" style={{ fontWeight: 700 }}>Gowdanar Technologies</p>
                </div>
                <div className="timeline-dot secondary"></div>
                <div className="timeline-side-content">
                  <div className="glass-card exp-card">
                    <ul className="text-on-surface-variant font-body-md exp-list">
                      <li>
                        <span className="material-symbols-outlined text-secondary" style={{ fontSize: '18px', marginTop: '2px' }}>chevron_right</span>
                        Assisted in developing frontend modules using React.js.
                      </li>
                      <li>
                        <span className="material-symbols-outlined text-secondary" style={{ fontSize: '18px', marginTop: '2px' }}>chevron_right</span>
                        Supported backend API development with Django Rest Framework.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding">
          <div className="container">
            <div className="projects-header reveal">
              <div>
                <h2 className="font-display-lg" style={{ fontSize: '40px', lineHeight: 1.1 }}>
                  Featured <span className="gradient-text">Work</span>
                </h2>
                <p className="text-on-surface-variant font-body-md" style={{ marginTop: '1rem' }}>
                  A selection of my most challenging engineering projects.
                </p>
              </div>
              <a href="#" className="text-primary font-body-md" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
                View All Projects <span className="material-symbols-outlined">trending_flat</span>
              </a>
            </div>
            
            <div className="projects-grid">
              {/* Project 1 */}
              <div className="glass-card project-card reveal">
                <div className="project-img-box">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2-eY9HYBJNAafQYmgfUrCa_VpUa4UWPJiOkLzkvruvEjDwfa8CA8acdRWEoXS6bqXeE_17V3MwINPLMaXdaYHjzS_3eXXNRIJGtznWlhaPc5zqZeZT4NiFTGS7lzt4zOrvB7XgUp0JngDUozqlNfLlWIEWBy2_TifwNRPtokwJXhJQfVUeIxwQhYrishd3cqfcDVvVUy2qFd_eLVZcqhbgktE55P10WGjk4UnstJJHDOrXu76UxtX9ijIHl3-YUrE8kSZNlVZbHGQ"
                    alt="Dashboard Interface"
                    className="project-img"
                  />
                  <div className="hero-gradient-overlay"></div>
                </div>
                <div className="project-content">
                  <h3 className="font-headline-md" style={{ fontSize: '24px', marginBottom: '0.5rem' }}>Compliance Management Dashboard</h3>
                  <p className="text-on-surface-variant font-body-md" style={{ marginBottom: '1.5rem' }}>
                    A high-performance enterprise dashboard for monitoring regulatory compliance across distributed systems.
                  </p>
                  <div className="skill-tags" style={{ marginBottom: '2rem' }}>
                    <span className="badge badge-outline-primary font-code">React.js</span>
                    <span className="badge badge-outline-primary font-code">Next.js</span>
                    <span className="badge badge-outline-primary font-code">Django</span>
                  </div>
                  <div className="project-actions">
                    <a href="#" className="btn btn-primary font-body-md" style={{ flex: 1 }}>Live Demo</a>
                    <a href="#" className="btn glass-card"><span className="material-symbols-outlined">code</span></a>
                  </div>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="glass-card project-card reveal delay-100">
                <div className="project-img-box">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAah0IjKhwlICT-LdaRL_JCViCK5aHA7luKpXpc2oi_WRdZ7JpM0RNOHb7fmF-Zv2mYx3gGPX5OitQIWaADAMX1TC6HClsfs32drOM4MaCyPsu6FZtsaMPN5x-G4SFtp3yCFTeIxnyrorNvt-x_z6qICFW8q_q3OG7efEzLYbIFlxss879ygTGPdMukLaV10wjbAueCg9u2cXNmI0mHj4j8uw2MRx5WuHyW3KuMAavcZ0RUUD2ytprL1GTXOosjuh5S2oiEAu09zv4P"
                    alt="System Audit Logs"
                    className="project-img"
                  />
                  <div className="hero-gradient-overlay"></div>
                </div>
                <div className="project-content">
                  <h3 className="font-headline-md" style={{ fontSize: '24px', marginBottom: '0.5rem' }}>Audit Trail Reporting System</h3>
                  <p className="text-on-surface-variant font-body-md" style={{ marginBottom: '1.5rem' }}>
                    Robust logging and reporting system for tracking sensitive system modifications with JWT security.
                  </p>
                  <div className="skill-tags" style={{ marginBottom: '2rem' }}>
                    <span className="badge badge-outline-secondary font-code">Next.js</span>
                    <span className="badge badge-outline-secondary font-code">DRF</span>
                    <span className="badge badge-outline-secondary font-code">JWT</span>
                  </div>
                  <div className="project-actions">
                    <a href="#" className="btn btn-primary font-body-md" style={{ flex: 1 }}>Live Demo</a>
                    <a href="#" className="btn glass-card"><span className="material-symbols-outlined">code</span></a>
                  </div>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className="glass-card project-card reveal">
                <div className="project-img-box">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl7Z1g0KSLhOCPjt3tvgmuEhECe4OBBMhfo0bkz0vZEkX_9oZp4881lIbylANLxh8BTmne7myeaAJB_5DGC5T5CnMleh1zzkkzcYGdqYAF8PWSlbcpL_282X104O47_vqJtZM1wMRyEcjVfn2WSavyh6qFjx5Tkxv6RUp9URPZHNW3uoRj-gLPqfO-q0Iijucffk2X_7-wjBPsXIhLO_GI7XJCEVxRIInDA_uELgCvUgcTdwxxzlkwwHjZ9OArk7x4Ad7Ay2sm9uWe"
                    alt="Mobile App Interface"
                    className="project-img"
                  />
                  <div className="hero-gradient-overlay"></div>
                </div>
                <div className="project-content">
                  <h3 className="font-headline-md" style={{ fontSize: '24px', marginBottom: '0.5rem' }}>Mobile Task Management App</h3>
                  <p className="text-on-surface-variant font-body-md" style={{ marginBottom: '1.5rem' }}>
                    Cross-platform mobile application featuring real-time task synchronization and offline support.
                  </p>
                  <div className="skill-tags" style={{ marginBottom: '2rem' }}>
                    <span className="badge badge-outline-tertiary font-code">React Native</span>
                    <span className="badge badge-outline-tertiary font-code">TypeScript</span>
                  </div>
                  <div className="project-actions">
                    <a href="#" className="btn btn-primary font-body-md" style={{ flex: 1 }}>App Store</a>
                    <a href="#" className="btn glass-card"><span className="material-symbols-outlined">code</span></a>
                  </div>
                </div>
              </div>
              
              {/* Project 4 */}
              <div className="glass-card project-card reveal delay-100">
                <div className="project-img-box">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ZwHVoFBCFgSQ-7NDG_VAVsS2gyA_0TI4MXBKzz5cQ55aNgMThhe83joCTQLl9e0uhZEot4jWte_xdn5C0vZr38-Bk2N6Rmm7IRQ2ezAFH5uOgSkvVEOcD_-moRkY0XG3x6pBJdoEvFP9Q9DCFGfSErkCIlbzsLZwSyO3ZyACyRyCChKcCoQtYqdDFrUldJXTwH_jCpBGR_9hgo8Fpm-AyFc0mJL7x2m23lpgfieVLwOHds4RzVWC3uSHIA-3_vsiiRNltrhOqVlF"
                    alt="Authentication Screen"
                    className="project-img"
                  />
                  <div className="hero-gradient-overlay"></div>
                </div>
                <div className="project-content">
                  <h3 className="font-headline-md" style={{ fontSize: '24px', marginBottom: '0.5rem' }}>RBAC Authentication System</h3>
                  <p className="text-on-surface-variant font-body-md" style={{ marginBottom: '1.5rem' }}>
                    Secure Role-Based Access Control system for complex organizational hierarchies with multi-layer security.
                  </p>
                  <div className="skill-tags" style={{ marginBottom: '2rem' }}>
                    <span className="badge badge-outline-primary font-code">Django</span>
                    <span className="badge badge-outline-primary font-code">React.js</span>
                    <span className="badge badge-outline-primary font-code">JWT</span>
                  </div>
                  <div className="project-actions">
                    <a href="#" className="btn btn-primary font-body-md" style={{ flex: 1 }}>Live Demo</a>
                    <a href="#" className="btn glass-card"><span className="material-symbols-outlined">code</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements & Education Section */}
        <section className="section-padding achieve-bg">
          <div className="container achieve-grid">
            <div className="reveal">
              <h2 className="font-headline-md text-primary" style={{ marginBottom: '1.5rem' }}>Achievements</h2>
              <div>
                <div className="glass-card ach-card">
                  <div className="ach-icon-box primary">
                    <span className="material-symbols-outlined text-primary">military_tech</span>
                  </div>
                  <div>
                    <h4 className="font-body-lg" style={{ fontWeight: 700 }}>Accelerated Career Growth</h4>
                    <p className="text-on-surface-variant font-body-md" style={{ marginTop: '0.25rem' }}>Received Full-Time offer within just 7 months of internship due to exceptional performance.</p>
                  </div>
                </div>
                <div className="glass-card ach-card">
                  <div className="ach-icon-box secondary">
                    <span className="material-symbols-outlined text-secondary">extension</span>
                  </div>
                  <div>
                    <h4 className="font-body-lg" style={{ fontWeight: 700 }}>System Optimization</h4>
                    <p className="text-on-surface-variant font-body-md" style={{ marginTop: '0.25rem' }}>Developed and implemented reusable architecture modules that improved overall team delivery speed.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reveal delay-200">
              <h2 className="font-headline-md text-secondary" style={{ marginBottom: '1.5rem' }}>Education</h2>
              <div className="glass-card edu-card">
                <span className="text-secondary font-code" style={{ fontSize: '0.875rem' }}>2018 - 2022</span>
                <h3 className="font-headline-md" style={{ fontSize: '24px', marginTop: '0.5rem' }}>B.Tech in Computer Science</h3>
                <p className="text-on-surface-variant font-body-md" style={{ fontWeight: 700, marginBottom: '1rem' }}>Aditya Engineering College</p>
                <p className="text-on-surface-variant font-body-md">Graduated with a strong focus on software engineering principles, algorithms, and data structures.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding contact-section">
          <div className="contact-bg-shape"></div>
          <div className="container contact-grid">
            <div className="reveal">
              <h2 className="font-display-lg" style={{ fontSize: '40px', lineHeight: 1.1, marginBottom: '1rem' }}>
                Let's build something <span className="gradient-text">exceptional</span>
              </h2>
              <p className="text-on-surface-variant font-body-lg" style={{ marginBottom: '2rem', maxWidth: '28rem' }}>
                Currently looking for new opportunities. My inbox is always open.
              </p>
              
              <div>
                <div className="contact-item group">
                  <div className="contact-icon glass-card">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-on-surface-variant">Email</p>
                    <p className="font-body-md" style={{ fontWeight: 700 }}>naveenboppana159@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item group">
                  <div className="contact-icon glass-card">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-on-surface-variant">Phone</p>
                    <p className="font-body-md" style={{ fontWeight: 700 }}>+91 9963069944</p>
                  </div>
                </div>
                <div className="contact-item group">
                  <div className="contact-icon glass-card">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-on-surface-variant">Location</p>
                    <p className="font-body-md" style={{ fontWeight: 700 }}>Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reveal delay-200">
              <form className="glass-card form-card" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-input" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-input" placeholder="Your message here..." rows={4} required></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`btn submit-btn ${formState.status === 'success' ? 'btn-success pointer-events-none' : 'btn-primary'} ${formState.status === 'submitting' ? 'pointer-events-none' : ''}`}
                  style={{ opacity: formState.status === 'submitting' ? 0.7 : 1 }}
                >
                  {formState.buttonText} 
                  {formState.status !== 'success' && <span className="material-symbols-outlined">send</span>}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="font-headline-md" style={{ fontWeight: 800 }}>NB</div>
          <p className="font-body-md text-on-surface-variant">© 2024 Naveen Kumar Boppana. All rights reserved.</p>
          <div className="footer-links font-body-md text-on-surface-variant">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}