import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = ({ onDropdownChange }: { onDropdownChange?: (open: boolean) => void }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdown = (open: boolean) => {
    setDropdownOpen(open);
    if (onDropdownChange) onDropdownChange(open);
  };

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="navbar-left d-flex align-items-center" style={{ flex: '0 0 auto', marginRight: '3.5rem' }}>
          <Link className="navbar-brand d-flex align-items-center" to="/" style={{ marginRight: 0 }}>
            <img src={`${import.meta.env.BASE_URL}assets/logo1.png`} alt="Logo" style={{ maxHeight: 50, marginRight: 8 }} />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={mobileMenuOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={() => setMobileMenuOpen(open => !open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end${mobileMenuOpen ? ' show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto me-4 align-items-lg-center">
            <li className="nav-item">
              <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/" onClick={handleNavLinkClick}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/about" onClick={handleNavLinkClick}>About</NavLink>
            </li>
            <li className="nav-item dropdown"
              onMouseEnter={() => handleDropdown(true)}
              onMouseLeave={() => handleDropdown(false)}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="coursesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={dropdownOpen ? 'true' : 'false'}
                onClick={e => {
                  e.preventDefault();
                  handleDropdown(!dropdownOpen);
                }}
              >
                Training Courses
              </a>
              <ul className={`dropdown-menu glass${dropdownOpen ? ' show' : ''}`} aria-labelledby="coursesDropdown">
                <li><NavLink className="dropdown-item" to="/courses/data-analytics" onClick={handleNavLinkClick}>Data Analytics and Visualizations</NavLink></li>
                <li><NavLink className="dropdown-item" to="/courses/business-analysis" onClick={handleNavLinkClick}>Business Analysis</NavLink></li>
                <li><NavLink className="dropdown-item" to="/courses/project-management" onClick={handleNavLinkClick}>Project Management Office (PMO)</NavLink></li>
                <li><NavLink className="dropdown-item" to="/courses/agile-scrum" onClick={handleNavLinkClick}>Agile Scrum</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/events" onClick={handleNavLinkClick}>Events</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => 'nav-link nav-link-visa' + (isActive ? ' active' : '')} to="/global-talent-visa" onClick={handleNavLinkClick}>UK Global Talent Visa</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/contact" onClick={handleNavLinkClick}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 