import React from 'react'
import {FaGlobe , FaGithub, FaLinkedin} from "react-icons/fa6"
const Footer = () => {
    return (
        <div className='bg-gray-900'>
            <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
                <div className='grid mb-8 lg:grid-cols-6'>
                    <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                        <div>
                            <p className='font-medium tracking wide text-gray-300'>Category</p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >News</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >Word</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >Games</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >References</a>
                                </li>


                            </ul>
                        </div>
                        {/* category 2 */}
                        <div>

                            <p className='font-medium tracking wide text-gray-300'>Apples</p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >Web</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >e-commerce</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >Business</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >Entertainment</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >Portfolio</a>
                                </li>


                            </ul>
                        </div>
                        {/* category 3*/}


                        <div>

                            <p className='font-medium tracking wide text-gray-300'>Cherry</p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >Media</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >Brochure</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >Nonprofit</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >Education</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >Projects</a>
                                </li>


                            </ul>
                        </div>
                        {/*category4 */}


                        <div>
                           
                           <p className='font-medium tracking wide text-gray-300'>Business</p>
                           <ul className='mt-2 space-y-2'>
                               <li>
                                   <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >Indopeneur</a>
                               </li>
                               <li>
                                   <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >Personal</a>
                               </li>
                               <li>
                                   <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >wiki</a>
                               </li>
                               <li>
                                   <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >Forum</a>
                               </li>
                               <li>
                                   <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500' >Projects</a>
                               </li>


                           </ul>
                       </div>



                       
                    </div>

                    {/* subscription */}
                       
                    <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                           
                           <p className='font-medium tracking wide text-gray-300'>Subscribe for updates</p>
                         <form className='mt-4 flex flex-col md:flex-row'>
                            <input type="email" name="email" className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 mb:mb-0 focus:border-purple-400 focus:outline-none focus:shadow-out' />
                            <button type='submit' className='inline-flex items-center justify-center h-12 px-6
                            font-medium tracking-wide text-white transitio duration-200 rounded shadow-md 
                            hover:bg-yellow-300 focus:outline-none border' >
                                Subscribe

                            </button>
                         </form>
                         <p className='mt-4 text-sm text-gray-500'>Lorem ipsum dolor sit  consectetur adipisicing elit . sunt nisi cumque voluptas. 
                            fuga optio aut saepe voluptas adipisci temporibus ducimus omnis explicabo consequuntur ! 
                            Id dolores corrupti nemo? Ducimus , Quidem odio?  </p>
                       </div>
                </div>

                <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row ' >
                    <p className='text-sm text-gray-500' > © Copyright 2024 | All right resereved.</p>
                    <div className='flex items-center mt-4 space-x-4 sm:mt-0' >
                        <a href="https://ftamaabchouk-mgwa.onrender.com/cv.html" className='text-gray-500 transition-all duration-300 *
                        hover:text-yellow-300' ><FaGlobe className='h-6 w-6' /> </a>
                          <a href="https://www.linkedin.com/in/fatma-abchouk-b49753253/" className='text-gray-500 transition-all duration-300 *
                        hover:text-yellow-300' ><FaLinkedin className='h-6 w-6' /> </a>
                          <a href="https://github.com/Fatmaabchouk" className='text-gray-500 transition-all duration-300 *
                        hover:text-yellow-300' >< FaGithub className='h-6 w-6' /> </a>



                    </div>
                </div>



            </div>
        </div>



    )
}

export default Footer
