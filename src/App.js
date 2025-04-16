// import React from 'react';
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import CompanyProfile from './components/CompanyProfile';
// import Values from './components/Values';
// import Services from './components/Services';
// import Directors from './components/Directors';
// import AddressSection from './components/AddressSection';
// import ContactForm from './components/ContactForm';
// import Footer from './components/Footer';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <main>
//         <HeroSection />
//         <CompanyProfile />
//         <Values />
//         <Services />
//         <Directors />
//         <AddressSection />
//         <ContactForm />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CompanyProfile from './components/CompanyProfile';
import Values from './components/Values';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import Directors from './components/Directors';
import AddressSection from './components/AddressSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function Home() {
  return (
    <>
      <HeroSection />
      <CompanyProfile />
      <Values />
      <Services />
      {/* <Directors /> */}
      {/* <AddressSection /> */}
      <ContactForm />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;