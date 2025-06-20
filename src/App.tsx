import './styles/style.css';
import './styles/nav-footer.css';
import './styles/about.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Courses from './pages/Courses';
import AgileScrum from './pages/AgileScrum';
import BusinessAnalysis from './pages/BusinessAnalysis';
import DataAnalytics from './pages/DataAnalytics';
import ProjectManagement from './pages/ProjectManagement';
import GlobalTalentVisa from './pages/GlobalTalentVisa';
import CookiePolicy from './pages/CookiePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/agile-scrum" element={<AgileScrum />} />
        <Route path="/courses/business-analysis" element={<BusinessAnalysis />} />
        <Route path="/courses/data-analytics" element={<DataAnalytics />} />
        <Route path="/courses/project-management" element={<ProjectManagement />} />
        <Route path="/global-talent-visa" element={<GlobalTalentVisa />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
