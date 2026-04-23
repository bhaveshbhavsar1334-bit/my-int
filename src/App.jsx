import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Search, 
  Users, 
  GraduationCap, 
  Award, 
  ChevronRight,
  BookOpen,
  MapPin,
  Mail,
  Phone,
  Menu,
  X,
  Send,
  CheckCircle,
  ExternalLink,
  User,
  Lock
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

// Removed unused staggerContainer

const heroImage = "/hero_bg.jpg"; 

function App() {
  const [activeNewsTab, setActiveNewsTab] = useState('All news');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Admission', href: '#admission' },
    { label: 'Courses', href: '#courses' },
    { label: 'Sports', href: '#sports' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'News', href: '#news' },
    { label: 'Contact', href: '#contact-section' },
  ];

  return (
    <div className="app geometric-pattern">

      {/* ── Premium Navigation ── */}
      <nav className={`premium-nav${scrolled ? ' nav-scrolled' : ''}`}>
        <div className="container nav-inner">
          {/* Logo */}
          <a href="#about" className="nav-brand">
            <img src="/logo.png" alt="IIUD Logo" className="nav-logo-img" />
            <span className="nav-logo-text">International Islamic University Dubai</span>
          </a>

          {/* Desktop Links */}
          <ul className="nav-links-desktop">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="nav-link-item">{label}</a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="nav-actions">
            <button className="nav-search-btn" onClick={() => setLoginOpen(true)} aria-label="Student Login" title="Student Portal">
              <User size={18} />
            </button>
            <a href="#admission" className="nav-cta-btn">Apply Now</a>
            <button
              className="nav-hamburger"
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="mobile-drawer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map(({ label, href }) => (
                <a key={label} href={href} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                  {label}
                </a>
              ))}
              <a href="#admission" className="nav-cta-btn mobile-cta" onClick={() => setMobileOpen(false)}>Apply Now</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="about" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div {...fadeInUp} className="hero-content">
            <h1 className="hero-title">International Islamic University Dubai.</h1>
            <div className="hero-nav-buttons">
              <a href="#admission" className="hero-btn active"><Users size={18} /> Admission</a>
              <a href="#courses" className="hero-btn"><Search size={18} /> Courses</a>
              <a href="#faculty" className="hero-btn"><GraduationCap size={18} /> Faculty</a>
              <a href="#about" className="hero-btn"><BookOpen size={18} /> Schools</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Stats */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our Success 📖 stories</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-value">10K+</span>
                <div className="stat-icon"><Users size={20} /></div>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)', fontWeight: '500' }}>Regular students</p>
            </div>
            <div className="stat-card" style={{ borderLeft: '4px solid var(--primary)', padding: '20px' }}>
               <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: '#eee', borderRadius: '4px', overflow: 'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200" alt="Student" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: '700' }}>Ahmed Ali</p>
                    <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>MBA Graduate</p>
                  </div>
               </div>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-value">48K+</span>
                <div className="stat-icon"><Award size={20} /></div>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)', fontWeight: '500' }}>Active Alumni</p>
            </div>
            <div className="stat-card" style={{ backgroundColor: '#00695C', color: 'white' }}>
              <div className="stat-header">
                <span className="stat-value" style={{ color: 'white' }}>98%</span>
                <div style={{ color: '#80CBC4' }}><Users size={20} /></div>
              </div>
              <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section id="news" style={{ backgroundColor: '#1A1A1A', color: 'white', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '3rem', color: 'white' }}>• Stay touch with updates •</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '60px' }} className="news-tabs">
            {['All news', 'Admissions', 'Science'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveNewsTab(tab)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: activeNewsTab === tab ? 'var(--primary)' : 'rgba(255,255,255,0.6)',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  borderBottom: activeNewsTab === tab ? '2px solid var(--primary)' : 'none',
                  paddingBottom: '8px'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="news-content-grid">
             <div style={{ display: 'grid', gap: '20px' }}>
                {[
                  { category: 'Admissions', tag: 'ADMISSIONS', title: 'Spring 2025 Application Window is Now Open' },
                  { category: 'Science', tag: 'RESEARCH', title: 'IIUD Scientists Discover New Desalination Method' },
                  { category: 'All news', tag: 'EVENT', title: 'Global Education Summit 2024 hosted at IIUD Dubai' }
                ]
                .filter(item => activeNewsTab === 'All news' || item.category === activeNewsTab)
                .map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    style={{ padding: '24px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}
                  >
                     <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '700' }}>{item.tag}</span>
                     <h3 style={{ color: 'white', marginTop: '8px' }}>{item.title}</h3>
                  </motion.div>
                ))}
             </div>
             <div style={{ position: 'relative' }}>
                <img src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=800" alt="News" style={{ width: '100%', borderRadius: '8px' }} />
                <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', padding: '24px', backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: '8px' }}>
                  <p style={{ fontWeight: '600' }}>Global Education Summit 2024 hosted at IIUD Dubai</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section id="admission" className="admission-section">
        {/* Decorative blobs */}
        <div className="admission-blob admission-blob-1" />
        <div className="admission-blob admission-blob-2" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Header */}
          <div className="admission-header">
            <span className="admission-eyebrow">JOIN US TODAY</span>
            <h2 className="admission-title">Start Your Journey at IIUD</h2>
            <p className="admission-subtitle">
              Everything you need to take the next step — from applying online to understanding your financial options.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="admission-cards-grid">
            {[
              { icon: <GraduationCap size={28} />, title: 'Apply Online', desc: 'Submit your application quickly through our streamlined online portal.' },
              { icon: <Award size={28} />,         title: 'Student Finance', desc: 'Explore scholarships, grants, and flexible payment plans available.' },
              { icon: <Users size={28} />,         title: 'International Students', desc: 'Guidance on visas, housing, and settling into Dubai campus life.' },
              { icon: <BookOpen size={28} />,      title: 'Graduate Admissions', desc: 'Postgraduate programs with world-class faculty and research facilities.' },
              { icon: <ChevronRight size={28} />,  title: 'How to Apply', desc: 'Step-by-step walkthrough of our admission process and requirements.' },
              { icon: <MapPin size={28} />,        title: 'Visit our Campus', desc: 'Book an open day tour and experience IIUD life for yourself.' },
              { icon: <Mail size={28} />,          title: 'Key Dates & Deadlines', desc: 'Stay on track with all important dates for the upcoming intake.' },
              { icon: <Phone size={28} />,         title: 'Contact Admissions', desc: 'Speak directly with our admissions team — we\'re happy to help.' },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href="#contact-section"
                className="admission-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
              >
                <div className="admission-card-icon">{item.icon}</div>
                <h3 className="admission-card-title">{item.title}</h3>
                <p className="admission-card-desc">{item.desc}</p>
                <span className="admission-card-arrow">→</span>
              </motion.a>
            ))}
          </div>

          {/* CTA Row */}
          <div className="admission-cta-row">
            <a href="#contact-section" className="admission-cta-primary">Apply Now</a>
            <a href="#courses" className="admission-cta-secondary">Browse Courses</a>
          </div>
        </div>
      </section>

      {/* Find your way Section */}
      <section id="faculty" style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }} className="section-header">
             <h2 style={{ fontSize: '3rem' }}>Find your way</h2>
             <div style={{ display: 'flex', gap: '8px' }}>
                <a href="#courses" style={{ backgroundColor: 'var(--primary)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>Discover Courses</a>
                <button style={{ background: 'none', border: '1px solid var(--outline-variant)', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>Department</button>
             </div>
          </div>
          <div className="profile-grid">
            {[
              { name: 'Dr. Fatima Zahra', role: 'Dean of Science', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300' },
              { name: 'Prof. Omar Khalid', role: 'Head of MBA', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300' },
              { name: 'Dr. Sarah Smith', role: 'Admissions Lead', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=300' },
              { name: 'Engr. Hassan Noor', role: 'Research Hub', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300' }
            ].map((profile, idx) => (
              <motion.div key={idx} {...fadeInUp} className="profile-card">
                <div className="profile-image-container">
                  <img src={profile.img} alt={profile.name} className="profile-image" />
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{profile.name}</h4>
                <p style={{ fontSize: '0.875rem', opacity: 0.6 }}>{profile.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports & Recreation Section */}
      <section id="sports" style={{ padding: '100px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }} className="section-header">
             <div>
                <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.875rem', letterSpacing: '2px' }}>STUDENT LIFE</span>
                <h2 style={{ fontSize: '3rem', marginTop: '10px' }}>Sports & Recreation</h2>
             </div>
             <button style={{ backgroundColor: 'transparent', border: '1px solid var(--outline-variant)', padding: '12px 24px', borderRadius: '4px', fontWeight: '600' }}>View All Facilities</button>
          </div>
          <div className="sports-grid">
            {[
              { name: 'Championship Football', img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018' },
              { name: 'Elite Basketball', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc' },
              { name: 'Cricket League', img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da' },
              { name: 'Aquatics Center', img: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487' }
            ].map((sport, idx) => (
              <motion.div key={idx} {...fadeInUp} className="sport-card">
                <div className="sport-image-container">
                  <img src={`${sport.img}?auto=format&fit=crop&q=80&w=600`} alt={sport.name} className="sport-image" />
                  <div className="sport-overlay">
                     <h4 style={{ color: 'white', fontSize: '1.25rem' }}>{sport.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Search Section */}
      <section id="courses" style={{ padding: '100px 0', backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Search for a course</h2>
            <div style={{ display: 'flex', gap: '0' }}>
               <input type="text" placeholder="Search by keyword..." style={{ flex: 1, padding: '16px 24px', border: '1px solid var(--outline-variant)', borderRadius: '4px 0 0 4px', fontSize: '1rem' }} />
               <button style={{ backgroundColor: 'var(--primary)', color: 'white', border: 'none', padding: '0 32px', borderRadius: '0 4px 4px 0', fontWeight: '700', cursor: 'pointer' }}>SEARCH</button>
            </div>
          </div>
          <div className="course-grid">
            {[
              { title: 'Data Science and AI', img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=500' },
              { title: 'Global Finance & MBA', img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=500' },
              { title: 'Civil and Robotics Engineering', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=500' }
            ].map((course, idx) => (
              <div key={idx} className="course-card">
                <img src={course.img} alt={course.title} className="course-image" />
                <div className="course-content">
                  <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '700' }}>UNDERGRADUATE</span>
                  <h3 style={{ margin: '8px 0 16px' }}>{course.title}</h3>
                  <a href="#admission" style={{ color: 'var(--secondary)', fontWeight: '600', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Apply to Program <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More about IIUD Section */}
      <section className="more-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay" style={{ background: 'rgba(0,0,0,0.4)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
           <motion.div {...fadeInUp} className="more-card">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>More about IIUD</h2>
              <p style={{ color: 'var(--on-surface-variant)', marginBottom: '32px' }}>
                Join a legacy of excellence in the heart of Dubai. Our university is more than just an academic institution—it's a community where you'll find your purpose.
              </p>
              <div style={{ display: 'grid', gap: '16px' }}>
                {[
                  { label: 'Admission', link: '#admission' },
                  { label: 'Student Life', link: '#faculty' },
                  { label: 'International Students', link: '#admission' },
                  { label: 'Financial Aid', link: '#admission' }
                ].map(item => (
                  <a key={item.label} href={item.link} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid var(--outline-variant)', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
                    <span style={{ fontWeight: '500' }}>{item.label}</span>
                    <ChevronRight size={18} color="var(--primary)" />
                  </a>
                ))}
              </div>
           </motion.div>
        </div>
      </section>

      {/* Graduates Section */}
      <section id="graduates" style={{ padding: '80px 0', textAlign: 'center', backgroundColor: '#fcfcfc' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Introducing the Graduates</h2>
          <p style={{ opacity: 0.6, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>Meet the cohort of 2024, shaping the world with innovation and integrity.</p>
          <div className="graduates-grid-compact">
             {[
               "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
               "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
               "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
               "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
               "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
               "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
               "https://images.unsplash.com/photo-1521119989659-a83eee488004",
               "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
               "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
               "https://images.unsplash.com/photo-1552058544-f2b08422138a",
               "https://images.unsplash.com/photo-1580489944761-15a19d654956",
               "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
               "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee",
               "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
               "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
               "https://images.unsplash.com/photo-1517841905240-472988babdf9"
             ].map((img, i) => (
                <div key={i} className="graduate-mini-card">
                   <img src={`${img}?auto=format&fit=crop&q=80&w=200`} alt="Graduate" />
                </div>
             ))}
          </div>
          <a href="#contacts" style={{ display: 'inline-block', backgroundColor: 'var(--primary)', color: 'white', padding: '14px 32px', border: 'none', borderRadius: '4px', fontWeight: '700', textDecoration: 'none', marginTop: '30px', fontSize: '0.9rem' }}>MEET THE GRADUATES</a>
        </div>
      </section>

      {/* ── Placement & Partners Section ── */}
      <section id="placement" className="placement-section">
        <div className="container">
          <div className="placement-header">
            <span className="placement-eyebrow">CAREER OUTCOMES</span>
            <h2 className="placement-title">Our Graduates Work At</h2>
            <p className="placement-subtitle">
              IIUD partners with global industry leaders to provide world-class placement opportunities, internships, and dynamic career paths for our students.
            </p>
          </div>
        </div>

        <div className="placement-marquee">
          <div className="placement-track">
            {/* Duplicated for infinite scroll effect */}
            {[
              { name: 'Google',      url: 'https://careers.google.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
              { name: 'Microsoft',   url: 'https://careers.microsoft.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
              { name: 'Amazon',      url: 'https://www.amazon.jobs', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
              { name: 'Apple',       url: 'https://www.apple.com/careers', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
              { name: 'Jio',         url: 'https://careers.jio.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Reliance_Jio_Logo_%28October_2015%29.svg' },
              
              { name: 'Google',      url: 'https://careers.google.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
              { name: 'Microsoft',   url: 'https://careers.microsoft.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
              { name: 'Amazon',      url: 'https://www.amazon.jobs', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
              { name: 'Apple',       url: 'https://www.apple.com/careers', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
              { name: 'Jio',         url: 'https://careers.jio.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Reliance_Jio_Logo_%28October_2015%29.svg' }
            ].map((company, idx) => (
              <a 
                key={idx} 
                href={company.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="placement-card"
                title={`Visit ${company.name} Careers`}
              >
                {/* Logo with text fallback for robust display */}
                <div className="placement-logo-box">
                  <img src={company.logo} alt={company.name} className="placement-logo-img" />
                </div>
                <div className="placement-hover-overlay">
                  <span>Visit</span>
                  <ExternalLink size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form Section ── */}
      <section id="contact-section" className="contact-section">
        <div className="container">
          <motion.div {...fadeInUp} className="contact-wrapper">
            {/* Left Info */}
            <div className="contact-info">
              <span className="contact-label">GET IN TOUCH</span>
              <h2 className="contact-heading">We'd love to<br/>hear from you</h2>
              <p className="contact-subtext">
                Whether you have questions about admissions, programs, or campus life — our team is here to help you every step of the way.
              </p>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon-box"><Mail size={20} /></div>
                  <div>
                    <p className="contact-detail-label">Email Us</p>
                    <p className="contact-detail-value">info@iiud.ac.ae</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-icon-box"><Phone size={20} /></div>
                  <div>
                    <p className="contact-detail-label">Call Us</p>
                    <p className="contact-detail-value">+971 4 123 4567</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-icon-box"><MapPin size={20} /></div>
                  <div>
                    <p className="contact-detail-label">Visit Us</p>
                    <p className="contact-detail-value">123 University Ave, Dubai Knowledge Park</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="contact-form-card">
              <AnimatePresence mode="wait">
                {formSent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="form-success"
                  >
                    <CheckCircle size={52} color="var(--primary)" />
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleFormSubmit}
                    className="contact-form"
                  >
                    <h3 className="form-title">Send a Message</h3>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="cf-name">Full Name</label>
                        <input
                          id="cf-name" type="text" placeholder="Ahmed Ali" required
                          value={formState.name}
                          onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="cf-email">Email Address</label>
                        <input
                          id="cf-email" type="email" placeholder="ahmed@example.com" required
                          value={formState.email}
                          onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="cf-subject">Subject</label>
                      <input
                        id="cf-subject" type="text" placeholder="Admission Inquiry" required
                        value={formState.subject}
                        onChange={e => setFormState(s => ({ ...s, subject: e.target.value }))}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cf-message">Message</label>
                      <textarea
                        id="cf-message" rows={5} placeholder="Tell us how we can help..." required
                        value={formState.message}
                        onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                      />
                    </div>
                    <button type="submit" className="form-submit-btn">
                      <Send size={16} /> Send Message
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
             <img src="/logo.png" alt="IIUD Logo" style={{ width: '60px', height: '60px', objectFit: 'contain', borderRadius: '4px' }} />
             <h3 style={{ color: 'white', fontFamily: 'var(--font-headline)', fontSize: '1.5rem' }}>International Islamic University Dubai</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px', paddingBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.1)' }} className="footer-top">
             <div>
                <p style={{ fontSize: '0.875rem', opacity: 0.6 }}>Our Address</p>
                <p style={{ fontWeight: '600' }}>123 University Ave, Dubai Knowledge Park</p>
             </div>
             <div>
                <button style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '4px', fontWeight: '700', cursor: 'pointer' }}>SUBSCRIBE NOW</button>
             </div>
          </div>
          <div className="footer-grid">
            <div>
               <h4 style={{ color: 'white', marginBottom: '24px' }}>Admission</h4>
               <a href="#" className="footer-link">Undergraduate</a>
               <a href="#" className="footer-link">Postgraduate</a>
               <a href="#" className="footer-link">Financial Aid</a>
               <a href="#" className="footer-link">Open Days</a>
            </div>
            <div>
               <h4 style={{ color: 'white', marginBottom: '24px' }}>Academic</h4>
               <a href="#" className="footer-link">Schools</a>
               <a href="#" className="footer-link">Faculties</a>
               <a href="#" className="footer-link">Research Hub</a>
               <a href="#" className="footer-link">Library</a>
            </div>
            <div>
               <h4 style={{ color: 'white', marginBottom: '24px' }}>University</h4>
               <a href="#" className="footer-link">About IIUD</a>
               <a href="#" className="footer-link">Leadership</a>
               <a href="#" className="footer-link">Careers</a>
               <a href="#" className="footer-link">Governance</a>
            </div>
            <div>
               <h4 style={{ color: 'white', marginBottom: '24px' }}>Contact</h4>
               <div className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={14} /> info@iiud.ac.ae</div>
               <div className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={14} /> +971 4 123 4567</div>
               <div className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={14} /> Dubai, UAE</div>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Student Login Modal ── */}
      <AnimatePresence>
        {loginOpen && (
          <div className="login-modal-overlay">
            <motion.div
              className="login-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLoginOpen(false)}
            />
            <motion.div
              className="login-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button className="login-close-btn" onClick={() => setLoginOpen(false)}>
                <X size={24} />
              </button>
              
              <div className="login-modal-header">
                <div className="login-modal-icon">
                  <User size={32} color="var(--primary)" />
                </div>
                <h3>Student Portal</h3>
                <p>Welcome back! Please login to your account.</p>
              </div>

              <form className="login-form" onSubmit={(e) => { e.preventDefault(); alert("Login functionality would execute here."); setLoginOpen(false); }}>
                <div className="login-form-group">
                  <label htmlFor="student-id">Student ID or Email</label>
                  <div className="login-input-wrapper">
                    <User size={18} className="login-input-icon" />
                    <input type="text" id="student-id" placeholder="Enter your ID or Email" required />
                  </div>
                </div>
                
                <div className="login-form-group">
                  <label htmlFor="student-pwd">Password</label>
                  <div className="login-input-wrapper">
                    <Lock size={18} className="login-input-icon" />
                    <input type="password" id="student-pwd" placeholder="Enter your password" required />
                  </div>
                </div>

                <div className="login-form-options">
                  <label className="login-checkbox">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="login-forgot">Forgot Password?</a>
                </div>

                <button type="submit" className="login-submit-btn">
                  Login to Portal <ArrowRight size={16} />
                </button>
              </form>
              
              <div className="login-modal-footer">
                <p>Need help accessing your account? <a href="#contact-section" onClick={() => setLoginOpen(false)}>Contact Support</a></p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;
