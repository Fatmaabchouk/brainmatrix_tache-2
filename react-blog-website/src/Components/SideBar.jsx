import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa6";

const SideBar = () => {
    const [popularBlogs , setpopularBlogs] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/blogs").then(res => res.json()).then(data => setpopularBlogs(data.slice(0,15
            
        )))

    },[])
  return (
    <div>
      <div>
        <h3 className='text-2x1 font-semibold px-4' >Letest Blogs</h3>
        <div>
            {
                popularBlogs.slice(0 , 5).map(blog => <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4 ' >
                    <h4 className='font-medium mb-2'>{blog.title}</h4>
                    <Link to= "/" className='text-base pb-2 hover:text-yellow-300 inline-flex items-center py-1 ' > <FaArrowRight className='mt-1  ml-2'/>
                    Raed more </Link>
                    </div> )
            }
        </div>
      </div>
      {/* Popular Blog */}
      <div>
        <h3 className='text-2x1 font-semibold px-4 mt-20' >Popular Blogs</h3>
        <div>
            {
                popularBlogs.slice(5 , 10).map(blog => <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4 ' >
                    <h4 className='font-medium mb-2'>{blog.title}</h4>
                    <Link to= "/" className='text-base pb-2 hover:text-yellow-300 inline-flex items-center py-1 ' > <FaArrowRight className='mt-1  ml-2'/>
                    Raed more </Link>
                    </div> )
            }
        </div>
      </div>



    </div>
  )
}

export default SideBar
