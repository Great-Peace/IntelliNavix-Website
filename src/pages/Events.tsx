import React, { useState, useEffect } from 'react';

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
    title: 'From Data to Insight',
    image: `${import.meta.env.BASE_URL}/assets/event-poster-1.jpg`,
    recording: 'https://www.youtube.com/@intellinavixcareers/videos',
  },
  {
    title: 'SQL Workshop',
    image: `${import.meta.env.BASE_URL}/assets/event-poster-2.jpg`,
    recording: 'https://www.youtube.com/@intellinavixcareers/videos',
  },
  {
    title: 'Business Analysis',
    image: `${import.meta.env.BASE_URL}/assets/event-poster-3.jpeg`,
    recording: 'https://www.youtube.com/@intellinavixcareers/videos',
  },
  {
    title: 'Advanced Analytics',
    image: `${import.meta.env.BASE_URL}/assets/event-poster-4.jpeg`,
    recording: 'https://www.youtube.com/@intellinavixcareers/videos',
  },
  {
    title: 'Data Visualization',
    image: `${import.meta.env.BASE_URL}/assets/event-poster-5.jpeg`,
    recording: 'https://www.youtube.com/@intellinavixcareers/videos',
  },
  {
    title: 'Machine Learning',
    image: `${import.meta.env.BASE_URL}/assets/event-poster-6.jpeg`,
    recording: 'https://www.youtube.com/@intellinavixcareers/videos',
  },
  {
    title: 'AI Workshop',
    image: `${import.meta.env.BASE_URL}/assets/event-poster-7.jpeg`,
    recording: 'https://www.youtube.com/@intellinavixcareers/videos',
  },
  {
    title: 'Data Science',
    image: `${import.meta.env.BASE_URL}/assets/event-poster-8.jpeg`,
    recording: 'https://www.youtube.com/@intellinavixcareers/videos',
  },
];

const testimonials = [
  {
    name: 'Sarah O.',
    role: 'Data Analyst, London',
    photo: `${import.meta.env.BASE_URL}/assets/team-1.jpg`,
    quote: 'The SQL Workshop was a game-changer for my career. The hands-on approach and expert guidance made all the difference!'
  },
  {
    name: 'James T.',
    role: 'Business Consultant, Manchester',
    photo: `${import.meta.env.BASE_URL}/assets/team-2.jpg`,
    quote: 'The Business Analysis Masterclass gave me practical tools I use every day. Highly recommended!'
  },
  {
    name: 'Aisha B.',
    role: 'Project Manager, Birmingham',
    photo: `${import.meta.env.BASE_URL}/assets/team-3.jpg`,
    quote: 'The Project Management Bootcamp was intense and rewarding. I left with new skills and a great network.'
  },
  {
    name: 'Samuel K.',
    role: 'Graduate, Glasgow',
    photo: `${import.meta.env.BASE_URL}/assets/team-4.jpg`,
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

// RegistrationModal props type
type RegistrationModalProps = {
  show: boolean;
  onClose: () => void;
  event: Partial<UpcomingEvent>;
  onRegistrationSuccess?: (eventId: string) => void;
};

const RegistrationModal: React.FC<RegistrationModalProps> = ({ show, onClose, event, onRegistrationSuccess }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '', selectedEvent: event.title || '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setForm(f => ({ ...f, selectedEvent: event.title || '' }));
  }, [event.title]);

  if (!show) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      // Add registration timestamp
      const formDataWithTimestamp = {
        ...form,
        registrationDate: new Date().toISOString()
      };
      
      // TODO: Replace with your Google Apps Script URL
      const response = await fetch('https://script.google.com/macros/s/AKfycbzJwuikPjgXeVSTz_fayETmY89_Qntb08_pNpW3csSJNIbPd6Sp0rT-qysGGIuY05FV/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formDataWithTimestamp),
      });
      const data = await response.json();
      if (data.result === 'success') {
        setSuccess('Registration successful! Check your email for confirmation.');
        setForm({ name: '', email: '', message: '', selectedEvent: event.title || '' });
        // Call the callback to mark this event as registered
        if (onRegistrationSuccess && event.id) {
          onRegistrationSuccess(event.id);
        }
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
    <div className="modal fade show d-block" tabIndex={-1} style={{ background: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Register for {event.title}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Event</label>
                <select className="form-select" name="selectedEvent" value={form.selectedEvent} onChange={handleChange} required>
                  <option value="" disabled>Select an event</option>
                  {upcomingEvents.map((ev) => (
                    <option key={ev.id} value={ev.title}>{ev.title}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Your question or interest (optional)" />
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? 'Registering...' : 'Register'}
              </button>
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
        <div className="events-hero-bg position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.08, background: `url(${import.meta.env.BASE_URL}assets/event-poster-1.jpg) center/cover no-repeat` }}></div>
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
      <RegistrationModal show={!!modalEvent} onClose={() => setModalEvent(null)} event={modalEvent || {}} onRegistrationSuccess={(eventId) => setRegisteredEvents(prev => new Set(prev).add(eventId))} />

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
                <div className="card h-100 shadow-sm border-0 past-event-card">
                  <div className="position-relative">
                    <img src={event.image} className="card-img-top" alt={event.title} style={{ height: 180, objectFit: 'cover', borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
                  </div>
                  <div className="card-body text-center">
                    <h6 className="fw-bold mb-1">{event.title}</h6>
                    <a href={event.recording} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-3">
                      <i className="fab fa-youtube me-1"></i>Watch Recap
                    </a>
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
  );
};

export default Events; 