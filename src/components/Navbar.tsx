import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = ({ onDropdownChange }: { onDropdownChange?: (open: boolean) => void }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = (open: boolean) => {
    setDropdownOpen(open);
    if (onDropdownChange) onDropdownChange(open);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={`${import.meta.env.BASE_URL}assets/logo1.jpg`} alt="Logo" style={{ maxHeight: 50, marginRight: 8 }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ms-auto me-4 align-items-lg-center">
            <li className="nav-item">
              <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/about">About</NavLink>
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
                <li><NavLink className="dropdown-item" to="/courses/data-analytics">Data Analytics and Visualizations</NavLink></li>
                <li><NavLink className="dropdown-item" to="/courses/business-analysis">Business Analysis</NavLink></li>
                <li><NavLink className="dropdown-item" to="/courses/project-management">Project Management Office (PMO)</NavLink></li>
                <li><NavLink className="dropdown-item" to="/courses/agile-scrum">Agile Scrum</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/events">Events</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => 'nav-link nav-link-visa' + (isActive ? ' active' : '')} to="/global-talent-visa">UK Global Talent Visa</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/contact">Contact</NavLink>
            </li>
          </ul>
          <Link to="#join" className="btn btn-primary">
            Join Now <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 