// src/components/Hero.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  const handleServicesClick = () => {
    navigate('/#services');
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Innovating Solutions, Connecting Possibilities</h1>
          <p>Health • Construction • I.T. • Human Capital • Project Consultancy</p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary" 
              onClick={handleContactClick}
              aria-label="Contact Us"
            >
              <span>Contact Us</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5" stroke="currentColor" strokeWidth="2" fill="none" />
                <polyline points="8 1 12 5 8 9" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={handleServicesClick}
              aria-label="Explore Services"
            >
              <span>Explore Services</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5" stroke="currentColor" strokeWidth="2" fill="none" />
                <polyline points="8 1 12 5 8 9" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;