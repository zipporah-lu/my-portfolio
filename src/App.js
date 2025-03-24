import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import DigitalDesign from "./pages/DigitalDesign";
import Video from "./pages/Video";
import About from "./pages/About";
import Resume from "./pages/Resume";

const Home = () => (
  <div className="p-8 text-center text-xl font-semibold">Welcome to Zipporah's Portfolio</div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digital-design" element={<DigitalDesign />} />
          <Route path="/video" element={<Video />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
