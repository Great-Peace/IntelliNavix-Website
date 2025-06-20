import React from "react";

const TestimonialsSection: React.FC = () => (
  <section className="testimonials-section">
    <div className="container">
      <div className="section-header text-center mb-5">
        <h2 className="section-title font-display">
          Success <span className="gradient-text">Stories</span>
        </h2>
        <p className="section-subtitle">
          Hear from our graduates who've transformed their careers
        </p>
      </div>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="quote-icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <p>"Dr. Yakubu is a pragmatic coach and mentor. He's thorough yet patient, and above all, result-oriented. I have no doubt that he will walk the talk."</p>
          </div>
          <div className="testimonial-author">
            <div className="author-avatar">
              <img src="/assets/Dr_Yakubu.png" alt="Sam G." />
            </div>
            <div className="author-info">
              <h5>Sam G.</h5>
              <p>Data Analyst at Tech Corp</p>
            </div>
          </div>
          <div className="testimonial-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="quote-icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <p>"I was a complete novice in IT when I started. The support and mentoring I received was incredible. It truly transformed my career path."</p>
          </div>
          <div className="testimonial-author">
            <div className="author-avatar">
              <img src="/assets/Dr_Yakubu.png" alt="Rose O." />
            </div>
            <div className="author-info">
              <h5>Rose O.</h5>
              <p>Business Analyst</p>
            </div>
          </div>
          <div className="testimonial-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="quote-icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <p>"100% success rate! I got positions in the UK Civil Service after their training. The mentorship program is absolutely top-notch."</p>
          </div>
          <div className="testimonial-author">
            <div className="author-avatar">
              <img src="/assets/Dr_Yakubu.png" alt="O.A. Taiwo" />
            </div>
            <div className="author-info">
              <h5>O.A. Taiwo</h5>
              <p>Data Analyst, UK Civil Service</p>
            </div>
          </div>
          <div className="testimonial-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection; 