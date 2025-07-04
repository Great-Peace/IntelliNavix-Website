import React from "react";
import styles from "./TestimonialsSection.module.css";

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
      <div className={styles.scrollContainer} style={{ overflow: 'hidden', width: '100%' }}>
        <div className={styles.scrollTrack} style={{ display: 'flex', width: 'max-content' }}>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <p>"I was a complete novice in IT with doubts and uncertainties, but Prof. Yakubu guided me patiently. He introduced me to the IT profession and mentored me through. Today, I've come a long way in data analytics, and I strongly recommend him to anyone looking to grow in IT."</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={`${import.meta.env.BASE_URL}assets/Dr_Yakubu.png`} alt="Rose O." />
              </div>
              <div className="author-info">
                <h5>Rose O.</h5>
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
              <p>"I recently discovered this organization, and they helped me prepare for a Data Analyst internship in the UK Civil Service — I got the role! They also coached me for another Civil Service job, and I succeeded again. Two out of two. I highly recommend their training and mentorship."</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={`${import.meta.env.BASE_URL}/assets/Dr_Yakubu.png`} alt="Taiwo O.A." />
              </div>
              <div className="author-info">
                <h5>Taiwo O.A.</h5>
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
              <p>"02 January 2023 was a career-defining day — the day I met Dr. Yakubu. After our session, I got two interviews that same week. In just 4 weeks, I landed a Team Lead role in a UK financial institution, and by 6 weeks, I had 10 job offers and 2 Certificates of Sponsorship. I'm forever thankful!"</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={`${import.meta.env.BASE_URL}/assets/Dr_Yakubu.png`} alt="Osas A.O." />
              </div>
              <div className="author-info">
                <h5>Osas A.O.</h5>
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
              <p>"Dr. Yakubu — or 'Prof' as I call him — is a pragmatic, patient, and result-oriented mentor. He walks you through every step, and you'll enjoy every bit of this Data Analytics course. He truly delivers."</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={`${import.meta.env.BASE_URL}/assets/Dr_Yakubu.png`} alt="Sam G." />
              </div>
              <div className="author-info">
                <h5>Sam G.</h5>
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
              <p>"Your service is so needed. So many immigrants end up in marketing or care jobs when they're capable of so much more. When I share my story — how long I've been in the UK and where I work — people are shocked. What you're doing is really good, sir."</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={`${import.meta.env.BASE_URL}/assets/Dr_Yakubu.png`} alt="Iyanu O." />
              </div>
              <div className="author-info">
                <h5>Iyanu O.</h5>
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
              <p>"A heartfelt thank you to IntelliNavix Limited! Their expert guidance, encouragement, and attention to detail helped me succeed in my Global Talent endorsement. If you want a team that truly cares about your success, look no further!"</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={`${import.meta.env.BASE_URL}/assets/Dr_Yakubu.png`} alt="Helen J.I." />
              </div>
              <div className="author-info">
                <h5>Helen J.I.</h5>
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
    </div>
  </section>
);

export default TestimonialsSection; 