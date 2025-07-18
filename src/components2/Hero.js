// // src/components/Hero.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Hero = () => {
//   const navigate = useNavigate();

//   const handleContactClick = () => {
//     navigate('/#contact');
//     setTimeout(() => {
//       const contactSection = document.getElementById('contact');
//       if (contactSection) {
//         contactSection.scrollIntoView({ behavior: 'smooth' });
//       }
//     }, 0);
//   };

//   const handleServicesClick = () => {
//     navigate('/#services');
//     setTimeout(() => {
//       const servicesSection = document.getElementById('services');
//       if (servicesSection) {
//         servicesSection.scrollIntoView({ behavior: 'smooth' });
//       }
//     }, 0);
//   };

//   return (
//     <section className="hero">
//       <div className="container">
//         <div className="hero-content">
//           <h1>Innovating for Life. Connecting for Growth</h1>
//           <p>Health • Construction • I.T. • Human Capital • Project Consultancy</p>
//           <div className="hero-buttons">
//             <button 
//               className="btn btn-primary" 
//               onClick={handleContactClick}
//               aria-label="Contact Us"
//             >
//               <span>Contact Us</span>
//               <svg width="13px" height="10px" viewBox="0 0 13 10">
//                 <path d="M1,5 L11,5" stroke="currentColor" strokeWidth="2" fill="none" />
//                 <polyline points="8 1 12 5 8 9" stroke="currentColor" strokeWidth="2" fill="none" />
//               </svg>
//             </button>
//             <button 
//               className="btn btn-secondary" 
//               onClick={handleServicesClick}
//               aria-label="Explore Services"
//             >
//               <span>Explore Services</span>
//               <svg width="13px" height="10px" viewBox="0 0 13 10">
//                 <path d="M1,5 L11,5" stroke="currentColor" strokeWidth="2" fill="none" />
//                 <polyline points="8 1 12 5 8 9" stroke="currentColor" strokeWidth="2" fill="none" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Premium slides data
  const slides = [
    {
      image: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
      title: 'Innovating for Life. Connecting for Growth',
      subtitle: 'Health • Construction • I.T. • Human Capital • Project Consultancy',
      overlay: 'linear-gradient(135deg, rgba(0, 86, 179, 0.85) 0%, rgba(0, 40, 85, 0.9) 100%)'
    },
    {
      image: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
      title: 'Connecting Needs to Solutions',
      subtitle: 'Strategic partnerships for sustainable growth',
      overlay: 'linear-gradient(135deg, rgba(179, 0, 89, 0.85) 0%, rgba(85, 0, 40, 0.9) 100%)'
    },
    {
      image: 'url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")',
      title: 'Your Vision, Our Expertise',
      subtitle: 'Comprehensive services tailored to your needs',
      overlay: 'linear-gradient(135deg, rgba(0, 179, 89, 0.85) 0%, rgba(0, 85, 40, 0.9) 100%)'
    }
  ];

  // Auto-advance with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

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

  // Animation variants with valid easing
  const slideVariants = {
    enter: { opacity: 0 },
    center: { 
      opacity: 1,
      transition: { 
        duration: 1, 
        ease: [0.33, 1, 0.68, 1] // Valid cubic-bezier values
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 1, 
        ease: [0.33, 1, 0.68, 1] 
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="hero">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="slide"
          style={{
            backgroundImage: slides[currentSlide].image,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div 
            className="overlay" 
            style={{ background: slides[currentSlide].overlay }}
          />
          
          <div className="container">
            <motion.div 
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <h1>{slides[currentSlide].title}</h1>
              <p>{slides[currentSlide].subtitle}</p>
              
              <div className="hero-buttons">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary" 
                  onClick={handleContactClick}
                  aria-label="Contact Us"
                >
                  <span>Get Started</span>
                  <svg width="16px" height="12px" viewBox="0 0 16 12">
                    <path d="M1,6 L15,6" stroke="currentColor" strokeWidth="2" fill="none" />
                    <polyline points="10 1 15 6 10 11" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-secondary" 
                  onClick={handleServicesClick}
                  aria-label="Explore Services"
                >
                  <span>Our Services</span>
                  <svg width="16px" height="12px" viewBox="0 0 16 12">
                    <path d="M1,6 L15,6" stroke="currentColor" strokeWidth="2" fill="none" />
                    <polyline points="10 1 15 6 10 11" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className="progress-bar"></div>
          </button>
        ))}
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-down"></div>
      </div>
    </section>
  );
};

