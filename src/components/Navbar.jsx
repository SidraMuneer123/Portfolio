import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import Home from './Home';
import About from './About';


// import './App.css';

const Navbar = () => {
    const [data , setData] = useState(false);
    const toggle = ()=>{
        setData(!data);
        console.log(data)
    }
  return (
   <>
    <div className='w-full bg-slate-50 h-auto flex flex-col py-3 md:flex-row lg:py-1 shadow-lg shadow-gray-100 '>
    <NavLink to="/">
    <img className='h-12 w-32 ml-5' src="/Images/ok4.png" alt="" />
    </NavLink>
    <div className="absolute right-0 mr-3 mt-4 md:hidden">

    <i onClick={toggle} className={data ? "hidden" : "fa-solid fa-bars fa-2xl "}></i>
    <i onClick={toggle} className={data ? "fa-solid fa-x fa-xl " : "hidden"}></i>
    </div>
    
    <div className={data ? "block" : "hidden md:block"}>
        <ul className="fixed flex flex-col items-center md:flex-row md:absolute w-full  bg-slate-50 md:w-auto  md:right-0 md:space-x-20 md:mr-7">
            <Link activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}><li className='my-3 font-medium lg:font-thin  text-xl lg:text-base hover:text-blue-950 hover:font-semibold cursor-pointer hover:underline'>Home</li></Link>
            <Link activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}><li className='my-3 font-medium lg:font-thin  text-xl lg:text-base hover:text-blue-950 hover:font-semibold cursor-pointer hover:underline'>About</li></Link>
            <Link to="services"
             spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              ><li className='my-3 font-medium lg:font-thin  text-xl lg:text-base hover:text-blue-950 hover:font-semibold cursor-pointer hover:underline'>Services</li></Link>
            <Link to="contact"
            spy={true}
              smooth={true}
              offset={-50}
              duration={500}><li className='my-3 font-medium lg:font-thin  text-xl lg:text-base hover:text-
            blue-950 hover:font-semibold cursor-pointer hover:underline'>Contact</li></Link>
            
        </ul>
    </div>
    

    

    </div>
   </>
  )
}

export default Navbar
