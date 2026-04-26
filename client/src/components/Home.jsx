import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

import profileImg from "./data/IMG_1288(1) (4) (1) (1).jpg";
import resumePdf from "./data/RahulPalFebResume.pdf";


const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "AI + Full Stack Developer",
        "MERN Stack Engineer",
        "Building Scalable Systems",
        "Turning Ideas into Products",
      ],
      typeSpeed: 55,
      backSpeed: 35,
      loop: true,
      backDelay: 1800,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-content" data-aos="fade-right" data-aos-duration="900">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Available for opportunities
        </div>

        <h1 className="hero-name">Rahul Pal</h1>

        <p className="hero-title">
          <span ref={typedRef} className="typed-text" />
        </p>

        <h2 className="hero-headline">
          Building the&nbsp;
          <span style={{ background: "var(--gradient-hero)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Future
          </span>
          ,<br />One Line at a Time.
        </h2>

        <p className="hero-desc">
          I design and build full-stack, AI-powered applications that solve real-world problems — from healthcare platforms to ERP systems — with a focus on performance, scalability, and impact.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary-grad" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
            View Projects →
          </a>
          <a href="mailto:rahulgwl72@gmail.com" className="btn-outline-grad">
            Hire Me ✉
          </a>
          <a href={resumePdf} download="RahulPalFebResume.pdf" className="btn-outline-grad">
            Resume ↓
          </a>
        </div>

        <div className="hero-chips">
          {["React", "Next.js", "Node.js", "MongoDB", "AWS", "Generative AI"].map((t) => (
            <span className="hero-chip" key={t}>⚡ {t}</span>
          ))}
        </div>
      </div>

      <div className="hero-image-wrap" data-aos="fade-left" data-aos-duration="900">
        <div className="hero-image-ring">
          <div className="hero-image-inner">
            <img src={profileImg} alt="Rahul Pal" onError={(e) => { e.target.src = "https://avatar.vercel.sh/rahulpal?size=360"; }} />
          </div>
        </div>
        <div className="hero-float-card" style={{ bottom: 40, left: -30 }}>🚀 90% API Cost Reduction</div>
        <div className="hero-float-card" style={{ top: 60, right: -20 }}>🤖 AI-Powered Apps</div>
        <div className="hero-float-card" style={{ bottom: 130, right: -40 }}>⚡ 95% Less Manual Work</div>
      </div>
    </section>
  );
};

export default Home;
