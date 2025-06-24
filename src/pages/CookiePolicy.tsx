import React from 'react';

const CookiePolicy: React.FC = () => (
  <>
    <section
      className="policy-hero"
      style={{
        background: 'linear-gradient(135deg, #f59e42 0%, #6366f1 100%)',
        color: 'white',
        paddingTop: '120px',
        paddingBottom: '48px',
        textAlign: 'center',
      }}
    >
      <i className="fas fa-cookie-bite" style={{ fontSize: 48, marginBottom: 16 }}></i>
      <h1 style={{ fontWeight: 800, fontSize: '2.5rem', marginBottom: 8 }}>Cookie Policy</h1>
      <p style={{ fontSize: '1.1rem', opacity: 0.95 }}>How and why we use cookies at intelliNavix</p>
    </section>
    <section className="container" style={{ maxWidth: 900, marginTop: -40, background: 'white', borderRadius: 16, boxShadow: '0 8px 32px rgba(60,60,180,0.10)', padding: '2.5rem 2rem' }}>
      <p>Effective Date: June 2025</p>
      <h2>1. What Are Cookies?</h2>
      <p>Cookies are small text files stored on your device by your web browser. They help websites remember your preferences and improve your experience.</p>
      <h2>2. How We Use Cookies</h2>
      <ul>
        <li>To remember your preferences and settings</li>
        <li>To analyze site traffic and usage</li>
        <li>To provide relevant content and offers</li>
      </ul>
      <h2>3. Types of Cookies We Use</h2>
      <ul>
        <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
        <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site.</li>
        <li><strong>Preference Cookies:</strong> Remember your choices and settings.</li>
      </ul>
      <h2>4. Managing Cookies</h2>
      <p>You can control and delete cookies through your browser settings. Disabling cookies may affect your experience on our site.</p>
      <h2>5. Changes to This Policy</h2>
      <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
      <h2>6. Contact Us</h2>
      <p>If you have any questions about our use of cookies, please contact us at info@intellinavix.com.</p>
    </section>
  </>
);

export default CookiePolicy; 