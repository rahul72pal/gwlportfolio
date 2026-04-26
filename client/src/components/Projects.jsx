import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectsData from "./data/projects.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setProjects(projectsData);
    setLoading(false);
  }, []);

  const categories = ["All", "AI", "Fullstack"];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section" id="projects">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 5%" }}>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">What I've built — from idea to deployment</p>

        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 40, flexWrap: "wrap" }}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              style={{
                padding: "8px 22px", borderRadius: 50, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer",
                transition: "all 0.3s", border: "1px solid",
                background: filter === c ? "var(--gradient-hero)" : "transparent",
                borderColor: filter === c ? "transparent" : "rgba(255,255,255,0.15)",
                color: filter === c ? "#fff" : "var(--text-secondary)",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {loading ? (
          <div style={{ textAlign: "center", padding: "40px 0", color: "var(--text-secondary)" }}>
            <div className="loader-ring" style={{ margin: "0 auto" }} />
            <p style={{ marginTop: 12 }}>Loading projects...</p>
          </div>
        ) : (
          <div className="projects-grid">
            {filtered.map((p, i) => (
              <div
                className="project-card glass-card"
                key={p.id || i}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={i * 80}
              >
                <div className="project-img-wrap">
                  <img
                    src={p.imageSrc}
                    alt={p.title}
                    onError={(e) => { e.target.src = `https://placehold.co/600x200/0f0f1a/4f8ef7?text=${encodeURIComponent(p.title)}`; }}
                  />
                  <div className="project-overlay" />
                  {p.category && <span className="project-cat">{p.category}</span>}
                </div>
                <div className="project-body">
                  <div className="project-title">{p.title}</div>
                  <p className="project-desc">{p.description}</p>
                  {p.tech && (
                    <div className="tech-pills">
                      {p.tech.map((t) => <span className="tech-pill" key={t}>{t}</span>)}
                    </div>
                  )}
                  <div className="project-links">
                    <a href={p.demo} target="_blank" rel="noreferrer" className="project-link project-link-demo">
                      <FaExternalLinkAlt size={12} /> Live Demo
                    </a>
                    <a href={p.source} target="_blank" rel="noreferrer" className="project-link project-link-code">
                      <FaGithub size={14} /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
