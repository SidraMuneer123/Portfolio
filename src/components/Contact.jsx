import React from 'react';
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <>
        <Element name="contact" className="element">

      <div className='mt-60'>
      <h1 className='flex items-center justify-center text-4xl font-bold font-mono'>Contact Me</h1>
      <form action="https://formspree.io/f/xzblvjgw" method='POST' className='flex flex-col text-center justify-center items-center space-y-6 mt-7'>
      <input className='w-80 p-1 rounded-lg border-2 border-gray-300' type="text" placeholder='Enter Your Username' name='username' required autoComplete='off' />
      <input className=' w-80 p-1 rounded-lg border-2 border-gray-300' type="email" name="email" placeholder='Enter Your Email' required autoComplete='off' />
      <textarea className='pl-2 pt-2 rounded-lg border-2 border-gray-300' name="Message" cols="41" rows="7" placeholder='Enter Your Message' autoComplete='off'></textarea>
      <div className=' my-4 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-7 py-2.5 text-center mr-2 mb-2'>

      <input className='' type="submit" value="Send" />
      </div>
    </form>
      </div>
      </Element>
    </>
  )
}

export default Contact
