import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Profiel from './components/pages/Profiel';
import Werkervaring from './components/pages/Werkervaring';
import Info from './components/pages/Info';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' exact element= {<Home/>} />
          <Route path='/Profiel' element= {<Profiel />} />
          <Route path='/Werkervaring' element= {<Werkervaring />} />
          <Route path='/Info' element= {<Info />} />
          <Route path='/Contact' element= {<Contact />} />
      </Routes>
    </>
  )
}

export default App
