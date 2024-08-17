import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  return (
    <nav className="bg-[#262626]  h-[80px] p-4 sticky top-0 z-50 transition-colors opacity-95 duration-300  shadow-sm items-center content-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center text-black text-xl font-bold">
          <h1 className='text-[2rem] text-red-600 max-[768px]:text-[1.5rem]'>SAHIL RAWAT</h1>
          
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex items-center space-x-4   p-3 rounded-full">
          <li>
            <a href="#" className="hover:border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 border-2 border-white text-white px-4 py-2 hover:text-red-600 hover:no-underline rounded-full transition-all ease-in-out duration-500 ">
              Home
            </a>
          </li>
          <li>
            <a href="#feature" className="hover:border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 border-2 border-white text-white px-4 py-2 hover:text-red-600 hover:no-underline rounded-full transition-all ease-in-out duration-500 ">
              Feature
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 border-2 border-white text-white px-4 py-2 hover:text-red-600 hover:no-underline rounded-full transition-all ease-in-out duration-500 ">
              Projects
            </a>
          </li>
          <li>
            <a href="#resume" className="hover:border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 border-2 border-white text-white px-4 py-2 hover:text-red-600 hover:no-underline rounded-full transition-all ease-in-out duration-500 ">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 border-2 border-white text-white px-4 py-2 hover:text-red-600 hover:no-underline rounded-full transition-all ease-in-out duration-500 ">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className={`lg:hidden fixed top-0 right-0 w-2/4 h-full backdrop-blur-xl bg-black transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-4">
          <button onClick={toggleMenu} className="text-white focus:outline-none mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul className="space-y-4">
            <li>
              <a href="#home" className=" block text-white text-[1rem] hover:text-blue-800 px-4 py-2 hover:no-underline">
                Home
              </a>
            </li>
            <li>
              <a href="#feature" className=" block text-white text-[1rem] hover:text-blue-800 px-4 py-2 hover:no-underline">
                Features
              </a>
            </li>
            <li>
              <a href="#projects" className=" block text-white text-[1rem] hover:text-blue-800 px-4 py-2 hover:no-underline">
                My Projects
              </a>
            </li>
            <li>
              <a href="#resume" className=" block text-white text-[1rem] hover:text-blue-800 px-4 py-2 hover:no-underline">
                My Resume
              </a>
            </li>
            <li>
              <a href="#contact" className=" block text-white text-[1rem] hover:text-blue-800 px-4 py-2 hover:no-underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
