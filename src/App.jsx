import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// importer les animations
import 'animate.css';
import Navbar from './composant/Navbar'
import Home from './composant/Home'
import About from './composant/About'
import Education from './composant/Education';
import Skills from './composant/Skills';
import Project  from './composant/Project';
import Contact from './composant/Contact';
import Footer from './composant/Footer';
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>


    </>
  )
}

export default App
