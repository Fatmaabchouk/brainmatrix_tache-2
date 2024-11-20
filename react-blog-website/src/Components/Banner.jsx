import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from "react-icons/fa6";

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black mx-auto'>
   <div className='text-yellow-300 text-center'>
    <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome tou our Blog</h1>
    <p className='text-gray-300 lg:w-3/5 mx-auto mb-5 font-primary'>Start your blog today and join a community of writers and readers who are passionate about sharing their stories and idees . we offer everything you need to get started , from helpful tips and tutorials. </p>
    <div>
        <Link to= "/" className='font-medium hover:text-gray-300 inline-flex items-center py-1 ' > <FaArrowRight className='mt-1  ml-2'/>
        Learn more </Link>
    </div>
   </div>
    </div>
  )
}

export default Banner
