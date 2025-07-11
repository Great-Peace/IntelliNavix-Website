import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Define a type for upcoming event objects
type UpcomingEvent = {
  id: string;
  title: string;
  date: string;
  dateObj: Date;
  time: string;
  location: string;
  type: string;
  image: string;
  link: string;
  description: string;
  highlights: string[];
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 'sql-fundamentals',
    title: 'SQL Fundamentals Workshop',
    date: 'June 24, 2025',
    dateObj: new Date('2025-06-24T10:00:00'),
    time: '10:00 AM',
    location: 'Virtual',
    type: 'Workshop',
    image: `${import.meta.env.BASE_URL}assets/ms_excel.jpg`,
    link: '#',
    description: 'A hands-on workshop covering SQL basics, queries, and data manipulation for beginners and professionals.',
    highlights: ['Live coding', 'Q&A session', 'Certificate of participation'],
  },
  {
    id: 'business-analysis',
    title: 'Business Analysis Masterclass',
    date: 'July 10, 2025',
    dateObj: new Date('2025-07-10T09:00:00'),
    time: '09:00 AM',
    location: 'London, UK',
    type: 'Masterclass',
    image: `${import.meta.env.BASE_URL}assets/business_analysis.png`,
    link: '#',
    description: 'Masterclass on business analysis techniques, stakeholder management, and real-world case studies.',
    highlights: ['Expert speakers', 'Networking', 'Case studies'],
  },
  {
    id: 'project-management',
    title: 'Project Management Bootcamp',
    date: 'July 29, 2025',
    dateObj: new Date('2025-07-29T14:00:00'),
    time: '14:00 PM',
    location: 'Virtual',
    type: 'Bootcamp',
    image: `${import.meta.env.BASE_URL}assets/power_BI.png`,
    link: '#',
    description: 'Intensive bootcamp on project management essentials, tools, and agile methodologies.',
    highlights: ['Agile tools', 'Team exercises', 'Career tips'],
  },
];

const pastEvents = [
  {
    title: 'From Data to Insight: Build Dashboards in 90 Minutes',
    image: `${import.meta.env.BASE_URL}assets/event-poster-1.jpg`,
    recording: 'https://www.youtube.com/watch?v=qlcvm779UZ4&t=5588s',
  },
  {
    title: 'Data Analysis Demystified for Aspiring Analysts',
    image: `${import.meta.env.BASE_URL}assets/data_demystified.jpeg`,
    recording: 'https://www.youtube.com/watch?v=QKNQwXJfpVA',
  },
  {
    title: 'Business Analysis: A Launchpad for Aspiring Analysts',
    image: `${import.meta.env.BASE_URL}assets/business_launchpad.jpeg`,
    recording: 'https://www.youtube.com/watch?v=oRPFF5eQ7lA',
  },
  {
    title: 'Data Analytics Masterclass',
    image: `${import.meta.env.BASE_URL}assets/data_masterclass.jpeg`,
    recording: 'https://www.youtube.com/watch?v=YynckLbkXLQ',
  },
  {
    title: 'Mastering Google Analytics for Performance Analysts',
    image: `${import.meta.env.BASE_URL}assets/event-poster-5.jpeg`,
    recording: 'https://www.youtube.com/watch?v=-jvEJAuCKhg',
  },
  {
    title: 'Building a Web App with Python, Streamlit, and SQL',
    image: `${import.meta.env.BASE_URL}assets/event-poster-6.jpeg`,
    recording: 'https://www.youtube.com/watch?v=f8-bw_MfHZI',
  },
  {
    title: 'IT Project Management: A Journey for New Entrants',
    image: `${import.meta.env.BASE_URL}assets/event-poster-7.jpeg`,
    recording: 'https://www.youtube.com/watch?v=u3qya6zWxXw',
  },
  {
    title: 'Crafting Your IT Career: Recruitment Insights for New Entrants',
    image: `${import.meta.env.BASE_URL}assets/event-poster-8.jpeg`,
    recording: 'https://www.youtube.com/watch?v=_fcvtqHjSiQ&t=7s',
  },
];

