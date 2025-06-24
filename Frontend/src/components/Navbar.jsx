import { Eye } from 'lucide-react';
import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.clear();
    navigate("/sign-in")

  }
  return (
    <div className='w-[100vw] flex justify-center items-center '>
      <header className="bg-[#FEFEFF] text-[#000000] shadow-md fixed top-0 w-[80vw] mx-auto z-50 mt-8 border border-[#8AC8E9] rounded-[10px] ">

      {/* Main Nav */}
      <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          {/* <img src="/bharat-logo.png" alt="Bharat Emblem" className="h-10 w-10" /> */}
          <Eye/>
          <Link to="/home">
            <h1 className="text-lg font-semibold">CivicEye</h1>
            <p className="text-xs text-gray-200">Citizen-Government Feedback Portal</p>
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#departments" className="hover:text-yellow-300">How It Works</a>
          <a href="/departments" className="hover:text-yellow-300">Departments</a>
          {/* <a href="#community" className="hover:text-yellow-300">Community</a> */}
          <a href="/about-us" className="hover:text-yellow-300">About Us</a>
        </nav>


        <div className='flex items-center justify-center  gap-3'>
          <div className='w-7 h-7 bg-[#8fcbe6] flex items-center justify-center rounded-full text-white '><FaRegUser /></div>
          <div className={`bg-blue-200 p-2 px-4 rounded-xl font-bold text-white hover:bg-blue-300 ${isLoggedIn ? "hidden" : "block"}`}><Link to='/main-page'>SignIn</Link></div>
          <div className={`bg-blue-200 p-2 px-4 rounded-xl font-bold text-white hover:bg-blue-300 ${isLoggedIn ? "block" : "hidden"}`}><button onClick={handleLogout}>Sign Out</button></div>
        </div>
      </div>

      
    </header>
    </div>

        

  );
};

export default Navbar;
