import { Eye } from 'lucide-react';
import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-[100vw] flex justify-center items-center '>
      <header className="bg-[#FEFEFF] text-[#000000] shadow-md fixed top-0 w-[80vw] mx-auto z-50 mt-8 border border-[#8AC8E9] rounded-[10px] ">
      {/* Top Strip for Language/Login */}
      {/* <div className="flex justify-end items-center text-sm px-4 py-1 bg-[#002B5B]">
        <button className="hover:underline mr-4">हिन्दी</button>
        <button className="hover:underline">Login</button>
      </div> */}

      {/* Main Nav */}
      <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          {/* <img src="/bharat-logo.png" alt="Bharat Emblem" className="h-10 w-10" /> */}
          <Eye/>
          <Link to="/">
            <h1 className="text-lg font-semibold">CivicEye</h1>
            <p className="text-xs text-gray-200">Citizen-Government Feedback Portal</p>
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {/* <a href="#report" className="hover:text-yellow-300">Report Issue</a> */}
          {/* <a href="#dashboard" className="hover:text-yellow-300">Transparency Dashboard</a> */}
          <a href="#departments" className="hover:text-yellow-300">How It Works</a>
          <a href="/issue-listing" className="hover:text-yellow-300">Complaints Received</a>
          <a href="#departments" className="hover:text-yellow-300">Departments</a>
          {/* <a href="#community" className="hover:text-yellow-300">Community</a> */}
          <a href="#about" className="hover:text-yellow-300">About Us</a>
        </nav>


        <div className='flex items-center justify-center  gap-3'>
          <div className='w-7 h-7 bg-[#8fcbe6] flex items-center justify-center rounded-full text-white '><FaRegUser /></div>
          <div className='bg-blue-200 p-2 px-4 rounded-xl font-bold text-white hover:bg-blue-300'><Link to='/sign-in'>SignIn</Link></div>
        </div>
      </div>

      
    </header>
    </div>

        

  );
};

export default Navbar;
