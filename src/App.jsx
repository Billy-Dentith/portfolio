import React from 'react';
import './App.css'
import './styles/Global.css'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Credits from './components/Credits';


function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <div id='content'>
        <Intro></Intro>
        <AboutMe></AboutMe>
        <Experience></Experience>
        <Projects></Projects>
        <Credits></Credits>
      </div>
    </div>
  )
}

export default App
