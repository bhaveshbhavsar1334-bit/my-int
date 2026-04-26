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
  Lock,
  MessageCircle
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

// Removed unused staggerContainer

const heroImage = `${import.meta.env.BASE_URL}hero_indian.png`;

function App() {
  const [activeNewsTab, setActiveNewsTab] = useState('All news');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [courseSearch, setCourseSearch] = useState('');

  const coursesData = [
    { 
      title: 'B.Tech in Computer Science', 
      category: 'ENGINEERING', 
      duration: '4 Years',
      desc: 'Expertise in software development, AI, and systems architecture.',
      img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=500' 
    },
    { 
      title: 'B.Pharm (Pharmacy)', 
      category: 'MEDICAL', 
      duration: '4 Years',
      desc: 'Advanced pharmaceutical sciences and clinical practice.',
      img: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      title: 'BCA (Computer Applications)', 
      category: 'IT', 
      duration: '3 Years',
      desc: 'Comprehensive knowledge of computer applications and logic.',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=500' 
    },
    { 
      title: 'BBA (Business Administration)', 
      category: 'MANAGEMENT', 
      duration: '3 Years',
      desc: 'Developing future business leaders and entrepreneurs.',
      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      title: 'Cybersecurity & Ethical Hacking', 
      category: 'IT', 
      duration: '6 Months',
      desc: 'Master the art of defending digital infrastructures.',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=500' 
    },
    { 
      title: 'Data Science and AI', 
      category: 'ENGINEERING', 
      duration: '4 Years',
      desc: 'Unlock insights from big data with machine learning.',
      img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=500' 
    }
  ];

  const filteredCourses = coursesData.filter(course => 
    course.title.toLowerCase().includes(courseSearch.toLowerCase()) ||
    course.category.toLowerCase().includes(courseSearch.toLowerCase())
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Use environment variable for the Google Apps Script Web App URL, with fallback
    const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL || "https://script.google.com/macros/s/AKfycbwdESCCC0bVArcibNKVhoSjOz6OsCuJS3-6bCXHZdywcc1wgrLZ125bExzLPq9vSziG1A/exec";

    try {
      const formData = new FormData();
      formData.append('Name', formState.name);
      formData.append('Email', formState.email);
      formData.append('Subject', formState.subject);
      formData.append('Message', formState.message);
      formData.append('Date', new Date().toLocaleString());

      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Google Apps Script requires no-cors for simple POST
      });

      setFormSent(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormSent(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { 
      label: 'Programs', 
      href: '#courses',
      dropdown: ['Engineering', 'Medical', 'Management', 'IT', 'Arts']
    },
    { 
      label: 'Resources', 
      href: '#news',
      dropdown: ['Student Portal', 'Library', 'Research', 'Downloads']
    },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Contact', href: '#contact-section' },
  ];

  return (
    <div className="app geometric-pattern">

      {/* ── Premium Navigation ── */}
      <nav className={`premium-nav${scrolled ? ' nav-scrolled' : ''}`}>
        <div className="container nav-inner">
          {/* Logo */}
          <a href="#about" className="nav-brand">
            <img src={`${import.meta.env.BASE_URL}logo_v2.png`} alt="Academic Excellence Logo" className="nav-logo-img" />
            <span className="nav-logo-text">Academic Excellence<br/><small style={{ fontSize: '0.65rem', opacity: 0.7, fontWeight: 500, letterSpacing: '1px' }}>INSTITUTE OF INDIA</small></span>
          </a>

          {/* Desktop Links */}
          <ul className="nav-links-desktop">
            {navLinks.map(({ label, href, dropdown }) => (
              <li key={label} className="nav-item-with-dropdown">
                <a href={href} className="nav-link-item">
                  {label} {dropdown && <ChevronRight size={14} className="dropdown-chevron" />}
                </a>
                {dropdown && (
                  <div className="nav-dropdown">
                    {dropdown.map(item => (
                      <a key={item} href={href} className="dropdown-item">{item}</a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="nav-actions">
            <button className="nav-search-btn" onClick={() => setLoginOpen(true)} aria-label="Student Login" title="Student Portal">
              <User size={18} />
            </button>
            <a href="#admission" className="nav-cta-btn primary-cta">Apply Now</a>
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map(({ label, href, dropdown }) => (
                <div key={label} className="mobile-nav-group">
                  <a href={href} className="mobile-nav-link" onClick={() => !dropdown && setMobileOpen(false)}>
                    {label}
                  </a>
                  {dropdown && (
                    <div className="mobile-dropdown-items">
                      {dropdown.map(item => (
                        <a key={item} href={href} className="mobile-dropdown-link" onClick={() => setMobileOpen(false)}>
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href="#admission" className="nav-cta-btn primary-cta mobile-cta" onClick={() => setMobileOpen(false)}>Apply Now</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="about" className="hero-modern">
        <div className="hero-background">
          <img src={`${import.meta.env.BASE_URL}hero_bg.jpg`} alt="Education" className="hero-bg-image" />
        </div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content-refined"
          >
            <span className="hero-eyebrow">WELCOME TO EXCELLENCE</span>
            <h1 className="hero-headline">Empowering Minds, <br/><span>Shaping Futures</span></h1>
            <p className="hero-description">
              Discover a world-class educational experience at Academic Excellence Institute. We provide expert guidance, modern facilities, and a student-centered approach to help you achieve your dreams.
            </p>
            <div className="hero-actions">
              <a href="#admission" className="cta-button gold-btn">Enroll Today</a>
              <a href="#courses" className="secondary-button">Explore Programs</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header-refined">
             <h2 className="section-title-premium">Our Legacy of Success</h2>
             <p className="section-subtitle-premium">Join thousands of students who have transformed their careers with us.</p>
          </div>
          <div className="stats-grid-premium">
            <div className="stat-card-premium">
              <div className="stat-content">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Regular Students</span>
              </div>
              <div className="stat-icon-premium"><Users size={24} /></div>
            </div>
            
            <div className="stat-card-premium highlight-card">
               <div className="testimonial-compact">
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200" alt="Student" className="testimonial-img" />
                  <div className="testimonial-info">
                    <p className="testimonial-name">Rahul Sharma</p>
                    <p className="testimonial-role">MBA Graduate</p>
                  </div>
               </div>
            </div>

            <div className="stat-card-premium">
              <div className="stat-content">
                <span className="stat-number">48K+</span>
                <span className="stat-label">Active Alumni</span>
              </div>
              <div className="stat-icon-premium"><Award size={24} /></div>
            </div>

            <div className="stat-card-premium dark-card">
              <div className="stat-content">
                <span className="stat-number">98%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-icon-premium"><GraduationCap size={24} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section id="news" className="news-section-premium">
        <div className="container">
          <div className="section-header-refined">
            <h2 className="section-title-premium" style={{ color: 'white' }}>Latest from Campus</h2>
            <p className="section-subtitle-premium" style={{ color: 'var(--slate)' }}>Stay informed about our latest achievements and announcements.</p>
          </div>
          
          <div className="news-tabs-premium">
            {['All news', 'Admissions', 'Science'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveNewsTab(tab)}
                className={`news-tab-btn ${activeNewsTab === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="news-grid-premium">
             <div className="news-list-premium">
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
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="news-item-premium"
                  >
                     <span className="news-item-tag">{item.tag}</span>
                     <h3 className="news-item-title">{item.title}</h3>
                     <a href="#" className="news-item-link">Read More <ArrowRight size={14} /></a>
                  </motion.div>
                ))}
             </div>
             <div className="news-featured-premium">
                <div className="featured-img-wrapper">
                  <img src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=800" alt="News" />
                  <div className="featured-overlay-premium">
                    <span className="featured-tag">FEATURED STORY</span>
                    <h3 className="featured-title">Global Education Summit 2024 hosted at IIUD Dubai</h3>
                  </div>
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

      {/* Faculty Section */}
      <section id="faculty" className="faculty-section-premium">
        <div className="container">
          <div className="section-header-refined">
             <h2 className="section-title-premium">Our Distinguished Faculty</h2>
             <p className="section-subtitle-premium">Learn from industry experts and renowned academics dedicated to your success.</p>
          </div>
          <div className="faculty-grid-premium">
            {[
              { name: 'Dr. Fatima Zahra', role: 'Dean of Science', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300' },
              { name: 'Prof. Omar Khalid', role: 'Head of MBA', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300' },
              { name: 'Dr. Sarah Smith', role: 'Admissions Lead', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=300' },
              { name: 'Engr. Hassan Noor', role: 'Research Hub', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300' }
            ].map((profile, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="faculty-card-premium"
              >
                <div className="faculty-image-wrapper">
                  <img src={profile.img} alt={profile.name} className="faculty-image" />
                </div>
                <div className="faculty-info">
                  <h4 className="faculty-name">{profile.name}</h4>
                  <p className="faculty-role">{profile.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports & Recreation Section */}
      <section id="sports" className="sports-section-premium">
        <div className="container">
          <div className="section-header-refined">
             <h2 className="section-title-premium">Campus Life & Recreation</h2>
             <p className="section-subtitle-premium">Experience a vibrant campus life with world-class sports and leisure facilities.</p>
          </div>
          <div className="sports-grid-premium">
            {[
              { name: 'Championship Football', img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018' },
              { name: 'Elite Basketball', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc' },
              { name: 'Cricket League', img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da' },
              { name: 'Aquatics Center', img: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487' }
            ].map((sport, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="sport-card-premium"
              >
                <img src={`${sport.img}?auto=format&fit=crop&q=80&w=600`} alt={sport.name} className="sport-image-premium" />
                <div className="sport-overlay-premium">
                   <h4 className="sport-name-premium">{sport.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Search Section */}
      <section id="courses" className="courses-section">
        <div className="container">
          <div className="section-header-refined">
            <h2 className="section-title-premium">Our Premier Programs</h2>
            <p className="section-subtitle-premium">Choose from a wide range of industry-aligned courses designed for success.</p>
            
            <div className="course-search-modern">
               <div className="search-input-wrapper">
                 <Search size={20} className="search-icon" />
                 <input 
                   type="text" 
                   placeholder="What do you want to learn?" 
                   className="modern-search-input"
                   value={courseSearch}
                   onChange={(e) => setCourseSearch(e.target.value)}
                 />
               </div>
            </div>
          </div>
          
          <div className="course-grid-refined">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, idx) => (
                <motion.div 
                  key={idx} 
                  className="course-card-premium"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 3) * 0.1 }}
                >
                  <div className="course-img-wrapper">
                    <img src={course.img} alt={course.title} className="course-image-modern" />
                    <span className="course-tag">{course.category}</span>
                  </div>
                  <div className="course-info-premium">
                    <div className="course-meta">
                      <span className="course-duration"><BookOpen size={14} /> {course.duration}</span>
                    </div>
                    <h3 className="course-title-modern">{course.title}</h3>
                    <p className="course-desc-modern">{course.desc}</p>
                    <a href="#admission" className="course-cta-modern">
                      View Details <ChevronRight size={16} />
                    </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="no-results-premium">
                <p>No courses found matching "{courseSearch}"</p>
                <button onClick={() => setCourseSearch('')} className="clear-search-btn">Clear Search</button>
              </div>
            )}
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
      <section id="graduates" className="graduates-section-premium">
        <div className="container">
          <div className="section-header-refined">
            <h2 className="section-title-premium">Meet Our Graduates</h2>
            <p className="section-subtitle-premium">The future leaders of 2025, ready to make their mark on the world.</p>
          </div>
          <div className="graduates-grid-premium">
             {[
               "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
               "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
               "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
               "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
               "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
               "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
               "https://images.unsplash.com/photo-1521119989659-a83eee488004",
               "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
             ].map((img, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05 }}
                  className="graduate-card-premium"
                >
                   <img src={`${img}?auto=format&fit=crop&q=80&w=200`} alt="Graduate" />
                </motion.div>
             ))}
          </div>
          <div className="graduates-cta">
            <a href="#contact-section" className="cta-button gold-btn">Join Our Alumni Network</a>
          </div>
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
                    <p className="contact-detail-value">info@iiui.ac.in</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-icon-box"><Phone size={20} /></div>
                  <div>
                    <p className="contact-detail-label">Call Us</p>
                    <p className="contact-detail-value">+91 120 123 4567</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-icon-box"><MapPin size={20} /></div>
                  <div>
                    <p className="contact-detail-label">Visit Us</p>
                    <p className="contact-detail-value">Plot No. 4, Knowledge Park III, Greater Noida, UP, India</p>
                  </div>
                </div>
                
                {/* Mobile Quick Actions */}
                <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                  <a href="tel:+911201234567" style={{ flex: 1, padding: '12px', backgroundColor: 'var(--primary)', color: 'white', textDecoration: 'none', textAlign: 'center', borderRadius: '8px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', minHeight: '44px' }}>
                    <Phone size={18} /> Call Us
                  </a>
                  <a href="https://wa.me/911201234567" target="_blank" rel="noreferrer" style={{ flex: 1, padding: '12px', backgroundColor: '#25D366', color: 'white', textDecoration: 'none', textAlign: 'center', borderRadius: '8px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', minHeight: '44px' }}>
                    <MessageCircle size={18} /> WhatsApp
                  </a>
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
                     <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Send size={16} /> Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-modern">
        <div className="container">
          <div className="footer-grid-refined">
            <div className="footer-brand-refined">
              <div className="footer-logo-text-premium">Academic Excellence</div>
              <p className="footer-desc-premium">
                A leading institution dedicated to providing world-class education and shaping the future of global leaders.
              </p>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-col-title">Programs</h4>
              <ul className="footer-links-list">
                <li><a href="#courses" className="footer-link-premium">Engineering</a></li>
                <li><a href="#courses" className="footer-link-premium">Medical Sciences</a></li>
                <li><a href="#courses" className="footer-link-premium">Management</a></li>
                <li><a href="#courses" className="footer-link-premium">Information Tech</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links-list">
                <li><a href="#about" className="footer-link-premium">About Us</a></li>
                <li><a href="#admission" className="footer-link-premium">Admissions</a></li>
                <li><a href="#faculty" className="footer-link-premium">Faculty</a></li>
                <li><a href="#contact-section" className="footer-link-premium">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-col-title">Contact Us</h4>
              <ul className="footer-links-list">
                <li className="footer-link-premium">info@iiui.ac.in</li>
                <li className="footer-link-premium">+91 120 123 4567</li>
                <li className="footer-link-premium">Greater Noida, India</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom-refined">
            <p className="footer-copy">© 2024 Academic Excellence Institute. All rights reserved.</p>
            <div className="footer-socials">
              <a href="#" className="social-icon-btn"><ExternalLink size={18} /></a>
              <a href="#" className="social-icon-btn"><Mail size={18} /></a>
              <a href="#" className="social-icon-btn"><Phone size={18} /></a>
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
