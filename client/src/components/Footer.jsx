import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";

import { CiMail } from "react-icons/ci";

const Footer = () => (
  <footer className="footer">
    <div className="footer-logo">Rahul Pal</div>

    <p className="footer-copy">
      © {new Date().getFullYear()} Rahul Pal · Built with ❤️ using React
    </p>

    <div className="footer-links">
      <a href="https://github.com/rahul72pal" target="_blank" rel="noreferrer" className="footer-link" aria-label="GitHub">
        <FaGithubSquare size={20} />
      </a>
      <a href="https://www.linkedin.com/in/rahulpal-gwl896/" target="_blank" rel="noreferrer" className="footer-link" aria-label="LinkedIn">
        <CiLinkedin size={22} />
      </a>
      <a href="https://www.instagram.com/rahulgwl72/" target="_blank" rel="noreferrer" className="footer-link" aria-label="Instagram">
        <FaInstagram size={20} />
      </a>
      <a href="mailto:rahulgwl72@gmail.com" className="footer-link" aria-label="Email">
        <CiMail size={22} />
      </a>
    </div>
  </footer>
);

export default Footer;
