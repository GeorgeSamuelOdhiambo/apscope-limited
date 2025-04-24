import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CompanyProfile from "./components/CompanyProfile";
import Values from "./components/Values";
import Services from "./components/Services";
import ServiceDetail from "./components/ServiceDetail";
// import Directors from "./components/Directors";
// import AddressSection from "./components/AddressSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";
import { scroller } from "react-scroll";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const section = location.hash.replace("#", "");
    if (section) {
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -80,
      });
    }
  }, [location]);
  return (
    <div
      sx={{
        backgroundColor: "#f9f9f9",
        backgroundImage:
          "linear-gradient(to bottom, #ffffff,rgb(134, 166, 179))",
      }}
    >
      <HeroSection />
      <CompanyProfile />
      <Values />
      <Services />
      {/* <Directors /> */}
      {/* <AddressSection /> */}
      <ContactForm />
    </div>
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
