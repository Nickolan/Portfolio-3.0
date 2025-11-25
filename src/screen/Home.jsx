import React from 'react'
import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import AboutMeResume from '../components/AboutMeResume'
import Mail from '../components/Mail'
import Experience from '../components/Experience'
import Education from '../components/Education'
import BgAnimated from '../components/BgAnimated/BgAnimated'

const Home = () => {
  return (
    <div style={{gap: 30, paddingTop: 60, "--secundary-color": "#4fc3dc"}}>
        {/* <BgAnimated/> */}
        <Navbar/>
        <Introduction/>
        <Projects/>
        <AboutMe/>
        <Skills/>
        <Experience/>
        <Education/>
        <Mail/>
    </div>
  )
}

export default Home
