import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Cursor glow
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);
    const onMove = (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', onMove);

    // Hide loader after 1.4s
    const timer = setTimeout(() => setLoaded(true), 1400);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.body.removeChild(glow);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Loading screen */}
      <div className={`loader-screen${loaded ? ' hidden' : ''}`}>
        <div className="loader-ring" />
        <div className="loader-text">rahulpal.dev</div>
      </div>

      {/* Gradient blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <Navbar />

      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
