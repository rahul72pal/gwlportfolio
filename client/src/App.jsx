import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import Aos from "aos";
import "aos/dist/aos.css"
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExperienceForm from "./pages/ExperienceForm";
import ProjectForm from "./pages/ProjectForm";


const App = () => {
 useEffect(() => {
  Aos.init();
  
 }, [])
 
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/addExperience" element={<ExperienceForm/>}/>
        <Route path="/addProject" element={<ProjectForm/>}/>
      </Routes>
    </>
  );
};

export default App;
