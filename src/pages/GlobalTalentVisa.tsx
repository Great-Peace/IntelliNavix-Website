import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';

const GlobalTalentVisa = () => (
  <>
    <Helmet>
      <title>IntelliNavix | Global Talent Visa</title>
    </Helmet>
    <Navbar />
    {/* Hero Section */}
    <section className="hero" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)', color: 'white', minHeight: '100vh' }}>
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="hero-badge mb-4">
                <span className="badge-content" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
                  <i className="fas fa-award me-2"></i>
                  Expert UK Global Talent Visa Support
                </span>
              </div>
              <h1 className="hero-title font-display" style={{ color: 'white' }}>
                UK Global Talent Visa
                <span style={{ background: 'linear-gradient(135deg, #06b6d4, #0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Support Services</span>
              </h1>
              <p className="hero-subtitle" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.3rem' }}>
                Helping You Navigate the Path to Success with expert guidance from Dr. Yakubu Balogun
              </p>
              <div className="hero-buttons">
                <a href="#services" className="btn btn-light btn-lg" style={{ color: '#1e3a8a' }}>
                  <i className="fas fa-rocket me-2"></i>View Services
                </a>
                <a href="#about" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-user-tie me-2"></i>About Dr. Yakubu
                </a>
              </div>
              <div className="hero-stats mt-5">
                <div className="row">
                  <div className="col-4">
                    <div className="stat-mini">
                      <div className="stat-mini-number" style={{ color: '#06b6d4' }}>95%+</div>
                      <div className="stat-mini-label" style={{ color: 'rgba(255,255,255,0.8)' }}>Success Rate</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-mini">
                      <div className="stat-mini-number" style={{ color: '#06b6d4' }}>3</div>
                      <div className="stat-mini-label" style={{ color: 'rgba(255,255,255,0.8)' }}>Service Tiers</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-mini">
                      <div className="stat-mini-number" style={{ color: '#06b6d4' }}>PhD</div>
                      <div className="stat-mini-label" style={{ color: 'rgba(255,255,255,0.8)' }}>Expert Guide</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-visual">
              <div className="hero-image-container">
                <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: 20, padding: '3rem', textAlign: 'center' }}>
                  <i className="fas fa-passport" style={{ fontSize: '4rem', color: '#06b6d4', marginBottom: '2rem' }}></i>
                  <h3 style={{ color: 'white', marginBottom: '1rem' }}>From Application to Success</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
                    Dr. Yakubu successfully secured his own Global Talent Visa and transitioned to ILR. Now he helps others achieve the same success.
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <i className="fas fa-check-circle" style={{ color: '#06b6d4', fontSize: '1.5rem' }}></i>
                      <div style={{ color: 'white', fontWeight: 600, marginTop: '0.5rem', fontSize: '0.9rem' }}>Personal Experience</div>
                    </div>
                    <div>
                      <i className="fas fa-users" style={{ color: '#06b6d4', fontSize: '1.5rem' }}></i>
                      <div style={{ color: 'white', fontWeight: 600, marginTop: '0.5rem', fontSize: '0.9rem' }}>Proven Track Record</div>
                    </div>
                    <div>
                      <i className="fas fa-handshake" style={{ color: '#06b6d4', fontSize: '1.5rem' }}></i>
                      <div style={{ color: 'white', fontWeight: 600, marginTop: '0.5rem', fontSize: '0.9rem' }}>Tailored Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* About Dr. Yakubu Section */}
    <section id="about" className="py-6" style={{ background: 'white' }}>
      <div className="container">
        <div className="section-header text-center mb-5">
          <br /><br />
          <h2 className="section-title font-display">
            About <span className="gradient-text">Dr. Yakubu Balogun</span>
          </h2>
          <p className="section-subtitle">
            Your trusted guide with personal Global Talent Visa experience
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="text-center">
              <img src={`${import.meta.env.BASE_URL}assets/Yakubu.png`} alt="Dr. Yakubu Balogun" style={{ width: 300, height: 300, objectFit: 'cover', borderRadius: 20, boxShadow: 'var(--shadow-xl)' }} />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="about-content" style={{ paddingLeft: '2rem' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--gray-700)', marginBottom: '1.5rem' }}>
                Hello, I'm <strong>Dr. Yakubu Balogun</strong>, a seasoned professional with extensive expertise in navigating the UK Global Talent Visa process and building successful careers in the UK. After completing my PhD, I applied for and secured my endorsement for the UK Global Talent Visa. I held this visa for three years before successfully transitioning to Indefinite Leave to Remain (ILR).
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--gray-700)', marginBottom: '1.5rem' }}>
                Over the years, I've supported numerous individuals from diverse sectors—including technology, academia, and the creative industries—to achieve their UK Global Talent Visa endorsements. My hands-on experience, combined with an in-depth understanding of UK immigration policies, uniquely positions me to guide applicants through this often-complex journey.
              </p>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="achievement-item d-flex align-items-center mb-3">
                    <i className="fas fa-graduation-cap text-primary me-3" style={{ fontSize: '1.5rem' }}></i>
                    <div>
                      <strong>PhD Graduate</strong>
                      <br /><small className="text-muted">Personal visa experience</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="achievement-item d-flex align-items-center mb-3">
                    <i className="fas fa-home text-primary me-3" style={{ fontSize: '1.5rem' }}></i>
                    <div>
                      <strong>ILR Success</strong>
                      <br /><small className="text-muted">Successful transition</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="achievement-item d-flex align-items-center mb-3">
                    <i className="fas fa-users text-primary me-3" style={{ fontSize: '1.5rem' }}></i>
                    <div>
                      <strong>Multiple Sectors</strong>
                      <br /><small className="text-muted">Tech, academia, creative</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="achievement-item d-flex align-items-center mb-3">
                    <i className="fas fa-chart-line text-primary me-3" style={{ fontSize: '1.5rem' }}></i>
                    <div>
                      <strong>Proven Results</strong>
                      <br /><small className="text-muted">High success rate</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Services Section */}
    <section id="services" className="py-6" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      <div className="container">
        <div className="section-header text-center mb-5">
          <br /><br />
          <h2 className="section-title font-display">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Choose the support level that best fits your needs and timeline
          </p>
        </div>
        <div className="row g-4">
          {/* Basic Service */}
          <div className="col-lg-4">
            <div className="service-card h-100" style={{ background: 'white', borderRadius: 20, padding: '2rem', boxShadow: 'var(--shadow-md)', border: '2px solid var(--gray-200)', transition: 'var(--transition)' }}>
              <div className="service-number" style={{ width: 60, height: 60, background: 'var(--gradient-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '1.5rem', marginBottom: '1.5rem' }}>1</div>
              <h3 style={{ color: 'var(--gray-900)', marginBottom: '1rem' }}>Basic Service</h3>
              <div className="price-tag" style={{ color: 'var(--primary)', fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>£500</div>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
                Ideal for applicants who have a robust professional portfolio and only need help navigating the application process. <strong>Ready to apply in 4 weeks or less.</strong>
              </p>
              <div className="features">
                <h5 style={{ color: 'var(--gray-900)', marginBottom: '1rem' }}>What You'll Get:</h5>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'start' }}>
                    <i className="fas fa-check text-success me-2" style={{ marginTop: '0.25rem' }}></i>
                    <span><strong>Comprehensive Document Review:</strong> Detailed review of personal statement, recommendation letters, and evidence documents</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'start' }}>
                    <i className="fas fa-check text-success me-2" style={{ marginTop: '0.25rem' }}></i>
                    <span><strong>Targeted Feedback:</strong> Personalized recommendations to align documents with endorsement criteria</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <a href="mailto:yakubu.balogun@intellinavix.com?subject=Basic Service Inquiry" className="btn btn-primary w-100">
                  Choose Basic Service
                </a>
              </div>
            </div>
          </div>
          {/* Standard Service */}
          <div className="col-lg-4">
            <div className="service-card h-100 featured" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', borderRadius: 20, padding: '2rem', boxShadow: 'var(--shadow-xl)', color: 'white', transform: 'scale(1.05)', position: 'relative' }}>
              <div className="popular-badge" style={{ position: 'absolute', top: -10, right: 20, background: '#fbbf24', color: 'var(--dark)', padding: '0.5rem 1rem', borderRadius: 20, fontWeight: 600, fontSize: '0.9rem' }}>Most Popular</div>
              <div className="service-number" style={{ width: 60, height: 60, background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '1.5rem', marginBottom: '1.5rem' }}>2</div>
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>Standard Service</h3>
              <div className="price-tag" style={{ color: 'white', fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>£1,500</div>
              <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>
                Includes all Basic Package services with additional support to strengthen your track record. <strong>Ready to apply in 3 months or less.</strong>
              </p>
              <div className="features">
                <h5 style={{ color: 'white', marginBottom: '1rem' }}>What You'll Get:</h5>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'start' }}>
                    <i className="fas fa-check me-2" style={{ marginTop: '0.25rem', color: '#06b6d4' }}></i>
                    <span>Everything from Basic Service</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'start' }}>
                    <i className="fas fa-check me-2" style={{ marginTop: '0.25rem', color: '#06b6d4' }}></i>
                    <span><strong>Portfolio Development Support:</strong> Review and strengthen your track record</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'start' }}>
                    <i className="fas fa-check me-2" style={{ marginTop: '0.25rem', color: '#06b6d4' }}></i>
                    <span><strong>Enhanced Writing Support:</strong> Expert assistance with compelling letters and statements</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <a href="mailto:yakubu.balogun@intellinavix.com?subject=Standard Service Inquiry" className="btn btn-light w-100" style={{ color: 'var(--primary)' }}>
                  Choose Standard Service
                </a>
              </div>
            </div>
          </div>
          {/* Premium Service */}
          <div className="col-lg-4">
            <div className="service-card h-100" style={{ background: 'white', borderRadius: 20, padding: '2rem', boxShadow: 'var(--shadow-md)', border: '2px solid var(--gray-200)', transition: 'var(--transition)' }}>
              <div className="service-number" style={{ width: 60, height: 60, background: 'var(--gradient-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '1.5rem', marginBottom: '1.5rem' }}>3</div>
              <h3 style={{ color: 'var(--gray-900)', marginBottom: '1rem' }}>Premium Service</h3>
              <div className="price-tag" style={{ color: 'var(--accent)', fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>£2,500</div>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
                All-inclusive package with full personalized guidance from start to finish. <strong>Ready for application in 5-6 months.</strong>
              </p>
              <div className="features">
                <h5 style={{ color: 'var(--gray-900)', marginBottom: '1rem' }}>What You'll Get:</h5>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'start' }}>
                    <i className="fas fa-check text-success me-2" style={{ marginTop: '0.25rem' }}></i>
                    <span>Everything from Basic and Standard Services</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'start' }}>
                    <i className="fas fa-check text-success me-2" style={{ marginTop: '0.25rem' }}></i>
                    <span><strong>Strategic Portfolio Development:</strong> Complete guidance on building robust track record</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'start' }}>
                    <i className="fas fa-check text-success me-2" style={{ marginTop: '0.25rem' }}></i>
                    <span><strong>Transition & Career Growth Advice:</strong> Leverage your visa for professional advancement</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <a href="mailto:yakubu.balogun@intellinavix.com?subject=Premium Service Inquiry" className="btn btn-primary w-100">
                  Choose Premium Service
                </a>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
      </div>
    </section>
    {/* Process Section */}
    <section className="py-6" style={{ background: 'white' }}>
      <div className="container">
        <div className="section-header text-center mb-5">
          <br /><br />
          <h2 className="section-title font-display">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="section-subtitle">
            A structured approach to maximize your success
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-6 col-lg-3 d-flex">
            <div className="process-step w-100">
              <div className="step-icon" style={{ width: 80, height: 80, background: 'var(--gradient-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <i className="fas fa-comments" style={{ color: 'white', fontSize: '1.8rem' }}></i>
              </div>
              <h4 style={{ color: 'var(--gray-900)', marginBottom: '1rem' }}>Initial Consultation</h4>
              <p style={{ color: 'var(--gray-600)' }}>A free 30 minute session to assess your background, understand your goals, and recommend the most suitable service tier.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex">
            <div className="process-step w-100">
              <div className="step-icon" style={{ width: 80, height: 80, background: 'var(--gradient-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <i className="fas fa-clipboard-check" style={{ color: 'white', fontSize: '1.8rem' }}></i>
              </div>
              <h4 style={{ color: 'var(--gray-900)', marginBottom: '1rem' }}>Onboarding</h4>
              <p style={{ color: 'var(--gray-600)' }}>You'll receive a personalized checklist of required documents, along with timelines for completing each step. I'll provide templates and resources to streamline the process.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex">
            <div className="process-step w-100">
              <div className="step-icon" style={{ width: 80, height: 80, background: 'var(--gradient-success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <i className="fas fa-hands-helping" style={{ color: 'white', fontSize: '1.8rem' }}></i>
              </div>
              <h4 style={{ color: 'var(--gray-900)', marginBottom: '1rem' }}>Application Support</h4>
              <p style={{ color: 'var(--gray-600)' }}>Depending on your chosen service, I'll guide you in crafting compelling documents, organizing evidence, and addressing any gaps in your profile.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex">
            <div className="process-step w-100">
              <div className="step-icon" style={{ width: 80, height: 80, background: 'var(--gradient-dark)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <i className="fas fa-headset" style={{ color: 'white', fontSize: '1.8rem' }}></i>
              </div>
              <h4 style={{ color: 'var(--gray-900)', marginBottom: '1rem' }}>Follow-Up Support</h4>
              <p style={{ color: 'var(--gray-600)' }}>After submission, I'll be available to address final queries or help you prepare for any additional steps.</p>
            </div>
          </div>
        </div>
        <br /><br />
      </div>
    </section>
    {/* Why Work With Me Section */}
    <section className="py-6" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      <div className="container">
        <div className="section-header text-center mb-5">
          <br /><br />
          <h2 className="section-title font-display">
            Why Work <span className="gradient-text">With Me?</span>
          </h2>
          <p className="section-subtitle">
            Personal experience combined with proven expertise
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="why-card text-center" style={{ background: 'white', borderRadius: 20, padding: '2.5rem', boxShadow: 'var(--shadow-md)', height: '100%' }}>
              <div className="why-icon" style={{ width: 80, height: 80, background: 'linear-gradient(135deg, #10b981, #059669)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <i className="fas fa-award" style={{ color: 'white', fontSize: '1.8rem' }}></i>
              </div>
              <h4 style={{ color: 'var(--gray-900)', marginBottom: '1rem' }}>Proven Expertise</h4>
              <p style={{ color: 'var(--gray-600)' }}>Successfully guided professionals from various sectors, including tech and academia, with a high success rate.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="why-card text-center" style={{ background: 'white', borderRadius: 20, padding: '2.5rem', boxShadow: 'var(--shadow-md)', height: '100%' }}>
              <div className="why-icon" style={{ width: 80, height: 80, background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <i className="fas fa-bullseye" style={{ color: 'white', fontSize: '1.8rem' }}></i>
              </div>
              <h4 style={{ color: 'var(--gray-900)', marginBottom: '1rem' }}>Tailored Approach</h4>
              <p style={{ color: 'var(--gray-600)' }}>Every application is unique, and advice tailored to your field and circumstances is provided.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="why-card text-center" style={{ background: 'white', borderRadius: 20, padding: '2.5rem', boxShadow: 'var(--shadow-md)', height: '100%' }}>
              <div className="why-icon" style={{ width: 80, height: 80, background: 'linear-gradient(135deg, #f59e0b, #d97706)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <i className="fas fa-chart-line" style={{ color: 'white', fontSize: '1.8rem' }}></i>
              </div>
              <h4 style={{ color: 'var(--gray-900)', marginBottom: '1rem' }}>Track Record of Success</h4>
              <p style={{ color: 'var(--gray-600)' }}>Many of my clients have secured endorsements and are now thriving in their fields in the UK.</p>
            </div>
          </div>
        </div>
        <br /><br />
      </div>
    </section>
    {/* CTA Section */}
    <section className="py-6" style={{ background: 'transparent' }}>
      <div className="container d-flex justify-content-center">
        <div
          className="cta-card w-100"
          style={{
            maxWidth: 900,
            margin: '0 auto',
            borderRadius: 8,
            boxShadow: '0 8px 32px rgba(30,58,138,0.10)',
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)',
            color: 'white',
            padding: '2.5rem 2rem',
          }}
        >
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Start Your UK Global Talent Visa Journey?</h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 0, fontSize: '1.1rem' }}>
                <strong>Together, we can simplify the process and maximize your chances of success.</strong> Book your free 30-minute consultation with Dr. Yakubu Balogun today.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0 d-flex flex-column align-items-lg-end align-items-start gap-3">
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0e-_JK0f_TEZq1jDoxrV4zw4xM1wgRp-tWbk9-hnkt0bMehxConeKOfackcmJEoYuM-MauiEe2" className="btn btn-light btn-lg me-0 me-md-3 mb-2 mb-md-0" style={{ color: '#1e3a8a', borderRadius: 8 }} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-calendar-check me-2"></i>Free Consultation
              </a>
              <a href="tel:+447873306741" className="btn btn-outline-light btn-lg" style={{ borderRadius: 8 }}>
                <i className="fas fa-phone me-2"></i>Send a WhatsApp Message
              </a>
            </div>
          </div>
          <div className="row mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            <div className="col-lg-6 d-flex align-items-center mt-2">
              <i className="fas fa-envelope me-2" style={{ color: '#06b6d4', fontSize: '1.2rem' }}></i>
              <span><strong>Email:</strong> yakubu.balogun@intellinavix.com</span>
            </div>
            <div className="col-lg-6 d-flex align-items-center mt-2">
              <i className="fas fa-phone me-2" style={{ color: '#06b6d4', fontSize: '1.2rem' }}></i>
              <span><strong>Phone:</strong> 07873306741</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default GlobalTalentVisa; 