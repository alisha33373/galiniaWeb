import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import './App.css';
import Logo from './components/Logo';
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

function Navigation() {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const navStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  };

  const logoStyle = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '30px',
    alignItems: 'center'
  };

  const linkStyle = (path: string) => ({
    color: 'white',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    backgroundColor: location.pathname === path ? 'rgba(255,255,255,0.2)' : 'transparent',
    border: location.pathname === path ? '1px solid rgba(255,255,255,0.3)' : '1px solid transparent'
  });

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>
        <Logo size={40} />
      </Link>
      
      <div className="desktop-nav" style={navLinksStyle}>
        <Link to="/" style={linkStyle('/')} className="nav-link">
          🏠 Home
        </Link>
        <Link to="/privacy" style={linkStyle('/privacy')} className="nav-link">
          🔒 Privacy
        </Link>
        <Link to="/terms" style={linkStyle('/terms')} className="nav-link">
          📄 Terms
        </Link>
      </div>
      
      <div className="mobile-nav" style={{ position: 'relative' }}>
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '18px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '3px'
          }}
        >
          <div style={{ width: '20px', height: '2px', background: 'white' }}></div>
          <div style={{ width: '20px', height: '2px', background: 'white' }}></div>
          <div style={{ width: '20px', height: '2px', background: 'white' }}></div>
        </button>
        {showMobileMenu && (
          <div style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            background: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            minWidth: '150px',
            zIndex: 1000
          }}>
            <Link to="/" style={{ display: 'block', padding: '12px 16px', color: '#333', textDecoration: 'none' }}>
              🏠 Home
            </Link>
            <Link to="/privacy" style={{ display: 'block', padding: '12px 16px', color: '#333', textDecoration: 'none' }}>
              🔒 Privacy
            </Link>
            <Link to="/terms" style={{ display: 'block', padding: '12px 16px', color: '#333', textDecoration: 'none' }}>
              📄 Terms
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{
      background: '#2c3e50',
      color: 'white',
      padding: '40px 20px',
      textAlign: 'center',
      marginTop: '60px'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
          <Logo size={48} />
        </div>
        <p style={{ marginBottom: '20px', color: '#bdc3c7' }}>
          Find your inner peace with personalized guided meditations. 
          Start your mindfulness journey today.
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '30px',
          marginBottom: '20px',
          flexWrap: 'wrap'
        }}>
          <Link to="/privacy" style={{ color: '#3498db', textDecoration: 'none' }}>
            Privacy Policy
          </Link>
          <Link to="/terms" style={{ color: '#3498db', textDecoration: 'none' }}>
            Terms & Conditions
          </Link>
          <a href="mailto:support@meditationapp.com" style={{ color: '#3498db', textDecoration: 'none' }}>
            Contact Support
          </a>
        </div>
        <p style={{ fontSize: '14px', color: '#95a5a6', margin: '0' }}>
          © {new Date().getFullYear()} Galinia Meditation App. All rights reserved. 
          Made with ❤️ for your wellness journey.
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
