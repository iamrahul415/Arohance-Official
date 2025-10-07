import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SocialMediaSidebar from "./Components/SocialMediaSidebar";
import Home from "./Pages/HomePage";
import AboutUs from "./Pages/AboutPage";
// import other pages as needed
import Footer from "./Components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <SocialMediaSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/case-study" element={<CaseStudy />} /> */}
        {/* <Route path="/reviews" element={<Reviews />} /> */}
        {/* <Route path="/faq" element={<FAQ />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
