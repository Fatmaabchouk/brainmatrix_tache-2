import React, { useEffect, useState } from 'react';
import BlogCarts from './BlogCarts';
import Pagination from './Pagination';
import CategorSelection from './CategorSelection';
import SideBar from './SideBar';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
      // filter by category
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  // Page changing button
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      {/* Category section */}
      <div> <CategorSelection onSelectCategory = {handleCategoryChange} selectedCategory = {selectedCategory} 
      activeCategory = {activeCategory} />

      </div>

      {/* BlogCards Section */}
      <div className='flex flex-col lg:flex-row gap-12'>
        <BlogCarts
          blogs={blogs}
          currentPage={currentPage} // Corrected variable name here
          selectedCategory={selectedCategory} // Corrected variable name here
          pageSize={pageSize}
        />

        {/* SideBar component */}
        <div>
          <SideBar/>
        </div>
      </div>

      {/* Pagination section */}
      <div>
        <Pagination onPageChange={handlePageChange} currentPage={currentPage}  blogs={blogs} pageSize ={pageSize} />

      </div>
    </div>
  );
};

export default BlogPage;
