
// src/components/Services.js
import React from 'react';
import { services } from '../data';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Professional Services</h2>
          <p className="subtitle">Tailored solutions for your business needs</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div 
              className="service-card" 
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleServiceClick(service.id)}
            >
              <div className="service-card-inner">
                <div className="service-icon">
                  <i className={`fas ${service.icon}`} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <button 
                  className="btn-service"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Explore Service
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;