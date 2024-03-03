import { useState } from 'react';
import './App.css';
import Navbar from './Components/pages/Navbar';
import Footer from './Components/pages/Footer';
import { Home } from './Components/pages/Home';
import  Galeria from './Components/pages/Galeria';
import About from './Components/pages/About';
import Historia from './Components/pages/Historia';
import Servicios from './Components/pages/Servicios';
import WspButton from './Components/pages/WspButton';


function App() {
  return (
  <div className='App'>
    <Navbar />
    <Home />
    <Servicios />
    <Galeria />
    <About />
    <Historia />
    <Galeria />
    <WspButton />
    <Footer />
  </div>
  )
}

export default App
