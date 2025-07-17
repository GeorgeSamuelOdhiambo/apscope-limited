// src/components/PharmaCTA.js
import React from 'react';
import { Link } from 'react-router-dom';

const PharmaCTA = () => {
  return (
    <section className="pharma-cta" id="pharma-cta">
      <div className="container">
        <div className="pharma-content">
          <h2>Are you a Pharmaceutical Manufacturer?</h2>
          <p>
            We offer comprehensive solutions including representation, product registration, 
            packaging partnerships, and tender facilitation across Kenya and Uganda. 
            Partner with us to expand your market reach throughout East Africa with our 
            established distribution networks and regulatory expertise.
          </p>
          <Link 
            to="/#contact" 
            className="btn-pharma"
            aria-label="Partner with us - Contact page"
          >
            <span>Partner With Us</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PharmaCTA;

