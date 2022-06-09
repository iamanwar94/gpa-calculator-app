import React from 'react'
import { Routes, Route } from "react-router-dom";
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Home from "./components/Home/Home"
import Interviews from './components/Interview/Interviews';
import Linkedin from './components/Linkedin/Linkedin';
import Navbar from './components/Navbar/Navbar';
import Phone from './components/Phone/Phone';
import Scholarship from './components/Scholarship/Scholarship';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/linkedinoptimization" element={<Linkedin />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/phone" element={<Phone />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
