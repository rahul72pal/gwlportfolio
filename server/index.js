const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Path to experience.json
const FILE_PATH = path.join(__dirname, "experience.json");
const PROJECTS_FILE_PATH = path.join(__dirname, "projects.json");

// Middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

// ✅ GET endpoint to fetch experience list
app.get("/api/experiences", (req, res) => {
  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) {
      console.error("Failed to read experience file:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    try {
      const experiences = JSON.parse(data);
      res.json(experiences);
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).json({ error: "Error parsing experience data" });
    }
  });
});

// ✅ POST endpoint to add a new experience
app.post("/api/experiences", (req, res) => {
  const newExperience = req.body;

  console.log(
    "newExperience.secretKey !== process.env.SECREATEKEY",
    newExperience.secretKey,
    process.env.SECREATEKEY
  );
  if (newExperience.secretKey !== process.env.SECREATEKEY) {
    return res.status(403).json({ error: "Forbidden" });
  }

  // Remove secretKey before storing the data
  delete newExperience.secretKey;

  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) {
      console.error("Failed to read experience file:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    let experiences;
    try {
      experiences = JSON.parse(data);
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      return res.status(500).json({ error: "Error parsing experience data" });
    }

    // Assign a new ID
    const nextId = experiences.length > 0 ? experiences[0].id + 1 : 1;
    const experienceToAdd = { id: nextId, ...newExperience };

    experiences.unshift(experienceToAdd); // Insert at beginning

    fs.writeFile(
      FILE_PATH,
      JSON.stringify(experiences, null, 2),
      "utf8",
      (writeErr) => {
        if (writeErr) {
          console.error("Failed to write to experience file:", writeErr);
          return res.status(500).json({ error: "Failed to save experience" });
        }

        res.status(201).json({
          message: "Experience added successfully",
          experience: experienceToAdd,
        });
      }
    );
  });
});

// ✅ GET endpoint to fetch projects
app.get("/api/projects", (req, res) => {
  fs.readFile(PROJECTS_FILE_PATH, "utf8", (err, data) => {
    if (err) {
      console.error("Failed to read projects file:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    try {
      const projects = JSON.parse(data);
      res.json(projects);
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).json({ error: "Error parsing projects data" });
    }
  });
});

// ✅ POST endpoint to add a new project
app.post("/api/projects", (req, res) => {
  const newProject = req.body;

  // Check if the secret key matches
  if (newProject.secretKey !== process.env.SECREATEKEY) {
    return res.status(403).json({ error: "Forbidden: Invalid secret key" });
  }

  // Remove secretKey before storing
  delete newProject.secretKey;

  // Read current projects from file
  fs.readFile(PROJECTS_FILE_PATH, "utf8", (err, data) => {
    if (err) {
      console.error("Failed to read projects file:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    try {
      const projects = JSON.parse(data);

      // Add new project at the beginning
      projects.unshift(newProject);

      // Write the updated projects to file
      fs.writeFile(
        PROJECTS_FILE_PATH,
        JSON.stringify(projects, null, 2),
        "utf8",
        (writeErr) => {
          if (writeErr) {
            console.error("Failed to save project:", writeErr);
            return res.status(500).json({ error: "Failed to save project" });
          }

          res.status(201).json({ message: "Project added successfully!" });
        }
      );
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).json({ error: "Error parsing projects data" });
    }
  });
});


// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
