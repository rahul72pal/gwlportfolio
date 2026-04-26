import React from "react";
import skills from "./data/skills.json";

const categories = [
  {
    label: "Frontend",
    keys: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "NEXT JS", "Tailwind", "Material Ui"],
  },
  {
    label: "Backend & Database",
    keys: ["Node JS", "Express JS", "MONGODB", "MYSQL"],
  },
];

const Skills = () => {
  const extra = [
    { title: "AWS", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { title: "Redux", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { title: "JWT Auth", imageSrc: "https://jwt.io/img/pic_logo.svg" },
    { title: "Redis", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { title: "Gen AI", imageSrc: "https://www.gstatic.com/lamda/images/gemini_sparkle_red_4ed1cbfcbc6c9e84c31b987da73fc4168aec8445.svg" },
    { title: "Vercel", imageSrc: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico" },
  ];

  const getSkillsByCategory = (keys) =>
    skills.filter((s) => keys.includes(s.title));

  return (
    <section className="section" id="skills">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 5%" }}>
        <h2 className="section-title">Skills & Tech Stack</h2>
        <p className="section-subtitle">Technologies I use to bring ideas to life</p>

        {categories.map((cat) => (
          <div key={cat.label}>
            <div className="skill-category-label">{cat.label}</div>
            <div className="skills-grid">
              {getSkillsByCategory(cat.keys).map((s) => (
                <div className="skill-item" key={s.title} data-aos="fade-up" data-aos-duration="600">
                  <img
                    src={`/assets/${s.imageSrc}`}
                    alt={s.title}
                    onError={(e) => { e.target.src = `https://placehold.co/48x48/1a1a2e/4f8ef7?text=${s.title[0]}`; }}
                  />
                  <div className="skill-name">{s.title}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="skill-category-label">Cloud, Advanced & Tools</div>
        <div className="skills-grid">
          {extra.map((s) => (
            <div className="skill-item" key={s.title} data-aos="fade-up" data-aos-duration="600">
              <img src={s.imageSrc} alt={s.title} onError={(e) => { e.target.src = `https://placehold.co/48x48/1a1a2e/4f8ef7?text=${s.title[0]}`; }} />
              <div className="skill-name">{s.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
