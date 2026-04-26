import React from "react";

const highlights = [
  { icon: "🏥", text: "Built healthcare, e-commerce, and investment platforms used in production" },
  { icon: "⚙️", text: "Delivered complete systems: onboarding flows, dashboards, booking engines, admin panels" },
  { icon: "📈", text: "Focused on performance, scalability, and measurable real-world impact" },
  { icon: "🤖", text: "Integrating Generative AI into products to automate intelligent workflows" },
];

const stats = [
  { number: "90%", label: "API Cost Reduction" },
  { number: "95%", label: "Less Manual Work" },
  { number: "4+", label: "Production Apps" },
  { number: "2+", label: "Years Building" },
];

const About = () => (
  <section className="section" id="about">
    <div className="container" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 5%" }}>
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text" data-aos="fade-right" data-aos-duration="800">
          <h2>
            I don't just write code —{" "}
            <span style={{ background: "var(--gradient-hero)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              I build systems.
            </span>
          </h2>
          <p style={{ marginTop: 16 }}>
            I'm Rahul Pal, a Full Stack Developer specializing in the MERN stack and AI-powered applications. I've shipped production systems across healthcare, e-commerce, and finance — from the first line of code to deployment.
          </p>
          {highlights.map((h, i) => (
            <div className="about-highlight" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
              <span className="about-highlight-icon">{h.icon}</span>
              <span className="about-highlight-text">{h.text}</span>
            </div>
          ))}
        </div>

        <div className="about-stats" data-aos="fade-left" data-aos-duration="800">
          {stats.map((s, i) => (
            <div className="stat-card" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
