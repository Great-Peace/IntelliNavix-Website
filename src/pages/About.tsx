import { motion } from 'framer-motion';
import '../styles/team-section.css';

const teamCardStyles = `
.team-image-container {
  position: relative;
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 1.2/1;
  background: #f5f6fa;
}
.team-img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 24px;
  display: block;
}
.team-overlay {
  position: absolute;
  inset: 0;
  background: rgba(124, 58, 237, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 2;
}
.team-image-container:hover .team-overlay {
  opacity: 1;
}
.team-overlay a {
  color: #fff;
  font-size: 2rem;
  background: rgba(255,255,255,0.18);
  border-radius: 50%;
  padding: 0.5rem 0.7rem;
  transition: background 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.team-overlay a:hover {
  background: #fff;
  color: #7c3aed;
}
`;

const About = () => (
  <>
    {/* Modern Hero Section */}
    <section className="about-hero-section position-relative d-flex align-items-center" style={{ minHeight: '90vh', background: 'linear-gradient(120deg, #1e293b 0%, #233a5a 100%)', overflow: 'hidden', paddingTop: '80px' }}>
      {/* Starry/constellation SVG background */}
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <circle cx="15%" cy="25%" r="120" fill="#3b82f6" fillOpacity="0.10" />
        <circle cx="80%" cy="60%" r="180" fill="#38bdf8" fillOpacity="0.13" />
        <circle cx="50%" cy="90%" r="90" fill="#6366f1" fillOpacity="0.09" />
        {/* Stars */}
        {[...Array(30)].map((_, i) => (
          <circle key={i} cx={`${Math.random()*100}%`} cy={`${Math.random()*100}%`} r={Math.random()*2+1} fill="#7b8cff" fillOpacity="0.7" />
        ))}
        {/* Constellation lines (static for now) */}
        <line x1="20%" y1="30%" x2="40%" y2="50%" stroke="#7b8cff" strokeWidth="0.5" opacity="0.3" />
        <line x1="60%" y1="20%" x2="80%" y2="60%" stroke="#7b8cff" strokeWidth="0.5" opacity="0.3" />
        <line x1="30%" y1="80%" x2="50%" y2="90%" stroke="#7b8cff" strokeWidth="0.5" opacity="0.3" />
      </svg>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center" style={{ minHeight: '70vh' }}>
          {/* Left: Headline, subtitle, buttons */}
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-start" style={{ minHeight: '400px' }}>
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ display: 'inline-block', background: 'rgba(32,40,60,0.85)', color: '#fff', borderRadius: '2rem', padding: '0.7rem 2.2rem', fontWeight: 500, fontSize: '1.1rem', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', border: '1px solid #3b4260', letterSpacing: 0.5 }}>
                  <i className="fas fa-bolt me-2 text-warning"></i>Transforming Careers Since 2023
                </span>
              </div>
              <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: '#fff', marginBottom: '1.2rem', lineHeight: 1.08, textAlign: 'left' }}>
                Where <span style={{ background: 'linear-gradient(90deg, #7b8cff 0%, #3ecbff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Innovation<br />Meets Excellence</span>
              </h1>
              <p style={{ color: '#dbeafe', fontSize: '1.25rem', maxWidth: 600, fontWeight: 400, textAlign: 'left', marginBottom: '2.2rem' }}>
                We don't just teach skills – we architect careers, forge industry leaders, and create the data professionals who shape tomorrow's digital landscape.
              </p>
              <div className="d-flex flex-column flex-md-row gap-3 mb-2">
                <a href="#story" className="btn btn-primary btn-lg px-5" style={{ fontWeight: 600, fontSize: '1.15rem', boxShadow: '0 4px 24px rgba(90,110,234,0.10)' }}>
                  Discover Our Story <i className="fas fa-arrow-down ms-2"></i>
                </a>
                <a href="#team" className="btn btn-outline-light btn-lg px-5" style={{ fontWeight: 600, fontSize: '1.15rem', border: '2px solid #7b8cff', color: '#fff' }}>
                  <i className="fas fa-users me-2"></i> Meet Our Experts
                </a>
              </div>
            </div>
          </div>
          {/* Right: Metrics Circle */}
          <div className="col-lg-5 d-flex flex-column justify-content-center align-items-end text-end mt-5 mt-lg-0">
            <div
              className="metrics-circle d-flex flex-column justify-content-center align-items-center"
              style={{
                width: 320,
                height: 320,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 60% 40%, #233a5a 70%, #3ecbff 100%)',
                boxShadow: '0 0 64px 0 #3ecbff44, 0 4px 32px #1e293b',
                position: 'relative',
                marginRight: 0,
                marginLeft: 'auto',
                padding: '2.5rem 1.5rem',
                maxWidth: '90vw',
                minWidth: 220,
              }}
            >
              <div className="d-flex flex-column align-items-center gap-4 w-100">
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#3ecbff', lineHeight: 1 }}>500+</div>
                  <div style={{ color: '#e0e7ef', fontSize: '1.1rem', fontWeight: 400 }}>Careers Transformed</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#3ecbff', lineHeight: 1 }}>95%</div>
                  <div style={{ color: '#e0e7ef', fontSize: '1.1rem', fontWeight: 400 }}>Success Rate</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#3ecbff', lineHeight: 1 }}>100%</div>
                  <div style={{ color: '#e0e7ef', fontSize: '1.1rem', fontWeight: 400 }}>Job Placement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Journey/Story Section */}
    <section id="story" className="about-journey-section py-5 bg-light" style={{ scrollMarginTop: '100px' }}>
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Our <span className="gradient-text">Journey</span></h2>
          <p className="section-subtitle">From vision to reality, shaping the future of professional development</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline position-relative">
              {/* Timeline Items */}
              <div className="timeline-item left mb-5">
                <div className="timeline-icon bg-primary text-white"><i className="fas fa-lightbulb"></i></div>
                <div className="timeline-content bg-white shadow rounded p-4">
                  <div className="timeline-year fw-bold text-primary mb-2">2023</div>
                  <h4 className="fw-bold mb-2">The Vision</h4>
                  <p>IntelliNavix was born from a revolutionary idea: to bridge the gap between theoretical knowledge and real-world industry demands, creating a new standard for professional development.</p>
                </div>
              </div>
              <div className="timeline-item right mb-5">
                <div className="timeline-icon bg-success text-white"><i className="fas fa-rocket"></i></div>
                <div className="timeline-content bg-white shadow rounded p-4">
                  <div className="timeline-year fw-bold text-success mb-2">2023</div>
                  <h4 className="fw-bold mb-2">The Launch</h4>
                  <p>We launched our first cohort with a mission to transform ordinary professionals into extraordinary data experts, focusing on hands-on experience and industry-relevant skills.</p>
                </div>
              </div>
              <div className="timeline-item left mb-5">
                <div className="timeline-icon bg-warning text-white"><i className="fas fa-chart-line"></i></div>
                <div className="timeline-content bg-white shadow rounded p-4">
                  <div className="timeline-year fw-bold text-warning mb-2">2024</div>
                  <h4 className="fw-bold mb-2">The Growth</h4>
                  <p>Expanded our curriculum to include advanced analytics, business intelligence, and project management, establishing partnerships with leading industry players.</p>
                </div>
              </div>
              <div className="timeline-item right mb-0">
                <div className="timeline-icon bg-info text-white"><i className="fas fa-crown"></i></div>
                <div className="timeline-content bg-white shadow rounded p-4">
                  <div className="timeline-year fw-bold text-info mb-2">2025</div>
                  <h4 className="fw-bold mb-2">The Excellence</h4>
                  <p>Today, we stand as the premier destination for career transformation, with a 95% success rate and graduates leading in top organizations worldwide.</p>
                </div>
              </div>
              {/* Timeline Line */}
              <div className="timeline-line position-absolute top-0 start-50 translate-middle-x h-100 bg-gradient" style={{ width: 4, zIndex: 0, background: 'linear-gradient(180deg, #06b6d4, #0891b2)' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="about-features-section py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Why Choose <span className="gradient-text">IntelliNavix</span></h2>
          <p className="section-subtitle">Experience the difference that sets us apart</p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <motion.div
              className="feature-card shadow rounded p-4 text-center h-100"
              style={{ background: '#232b3e', color: '#fff', cursor: 'pointer', boxShadow: '0 4px 24px rgba(35,58,94,0.10)' }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(62,203,255,0.18)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="feature-icon mb-3 text-primary fs-1"><i className="fas fa-brain"></i></div>
              <h4 className="fw-bold mb-2" style={{ color: '#fff' }}>Expert Instructors</h4>
              <p className="mb-0" style={{ color: '#e0e7ef' }}>Learn from industry veterans with decades of hands-on experience in data analytics, business analysis, cloud technologies, and project management. Gain real-world insights and emerging trends knowledge.</p>
            </motion.div>
          </div>
          <div className="col-md-6 col-lg-3">
            <motion.div
              className="feature-card shadow rounded p-4 text-center h-100"
              style={{ background: '#232b3e', color: '#fff', cursor: 'pointer', boxShadow: '0 4px 24px rgba(35,58,94,0.10)' }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(62,203,255,0.18)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="feature-icon mb-3 text-success fs-1"><i className="fas fa-project-diagram"></i></div>
              <h4 className="fw-bold mb-2" style={{ color: '#fff' }}>Hands-on Experience</h4>
              <p className="mb-0" style={{ color: '#e0e7ef' }}>Master practical skills through real-world projects and simulations. Our experiential approach builds confidence and prepares you for actual workplace challenges in the ICT industry.</p>
            </motion.div>
          </div>
          <div className="col-md-6 col-lg-3">
            <motion.div
              className="feature-card shadow rounded p-4 text-center h-100"
              style={{ background: '#232b3e', color: '#fff', cursor: 'pointer', boxShadow: '0 4px 24px rgba(35,58,94,0.10)' }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(62,203,255,0.18)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="feature-icon mb-3 text-warning fs-1"><i className="fas fa-users-cog"></i></div>
              <h4 className="fw-bold mb-2" style={{ color: '#fff' }}>Personalized Coaching</h4>
              <p className="mb-0" style={{ color: '#e0e7ef' }}>Receive tailored guidance and one-on-one mentoring throughout your journey. Our personalized approach ensures you reach your full potential with customized learning experiences.</p>
            </motion.div>
          </div>
          <div className="col-md-6 col-lg-3">
            <motion.div
              className="feature-card shadow rounded p-4 text-center h-100"
              style={{ background: '#232b3e', color: '#fff', cursor: 'pointer', boxShadow: '0 4px 24px rgba(35,58,94,0.10)' }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(62,203,255,0.18)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="feature-icon mb-3 text-info fs-1"><i className="fas fa-handshake"></i></div>
              <h4 className="fw-bold mb-2" style={{ color: '#fff' }}>Interview Support</h4>
              <p className="mb-0" style={{ color: '#e0e7ef' }}>Comprehensive career support including CV guidance, interview preparation, and mock interviews. We equip you with the confidence to secure your dream role in the competitive ICT market.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="about-team-section py-5 bg-light" id="team" style={{ scrollMarginTop: '100px' }}>
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Meet Our <span className="gradient-text">Expert Team</span></h2>
          <p className="section-subtitle">Industry leaders dedicated to your success</p>
        </div>
        <div className="row g-4 justify-content-center">
          {/* Expert Team Members */}
          {[
            {
              name: 'Dr. Yakubu Balogun',
              title: 'Founder & Lead Data Strategist',
              img: `${import.meta.env.BASE_URL}assets/Dr_Yakubu.png`,
              bio: '15+ years of experience in data analytics and business intelligence. Former Microsoft senior consultant with expertise in transforming organizational data strategies.',
              tags: ['Data Strategy', 'Business Intelligence', 'Machine Learning'],
              color: 'primary',
            },
            {
              name: 'Mr. Anthony Mbata',
              title: 'Senior Business Analyst',
              img: `${import.meta.env.BASE_URL}assets/tony.png`,
              bio: '12 years of experience in business analysis and process optimization. Specialized in bridging technical solutions with business requirements.',
              tags: ['Business Analysis', 'Process Design', 'Stakeholder Management'],
              color: 'success',
            },
            {
              name: 'Mrs. Yakubu',
              title: 'Project Management Director',
              img: `${import.meta.env.BASE_URL}assets/Dr_Yakubu.png`,
              bio: '10+ years leading complex digital transformation projects. Certified PMP with expertise in agile methodologies and organizational change management.',
              tags: ['Project Management', 'Agile/Scrum', 'Digital Transformation'],
              color: 'warning',
            },
            {
              name: 'Ms. Sarah Johnson',
              title: 'Lead Data Scientist',
              img: `${import.meta.env.BASE_URL}/assets/team-2.jpg`,
              bio: 'Expert in predictive analytics and AI-driven solutions. Passionate about mentoring future data leaders.',
              tags: ['AI', 'Predictive Analytics', 'Mentorship'],
              color: 'info',
            },
          ].map((member) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={member.name}>
              <div className="team-card h-100 d-flex flex-column align-items-center text-center bg-white shadow rounded-4 p-3">
                <div className="team-img-container position-relative mb-3">
                  <img src={member.img} alt={member.name} className="team-img" />
                  <div className="team-img-overlay d-flex flex-row align-items-center justify-content-center"
                    style={{ background: member.color === 'primary' ? 'rgba(13,110,253,0.55)'
                      : member.color === 'success' ? 'rgba(25,135,84,0.55)'
                      : member.color === 'warning' ? 'rgba(255,193,7,0.55)'
                      : member.color === 'info' ? 'rgba(13,202,240,0.55)'
                      : member.color === 'secondary' ? 'rgba(108,117,125,0.55)'
                      : member.color === 'danger' ? 'rgba(220,53,69,0.55)'
                      : 'rgba(124,58,237,0.55)'
                    }}>
                    <a href="#" className="team-social-link linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="team-social-link twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="mailto:info@intellinavix.com" className="team-social-link email" aria-label="Email"><i className="fas fa-envelope"></i></a>
                  </div>
                </div>
                <h5 className="fw-bold mb-1">{member.name}</h5>
                <p className={`member-role text-${member.color} mb-2`}>{member.title}</p>
                <p className="member-bio small mb-2">{member.bio}</p>
                <div className="member-expertise d-flex flex-wrap gap-2 justify-content-center">
                  {member.tags.map(tag => (
                    <span key={tag} className={`expertise-tag badge bg-${member.color} bg-opacity-10 text-${member.color}`}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Administrative & Support Team */}
        <div className="section-header text-center mt-5 mb-4">
          <h3 className="section">Administrative & Support Team</h3>
        </div>
        <div className="row g-4 justify-content-center">
          {[
            {
              name: 'Ms. Jane Doe',
              title: 'Office Administrator',
              img: `${import.meta.env.BASE_URL}/assets/team-4.jpg`,
              bio: 'Ensures smooth daily operations and provides top-notch support to staff and students.',
              tags: ['Administration', 'Support'],
              color: 'danger',
            },
            {
              name: 'Mr. John Smith',
              title: 'Technical Support Specialist',
              img: `${import.meta.env.BASE_URL}/assets/team-1.jpg`,
              bio: 'Expert in troubleshooting and technical support for all our digital platforms.',
              tags: ['Tech Support', 'Customer Service'],
              color: 'primary',
            },
            {
              name: 'Mr. Samuel Lee',
              title: 'Senior Data Engineer',
              img: `${import.meta.env.BASE_URL}/assets/team-3.jpg`,
              bio: 'Specialist in big data infrastructure and cloud solutions. Loves building scalable data pipelines.',
              tags: ['Big Data', 'Cloud', 'Pipelines'],
              color: 'secondary',
            },
            {
              name: 'Mrs. Iyanuoluwa Orimolade',
              title: 'Office Administrator',
              img: `${import.meta.env.BASE_URL}/assets/team-4.jpg`,
              bio: 'Ensures smooth daily operations and provides top-notch support to staff and students.',
              tags: ['Administration', 'Support'],
              color: 'purple',
            },
          ].map((member) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={member.name}>
              <div className="team-card h-100 d-flex flex-column align-items-center text-center bg-white shadow rounded-4 p-3">
                <div className="team-img-container position-relative mb-3">
                  <img src={member.img} alt={member.name} className="team-img" />
                  <div className="team-img-overlay d-flex flex-row align-items-center justify-content-center"
                    style={{ background: member.color === 'primary' ? 'rgba(13,110,253,0.55)'
                      : member.color === 'success' ? 'rgba(25,135,84,0.55)'
                      : member.color === 'warning' ? 'rgba(255,193,7,0.55)'
                      : member.color === 'info' ? 'rgba(13,202,240,0.55)'
                      : member.color === 'secondary' ? 'rgba(108,117,125,0.55)'
                      : member.color === 'danger' ? 'rgba(220,53,69,0.55)'
                      : 'rgba(124,58,237,0.55)'
                    }}>
                    <a href="#" className="team-social-link linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="team-social-link twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="mailto:info@intellinavix.com" className="team-social-link email" aria-label="Email"><i className="fas fa-envelope"></i></a>
                  </div>
                </div>
                <h5 className="fw-bold mb-1">{member.name}</h5>
                <p className={`member-role text-${member.color} mb-2`}>{member.title}</p>
                <p className="member-bio small mb-2">{member.bio}</p>
                <div className="member-expertise d-flex flex-wrap gap-2 justify-content-center">
                  {member.tags.map(tag => (
                    <span key={tag} className={`expertise-tag badge bg-${member.color} bg-opacity-10 text-${member.color}`}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="about-cta-section py-5">
      <div className="container">
        <div className="cta-content text-center">
          <h2 className="fw-bold mb-3">Ready to Transform Your Career?</h2>
          <p className="mb-4">Join the next generation of data professionals and unlock your potential with IntelliNavix</p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <a href="/#courses" className="btn btn-primary btn-lg px-5">Explore Courses</a>
            <a href="/contact" className="btn btn-outline-primary btn-lg px-5">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;

<style>{teamCardStyles}</style> 