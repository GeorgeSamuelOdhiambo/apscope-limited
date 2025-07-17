// src/components/Home.js
import React from 'react';
import Hero from './Hero';
import About from './About';
import Values from './Values';
import Services from './Services';
import PharmaCTA from './PharmaCTA';
import WhyChoose from './WhyChoose';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Values />
      <Services />
      <PharmaCTA />
      <WhyChoose />
      <Contact />
    </>
  );
};

export default Home;