import React from 'react';
import { Link, Element } from 'react-scroll';


const About = () => {
  return (
    <>
        <Element name="about" className="element">
        <div className='flex sm:flex-row flex-col-reverse py-9 sm:py-16 sm:px-14 sm:space-x-24 md:px-32 lg:px-48 lg:space-x-48 md:space-x-32'>
        <div>
        <img className='sm:w-[950px] sm:h-[500px] w-72 m-auto h-48 mt-6' src="/Images/pic.jpg" alt="Image" />

        </div>
        <div className='px-8'>
        <h1 className='text-4xl font-bold font-mono'>My Bio-Data</h1>
        <br />
        <p>I am Frontend Developer.I am skilled in HTML CSS Javascript and React. Moreover I can familiar with CS framework like Tailwind and Bootstrap . I can easily convert design into code..</p>
        <br />
        <br className='hidden sm:visible' />
        <div className="progressbar lg:space-y-4 md:space-y-2 space-y-1">
        <h1>HTML</h1>
          <div class="w-full h-2 sm:h-3 bg-gray-300 rounded-2xl">
        <div class="h-full bg-blue-500 w-[90%]"></div>
    </div>
        <h1>CSS</h1>
          <div class="w-full h-2 sm:h-3 bg-gray-300 rounded-2xl">
        <div class="h-full bg-blue-500 w-[80%]"></div>
    </div>
        <h1>JAVASCRIPT</h1>
          <div class="w-full h-2 sm:h-3 bg-gray-300 rounded-2xl">
        <div class="h-full bg-blue-500 w-[70%]"></div>
    </div>
        <h1>REACT</h1>
          <div class="w-full h-2 sm:h-3 bg-gray-300 rounded-2xl">
        <div class="h-full bg-blue-500 w-[70%]"></div>
    </div>
        <h1>TAILWIND CSS</h1>
          <div class="w-full h-2 sm:h-3 bg-gray-300 rounded-2xl">
        <div class="h-full bg-blue-500 w-[90%]"></div>
    </div>
        </div>

        </div>
      </div>
        </Element>

     
    </>
  )
}

export default About

