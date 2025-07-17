import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './assets/styles/animations.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// src/index.js
// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import App from "./App";
// import About from "./components2/About";
// import Services from "./components2/Services";
// import Pharma from "./components2/Pharma";
// import Contact from "./components2/Contact";
// import Home from "./components2/Home";
// import "./styles/main.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { createRoot } from "react-dom/client";

// // Get the root element
// const container = document.getElementById('root');
// const root = createRoot(container);

// // Render the app
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="services" element={<Services />} />
//           <Route path="pharma" element={<Pharma />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );