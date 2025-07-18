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
            Since 2008, Apscope Limited has been a proudly Kenyan-owned company delivering bold, reliable, and transformative solutions across multiple sectors. From supplying cutting-edge medical equipment and software, to driving infrastructure projects, creating intelligent IT systems, sourcing and exporting skilled human capital, and linking investors to high-potential ventures—we are redefining what it means to build sustainable progress in Eastern Africa.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="vision-mission">
              <div className="vision">
                <h3>Our Vision</h3>
                <p>
                  Our Expertise with Transforming opportunities Into Progress.
                </p>
              </div>

              <div className="mission">
                <h3>Our Mission</h3>
                <p>
                  To connect opportunities with solutions that improve lives and
                  drive progress across Eastern Africa and beyond.
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
