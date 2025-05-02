import React, { useEffect, useState } from "react";

const Experience = () => {
  const [experienceList, setExperienceList] = useState([]);

  useEffect(() => {
    fetch("https://gwlportfolio.onrender.com/api/experiences")
      .then((res) => res.json())
      .then((data) => {
        setExperienceList(data);
      })
      .catch((err) => {
        console.error("Failed to fetch experiences:", err);
      });
  }, []);

  return (
    <div className="container ex" id="experience">
      <h1>EXPERIENCE</h1>
      { experienceList.length > 0 && experienceList.map((data) => (
        <div
          key={data.id}
          className="ex-items text-center my-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="left">
            <img src={data.imageSrc} alt="" height={70} />
          </div>
          <div className="right">
            <h2>{data.role}</h2>
            <h4>
              <span style={{ color: "yellowgreen" }}>
                {data.startDate} {data.endDate}{" "}
              </span>{" "}
              <span style={{ color: "yellow" }}>{data.location}</span>
            </h4>
            {data.experiences.map((exp, idx) => (
              <h5 key={idx} style={{ color: "yellow" }}>
                {exp}
              </h5>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
