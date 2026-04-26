import React, { useState, useEffect } from "react";
import resumePdf from "./data/RahulPalFebResume.pdf";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar" style={{ boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none" }}>
      <div className="nav-logo">Rahul Pal</div>

      <div className={`nav-links${menuOpen ? " open" : ""}`}>
        {links.map((l) => (
          <a key={l.label} href={l.href} className="nav-link" onClick={(e) => handleNav(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a
          href={resumePdf}
          download="RahulPalFebResume.pdf"
          className="nav-cta"
          onClick={() => setMenuOpen(false)}
        >
          Resume ↓
        </a>
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
        <span style={{ opacity: menuOpen ? 0 : 1 }} />
        <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
      </button>
    </nav>
  );
};

export default Navbar;
