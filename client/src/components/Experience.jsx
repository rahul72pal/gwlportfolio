import React, { useEffect, useState } from "react";
import experienceData from "./data/experience.json";

const Experience = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setList(experienceData);
    setLoading(false);
  }, []);

  return (
    <section className="section" id="experience">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 5%" }}>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey building real-world products</p>

        {loading ? (
          <div style={{ textAlign: "center", color: "var(--text-secondary)", padding: "40px 0" }}>
            <div className="loader-ring" style={{ margin: "0 auto" }} />
            <p style={{ marginTop: 12 }}>Loading experience...</p>
          </div>
        ) : (
          <div className="timeline">
            {list.map((exp, i) => (
              <div
                key={exp.id}
                className="timeline-item"
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="700"
                data-aos-delay={i * 80}
              >
                <div className="timeline-dot" />
                <div className="exp-card glass-card">
                  <div className="exp-header">
                    <img
                      className="exp-logo"
                      src={exp.imageSrc}
                      alt={exp.organisation}
                      onError={(e) => { e.target.src = `https://avatar.vercel.sh/${encodeURIComponent(exp.organisation)}?size=48`; }}
                    />
                    <div>
                      <div className="exp-role">{exp.role}</div>
                      <div className="exp-org">{exp.organisation}</div>
                    </div>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-badge">📅 {exp.startDate} – {exp.endDate}</span>
                    <span className="exp-badge">📍 {exp.location}</span>
                  </div>
                  <ul className="exp-list">
                    {exp.experiences.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
