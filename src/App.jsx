import React from 'react'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Skills from './Components/Skills'

import Contact from './Components/Contact'
import Home from './Components/Home'
import Projects from './Components/Projects'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
    
    <Routes>
      <Route path='/home'element={<Home/>}/>
      <Route path='/' element={<About/>}/>
      
      <Route path='/project' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App