// src/components/WhyChoose.js
import React from 'react';
import image from '../assets/images/Partner-with-us.jpg';

const WhyChoose = () => {
  return (
    <section className="why-choose" id="why-choose">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Apscope</h2>
          <p className="subtitle">Discover the competitive advantages we bring to your business</p>
        </div>
        
        <div className="why-content">
          <div className="why-image">
            <img 
              src={image} 
              alt="Apscope team working together" 
              className="feature-image"
            />
          </div>
          
          <div className="why-list">
            <ul>
              <li>
                <i className="fas fa-check-circle"></i>
                <span><strong>15+ years' experience</strong> across multiple sectors with proven results</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span><strong>Local presence</strong> with offices in Kenya & Uganda for on-the-ground support</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span><strong>Cross-sector expertise</strong> enabling innovative, integrated solutions</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span><strong>Trusted partner</strong> to leading institutions and investors</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span><strong>Sustainable development</strong> commitment embedded in all our operations</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span><strong>Established networks</strong> with government and private sector stakeholders</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;