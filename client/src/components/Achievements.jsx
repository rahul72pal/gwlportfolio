import React from "react";

const items = [
  {
    icon: "💰",
    number: "90%",
    title: "API Cost Reduction",
    desc: "Implemented Redis caching strategies that slashed third-party API costs by 90% at 75way Technologies.",
  },
  {
    icon: "⚡",
    number: "95%",
    title: "Less Manual Work",
    desc: "Automated fee collection, bulk imports, and PDF generation — reducing admin effort by up to 95% at client schools.",
  },
  {
    icon: "🚀",
    number: "10K+",
    title: "Students Impacted",
    desc: "Multi-school ERP built for A2Developers managing 10,000+ student records, fees, and academic data.",
  },
  {
    icon: "🏗️",
    number: "4+",
    title: "Production Systems",
    desc: "Built and shipped full-stack apps from scratch — covering healthcare, e-commerce, investment, and ERP domains.",
  },
];

const Achievements = () => (
  <section className="section" id="achievements">
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 5%" }}>
      <h2 className="section-title">Key Achievements</h2>
      <p className="section-subtitle">Impact-driven results from real production work</p>
      <div className="achievements-grid">
        {items.map((a, i) => (
          <div
            className="achievement-card"
            key={i}
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay={i * 100}
          >
            <div className="achievement-icon">{a.icon}</div>
            <div className="achievement-number">{a.number}</div>
            <div className="achievement-title">{a.title}</div>
            <p className="achievement-desc">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
