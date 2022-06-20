import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Blogs from "./components/Blog/Blogs";
import CareerAdvisor from "./components/CareerAdvisor/CareerAdvisor";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Interviews from "./components/Interview/Interviews";
import Linkedin from "./components/Linkedin/Linkedin";
import Navbar from "./components/Navbar/Navbar";
import ResponsiveNavbar from "./components/Navbar/ReponsiveNavbar/ResponsiveNavbar";
import Terms from "./components/Terms/Terms";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <ResponsiveNavbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/scholarship" element={<Blogs />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/linkedinoptimization" element={<Linkedin />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/careerhome" element={<CareerAdvisor />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
