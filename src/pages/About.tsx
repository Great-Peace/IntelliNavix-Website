import { motion } from 'framer-motion';
import '../styles/team-section.css';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

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
  object-position: top;
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

const teamMembers = [
  {
    name: 'Anthony Mbata',
    title: 'Principal Data Analysis Trainer at IntelliNavix Limited',
    img: import.meta.env.BASE_URL + 'assets/tony.png',
    summary: 'Principal Data Analysis Trainer specializing in SQL, Python, and Excel for data professionals. 19+ years of IT and data experience across multiple industries.',
    full: `Anthony Mbata is a Principal Data Analysis Trainer at IntelliNavix Limited, specialising in SQL training, Python for data analysis, and Excel for data professionals. He holds a Master's degree in Data Science and is currently pursuing a PhD in Data Engineering. With over 19 years of extensive IT and data-related experience.\nAnthony has worked across multiple industries, including oil and gas, financial services, artificial intelligence, and energy. Anthony offers customised, flexible online training sessions designed to help professionals and career changers develop practical skills in data analysis, data manipulation, and data visualisation using tools like SQL, Python, and Excel. His training focuses on real-world applications to prepare learners for successful careers in data analysis, data science, data engineering, and analytics roles.\nIn addition to technical training, Anthony provides expert career guidance, CV reviews, interview preparation, and confidence-building coaching to support learners in transitioning into data roles and thriving in the competitive data industry.`,
    linkedin: 'https://www.linkedin.com/in/anthony-mbata/',
    twitter: 'https://twitter.com/anthony_mbata',
    email: 'mailto:anthony.mbata@intellinavix.com'
  },
  {
    name: 'Dr. Yakubu Balogun',
    title: 'Lead Data Analysis Trainer | Data Modeller| BI Consultant',
    img: import.meta.env.BASE_URL + 'assets/Yakubu.png',
    summary: 'Microsoft Certified Data Analyst with 10+ years of experience in data modeling, automation, and analytics. Leads data analytics training at IntelliNavix.',
    full: `Dr. Yakubu Balogun is a Microsoft Certified Data Analyst and seasoned data professional with over 10  years of experience driving value through data modeling, automation, and advanced analytics. At IntelliNavix Careers, he leads data analytics training programs designed to empower professionals with the skills and tools needed to thrive in today's data-driven economy.\nWith a proven track record across government, energy, and health sectors - including the UK Civil Service, Wood Mackenzie, and Shell - Yakubu combines deep technical expertise in Power BI, Python, SQL, and cloud platforms (AWS, Azure, Snowflake) with a passion for real-world problem solving. His work includes building scalable data pipelines, developing forecasting models, and creating interactive dashboards that deliver actionable insights to stakeholders.\nHe holds a PhD in Engineering from Robert Gordon University in Aberdeen and has delivered research and analytics projects on public health, energy forecasting, and operations optimization. He is a strong advocate for data literacy and AI adoption, especially within education and emerging economies, and continues to mentor the next generation of data leaders through his workshops, mentorships, and online platforms.`,
    linkedin: 'https://www.linkedin.com/in/dryakububalogun/',
    twitter: 'https://x.com/Yakubu_PhD',
    email: 'mailto:yakubu.balogun@intellinavix.com'
  },
  {
    name: 'Augustine Onovroke',
    title: 'Business Support Manager | Business Analyst & Project Manager',
    img: import.meta.env.BASE_URL + 'assets/augustine.jpg',
    summary: 'Business Support Manager with 20+ years in business analysis, project management, and operations support. Leads business analysis and PM training.',
    full: `Augustine Onovroke is a strategic and results-driven professional with over 20 years with a strong background in business analysis, project management, and operations support. He has successfully led initiatives that enhance process efficiency, align strategic goals, and deliver measurable impact across diverse sectors.\nAt IntelliNavix Careers, Augustine leads business analysis and project management training programs designed to equip professionals with practical tools, methodologies, and frameworks for driving change and delivering value. His training approach bridges theory with real-world application, preparing learners to succeed in dynamic and complex work environments.\nAugustine is passionate about fostering a problem-solving mindset and empowering professionals to take ownership of projects from concept to completion. Backed by a formal business management degree in Business Management from the Metropolitan School of Business & Management and hands-on experience, he brings clarity, structure, and confidence to every learning journey.`,
    linkedin: 'https://www.linkedin.com/in/augustine-onovroke/',
    twitter: 'https://twitter.com/augustine_onovroke',
    email: 'mailto:augustine.onovroke@intellinavix.com'
  },
  {
    name: 'Iyanuoluwa Orimolade',
    title: 'Data & Career Strategy Facilitator',
    img: import.meta.env.BASE_URL + 'assets/iyanuoluwa.jpg',
    summary: 'Data & Career Strategy Facilitator with experience guiding early-stage professionals and career changers. Focused on interactive, learner-centered coaching.',
    full: `Iyanuoluwa Orimolade is a dedicated and empathetic professional with years of experience in client-facing roles, guiding early-stage professionals as well as those transitioning with clarity, confidence, and measurable success. Her client-centered approach emphasizes interactive and learner-focused strategies, empowering individuals to set and achieve meaningful career and personal milestones.\nAs a career strategy facilitator with IntelliNavix Careers, Iyanuoluwa works one-on-one with emerging talent and career changers, delivering structured coaching sessions that build resilience, sharpen goals, and elevate professional competencies. Known for her calm demeanor and genuine positivity, she fosters environments where clients feel supported to grow, pivot, and excel.\nHer extensive experience in professional development includes designing workshops, crafting personalized career roadmaps, and leveraging evidence-based coaching methods to support effective decision-making. With a Master's degree in Geosciences from the University of Aberdeen, she is proficient at helping clients navigate role transitions, build confidence in their expertise, and develop long-term strategies for success.`,
    linkedin: 'https://www.linkedin.com/in/iyanuoluwa-orimolade/',
    twitter: 'https://x.com/Iyanuorim',
    email: 'mailto:iyanu.orimolade@intellinavix.com'
  },
];

