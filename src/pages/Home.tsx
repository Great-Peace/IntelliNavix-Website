import { useState, useEffect, useRef } from 'react';
import { FastAverageColor } from 'fast-average-color';
import { useNavigate, Link } from 'react-router-dom';
import { upcomingEvents } from './Events';
import ToolsSection from '../components/ToolsSection';
import JourneySection from '../components/JourneySection';
import TestimonialsSection from '../components/TestimonialsSection';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';

const eventSlides = [
  { src: `${import.meta.env.BASE_URL}assets/event-poster-1.jpg`, alt: 'From Data to Insight' },
  { src: `${import.meta.env.BASE_URL}assets/event-poster-2.jpg`, alt: 'SQL Workshop' },
  { src: `${import.meta.env.BASE_URL}assets/event-poster-3.jpeg`, alt: 'Business Analysis' },
  { src: `${import.meta.env.BASE_URL}assets/event-poster-4.jpeg`, alt: 'Advanced Analytics' },
  { src: `${import.meta.env.BASE_URL}assets/event-poster-5.jpeg`, alt: 'Data Visualization' },
  { src: `${import.meta.env.BASE_URL}assets/event-poster-6.jpeg`, alt: 'Machine Learning' },
  { src: `${import.meta.env.BASE_URL}assets/event-poster-7.jpeg`, alt: 'AI Workshop' },
  { src: `${import.meta.env.BASE_URL}assets/event-poster-8.jpeg`, alt: 'Data Science' },
];

const courseData = [
  {
    category: 'analytics',
    featured: true,
    title: 'Data Analytics & Visualization',
    rating: 5.0,
    description: 'Master Excel, Power BI, SQL, and Python to transform raw data into actionable insights that drive business decisions',
    features: [
      { icon: 'fas fa-file-excel', label: 'Excel Advanced' },
      { icon: 'fas fa-chart-bar', label: 'Power BI' },
      { icon: 'fas fa-database', label: 'SQL' },
      { icon: 'fab fa-python', label: 'Python' },
    ],
    progress: 94,
    duration: '10 weeks',
    enrolled: '500+',
    price: '£550',
    originalPrice: '£750',
  },
  {
    category: 'business',
    title: 'Business Analysis',
    rating: 5.0,
    description: 'Bridge the gap between business needs and technical solutions with proven methodologies',
    highlights: [
      { icon: 'fas fa-certificate', label: 'Industry Certification' },
      { icon: 'fas fa-project-diagram', label: 'Real Projects' },
    ],
    duration: '8 weeks',
    price: '£600',
  },
  {
    category: 'management',
    title: 'Project Management (PMO)',
    rating: 4.8,
    description: 'Master project lifecycle, risk management, and stakeholder communication for successful delivery',
    highlights: [
      { icon: 'fas fa-award', label: 'PMP Preparation' },
      { icon: 'fas fa-tools', label: 'PM Tools Training' },
    ],
    duration: '6 weeks',
    price: '£600',
  },
  {
    category: 'agile',
    title: 'Agile Scrum Methodologies',
    rating: 3.9,
    description: 'Become a certified Scrum Master and lead agile transformations in modern organizations',
    highlights: [
      { icon: 'fas fa-certificate', label: 'Scrum Master Cert' },
      { icon: 'fas fa-rocket', label: 'Agile Coaching' },
    ],
    duration: '4 weeks',
    price: '£600',
  },
];

const filterOptions = [
  { label: 'All Courses', value: 'all', icon: 'fas fa-th' },
  { label: 'Analytics', value: 'analytics', icon: 'fas fa-chart-line' },
  { label: 'Business', value: 'business', icon: 'fas fa-business-time' },
  { label: 'Management', value: 'management', icon: 'fas fa-project-diagram' },
  { label: 'Agile', value: 'agile', icon: 'fas fa-sync-alt' },
];

const courseOptions = [
  'Data Analytics & Visualization',
  'Business Analysis',
  'Project Management Office (PMO)',
  'Agile Scrum Methodologies',
];

