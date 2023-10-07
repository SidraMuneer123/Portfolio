import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';


const App = () => {
  return (
    <div>
    <Navbar  />
    <Home />
    <About />

      
    </div>
  )
}

export default App