export default Hero;






// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';

// const Hero = () => {
//   const navigate = useNavigate();
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   // Premium slides data
//   const slides = [
//     {
//       image: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
//       title: 'Innovating for Tomorrow',
//       subtitle: 'Cutting-edge solutions across multiple industries',
//       overlay: 'linear-gradient(135deg, rgba(0, 86, 179, 0.85) 0%, rgba(0, 40, 85, 0.9) 100%)'
//     },
//     {
//       image: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
//       title: 'Building Lasting Connections',
//       subtitle: 'Strategic partnerships for sustainable growth',
//       overlay: 'linear-gradient(135deg, rgba(179, 0, 89, 0.85) 0%, rgba(85, 0, 40, 0.9) 100%)'
//     },
//     {
//       image: 'url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")',
//       title: 'Your Vision, Our Expertise',
//       subtitle: 'Comprehensive services tailored to your needs',
//       overlay: 'linear-gradient(135deg, rgba(0, 179, 89, 0.85) 0%, rgba(0, 85, 40, 0.9) 100%)'
//     }
//   ];

//   // Auto-advance with smooth transition
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const handleContactClick = () => {
//     navigate('/#contact');
//     setTimeout(() => {
//       const contactSection = document.getElementById('contact');
//       if (contactSection) {
//         contactSection.scrollIntoView({ behavior: 'smooth' });
//       }
//     }, 0);
//   };

//   const handleServicesClick = () => {
//     navigate('/#services');
//     setTimeout(() => {
//       const servicesSection = document.getElementById('services');
//       if (servicesSection) {
//         servicesSection.scrollIntoView({ behavior: 'smooth' });
//       }
//     }, 0);
//   };

//   // Animation variants
//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? '100%' : '-100%',
//       opacity: 0
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? '-100%' : '100%',
//       opacity: 0,
//       transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }
//     })
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, delay: 0.4 }
//     }
//   };

//   return (
//     <section className="hero">
//       <AnimatePresence custom={1} initial={false}>
//         <motion.div
//           key={currentSlide}
//           custom={1}
//           variants={slideVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           className="slide"
//           style={{
//             backgroundImage: slides[currentSlide].image,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center'
//           }}
//         >
//           <div 
//             className="overlay" 
//             style={{ background: slides[currentSlide].overlay }}
//           />
          
//           <div className="container">
//             <motion.div 
//               className="hero-content"
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//             >
//               <h1>{slides[currentSlide].title}</h1>
//               <p>{slides[currentSlide].subtitle}</p>
              
//               <div className="hero-buttons">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="btn btn-primary" 
//                   onClick={handleContactClick}
//                   aria-label="Contact Us"
//                 >
//                   <span>Get Started</span>
//                   <svg width="16px" height="12px" viewBox="0 0 16 12">
//                     <path d="M1,6 L15,6" stroke="currentColor" strokeWidth="2" fill="none" />
//                     <polyline points="10 1 15 6 10 11" stroke="currentColor" strokeWidth="2" fill="none" />
//                   </svg>
//                 </motion.button>
                
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="btn btn-secondary" 
//                   onClick={handleServicesClick}
//                   aria-label="Explore Services"
//                 >
//                   <span>Our Services</span>
//                   <svg width="16px" height="12px" viewBox="0 0 16 12">
//                     <path d="M1,6 L15,6" stroke="currentColor" strokeWidth="2" fill="none" />
//                     <polyline points="10 1 15 6 10 11" stroke="currentColor" strokeWidth="2" fill="none" />
//                   </svg>
//                 </motion.button>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </AnimatePresence>
      
//       <div className="slide-indicators">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`indicator ${index === currentSlide ? 'active' : ''}`}
//             onClick={() => setCurrentSlide(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           >
//             <div className="progress-bar"></div>
//           </button>
//         ))}
//       </div>
      
//       <div className="scroll-indicator">
//         <div className="mouse">
//           <div className="wheel"></div>
//         </div>
//         <div className="arrow-down"></div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


