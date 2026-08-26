import { useState } from 'react';
import NavBar from './components/navBar';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Stars from './components/stars';
import Layout from './pages/layout';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Services from './pages/services';

function App() {
  return (
    <>
      <Stars />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/services' element={<Services />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
