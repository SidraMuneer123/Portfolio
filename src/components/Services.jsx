import React from 'react';
import { Element } from 'react-scroll';

const Services = () => {
    return (
        <>
            <Element name="services" className="element">


            <div className='flex flex-col items-center justify-center  py-8 sm:py-20 overflow-hidden'>
                <h1 className='text-4xl font-extrabold font-mono mb-8'>Latests Works</h1>
                <div className='projects flex lg:space-x-10 md:space-x-6 sm:space-x-3 flex-col sm:flex-row  sm:space-y-0 space-y-6'>
                    <a href='https://sidramuneer123.github.io/Whether-App/'><div class="group relative  sm:h-32 md:h-40 lg:h-52 lg:w-96 md:w-60 w-96 h-52 cursor-pointer">
                        {/* <img src="/Images/ok4.png" alt="" /> */}

                        <img src="/Images/img1.jpg" alt="Image" className="w-full h-full"></img>
                        <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 flex items-center justify-center">
                            <p class="text-white text-xl">Project 1</p>
                        </div>
                    </div></a>
                    {/* <a href='https://sidramuneer123.github.io/Whether-App/'><img src="/Images/ok4.png" alt="" /></a> */}
                    <a href='https://sidramuneer123.github.io/Todo-list/'><div class="group relative sm:h-32 md:h-40 lg:h-52 lg:w-96 md:w-60 w-96 h-52 cursor-pointer">
                        <img src="/Images/img2.webp" alt="Image" class="w-full h-full" />
                        <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 flex items-center justify-center">
                            <p class="text-white text-xl">Project 2</p>
                        </div>
                    </div></a>
                    <a href='https://sidramuneer123.github.io/Google-Keep/'><div class="group relative sm:h-32 md:h-40 lg:h-52 lg:w-96 md:w-60 w-96 h-52 cursor-pointer">
                        <img src="/Images/img3.jpg" alt="Image" class="w-full h-full" />
                        <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 flex items-center justify-center">
                            <p class="text-white text-xl">Project 3</p>
                        </div>
                    </div></a>

                </div>


            </div>
            </Element>

        </>
    )
}

export default Services

