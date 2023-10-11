import React from 'react';
import { Link, Element } from 'react-scroll';


const Home = () => {
  return (
    <>

        <Element name="/" className="element">


        <div className='lg:px-40 flex space-x-4 space-y-3 sm:flex-row flex-col  py-16 sm:py-20 xl:px-48 xl:space-x-36 lg:space-x-20 md:px-16 sm:px-10'>
        <div className='xl:w-[50%] sm:[30%] py-3 sm:pt-12  px-4 space-y-3'>
        <p className=' text-sm text-gray-500'>THIS IS ME</p>
        <h1 className=' text-3xl sm:text-5xl font-bold'>SIDRA MUNEER</h1>
        <p className='text-sm text-gray-500'>I'm  Sidra Muneer. I'm Frontend Developer . I can convert design into Code. I am skilled in React Js. I know the Css Framework Like Material Ui and Tailwind.</p>


        

        </div>
        <div className=''>
        <img className='h-72 w-80 xl:w-72 m-auto ' src="/Images/me.jpg" alt="" />



        </div>
        

        </div>
        </Element>

        {/* <div class="w-[50%] h-6 bg-gray-300 rounded">
        <div class="h-full bg-blue-500 w-[80%]"></div>
    </div> */}
        
    </>
  )
}

export default Home
