import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AnimatedCarousel from './components/Pages/AnimatedCarousel';
import './App.css';

// Placeholder pages (add your actual pages here)
// import WhoWeAre from './components/Pages/WhoWeAre';
// import Service1 from './components/Pages/Service1';
// import Service2 from './components/Pages/Service2';
// import Careers from './components/Pages/Careers';
// import Participate from './components/Pages/Participate';
// import Contact from './components/Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<AnimatedCarousel />} />
          {/* <Route path="/who" element={<WhoWeAre />} />
          <Route path="/service1" element={<Service1 />} />
          <Route path="/service2" element={<Service2 />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/participate" element={<Participate />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
