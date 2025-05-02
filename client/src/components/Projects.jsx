import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/projects');
        const data = await res.json();
        if (res.ok) {
          setProjects(data);
        } else {
          console.error("Error fetching projects:", data.error);
        }
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="container projects my-3" id="projects">
      <h1>PROJECTS</h1>
      <div className="row d-flex justify-content-center align-content-center">
        {projects.map((data) => (
          <div key={data.id} className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4">
            <div
              className="card bg-dark text-light"
              style={{
                width: "18rem",
                border: "1px solid yellow",
                boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
              }}
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="img d-flex justify-content-center align-content-center p-3">
                <img
                  src={data.imageSrc}
                  className="card-img-top"
                  alt="..."
                  style={{
                    width: "250px",
                    height: "200px",
                    border: "2px solid yellow",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a href={data.demo} target="_blank" className="btn btn-primary mx-3">
                  Demo
                </a>
                <a href={data.source} target="_blank" className="btn btn-warning">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
