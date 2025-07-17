// src/components/About.js
import React from "react";
import image from "../assets/images/accounting-software.jpg"; // Update with your image path

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h1>Welcome to Apscope Limited</h1>
          <p className="intro-text">
            Since 2008, we have delivered innovative and reliable solutions in Health, 
            Building & Construction, I.T., Human Resource Management, and Project Development. 
            Based in Nairobi, Kenya, and 100% Kenyan-owned, we are committed to creating 
            sustainable value through partnerships across East Africa and beyond.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="vision-mission">
              <div className="vision">
                <h3>Our Vision</h3>
                <p>
                  To be a Premier Company among the Top 100 Companies in Africa.
                </p>
              </div>
              
              <div className="mission">
                <h3>Our Mission</h3>
                <p>
                  To effectively, efficiently and innovatively build and create value 
                  for our customers, directors, staff and the public.
                </p>
              </div>
            </div>
          </div>

          <div className="about-media">
            <img 
              src={image} 
              alt="Apscope Limited team at work" 
              className="about-image"
            />
            <button 
              className="play-button"
              aria-label="Play company introduction video"
            >
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;