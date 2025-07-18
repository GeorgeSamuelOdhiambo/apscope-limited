// src/components/Footer.js
import React from "react";
import logo from "../assets/images/logo.png"; // Update with your logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <img src={logo} alt="Apscope Limited" />
            <p>
              Providing innovative solutions across healthcare, construction,
              IT, and human capital sectors throughout East Africa since 2008.
            </p>
            <div className="footer-social">
              <a aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#about">About Us</a>
              </li>
              <li>
                <a href="/#services">Our Services</a>
              </li>
              <li>
                <a href="/#pharma-cta">Pharma Partners</a>
              </li>
              <li>
                <a href="/#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-services">
            <h3>Our Services</h3>
            <ul>
              <li>Project Development</li>
              <li>Health & Pharma Agency</li>
              <li>HR & Talent Management</li>
              <li>I.T. Solutions</li>
              <li>Commodity Trading</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <address>
              Karen Plains Arcade
              <br />
              Karen Plains Road
              <br />
              P.O. Box 68254 – 00200
              <br />
              Nairobi, Kenya
            </address>
            <p>
              <i className="fas fa-phone-alt"></i>
              +254 700 000000
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              info@apscopelimited.com
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Apscope Limited. All rights
            reserved.
          </p>
          <div className="footer-legal">
            <a>
            Developed by{" "}
            <a
              href="https://tecloud.dev/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Tecloud.dev
            </a>
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
