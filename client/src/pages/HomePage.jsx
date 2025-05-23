import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default HomePage
