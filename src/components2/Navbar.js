// // src/components/Navbar.js
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import logo from '../assets/images/logo.svg';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsOpen(false);
//   }, [location]);

//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isOpen && !event.target.closest('.nav-links') && !event.target.closest('.hamburger')) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen]);

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
//           <img src={logo} alt="Apscope Limited" />
//         </Link>
        
//         <div className={`nav-links ${isOpen ? 'active' : ''}`}>
//           <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
//           <Link to="/#about" onClick={() => setIsOpen(false)}>About Us</Link>
//           <Link to="/#services" onClick={() => setIsOpen(false)}>Our Sectors</Link>
//           <Link to="/#pharma-cta" onClick={() => setIsOpen(false)}>For Pharma</Link>
//           <Link to="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
//         </div>
        
//         <button 
//           className={`hamburger ${isOpen ? 'active' : ''}`}
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label={isOpen ? 'Close menu' : 'Open menu'}
//           aria-expanded={isOpen}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.nav-links') && !event.target.closest('.hamburger')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Apscope Limited" className="logo-img" />
        </Link>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/#about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/#services" onClick={() => setIsOpen(false)}>Our Sectors</Link>
          <Link to="/#pharma-cta" onClick={() => setIsOpen(false)}>For Pharma</Link>
          <Link to="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
        
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;