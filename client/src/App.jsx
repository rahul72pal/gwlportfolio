import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import ExperienceForm from "./pages/ExperienceForm";
import ProjectForm from "./pages/ProjectForm";

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1a1a2e",
            color: "#f0f0ff",
            border: "1px solid rgba(79,142,247,0.3)",
            borderRadius: "12px",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addExperience" element={<ExperienceForm />} />
        <Route path="/addProject" element={<ProjectForm />} />
      </Routes>
    </>
  );
};

export default App;