const testimonials = [
  {
    name: 'Sarah O.',
    role: 'Data Analyst, London',
    photo: `${import.meta.env.BASE_URL}assets/avatar_2.jpg`,
    quote: 'The SQL Workshop was a game-changer for my career. The hands-on approach and expert guidance made all the difference!'
  },
  {
    name: 'James T.',
    role: 'Business Consultant, Manchester',
    photo: `${import.meta.env.BASE_URL}assets/avatar_1.jpg`,
    quote: 'The Business Analysis Masterclass gave me practical tools I use every day. Highly recommended!'
  },
  {
    name: 'Aisha B.',
    role: 'Project Manager, Birmingham',
    photo: `${import.meta.env.BASE_URL}assets/avatar_3.jpg`,
    quote: 'The Project Management Bootcamp was intense and rewarding. I left with new skills and a great network.'
  },
  {
    name: 'Samuel K.',
    role: 'Graduate, Glasgow',
    photo: `${import.meta.env.BASE_URL}assets/avatar_5.jpg`,
    quote: 'IntelliNavix events are always inspiring and practical. I keep coming back for more!'
  },
];

const eventHighlights = [
  {
    icon: 'fas fa-users',
    title: '1000+ Attendees',
    desc: 'Our events have empowered over a thousand professionals across the UK and beyond.'
  },
  {
    icon: 'fas fa-chalkboard-teacher',
    title: 'Expert Speakers',
    desc: 'Learn from industry leaders with decades of real-world experience.'
  },
  {
    icon: 'fas fa-award',
    title: 'Certificates',
    desc: 'Earn certificates to boost your CV and LinkedIn profile.'
  },
  {
    icon: 'fas fa-network-wired',
    title: 'Networking',
    desc: 'Connect with peers, mentors, and recruiters at every event.'
  },
];

// Add this type at the top of the file (or above Events component)
type RegistrationFormState = {
  name: string;
  email: string;
  message: string;
  selectedEvent: string;
};

// Update RegistrationModalProps to include the lifted state and handlers
type RegistrationModalProps = {
  show: boolean;
  onClose: () => void;
  event: Partial<UpcomingEvent>;
  form: RegistrationFormState;
  success: string;
  error: string;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleFormSubmit: (e: React.FormEvent) => void;
};

