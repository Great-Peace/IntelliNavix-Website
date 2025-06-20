import React, { useState } from 'react';
import { StartJourneyModal } from './Home';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const overview = [
  {
    icon: 'fas fa-desktop',
    title: 'Introduction to Business Analytics',
    desc: 'Understand the role of a business analyst, stakeholder engagement, and requirement elicitation.',
  },
  {
    icon: 'fas fa-project-diagram',
    title: 'Process Mapping and Improvement',
    desc: 'Analyze and optimize business processes to enhance efficiency and value.',
  },
  {
    icon: 'fas fa-cogs',
    title: 'Agile and Waterfall Methodologies',
    desc: 'Gain insights into project methodologies to adapt to varying business needs.',
  },
  {
    icon: 'fas fa-clipboard-list',
    title: 'Requirements Gathering',
    desc: 'Learn techniques to elicit, document, and validate requirements effectively.',
  },
  {
    icon: 'fas fa-database',
    title: 'Data Modeling',
    desc: 'Dive into data modelling concepts to support business decision-making.',
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Real-World Scenarios',
    desc: 'Apply business analysis techniques to case studies that mirror actual industry challenges.',
  },
];

const iconBgColors = [
  'linear-gradient(135deg, #f43f5e 0%, #fbbf24 100%)',
  'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
  'linear-gradient(135deg, #a21caf 0%, #f472b6 100%)',
  'linear-gradient(135deg, #22c55e 0%, #84cc16 100%)',
  'linear-gradient(135deg, #f59e42 0%, #f43f5e 100%)',
  'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
];
const iconGlowColors = [
  '#f43f5e', '#06b6d4', '#a21caf', '#22c55e', '#f59e42', '#6366f1',
];
const enrollBtnStyle = {
  background: iconBgColors[5],
  color: 'white',
  border: 'none',
  boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
  fontWeight: 600,
};

const CourseOverviewCard = ({ icon, title, desc, delay, idx }) => (
  <motion.div
    className="col-md-6 col-lg-4 d-flex"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6, type: 'spring' }}
    whileHover={{
      scale: 1.04,
      boxShadow: `0 0 32px 0 ${iconGlowColors[idx % iconGlowColors.length]}`,
      background: 'rgba(24, 27, 44, 0.92)',
    }}
    style={{ cursor: 'pointer' }}
  >
    <div
      className="w-100 p-4 rounded-4 d-flex flex-column align-items-center text-center h-100"
      style={{
        minHeight: 240,
        background: 'rgba(24, 27, 44, 0.92)',
        color: 'white',
        boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
        position: 'relative',
        clipPath: 'polygon(0 0, 92% 0, 100% 8%, 100% 100%, 0 100%)',
        border: '1.5px solid rgba(255,255,255,0.07)',
        overflow: 'hidden',
      }}
    >
      <div
        className="d-flex align-items-center justify-content-center mb-3"
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          background: iconBgColors[idx % iconBgColors.length],
          boxShadow: `0 2px 16px 0 ${iconGlowColors[idx % iconGlowColors.length]}`,
        }}
      >
        <i className={icon} style={{ fontSize: 28, color: 'white' }}></i>
      </div>
      <h5 className="fw-bold mb-2" style={{ fontSize: '1.15rem', color: 'white' }}>{title}</h5>
      <p className="mb-0" style={{ fontSize: '1.05rem', color: 'white', opacity: 0.95 }}>{desc}</p>
    </div>
  </motion.div>
);

const tools = [
  { name: 'Lucidchart', logo: '/assets/lucidchart.png', alt: 'Lucidchart Logo' },
  { name: 'Figma', logo: '/assets/figma.png', alt: 'Figma Logo' },
  { name: 'Visio', logo: '/assets/visio.png', alt: 'Visio Logo' },
];

const BusinessAnalysis = () => {
  const [showModal, setShowModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <Navbar onDropdownChange={setDropdownOpen} />
      {/* Hero/Intro Section - Modern Gradient, Framer Motion, Floating Icons */}
      <section
        className="position-relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #fdf6e3 100%)',
          minHeight: 420,
          paddingTop: dropdownOpen ? 200 : '5.5rem',
          transition: 'padding-top 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="container position-relative z-2 py-5">
          <div className="row align-items-center flex-lg-row flex-column-reverse">
            <motion.div
              className="col-lg-6 d-flex flex-column justify-content-center align-items-start"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <span className="badge bg-warning bg-gradient mb-3 px-3 py-2 fs-6 shadow-sm" style={{ letterSpacing: 1.2 }}>Business Analysis</span>
              <h1 className="fw-bold mb-3" style={{ letterSpacing: 1.5, fontSize: '2.6rem', lineHeight: 1.1 }}>
                <span className="gradient-text">Bridge Business</span> & Technology
              </h1>
              <p className="lead text-secondary mb-4" style={{ fontWeight: 400, maxWidth: 520 }}>
                Bridging the gap between business objectives and technology solutions is at the heart of successful organizations. Our Business Analysis program empowers learners to navigate complex business landscapes and deliver innovative solutions.
              </p>
              <button
                style={enrollBtnStyle}
                className="btn btn-lg px-5 shadow"
                onClick={() => setShowModal(true)}
              >
                Enroll Now <i className="fas fa-arrow-right ms-2"></i>
              </button>
            </motion.div>
            <motion.div
              className="col-lg-6 d-flex justify-content-center align-items-center mb-4 mb-lg-0"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring', delay: 0.2 }}
            >
              <img
                src="/assets/business_analysis.png"
                alt="Business Analysis Illustration"
                className="img-fluid rounded-4 shadow-lg"
                style={{ maxWidth: 520, minHeight: 320, background: '#fff', border: '6px solid #fdf6e3' }}
              />
            </motion.div>
          </div>
        </div>
        {/* Animated background shapes */}
        <motion.div
          className="position-absolute top-0 start-0 w-100 h-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          style={{ zIndex: 1, pointerEvents: 'none' }}
        >
          <img src="/assets/figma.png" alt="Figma" style={{ position: 'absolute', top: 40, left: 60, width: 70, opacity: 0.7 }} />
          <img src="/assets/lucidchart.png" alt="Lucidchart" style={{ position: 'absolute', bottom: 60, right: 80, width: 70, opacity: 0.7 }} />
          <img src="/assets/visio.png" alt="Visio" style={{ position: 'absolute', top: 120, right: 120, width: 60, opacity: 0.7 }} />
        </motion.div>
      </section>

      {/* Course Overview */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="mb-5 fw-bold text-primary" style={{ letterSpacing: 1.2 }}>COURSE OVERVIEW</h2>
          <div className="row g-4">
            {overview.map((item, idx) => (
              <CourseOverviewCard
                key={idx}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                delay={0.15 * idx + 0.1}
                idx={idx}
              />
            ))}
          </div>
          {/* Call-to-Action Button */}
          <div className="text-center mt-5">
            <button
              style={enrollBtnStyle}
              className="btn btn-lg px-5 shadow"
              onClick={() => setShowModal(true)}
            >
              Enroll Now & Start Your BA Journey
              <i className="fas fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center align-items-center g-5">
            {tools.map((tool, idx) => (
              <div className="col-6 col-md-4 text-center" key={idx}>
                <img src={tool.logo} alt={tool.alt} style={{ maxHeight: 80, maxWidth: '80%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <StartJourneyModal show={showModal} onClose={() => setShowModal(false)} selectedCourse="Business Analysis" />
    </>
  );
};

export default BusinessAnalysis; 