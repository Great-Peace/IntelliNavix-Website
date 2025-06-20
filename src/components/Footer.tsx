import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer bg-dark text-light pt-5 pb-3 mt-5">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="footer-brand mb-3">
            <Link to="/" className="footer-logo d-flex align-items-center mb-2 text-light text-decoration-none">
              <img src={`${import.meta.env.BASE_URL}assets/logo1.jpg`} alt="Logo" style={{ maxHeight: 40, marginRight: 8 }} />
              <span className="fw-bold">intelliNavix</span>
            </Link>
            <p className="footer-description small">
              Empowering the next generation of data professionals through cutting-edge training and mentorship.
            </p>
            <div className="social-links mt-2">
              <a href="#" className="me-2 text-light" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="me-2 text-light" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" className="me-2 text-light" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" className="me-2 text-light" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-light" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <h5 className="footer-title">Quick Links</h5>
          <ul className="footer-links list-unstyled">
            <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
            <li><Link to="/courses" className="text-light text-decoration-none">Courses</Link></li>
            <li><Link to="/events" className="text-light text-decoration-none">Events</Link></li>
            <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
          </ul>
        </div>
        <div className="col-lg-2">
          <h5 className="footer-title">Courses</h5>
          <ul className="footer-links list-unstyled">
            <li><Link to="/courses/data-analytics" className="text-light text-decoration-none">Data Analytics</Link></li>
            <li><Link to="/courses/business-analysis" className="text-light text-decoration-none">Business Analysis</Link></li>
            <li><Link to="/courses/project-management" className="text-light text-decoration-none">Project Management</Link></li>
            <li><Link to="/courses/agile-scrum" className="text-light text-decoration-none">Agile Scrum</Link></li>
          </ul>
        </div>
        <div className="col-lg-4">
          <h5 className="footer-title">Contact Info</h5>
          <div className="contact-info small">
            <div className="mb-2"><i className="fas fa-map-marker-alt me-2"></i> 272 Bath Street, Glasgow, UK, G2 4JR</div>
            <div className="mb-2"><i className="fas fa-phone me-2"></i> +447873306739, +447873306741</div>
            <div><i className="fas fa-envelope me-2"></i> info@intellinavix.com</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom mt-4 pt-3 border-top border-secondary text-center">
        <small>© 2025 intelliNavix. All rights reserved. &nbsp;|&nbsp;
          <Link to="/privacy-policy" className="text-light text-decoration-none">Privacy Policy</Link> &nbsp;|&nbsp;
          <Link to="/terms-of-service" className="text-light text-decoration-none">Terms of Service</Link> &nbsp;|&nbsp;
          <Link to="/cookie-policy" className="text-light text-decoration-none">Cookie Policy</Link>
        </small>
      </div>
    </div>
  </footer>
);

export default Footer; 