import React, { useState, useEffect, useRef } from "react";

const steps = [
  {
    number: 1,
    icon: "fas fa-bullseye",
    title: "Assessment & Goal Setting",
    desc: "Identify your skills, strengths, and career aspirations through our comprehensive assessment",
    class: "step-details-1",
    angle: -90,
  },
  {
    number: 2,
    icon: "fas fa-graduation-cap",
    title: "Specialized Training",
    desc: "Receive tailored training in core skills and industry-relevant knowledge for your career path",
    class: "step-details-2",
    angle: -18,
  },
  {
    number: 3,
    icon: "fas fa-laptop-code",
    title: "Hands-On Projects",
    desc: "Apply your learning through real-world projects and practical simulations",
    class: "step-details-3",
    angle: 54,
  },
  {
    number: 4,
    icon: "fas fa-compass",
    title: "Career Guidance",
    desc: "Get personalized career guidance, resume building, and interview preparation",
    class: "step-details-4",
    angle: 126,
  },
  {
    number: 5,
    icon: "fas fa-users",
    title: "Continuous Mentoring",
    desc: "Join our community for ongoing mentorship and professional development support",
    class: "step-details-5",
    angle: 198,
  },
];

const CIRCLE_CENTER = { x: 250, y: 250 };
const RADIUS = 190;
const DOT_RADIUS = 8;
const ANIMATION_INTERVAL = 2000; // ms per step

const getDotPosition = (angleDeg: number) => {
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: CIRCLE_CENTER.x + RADIUS * Math.cos(angleRad),
    y: CIRCLE_CENTER.y + RADIUS * Math.sin(angleRad),
  };
};

