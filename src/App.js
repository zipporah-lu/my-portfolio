import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";
import DigitalDesign from "./pages/DigitalDesign";
import StudyMate from "./pages/StudyMate";
import About from "./pages/About";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study-mate" element={<StudyMate />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/digital-design" element={<DigitalDesign />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