const RegistrationModal: React.FC<RegistrationModalProps> = ({
  show, onClose, event, form, success, error, handleFormChange, handleFormSubmit
}) => {
  if (!show) return null;

  return (
    <div className="modal fade show d-block" tabIndex={-1} style={{ background: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Register for {event.title}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label className="form-label">Event</label>
                <select className="form-select" name="selectedEvent" value={form.selectedEvent} onChange={handleFormChange} required>
                  <option value="" disabled>Select an event</option>
                  {upcomingEvents.map((ev) => (
                    <option key={ev.id} value={ev.title}>{ev.title}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" name="name" value={form.name} onChange={handleFormChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={form.email} onChange={handleFormChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" name="message" value={form.message} onChange={handleFormChange} rows={3} placeholder="Your question or interest (optional)" />
              </div>
              <button type="submit" className="btn btn-primary w-100">Register</button>
              {success && <div className="alert alert-success mt-3">{success}</div>}
              {error && <div className="alert alert-danger mt-3">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const NAVBAR_OFFSET = 90; // px, matches Home page and navbar height

const Events: React.FC = () => {
  const [modalEvent, setModalEvent] = useState<UpcomingEvent | null>(null);
  const [registeredEvents, setRegisteredEvents] = useState<Set<string>>(new Set());
  // Move these above RegistrationModal so they are in scope for both components
  const [form, setForm] = useState({ name: '', email: '', message: '', selectedEvent: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // Handle form field changes
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle AJAX form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    try {
      const response = await fetch('/submit_event.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(form).toString(),
      });
      const data = await response.json();
      if (data.result === 'success') {
        setSuccess('Registration successful! Check your email for confirmation.');
        setRegisteredEvents(prev => new Set(prev).add(form.selectedEvent));
        setForm({ name: '', email: '', message: '', selectedEvent: '' });
      } else {
        setError('Sorry, something went wrong. Please try again later.');
      }
    } catch (err) {
      setError('Sorry, something went wrong. Please try again later.');
    }
  };

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

  // Helper to format date for ICS (YYYYMMDDTHHMMSSZ)
  function formatICSDate(date: Date) {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  }

  // Download ICS file for event
  function handleAddToCalendar(event: UpcomingEvent) {
    if (!registeredEvents.has(event.id)) {
      alert('Please register for this event first before adding it to your calendar.');
      return;
    }
    
    const start = formatICSDate(event.dateObj);
    // Assume 2 hours duration for now
    const endDate = new Date(event.dateObj.getTime() + 2 * 60 * 60 * 1000);
    const end = formatICSDate(endDate);
    const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${event.title}\nDTSTART:${start}\nDTEND:${end}\nLOCATION:${event.location}\nDESCRIPTION:${event.description}\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([icsContent.replace(/\n/g, '\r\n')], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${event.title.replace(/\s+/g, '_')}.ics`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
  }

  return (
    <>
      <Helmet>
        <title>IntelliNavix | Events</title>
      </Helmet>
      <div style={{ paddingTop: '90px' }}>
        {/* Hero Section */}
        <section id="top" className="events-hero-section py-5 text-center bg-primary text-white position-relative animate__animated animate__fadeInDown">
          <div className="container position-relative z-2">
            <h1 className="display-4 fw-bold mb-3">Events & Experiences</h1>
            <p className="lead mb-4">Dive into our world of hands-on workshops, masterclasses, and bootcamps. <br />
              <span className="fw-semibold">Learn. Network. Transform.</span>
            </p>
            <a href="#upcoming" className="btn btn-light btn-lg px-4 me-3">Upcoming Events</a>
            <a href="#past" className="btn btn-outline-light btn-lg px-4">Past Events</a>
            <a href="#top" className="visually-hidden" tabIndex={-1} aria-hidden="true"></a>
          </div>
          <div className="events-hero-bg position-absolute top-0 start-0 w-100 h-100"
            style={{
              opacity: 1,
              background: `linear-gradient(135deg, rgba(99,102,241,0.7) 0%, rgba(139,92,246,0.7) 50%, rgba(6,182,212,0.7) 100%), url(/assets/about_us.png) center/cover no-repeat`
            }}></div>
        </section>

        {/* Upcoming Events */}
        <section id="upcoming" className="py-5 bg-light">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h2 className="section-title font-display">Upcoming <span className="gradient-text">Events</span></h2>
              <p className="section-subtitle">Reserve your spot and take the next step in your data career journey.</p>
            </div>
            <div className="row g-4 justify-content-center">
              {upcomingEvents.map((event, idx) => (
                <div className={`col-md-6 col-lg-4 animate__animated animate__fadeInUp`} style={{ animationDelay: `${idx * 0.15 + 0.1}s` }} key={idx}>
                  <div className="card h-100 shadow event-card border-0" id={`event-${event.id}`}>
                    <img src={event.image} className="card-img-top" alt={event.title} style={{ height: 220, objectFit: 'cover' }} />
                    <div className="card-body d-flex flex-column">
                      <div className="d-flex align-items-center mb-2">
                        <span className="badge bg-primary me-2 text-uppercase">{event.type}</span>
                        <span className="text-muted small ms-auto"><i className="fas fa-map-marker-alt me-1"></i>{event.location}</span>
                      </div>
                      <h5 className="card-title fw-bold mb-1">{event.title}</h5>
                      <div className="mb-2 text-secondary">
                        <i className="far fa-calendar-alt me-1"></i>{event.date} &nbsp; <i className="far fa-clock me-1"></i>{event.time}
                      </div>
                      <p className="mb-2 small text-muted">{event.description}</p>
                      <ul className="list-unstyled mb-3">
                        {event.highlights.map((h, i) => (
                          <li key={i} className="d-flex align-items-center mb-1"><i className="fas fa-check-circle text-success me-2"></i>{h}</li>
                        ))}
                      </ul>
                      <div className="mt-auto d-flex gap-2">
                        <button className="btn btn-primary btn-sm w-100" onClick={() => setModalEvent(event)}>Register</button>
                        <button 
                          className={`btn btn-sm w-100 ${registeredEvents.has(event.id) ? 'btn-outline-secondary' : 'btn-outline-secondary disabled'}`} 
                          onClick={() => handleAddToCalendar(event)}
                          disabled={!registeredEvents.has(event.id)}
                          title={registeredEvents.has(event.id) ? 'Add to Calendar' : 'Register first to add to calendar'}
                        >
                          {registeredEvents.has(event.id) ? 'Add to Calendar' : 'Register First'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Modal */}
        <RegistrationModal
          show={!!modalEvent}
          onClose={() => setModalEvent(null)}
          event={modalEvent || {}}
          form={form}
          success={success}
          error={error}
          handleFormChange={handleFormChange}
          handleFormSubmit={handleFormSubmit}
        />

        {/* Event Highlights */}
        <section className="event-highlights-section py-5 bg-white">
          <div className="container">
            <div className="row g-4 justify-content-center">
              {eventHighlights.map((h, i) => (
                <div className={`col-6 col-md-3 text-center animate__animated animate__fadeInUp`} style={{ animationDelay: `${i * 0.15 + 0.1}s` }} key={i}>
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 fs-1"><i className={h.icon}></i></div>
                    <h5 className="fw-bold mb-2">{h.title}</h5>
                    <p className="mb-0 small text-muted">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section id="past" className="py-5">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h2 className="section-title font-display">Past <span className="gradient-text">Events</span></h2>
              <p className="section-subtitle">Catch up on what you missed. Watch recaps and relive the experience!</p>
            </div>
            <div className="row g-4 justify-content-center">
              {pastEvents.map((event, idx) => (
                <div className={`col-md-6 col-lg-3 animate__animated animate__fadeInUp`} style={{ animationDelay: `${idx * 0.12 + 0.1}s` }} key={idx}>
                  <div className="card h-100 shadow-sm border-0 past-event-card d-flex flex-column" style={{paddingTop: 0, marginTop: 0, width: '100%'}}>
                    <div className="position-relative" style={{padding: 0, margin: 0, width: '100%'}}>
                      <img src={event.image} className="card-img-top" alt={event.title} style={{ width: '100%', height: 220, objectFit: 'contain', display: 'block', borderRadius: 0, margin: 0, padding: 0, background: '#fff', boxSizing: 'border-box' }} />
                    </div>
                    <div className="card-body text-center d-flex flex-column justify-content-between">
                      <h6 className="fw-bold mb-1">{event.title}</h6>
                      <div className="d-flex justify-content-center align-items-center mt-3" style={{ minHeight: 38 }}>
                        <a href={event.recording} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm w-100" style={{maxWidth: '180px'}}>
                          <i className="fab fa-youtube me-1"></i>Watch Recap
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section py-5 bg-light">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h2 className="section-title font-display">What <span className="gradient-text">Attendees Say</span></h2>
              <p className="section-subtitle">Real stories from our event participants</p>
            </div>
            <div className="row g-4 justify-content-center">
              {testimonials.map((t, i) => (
                <div className={`col-md-6 col-lg-3 animate__animated animate__fadeInUp`} style={{ animationDelay: `${i * 0.18 + 0.1}s` }} key={i}>
                  <div className="testimonial-card bg-white shadow-sm rounded p-4 h-100 text-center">
                    <img src={t.photo} alt={t.name} className="rounded-circle mb-3" style={{ width: 70, height: 70, objectFit: 'cover', border: '3px solid #06b6d4' }} />
                    <blockquote className="mb-3 text-secondary" style={{ minHeight: 80 }}>
                      <i className="fas fa-quote-left me-2 text-primary"></i>{t.quote}
                    </blockquote>
                    <div className="fw-bold mb-0">{t.name}</div>
                    <div className="small text-muted">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Events; 