const JourneySection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0); // 0-4
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [dotAngle, setDotAngle] = useState(steps[0].angle);
  const animationRef = useRef<number | null>(null);

  // Restore the step cycling logic to use setInterval every 4000ms (4 seconds)
  useEffect(() => {
    if (!paused) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  // Animate dot smoothly along the circle
  useEffect(() => {
    let start: number | null = null;
    let fromAngle = steps[currentStep].angle;
    let toAngle = steps[(currentStep + 1) % steps.length].angle;
    // Ensure shortest path (handle negative/positive wrap)
    if (toAngle - fromAngle > 180) toAngle -= 360;
    if (toAngle - fromAngle < -180) toAngle += 360;
    const duration = 4000;

    function animateDot(ts: number) {
      if (start === null) start = ts;
      const elapsed = ts - start;
      const t = Math.min(elapsed / duration, 1);
      const angle = fromAngle + (toAngle - fromAngle) * t;
      setDotAngle(angle);
      if (t < 1 && !paused) {
        animationRef.current = requestAnimationFrame(animateDot);
      } else {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }
    }

    if (!paused) {
      animationRef.current = requestAnimationFrame(animateDot);
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
    // eslint-disable-next-line
  }, [currentStep, paused]);

  // Pause on hover handlers
  const handleDialogMouseEnter = () => setPaused(true);
  const handleDialogMouseLeave = () => setPaused(false);

  // Dot position for current angle
  const dotPos = getDotPosition(dotAngle);

  // Form logic (same as before)
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    careerField: '',
    goals: '',
    terms: false,
    newsletter: false,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let checked = false;
    if (type === 'checkbox' && 'checked' in e.target) {
      checked = (e.target as HTMLInputElement).checked;
    }
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    setTimeout(() => {
      setLoading(false);
      setError('Sorry, something went wrong. Please try again later.');
    }, 800);
  };

  return (
    <section className="journey-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title font-display">
            Your Learning <span className="gradient-accent-text">Journey</span>
          </h2>
          <p className="section-subtitle text-light">
            From assessment to career success in 5 strategic steps
          </p>
        </div>
        <div className="journey-form-container">
          {/* Desktop: Side by side */}
          <div className="journey-visual-wrapper d-none d-md-flex">
            <div className="journey-circle-container" style={{ position: 'relative' }}>
              {/* Central Hub */}
              <div className="journey-hub">
                <div className="hub-content">
                  <i className="fas fa-graduation-cap"></i>
                  <h3>Your Career Journey</h3>
                  <p>Follow the path</p>
                </div>
              </div>
              {/* Step Numbers */}
              {steps.map((step, i) => {
                // Position step numbers using trigonometry
                const pos = getDotPosition(step.angle);
                return (
                  <div
                    key={step.number}
                    className={`step-number step-${step.number}${currentStep === i ? ' active' : ''}`}
                    style={{
                      position: 'absolute',
                      left: pos.x - 25, // 50px diameter, centered
                      top: pos.y - 25,
                      zIndex: 5,
                      boxShadow: currentStep === i ? '0 0 0 8px #fbbf2433' : undefined,
                      background: currentStep === i ? '#fbbf24' : undefined,
                      color: currentStep === i ? '#fff' : undefined,
                      transition: 'all 0.3s',
                    }}
                  >
                    {step.number.toString().padStart(2, '0')}
                  </div>
                );
              })}
              {/* Step Dialog (Details) */}
              {steps.map((step, i) => {
                if (currentStep !== i && !paused) return null;
                // Position dialog near the step
                const pos = getDotPosition(step.angle);
                // Offset dialog outward from the circle
                const offset = 90;
                const dialogX = CIRCLE_CENTER.x + (RADIUS + offset) * Math.cos((step.angle * Math.PI) / 180);
                const dialogY = CIRCLE_CENTER.y + (RADIUS + offset) * Math.sin((step.angle * Math.PI) / 180);
                return (
                  <div
                    key={step.number}
                    className={`step-details ${step.class} active`}
                    style={{
                      position: 'absolute',
                      left: dialogX - 140, // center dialog (width ~280px)
                      top: dialogY - 40, // adjust for dialog height
                      zIndex: 20,
                      pointerEvents: 'auto',
                    }}
                    onMouseEnter={handleDialogMouseEnter}
                    onMouseLeave={handleDialogMouseLeave}
                  >
                    <div className="step-icon">
                      <i className={step.icon}></i>
                    </div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                );
              })}
              {/* In the journey-circle-container, add a faint dashed circle for visual guidance */}
              <div
                style={{
                  position: 'absolute',
                  left: CIRCLE_CENTER.x - RADIUS,
                  top: CIRCLE_CENTER.y - RADIUS,
                  width: RADIUS * 2,
                  height: RADIUS * 2,
                  borderRadius: '50%',
                  border: '1.5px dashed #b6c2d1',
                  opacity: 0.15,
                  zIndex: 1,
                }}
              />
            </div>
          </div>
          <div className="signup-form-container d-none d-md-block">
            <div className="form-header" style={{ marginBottom: '1.2rem' }}>
              <h3 className="form-title" style={{ fontSize: '1.25rem', marginBottom: '0.3rem' }}>Start Your Journey</h3>
              <p className="form-subtitle" style={{ fontSize: '0.85rem' }}>Tell us about yourself and we'll guide you to success</p>
            </div>
            <form id="studentSignupForm" onSubmit={handleSubmit}>
              <div className="form-row" style={{ marginBottom: '0.7rem', gap: 12 }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="fullName" style={{ marginBottom: 4, fontSize: '0.88rem' }}>Full Name *</label>
                  <input type="text" id="fullName" name="fullName" className="form-input" placeholder="Enter your full name" required value={form.fullName} onChange={handleChange} style={{ fontSize: '0.97rem', padding: '0.7rem' }} />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="email" style={{ marginBottom: 4, fontSize: '0.88rem' }}>Email *</label>
                  <input type="email" id="email" name="email" className="form-input" placeholder="your.email@example.com" required value={form.email} onChange={handleChange} style={{ fontSize: '0.97rem', padding: '0.7rem' }} />
                </div>
              </div>
              <div className="form-row" style={{ marginBottom: '0.7rem', gap: 12 }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="phone" style={{ marginBottom: 4, fontSize: '0.88rem' }}>Phone *</label>
                  <input type="tel" id="phone" name="phone" className="form-input" placeholder="+1 (555) 123-4567" required value={form.phone} onChange={handleChange} style={{ fontSize: '0.97rem', padding: '0.7rem' }} />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="careerField" style={{ marginBottom: 4, fontSize: '0.88rem' }}>Career Interest *</label>
                  <select id="careerField" name="careerField" className="form-select" required value={form.careerField} onChange={handleChange} style={{ fontSize: '0.97rem', padding: '0.7rem' }}>
                    <option value="">Select field</option>
                    <option value="technology">Technology & IT</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="business">Business & Finance</option>
                    <option value="education">Education</option>
                    <option value="engineering">Engineering</option>
                    <option value="creative">Creative & Design</option>
                    <option value="marketing">Marketing & Sales</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: '0.7rem' }}>
                <label className="form-label" htmlFor="goals" style={{ marginBottom: 4, fontSize: '0.88rem' }}>Career Goals (Optional)</label>
                <textarea id="goals" name="goals" className="form-textarea compact" placeholder="Brief description of your aspirations..." value={form.goals} onChange={handleChange} style={{ fontSize: '0.97rem', padding: '0.7rem' }}></textarea>
              </div>
              <div className="checkbox-compact" style={{ marginBottom: '0.7rem' }}>
                <div className="checkbox-group" style={{ margin: 0 }}>
                  <input type="checkbox" id="terms" name="terms" className="form-checkbox" required checked={form.terms} onChange={handleChange} />
                  <label htmlFor="terms" className="checkbox-label" style={{ fontSize: '0.8rem' }}>
                    I agree to the <a href="#" target="_blank">Terms</a> and <a href="#" target="_blank">Privacy Policy</a> *
                  </label>
                </div>
                <div className="checkbox-group" style={{ margin: 0 }}>
                  <input type="checkbox" id="newsletter" name="newsletter" className="form-checkbox" checked={form.newsletter} onChange={handleChange} />
                  <label htmlFor="newsletter" className="checkbox-label" style={{ fontSize: '0.8rem' }}>
                    Send me updates about courses
                  </label>
                </div>
              </div>
              <button type="submit" className="submit-btn" disabled={loading} style={{ padding: '0.8rem', fontSize: '1rem', marginTop: 2 }}>
                <span className="loading-spinner" style={{ display: loading ? 'inline-block' : 'none' }}></span>
                <span className="btn-text">Begin My Journey</span>
              </button>
              {error && (
                <div className="error-message" id="errorMessage" style={{ display: 'block', marginTop: 8 }}>
                  <i className="fas fa-exclamation-triangle"></i> <span id="errorText">{error}</span>
                </div>
              )}
              {success && (
                <div className="success-message" id="successMessage" style={{ display: 'block', marginTop: 8 }}>
                  <i className="fas fa-check-circle"></i> Thank you! We'll be in touch soon.
                </div>
              )}
            </form>
          </div>
          {/* Mobile: Stacked */}
          <div className="journey-visual-wrapper d-block d-md-none" style={{ width: '100%', marginBottom: '2rem' }}>
            <div className="journey-circle-container" style={{ position: 'relative' }}>
              {/* Central Hub */}
              <div className="journey-hub">
                <div className="hub-content">
                  <i className="fas fa-graduation-cap"></i>
                  <h3>Your Career Journey</h3>
                  <p>Follow the path</p>
                </div>
              </div>
              {/* Step Numbers */}
              {steps.map((step, i) => {
                // Position step numbers using trigonometry
                const pos = getDotPosition(step.angle);
                return (
                  <div
                    key={step.number}
                    className={`step-number step-${step.number}${currentStep === i ? ' active' : ''}`}
                    style={{
                      position: 'absolute',
                      left: pos.x - 25, // 50px diameter, centered
                      top: pos.y - 25,
                      zIndex: 5,
                      boxShadow: currentStep === i ? '0 0 0 8px #fbbf2433' : undefined,
                      background: currentStep === i ? '#fbbf24' : undefined,
                      color: currentStep === i ? '#fff' : undefined,
                      transition: 'all 0.3s',
                    }}
                  >
                    {step.number.toString().padStart(2, '0')}
                  </div>
                );
              })}
              {/* Step Dialog (Details) */}
              {steps.map((step, i) => {
                if (currentStep !== i && !paused) return null;
                // Position dialog near the step
                const pos = getDotPosition(step.angle);
                // Offset dialog outward from the circle
                const offset = 90;
                const dialogX = CIRCLE_CENTER.x + (RADIUS + offset) * Math.cos((step.angle * Math.PI) / 180);
                const dialogY = CIRCLE_CENTER.y + (RADIUS + offset) * Math.sin((step.angle * Math.PI) / 180);
                return (
                  <div
                    key={step.number}
                    className={`step-details ${step.class} active`}
                    style={{
                      position: 'absolute',
                      left: dialogX - 140, // center dialog (width ~280px)
                      top: dialogY - 40, // adjust for dialog height
                      zIndex: 20,
                      pointerEvents: 'auto',
                    }}
                    onMouseEnter={handleDialogMouseEnter}
                    onMouseLeave={handleDialogMouseLeave}
                  >
                    <div className="step-icon">
                      <i className={step.icon}></i>
                    </div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                );
              })}
              {/* In the journey-circle-container, add a faint dashed circle for visual guidance */}
              <div
                style={{
                  position: 'absolute',
                  left: CIRCLE_CENTER.x - RADIUS,
                  top: CIRCLE_CENTER.y - RADIUS,
                  width: RADIUS * 2,
                  height: RADIUS * 2,
                  borderRadius: '50%',
                  border: '1.5px dashed #b6c2d1',
                  opacity: 0.15,
                  zIndex: 1,
                }}
              />
            </div>
          </div>
          <div className="signup-form-container d-block d-md-none" style={{ width: '100%' }}>
            <div className="form-header" style={{ marginBottom: '1.2rem' }}>
              <h3 className="form-title" style={{ fontSize: '1.25rem', marginBottom: '0.3rem' }}>Start Your Journey</h3>
              <p className="form-subtitle" style={{ fontSize: '0.85rem' }}>Tell us about yourself and we'll guide you to success</p>
            </div>
            <form id="studentSignupForm" onSubmit={handleSubmit}>
              <div className="form-row" style={{ marginBottom: '0.7rem', gap: 12 }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="fullName" style={{ marginBottom: 4, fontSize: '0.88rem' }}>Full Name *</label>
                  <input type="text" id="fullName" name="fullName" className="form-input" placeholder="Enter your full name" required value={form.fullName} onChange={handleChange} style={{ fontSize: '0.97rem', padding: '0.7rem' }} />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="email" style={{ marginBottom: 4, fontSize: '0.88rem' }}>Email *</label>
                  <input type="email" id="email" name="email" className="form-input" placeholder="your.email@example.com" required value={form.email} onChange={handleChange} style={{ fontSize: '0.97rem', padding: '0.7rem' }} />
                </div>
              </div>
              <div className="form-row" style={{ marginBottom: '0.7rem', gap: 12 }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="phone" style={{ marginBottom: 4, fontSize: '0.88rem' }}>Phone *</label>
                  <input type="tel" id="phone" name="phone" className="form-input" placeholder="+1 (555) 123-4567" required value={form.phone} onChange={handleChange} style={{ fontSize: '0.97rem', padding: '0.7rem' }} />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="careerField" style={{ marginBottom: 4, fontSize: '0.88rem' }}>Career Interest *</label>
                  <select id="careerField" name="careerField" className="form-select" required value={form.careerField} onChange={handleChange} style={{ fontSize: '0.97rem', padding: '0.7rem' }}>
                    <option value="">Select field</option>
                    <option value="technology">Technology & IT</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="business">Business & Finance</option>
                    <option value="education">Education</option>
                    <option value="engineering">Engineering</option>
                    <option value="creative">Creative & Design</option>
                    <option value="marketing">Marketing & Sales</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: '0.7rem' }}>
                <label className="form-label" htmlFor="goals" style={{ marginBottom: 4, fontSize: '0.88rem' }}>Career Goals (Optional)</label>
                <textarea id="goals" name="goals" className="form-textarea compact" placeholder="Brief description of your aspirations..." value={form.goals} onChange={handleChange} style={{ fontSize: '0.97rem', padding: '0.7rem' }}></textarea>
              </div>
              <div className="checkbox-compact" style={{ marginBottom: '0.7rem' }}>
                <div className="checkbox-group" style={{ margin: 0 }}>
                  <input type="checkbox" id="terms" name="terms" className="form-checkbox" required checked={form.terms} onChange={handleChange} />
                  <label htmlFor="terms" className="checkbox-label" style={{ fontSize: '0.8rem' }}>
                    I agree to the <a href="#" target="_blank">Terms</a> and <a href="#" target="_blank">Privacy Policy</a> *
                  </label>
                </div>
                <div className="checkbox-group" style={{ margin: 0 }}>
                  <input type="checkbox" id="newsletter" name="newsletter" className="form-checkbox" checked={form.newsletter} onChange={handleChange} />
                  <label htmlFor="newsletter" className="checkbox-label" style={{ fontSize: '0.8rem' }}>
                    Send me updates about courses
                  </label>
                </div>
              </div>
              <button type="submit" className="submit-btn" disabled={loading} style={{ padding: '0.8rem', fontSize: '1rem', marginTop: 2 }}>
                <span className="loading-spinner" style={{ display: loading ? 'inline-block' : 'none' }}></span>
                <span className="btn-text">Begin My Journey</span>
              </button>
              {error && (
                <div className="error-message" id="errorMessage" style={{ display: 'block', marginTop: 8 }}>
                  <i className="fas fa-exclamation-triangle"></i> <span id="errorText">{error}</span>
                </div>
              )}
              {success && (
                <div className="success-message" id="successMessage" style={{ display: 'block', marginTop: 8 }}>
                  <i className="fas fa-check-circle"></i> Thank you! We'll be in touch soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection; 