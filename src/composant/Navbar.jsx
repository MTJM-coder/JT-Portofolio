import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className='text-aquamarine-500 text-[18px] font-bold p-5 bg-gray-800 fixed w-full z-50'>
        <nav className='flex justify-between items-center'>
            <div className='flex items-center'>
                <span><span className='bg-blue-400 text-gray-800 px-4 text-2xl  inline-block  rounded mx-2'>JT</span>Portofolio</span>
            </div>
            <ul className=' hidden md:flex space-x-7'>
                <li><a href='#home' className='hover:text-blue-400 border-2 border-blue-400 transition duration-1000 p-2 rounded'>Home</a></li>
                <li><a href='#about' className='hover:text-blue-400 hover:border-b-2 border-blue-400 transition duration-1000'>About</a></li>
                <li><a href='#skills' className='hover:text-blue-400 hover:border-b-2 border-blue-400 transition duration-1000'>Skills</a></li>
                <li><a href='#education' className='hover:text-blue-400 hover:border-b-2 border-blue-400 transition duration-1000'>Education</a></li>
                <li><a href='#projects' className='hover:text-blue-400 hover:border-b-2 border-blue-400 transition duration-1000'>Projects</a></li>
                <li><a href='#contact' className='hover:text-blue-400 hover:border-b-2 border-blue-400 transition duration-1000'>Contact</a></li>
                {/* burger bar */}
                   
                
            </ul>
             <button onClick={toggleMenu} className='md:hidden text-2xl focus:outline-none'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
               </svg>
           </button>
        </nav>
        {isOpen && (
        <ul className='md:hidden flex flex-col space-y-4 mt-4 text-xs'>
            <li><a href='#home' className='hover:text-blue-400 border-2 border-blue-400 transition duration-1000 p-2 rounded'>Home</a></li>
            <li><a href='#about' className='hover:text-blue-400 hover:border-b-2 border-blue-400 transition duration-1000'>About</a></li>
            <li><a href='#skills' className='hover:text-blue-400 hover:border-b-2 border-blue-400 transition duration-1000'>Skills</a></li>
            <li><a href='#education' className='hover:text-blue-400 hover:border-b-2 border-blue-400 transition duration-1000'>Education</a></li>
            <li><a href='#projects' className='hover:text-blue-400 hover:border-b-2 border-blue-400 transition duration-1000'>Projects</a></li>
            <li><a href='#contact' className='hover:text-blue-400 hover:border-b-2 border-blue-400 transition duration-1000'>Contact</a></li>
        </ul>
        )}
       
    </div>
  )
}

export default Navbar