const NewsletterForm = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwkB57dAg-kCbenC1PI5Dlmfv_yVxhQAfjpC_9y7tZ5GP-fzzdxXyOi_QdJoS1e8uoGww/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (data.result === 'success') {
        setSuccess('Thank you for subscribing! You will receive updates in your inbox.');
        setForm({ name: '', email: '' });
      } else {
        setError('Sorry, something went wrong. Please try again later.');
      }
    } catch (err) {
      setError('Sorry, something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="row g-3 justify-content-center" onSubmit={handleSubmit}>
      <div className="col-md-5">
        <input
          type="text"
          className="form-control form-control-lg"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-md-5">
        <input
          type="email"
          className="form-control form-control-lg"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-md-2 d-grid">
        <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
          {loading ? 'Submitting...' : 'Subscribe'}
        </button>
      </div>
      {success && <div className="col-12"><div className="alert alert-success mt-3">{success}</div></div>}
      {error && <div className="col-12"><div className="alert alert-danger mt-3">{error}</div></div>}
    </form>
  );
};

interface StartJourneyModalProps {
  show: boolean;
  onClose: () => void;
  selectedCourse: string;
}

const StartJourneyModal: React.FC<StartJourneyModalProps> = ({ show, onClose, selectedCourse }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: selectedCourse || courseOptions[0],
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setForm((prev) => ({ ...prev, course: selectedCourse || courseOptions[0] }));
  }, [selectedCourse, show]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyw83Finy2YsgOsuI6OB0bgqyEyOAGfGthG0k7912IaMf8N61iMIphO1VAv-PzSkb5ErQ/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (data.result === 'success') {
        setSuccess('Thank you for starting your journey! We will contact you shortly.');
        setForm({ name: '', email: '', phone: '', course: selectedCourse || courseOptions[0], message: '' });
      } else {
        setError('Sorry, something went wrong. Please try again later.');
      }
    } catch (err) {
      setError('Sorry, something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block" tabIndex={-1} style={{ background: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Start Your Journey</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-12">
                <label className="form-label">Course</label>
                <select
                  className="form-select"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                >
                  {courseOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="col-12">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  placeholder="Your Phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                />
              </div>
              <div className="col-12">
                <div className="alert alert-info text-center" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                  Course Price: £600
                </div>
              </div>
              <div className="col-12 d-grid">
                <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                  {loading ? 'Submitting...' : 'Start Your Journey'}
                </button>
              </div>
              {success && <div className="col-12"><div className="alert alert-success mt-3">{success}</div></div>}
              {error && <div className="col-12"><div className="alert alert-danger mt-3">{error}</div></div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const NAVBAR_OFFSET = 90; // px, matches Events page padding

const CARD_WIDTH = 340;
const CARD_HEIGHT = 520; // Set a fixed height for all cards

const Home = () => {
  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  // Store dominant colors for each slide
  const [slideColors, setSlideColors] = useState<(string | null)[]>(Array(eventSlides.length).fill(null));
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  // Course filter state
  const [courseFilter, setCourseFilter] = useState('all');
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % eventSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Extract color when image loads
  const handleImageLoad = (idx: number) => {
    const img = imgRefs.current[idx];
    if (img) {
      const fac = new FastAverageColor();
      fac.getColorAsync(img)
        .then((color: any) => {
          setSlideColors((prev) => {
            const updated = [...prev];
            updated[idx] = color.rgb;
            return updated;
          });
        })
        .catch(() => {
          setSlideColors((prev) => {
            const updated = [...prev];
            updated[idx] = '#fff';
            return updated;
          });
        });
    }
  };

  // Filtered courses
  const filteredCourses = courseFilter === 'all'
    ? courseData
    : courseData.filter((c) => c.category === courseFilter);

  // Sort and get the 3 closest upcoming events
  const sortedUpcoming = [...upcomingEvents]
    .filter(e => e.dateObj > new Date())
    .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime())
    .slice(0, 3);

  // Smooth scroll with offset for anchor links
  useEffect(() => {
    function handleAnchorClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const href = target.getAttribute('href')!;
        const section = document.getElementById(href.substring(1));
        if (section) {
          e.preventDefault();
          const y = section.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const scrollByCard = (direction: 'left' | 'right') => {
    const container = sliderRef.current;
    if (!container) return;
    const card = container.querySelector('.course-card') as HTMLElement;
    if (!card) return;
    const scrollAmount = card.offsetWidth + 24; // 24px gap
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Helmet>
        <title>IntelliNavix | Home</title>
      </Helmet>
      {/* Hero Section */}
      <Navbar onDropdownChange={setDropdownOpen} />
      <section
        className="hero"
        id="home"
        style={{
          marginTop: 0,
          paddingTop: dropdownOpen ? 120 : '0.75rem',
          padding: '0 0 0 0',
          background: 'white',
          position: 'relative',
          transition: 'padding-top 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="container position-relative" style={{ paddingTop: '0' }}>
          <div className="row align-items-center min-vh-100 flex-wrap" style={{ minHeight: '55vh', gap: '2rem 0' }}>
            <div className="col-lg-6">
              <div className="hero-content text-start">
                <h1 className="hero-title font-display" style={{ fontSize: '4.2rem', lineHeight: 1.08, textAlign: 'left' }}>
                  Transform Your <span className="gradient-text">Career</span> with Data
                </h1>
                <p className="hero-subtitle" style={{ textAlign: 'left' }}>
                  Master cutting-edge data analytics, business analysis, and project management skills. Join league of professionals who've accelerated their careers with our expert-led programs.
                </p>
                {/* Metrics moved up for visibility */}
                <div className="hero-stats mt-3 mb-4">
                  <div className="row g-3">
                    <div className="col-4">
                      <div className="stat-mini">
                        <div className="stat-mini-number">200+</div>
                        <div className="stat-mini-label">Students</div>
                      </div>
                    </div>                    
                    <div className="col-4">
                      <div className="stat-mini">
                        <div className="stat-mini-number">4.9★</div>
                        <div className="stat-mini-label">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero-buttons d-flex gap-3">
                  <a href="#courses" className="btn btn-primary btn-lg">
                    Start Learning <i className="fas fa-rocket ms-2"></i>
                  </a>
                  <a href="https://www.youtube.com/@intellinavixcareers" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-lg">
                    <i className="fas fa-play-circle me-2"></i> Watch Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 position-relative d-flex align-items-stretch">
              <div className="hero-visual w-100 d-flex align-items-stretch">
                <div className="hero-image-container w-100 h-100 mx-auto" style={{ maxWidth: '640px', minHeight: '420px', height: '100%' }}>
                  <img src={`${import.meta.env.BASE_URL}assets/empower_business.png`} alt="Data Analytics Dashboard" className="hero-image" style={{ width: '100%', height: 'auto', maxWidth: '640px', minWidth: '420px', minHeight: '420px', objectFit: 'cover', boxShadow: '0 8px 32px rgba(60,60,180,0.10)', borderRadius: '24px' }} />
                  {/* Floating Elements - move closer to image */}
                  <div className="floating-card card-1" style={{ top: '18px', left: '18px', transform: 'translate(0, 0)', zIndex: 2 }}>
                    <div className="mini-chart">
                      <i className="fas fa-chart-line text-success"></i>
                      <span className="ms-2">+95% Growth</span>
                    </div>
                  </div>
                  <div className="floating-card card-3" style={{ bottom: '18px', left: '18px', transform: 'translate(0, 0)', zIndex: 2 }}>
                    <div className="mini-progress">
                      <i className="fas fa-target text-warning"></i>
                      <div className="ms-2">
                        <div className="fw-bold">Goal: 87%</div>
                        <div className="progress mt-1" style={{ height: 4 }}>
                          <div className="progress-bar" style={{ width: '87%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Background Elements */}
          <div className="hero-bg-elements">
            <div className="bg-element element-1"></div>
            <div className="bg-element element-2"></div>
            <div className="bg-element element-3"></div>
          </div>
        </div>
      </section>

      {/* Program Features Section */}
      <section className="program-features-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-3" style={{ letterSpacing: 1.2 }}>Why Choose <span className="gradient-text">IntelliNavix?</span></h2>
              <p className="lead text-secondary">Our comprehensive program is designed to give you real skills, real experience, and real results.</p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4 d-flex">
              <div className="feature-card p-4 bg-white rounded-4 shadow-sm w-100 h-100 text-center">
                <i className="fas fa-clock fa-2x text-primary mb-3"></i>
                <h5 className="fw-bold mb-2">10 Weeks Intensive Training</h5>
                <p className="mb-0">45+ contact hours with expert instructors</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-flex">
              <div className="feature-card p-4 bg-white rounded-4 shadow-sm w-100 h-100 text-center">
                <i className="fas fa-video fa-2x text-success mb-3"></i>
                <h5 className="fw-bold mb-2">Lifetime Access to Recordings</h5>
                <p className="mb-0">All sessions are recorded and available anytime</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-flex">
              <div className="feature-card p-4 bg-white rounded-4 shadow-sm w-100 h-100 text-center">
                <i className="fas fa-users fa-2x text-info mb-3"></i>
                <h5 className="fw-bold mb-2">12 Weeks Practical Project</h5>
                <p className="mb-0">Collaborative work experience on real projects</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-flex">
              <div className="feature-card p-4 bg-white rounded-4 shadow-sm w-100 h-100 text-center">
                <i className="fas fa-file-alt fa-2x text-warning mb-3"></i>
                <h5 className="fw-bold mb-2">CV Review & Job Support</h5>
                <p className="mb-0">Personalized CV review and job application guidance</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-flex">
              <div className="feature-card p-4 bg-white rounded-4 shadow-sm w-100 h-100 text-center">
                <i className="fas fa-chalkboard-teacher fa-2x text-danger mb-3"></i>
                <h5 className="fw-bold mb-2">Interview Prep & Mentoring</h5>
                <p className="mb-0">Ongoing interview preparation and continuous mentoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event Section - Full Width */}
      <section className="featured-event-section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title font-display">
              Past & Upcoming <span className="gradient-text">Events</span>
            </h2>
            <p className="section-subtitle">
              Join our free webinars and training sessions
            </p>
          </div>
          <div className="events-grid">
            {/* Featured Event Card with Slider (Desktop only) */}
            <div className="featured-event-card d-none d-md-block">
              <div className="event-slider">
                <div className="slider-container">
                  {eventSlides.map((slide, i) => (
                    <div
                      key={slide.src}
                      className={`slide${i === currentSlide ? ' active' : ''}`}
                      style={{ background: slideColors[i] || '#fff', transition: 'background 0.5s' }}
                    >
                      <img
                        ref={el => { imgRefs.current[i] = el; }}
                        src={slide.src}
                        alt={slide.alt}
                        crossOrigin="anonymous"
                        onLoad={() => handleImageLoad(i)}
                      />
                    </div>
                  ))}
                </div>
                {/* Slider dots */}
                <div className="slider-dots">
                  {eventSlides.map((_, i) => (
                    <span
                      key={i}
                      className={`dot${i === currentSlide ? ' active' : ''}`}
                      onClick={() => setCurrentSlide(i)}
                      style={{ cursor: 'pointer' }}
                    ></span>
                  ))}
                </div>
              </div>
              <div className="event-content">
                <a href="https://www.youtube.com/@intellinavixcareers/videos" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube me-2"></i>View Recordings
                </a>
              </div>
            </div>
            {/* Upcoming Events List */}
            <div className="upcoming-events">
              <div>
              {/* <h4 className="upcoming-title" style={{ color: 'red' }}>FREE </h4>  */}
              <h4 className="upcoming-title" style={{ color: 'red' }}>FREE Upcoming Events</h4>
              </div>
              {sortedUpcoming.map(event => (
                <div
                  key={event.id}
                  className="event-item"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate(`/events#event-${event.id}`)}
                >
                  <div className="event-date">
                    <span className="day">{event.dateObj.getDate()}</span>
                    <span className="month">{event.dateObj.toLocaleString('default', { month: 'short' }).toUpperCase()}</span>
                    <span className="year">{event.dateObj.getFullYear()}</span>
                  </div>
                  <div className="event-thumb">
                    <img src={event.image} alt={event.title} />
                  </div>
                  <div className="event-info">
                    <h5>{event.title}</h5>
                    <p className="event-location">{event.location} • {event.time}</p>
                    <span className="event-type">{event.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile: Slider below Upcoming Events */}
          <div className="featured-event-card d-block d-md-none mt-4">
            <div className="event-slider">
              <div className="slider-container">
                {eventSlides.map((slide, i) => (
                  <div
                    key={slide.src}
                    className={`slide${i === currentSlide ? ' active' : ''}`}
                    style={{ background: slideColors[i] || '#fff', transition: 'background 0.5s' }}
                  >
                    <img
                      ref={el => { imgRefs.current[i] = el; }}
                      src={slide.src}
                      alt={slide.alt}
                      crossOrigin="anonymous"
                      onLoad={() => handleImageLoad(i)}
                      style={{ width: '100%', height: 'auto', borderRadius: 16, maxHeight: 260, objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
              {/* Slider dots */}
              <div className="slider-dots">
                {eventSlides.map((_, i) => (
                  <span
                    key={i}
                    className={`dot${i === currentSlide ? ' active' : ''}`}
                    onClick={() => setCurrentSlide(i)}
                    style={{ cursor: 'pointer' }}
                  ></span>
                ))}
              </div>
            </div>
            <div className="event-content">
              <a href="https://www.youtube.com/@intellinavixcareers/videos" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube me-2"></i>View Recordings
              </a>
            </div>
          </div>
          <div className="events-actions text-center mt-5">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate('/events')}
            >
              <i className="fas fa-calendar-alt me-2"></i>View All Events
            </button>
            <a href="#newsletter" className="btn btn-outline-primary btn-lg ms-3">
              <i className="fas fa-bell me-2"></i>Get Notified
            </a>
          </div>
        </div>
      </section>

      {/* YouTube Video Showcase - Full Width */}
      <section className="youtube-showcase-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="video-content">
                <div className="video-badge mb-3">
                  <i className="fab fa-youtube me-2"></i>
                  Free Training Videos
                </div>
                <h3 className="video-title">Watch Our Latest Training Session</h3>
                <p className="video-description">
                  Get a preview of our comprehensive training methodology and see how we transform careers
                  through hands-on learning and expert guidance.
                </p>
                <a href="https://www.youtube.com/@intellinavixcareers/videos" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">
                  <i className="fab fa-youtube me-2"></i>
                  Visit Our Channel
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/Kq1-9VeaD6A" title="IntelliNavix Training Video" frameBorder="0" allowFullScreen style={{ width: '100%', height: 315, borderRadius: 20, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section - Full Width */}
      <section className="newsletter-section py-5 bg-light" id="newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="newsletter-card shadow rounded p-4 text-center">
                <h3 className="fw-bold mb-3">Get Notified About New Courses & Events</h3>
                <p className="mb-4">Subscribe to our newsletter and be the first to know about upcoming programs, free webinars, and exclusive offers.</p>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legendary Course Categories Section - Full Width */}
      <section className="courses-section" id="courses">
        <div className="container position-relative" style={{ padding: 0 }}>
          {/* Enhanced Section Header */}
          <div className="section-header text-center mb-5">
            <div className="header-decoration">
              <div className="floating-icons">
                <i className="fas fa-chart-line floating-icon"></i>
                <i className="fas fa-code floating-icon"></i>
                <i className="fas fa-brain floating-icon"></i>
              </div>
            </div>
            <h2 className="section-title font-display">
              Master In-Demand <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subtitle">
              Transform your career with industry-leading courses designed by experts
            </p>
            <div className="stats-bar">
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Students Trained</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.9/5</span>
                <span className="stat-label">Average Rating</span>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <button
              className="btn btn-outline-secondary position-absolute top-50 start-0 translate-middle-y"
              style={{ zIndex: 2, left: -30 }}
              onClick={() => scrollByCard('left')}
              aria-label="Scroll left"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="btn btn-outline-secondary position-absolute top-50 end-0 translate-middle-y"
              style={{ zIndex: 2, right: -30 }}
              onClick={() => scrollByCard('right')}
              aria-label="Scroll right"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            <div
              className="courses-slider"
              ref={sliderRef}
              style={{
                display: 'flex',
                gap: 24,
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                paddingBottom: 16,
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {filteredCourses.map((course) => (
                <div
                  key={course.title}
                  className={`course-card${course.featured ? ' featured-course' : ''}`}
                  data-category={course.category}
                  style={{ minWidth: CARD_WIDTH, maxWidth: CARD_WIDTH, flex: `0 0 ${CARD_WIDTH}px`, height: CARD_HEIGHT, display: 'flex', flexDirection: 'column' }}
                >
                  {/* Icon at the top of the card */}
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 70, marginTop: 24, marginBottom: 8 }}>
                    <div style={{
                      width: 56,
                      height: 56,
                      borderRadius: 16,
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 16px rgba(99,102,241,0.12)',
                    }}>
                      <i className={
                        course.category === 'analytics' ? 'fas fa-chart-bar fa-2x text-white' :
                        course.category === 'business' ? 'fas fa-briefcase fa-2x text-white' :
                        course.category === 'management' ? 'fas fa-tasks fa-2x text-white' :
                        'fas fa-sync-alt fa-2x text-white'
                      }></i>
                    </div>
                  </div>
                  <div className="course-content" style={{ flex: 1 }}>
                    <div className="course-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      {course.title === 'Data Analytics & Visualization' ? (
                        <div style={{ display: 'flex', width: '100%', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                          <h3 style={{ lineHeight: 1.1, marginBottom: 0 }}>
                            <span>Data</span><br />
                            <span>Analytics &</span><br />
                            <span>Visualization</span>
                          </h3>
                          <div className="course-rating" style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 12 }}>
                            <div className="stars">
                              {Array.from({ length: Math.floor(course.rating) }).map((_, i) => (
                                <i key={i} className="fas fa-star"></i>
                              ))}
                              {course.rating < 5 && Array.from({ length: 5 - Math.floor(course.rating) }).map((_, i) => (
                                <i key={i} className="far fa-star"></i>
                              ))}
                            </div>
                            <span className="rating-score" style={{ marginLeft: 6 }}>{course.rating.toFixed(1)}</span>
                          </div>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                          <h3>{course.title}</h3>
                          <div className="course-rating" style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 12 }}>
                            <div className="stars">
                              {Array.from({ length: Math.floor(course.rating) }).map((_, i) => (
                                <i key={i} className="fas fa-star"></i>
                              ))}
                              {course.rating < 5 && Array.from({ length: 5 - Math.floor(course.rating) }).map((_, i) => (
                                <i key={i} className="far fa-star"></i>
                              ))}
                            </div>
                            <span className="rating-score" style={{ marginLeft: 6 }}>{course.rating.toFixed(1)}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="course-description">{course.description}</p>
                    {course.features && (
                      <div className="course-features">
                        {course.features.map((f, i) => (
                          <div className="feature-item" key={i}>
                            <i className={f.icon}></i>
                            <span>{f.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {course.highlights && (
                      <div className="course-highlights">
                        {course.highlights.map((h, i) => (
                          <div className="highlight-item" key={i}>
                            <i className={h.icon}></i>
                            <span>{h.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {course.progress && (
                      <div className="course-progress">
                        <div className="progress-info">
                          <span>Course Completion Rate</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
                        </div>
                      </div>
                    )}
                    <div className="course-meta">
                      <div className="meta-item">
                        <i className="fas fa-clock"></i>
                        <span>{course.duration}</span>
                      </div>
                      {course.enrolled && (
                        <div className="meta-item">
                          <i className="fas fa-users"></i>
                          <span>{course.enrolled} enrolled</span>
                        </div>
                      )}
                      <div className="price-tag">
                        <span className="price">{course.price}</span>
                        {course.originalPrice && <span className="original-price">{course.originalPrice}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="course-actions">
                    <button className={`btn ${course.featured ? 'btn-primary' : 'btn-outline'} learn-more-btn`}>
                      <span>Learn More</span>
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                  <div className="course-overlay">
                    <div className="overlay-content">
                      <h4>{course.featured ? 'Ready to Start?' : course.title + ' Mastery'}</h4>
                      <p>{course.featured ? 'Join thousands of successful data professionals' : 'Become a strategic business partner'}</p>
                      <Link
                        className="btn btn-light"
                        to={
                          course.title === 'Data Analytics & Visualization' ? '/courses/data-analytics'
                          : course.title === 'Business Analysis' ? '/courses/business-analysis'
                          : course.title === 'Project Management (PMO)' ? '/courses/project-management'
                          : course.title === 'Agile Scrum Methodologies' ? '/courses/agile-scrum'
                          : '/courses'
                        }
                      >
                        {course.featured ? 'View Full Curriculum' : 'View Course Details'}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Course Filter Tabs */}
          <div className="course-filters">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                className={`filter-btn${courseFilter === opt.value ? ' active' : ''}`}
                onClick={() => setCourseFilter(opt.value)}
              >
                <i className={opt.icon}></i>
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
          {/* Call to Action */}
          <div className="section-cta">
            <div className="cta-content">
              <h3>Ready to Transform Your Career?</h3>
              <p>Join our community of successful professionals who've advanced their careers through our programs</p>
              <div className="cta-actions">
                <button className="btn btn-primary btn-lg">
                  <i className="fas fa-rocket"></i>
                  Start Your Journey
                </button>
                <button className="btn btn-outline btn-lg">
                  <i className="fas fa-calendar"></i>
                  Book Free Consultation
                </button>
              </div>
              <StartJourneyModal show={false} onClose={() => {}} selectedCourse={''} />
            </div>
          </div>

          <ToolsSection />
          <JourneySection />
          <TestimonialsSection />
        </div>
      </section>
    </>
  );
};

export default Home;
export { StartJourneyModal }; 