const About = () => {
  const [openIdx, setOpenIdx] = useState<number|null>(null);
  return (
    <>
      <Helmet>
        <title>IntelliNavix | About</title>
      </Helmet>
      {/* Modern Hero Section */}
      <section className="about-hero-section position-relative d-flex align-items-center" style={{ minHeight: '80vh', background: 'linear-gradient(120deg, #1e293b 0%, #233a5a 100%)', overflow: 'hidden', paddingTop: '80px' }}>
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
          <div className="row align-items-center" style={{ minHeight: '60vh' }}>
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
            {/* Right: Hero Image */}
            <div className="col-lg-5 d-flex flex-column justify-content-center align-items-end text-end mt-5 mt-lg-0">
              <img
                src={import.meta.env.BASE_URL + 'assets/about_us.png'}
                alt="About IntelliNavix"
                style={{
                  width: 320,
                  height: 320,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  boxShadow: '0 0 64px 0 #3ecbff44, 0 4px 32px #1e293b',
                  maxWidth: '90vw',
                  minWidth: 220,
                  background: '#f5f6fa',
                  border: '6px solid #fff',
                }}
              />
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
                    <p>IntelliNavix was founded in 2023, but our journey began over a decade ago - empowering professionals with transformative training and career guidance. Born from a revolutionary idea, we bridge the gap between theoretical knowledge and real-world industry demands, setting a new standard for professional development.</p>
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
                    <p>Today, we stand as the premier destination for career transformation, with our trainees working in leading organizations in the UK and across the globe.</p>
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
                style={{ background: '#f8fafc', color: '#1e293b', cursor: 'pointer', boxShadow: '0 4px 24px rgba(35,58,94,0.10)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(62,203,255,0.18)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="feature-icon mb-3 text-primary fs-1"><i className="fas fa-brain"></i></div>
                <h4 className="fw-bold mb-2" style={{ color: '#1e293b' }}>Expert Instructors</h4>
                <p className="mb-0" style={{ color: '#334155' }}>Learn from industry veterans with decades of hands-on experience in data science, data analytics, data modelling, business analysis, cloud technologies, and project management spanning across the energy, academia, financial and government sector. Our instructor-led trainings last for 10 weeks and recorded with trainees given life-time access to the recordings.</p>
              </motion.div>
            </div>
            <div className="col-md-6 col-lg-3">
              <motion.div
                className="feature-card shadow rounded p-4 text-center h-100"
                style={{ background: '#f8fafc', color: '#1e293b', cursor: 'pointer', boxShadow: '0 4px 24px rgba(35,58,94,0.10)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(62,203,255,0.18)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="feature-icon mb-3 text-success fs-1"><i className="fas fa-project-diagram"></i></div>
                <h4 className="fw-bold mb-2" style={{ color: '#1e293b' }}>Hands-on Experience</h4>
                <p className="mb-0" style={{ color: '#334155' }}>All our instructors work actively across these sectors and always bring our work experience to enhance our training deliveries. You will have 12 weeks practical project time to master relevant skills through real-world projects and simulations building needed confidence and competence to prepare you for actual workplace challenges in the any industry.</p>
              </motion.div>
            </div>
            <div className="col-md-6 col-lg-3">
              <motion.div
                className="feature-card shadow rounded p-4 text-center h-100"
                style={{ background: '#f8fafc', color: '#1e293b', cursor: 'pointer', boxShadow: '0 4px 24px rgba(35,58,94,0.10)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(62,203,255,0.18)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="feature-icon mb-3 text-warning fs-1"><i className="fas fa-users-cog"></i></div>
                <h4 className="fw-bold mb-2" style={{ color: '#1e293b' }}>Personalized Coaching</h4>
                <p className="mb-0" style={{ color: '#334155' }}>You will receive tailored guidance and one-on-one mentoring throughout your journey. We work with you to leverage on your experience and academic degrees in charting the course for your career direction. Our personalized approach ensures you reach your full potential with customized learning experiences.</p>
              </motion.div>
            </div>
            <div className="col-md-6 col-lg-3">
              <motion.div
                className="feature-card shadow rounded p-4 text-center h-100"
                style={{ background: '#f8fafc', color: '#1e293b', cursor: 'pointer', boxShadow: '0 4px 24px rgba(35,58,94,0.10)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(62,203,255,0.18)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="feature-icon mb-3 text-info fs-1"><i className="fas fa-handshake"></i></div>
                <h4 className="fw-bold mb-2" style={{ color: '#1e293b' }}>Interview Support</h4>
                <p className="mb-0" style={{ color: '#334155' }}>We run sessions on job applications, and interview readiness. Our comprehensive career support including CV guidance, interview preparation, and mock interviews. We equip you with the confidence to secure your dream role in the competitive job market.</p>
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
            {teamMembers.map((member, idx) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={member.name}>
                <div className="team-card h-100 d-flex flex-column align-items-center text-center bg-white shadow rounded-4 p-3" style={{padding: 0}}>
                  <div className="team-img-container position-relative" style={{ width: '100%', height: 260, marginBottom: 0, borderTopLeftRadius: 16, borderTopRightRadius: 16, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, overflow: 'hidden' }}>
                    <img src={member.img} alt={member.name} className="team-img" style={{ height: '320px', width: '100%', objectFit: 'cover', objectPosition: 'center 10%', borderTopLeftRadius: 16, borderTopRightRadius: 16, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, background: 'transparent' }} />
                    <div className="team-overlay team-img-overlay d-flex flex-row align-items-center justify-content-center">
                      <a href={member.linkedin} className="team-social-link linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                      <a href={member.twitter} className="team-social-link twitter" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                      <a href={member.email} className="team-social-link email" aria-label="Email" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
                    </div>
                  </div>
                  <div className="p-3 w-100 d-flex flex-column align-items-center">
                    <h5 className="fw-bold mb-1">{member.name}</h5>
                    <p className="member-role text-primary mb-2" style={{ fontWeight: 500 }}>{member.title}</p>
                    <p className="member-bio small mb-2">{member.summary}</p>
                    <button className="btn btn-outline-primary btn-sm mt-auto" onClick={() => setOpenIdx(idx)}>Read More</button>
                  </div>
                  {/* Modal/Dialog */}
                  {openIdx === idx && (
                    <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.4)' }} tabIndex={-1}>
                      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: 700, width: '90vw' }}>
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">{member.name}</h5>
                            <button type="button" className="btn-close" onClick={() => setOpenIdx(null)}></button>
                          </div>
                          <div className="modal-body d-flex flex-row align-items-start" style={{ gap: 24 }}>
                            <img src={member.img} alt={member.name} style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                            <div className="text-start" style={{ flex: 1 }}>
                              <p className="text-muted mb-2" style={{ fontWeight: 500 }}>{member.title}</p>
                              {member.full.split(/\n+/).map((para, i) => (
                                <p key={i} style={{ marginBottom: 10 }}>{para.trim()}</p>
                              ))}
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button className="btn btn-secondary" onClick={() => setOpenIdx(null)}>Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
};

export default About;

<style>{teamCardStyles}</style> 