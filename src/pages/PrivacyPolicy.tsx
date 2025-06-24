import React from 'react';

const PrivacyPolicy: React.FC = () => (
  <>
    <section
      className="policy-hero"
      style={{
        background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
        color: 'white',
        paddingTop: '120px',
        paddingBottom: '48px',
        textAlign: 'center',
      }}
    >
      <i className="fas fa-user-shield" style={{ fontSize: 48, marginBottom: 16 }}></i>
      <h1 style={{ fontWeight: 800, fontSize: '2.5rem', marginBottom: 8 }}>Privacy Policy</h1>
      <p style={{ fontSize: '1.1rem', opacity: 0.95 }}>Your privacy and trust are our top priorities at intelliNavix</p>
    </section>
    <section className="container" style={{ maxWidth: 900, marginTop: -40, background: 'white', borderRadius: 16, boxShadow: '0 8px 32px rgba(60,60,180,0.10)', padding: '2.5rem 2rem' }}>
      <p><strong>Last Updated:</strong> June 2025</p>
      <h2>1. Introduction</h2>
      <p>Welcome to intelliNavix! This Privacy Policy explains how we collect, use, and protect your information when you interact with our website and services. We are committed to transparency and safeguarding your privacy in compliance with global standards such as the GDPR and CCPA.</p>
      <h2>2. Information We Collect</h2>
      <ul>
        <li><strong>Personal Information:</strong> Name, email address, phone number, and other details you provide via forms or communication.</li>
        <li><strong>Technical Data:</strong> IP address, browser type, device information, and location data.</li>
        <li><strong>Usage Data:</strong> Pages visited, time spent, and interactions with our site.</li>
        <li><strong>Cookies & Tracking:</strong> Data collected via cookies and similar technologies to enhance your experience.</li>
      </ul>
      <h2>3. How We Collect Information</h2>
      <ul>
        <li>Directly from you via forms, registrations, and communications.</li>
        <li>Automatically through log files, cookies, and analytics tools.</li>
        <li>From third-party partners for marketing and analytics purposes (with your consent where required).</li>
      </ul>
      <h2>4. How We Use Your Information</h2>
      <ul>
        <li>To provide, personalize, and improve our services</li>
        <li>To communicate with you about updates, events, and offers</li>
        <li>To analyze site usage and optimize user experience</li>
        <li>To comply with legal obligations and protect our users</li>
      </ul>
      <h2>5. User Rights & Choices</h2>
      <ul>
        <li>You may request access, correction, or deletion of your personal data at any time.</li>
        <li>You can unsubscribe from marketing emails or adjust your cookie preferences in your browser settings.</li>
        <li>To exercise your rights, contact us at <a href="mailto:info@intellinavix.com">info@intellinavix.com</a>.</li>
      </ul>
      <h2>6. Cookies & Tracking Technologies</h2>
      <p>We use cookies and similar technologies to remember your preferences, analyze traffic, and deliver relevant content. You can manage or reject cookies through your browser settings.</p>
      <h2>7. Data Security</h2>
      <p>We use industry-standard encryption and security measures to protect your data from unauthorized access, loss, or misuse. However, no method of transmission over the Internet is 100% secure.</p>
      <h2>8. Data Sharing</h2>
      <p>We only share your data with trusted third parties when necessary for delivering our services, marketing, or legal compliance. We never sell your personal information.</p>
      <h2>9. Policy Updates</h2>
      <p>This Privacy Policy may be updated periodically. We will notify you of significant changes and always display the latest version on this page.</p>
      <h2>10. Compliance with Laws</h2>
      <p>intelliNavix complies with relevant privacy laws and regulations, including the General Data Protection Regulation (GDPR).</p>
      <h2>11. Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy or your data, please contact us at <a href="mailto:info@intellinavix.com">info@intellinavix.com</a>.</p>
      <p style={{ marginTop: 32, fontWeight: 600 }}>Thank you for trusting intelliNavix. We are dedicated to protecting your privacy and empowering your learning journey.</p>
    </section>
  </>
);

export default PrivacyPolicy; 