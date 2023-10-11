import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import Freelancing from './components/Freelancing';
import Contact from './components/Contact';
import Footer from './components/Footer';




const App = () => {
  return (
    <div>
    <Navbar   />
   <Home />
    <About />
    <Services />
    <Freelancing />
    <Contact />
    <Footer />
    

      
    </div>
  )
}

export default App
