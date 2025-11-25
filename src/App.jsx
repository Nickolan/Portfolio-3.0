import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './screen/Home';
import AboutScreen from './screen/AboutScreen';

import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
