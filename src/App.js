import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Blogs from "./components/Blog/Blogs";
import CareerAdvisor from "./components/CareerAdvisor/CareerAdvisor";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Interviews from "./components/Interview/Interviews";
import Linkedin from "./components/Linkedin/Linkedin";
import Navbar from "./components/Navbar/Navbar";
import Scholarship from "./components/Scholarship/Scholarship";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/linkedinoptimization" element={<Linkedin />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/careerhome" element={<CareerAdvisor />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
