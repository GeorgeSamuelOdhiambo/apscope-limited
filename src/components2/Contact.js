// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p className="subtitle">Reach out for inquiries or partnership opportunities</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Apscope Limited</h3>
            <address>
              Karen Plains Arcade, Karen Plains Road<br />
              P.O. Box 68254 – 00200<br />
              Nairobi, Kenya
            </address>

            <div className="contact-details">
              <p>
                <i className="fas fa-phone-alt"></i>
                <span>+254 700 000000</span>
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                <span>info@apscope.co.ke</span>
              </p>
              <p>
                <i className="fas fa-globe-africa"></i>
                <span>www.apscope.co.ke</span>
              </p>
            </div>

            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="contact-form" id="send-sms">
            <form>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  aria-label="Your Name"
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  aria-label="Your Email"
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Subject" 
                  aria-label="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  rows="6"
                  required
                  aria-label="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                <span>Send Message</span>
                <svg width="16px" height="12px" viewBox="0 0 16 12">
                  <path d="M1,6 L15,6" stroke="currentColor" strokeWidth="2" fill="none" />
                  <polyline points="10 1 15 6 10 11" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;