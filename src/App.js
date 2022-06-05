import React from 'react'
import { Routes, Route } from "react-router-dom";
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import Home from "./components/Home/Home"
import Interviews from './components/Interview/Interviews';
import Linkedin from './components/Linkedin/Linkedin';
import Phone from './components/Phone/Phone';
import Scholarship from './components/Scholarship/Scholarship';
// import Form from "./Form"


const App = () => {
  return (
    <div className="App">
      {/* <Form/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/linkedinoptimization" element={<Linkedin />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/phone" element={<Phone />} />
      </Routes>
    </div>
  )
}

export default App
