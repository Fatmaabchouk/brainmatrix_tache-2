import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// React icons
import { FaBars, FaDribbble, FaFacebook, FaTwitter, FaTimes } from "react-icons/fa";
import Modal from './Modal';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isModalOpen , setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    // navItems
    const navItems = [
        { path: "/", Link: "Home" },
        { path: "/Services", Link: "Services" },
        { path: "/about", Link: "About" },
        { path: "/Blogs", Link: "Blogs" },
        { path: "/Contact", Link: "Contact" }
    ];

    //Modal details 
    const openModel =() =>{
        setIsModalOpen(true);

    } 
    const closeModal = () =>
        setIsModalOpen (false);

    return (
        <header className='bg-black text-white fixed left-0 top-0 right-0'>
            <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
                <a href="/" className='text-xl font-bold text-white'>
                    
Tech <span className='text-yellow-300'>Hive</span>
                </a>
                <ul className='md:flex gap-12 text-lg hidden'>
                    {navItems.map(({ path, Link }) => (
                        <li className='text-white' key={path}>
                            <NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{Link}</NavLink>
                        </li>
                    ))}
                </ul>

                {/* Menu icons */}
                <div className='text-white lg:flex gap-4 items-center hidden'>
                    <a href="/" className="hover:text-yellow-300 text-2xl">
                        <FaFacebook />
                    </a>
                    <a href="/" className="hover:text-yellow-300 text-2xl">
                        <FaDribbble />
                    </a>
                    <a href="/" className="hover:text-yellow-300 text-2xl">
                        <FaTwitter />
                    </a>
                    <button onClick={openModel} className='bg-yellow-300 px-6 py-2 font-medium rounded hover:bg-white hover:text-yellow-300 transition-all duration-200 ease-in'>Log in</button>
                </div>
                {/* Our Model component is here */}
                <Modal isOpen={isModalOpen} onClose ={closeModal} />
            




                {/* Mobile menu button, displayed on mobile screens */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='cursor-pointer'>
                        {isMenuOpen ? <FaTimes className='w-5 h-5' /> : <FaBars className='w-5 h-5' />}
                    </button>
                </div>
            </nav>

            {/*menu items only for mobiles */}
            <div>
            <ul className={` md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" :
                "hidden" 
            }  `}>
                    {navItems.map(({ path, Link }) => (
                        <li className='text-black' key={path}>
                            <NavLink onClick={toggleMenu} to={path}>{Link}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>

        </header>
    );
};

export default Navbar;
