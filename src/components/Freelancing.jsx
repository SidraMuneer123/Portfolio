import React from 'react'
import { Link } from 'react-scroll'

const Freelancing = () => {
    return (
        <>
            <div className='bg-gray-100 h-16 mb-8'>
                <div class="relative">

                    <img src="/Images/fresh.jpg" alt="Image" class="w-full filter brightness-50 h-72" />


                    <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div class="bg-transparent bg-opacity-75 p-4 rounded-lg shadow-md flex flex-col  items-center ">
                            <h1 class="lg:text-6xl sm:text-4xl text-2xl font-semibold text-blue-200">I Am Available For Freelancing</h1>
                            <Link activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}><button type="button" className=" my-4 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-7 py-2.5 text-center mr-2 mb-2">Hire Me</button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Freelancing
