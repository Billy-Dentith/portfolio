import React from 'react';
import './App.css'
import './styles/Global.css'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Credits from './components/Credits';
import Skills from './components/Skills';


function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <div id='content'>
        <Intro></Intro>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Experience></Experience>
        <Projects></Projects>
        <Credits></Credits>
      </div>
    </div>
  )
}

export default App
