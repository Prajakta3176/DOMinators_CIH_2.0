import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function GovSigninPage() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    number: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      if (!values.number || !values.password) {
        return alert('Please enter valid credentials!');
      }

      const res = await axios.post("http://localhost:8080/api/user/government/signin", values, {
        headers: { "Content-Type": "application/json" },
      });

      console.log(res.data.user);

      localStorage.setItem('id', res?.data?.user?.id);
      localStorage.setItem('token', res?.data?.user?.token);
      localStorage.setItem('role', res?.data?.user?.role);
      localStorage.setItem('isLoggedIn', true);

      alert("Gov Sign In Successful!");
      setValues({ number: "", password: "" });
      navigate('/gov-dashboard'); 
    } catch (err) {
      console.log(err);
      alert(err?.response?.data?.message || "Signin failed!");
    }
  };

  return (
    <div className='h-[85vh] sm:h-screen bg-[linear-gradient(to_bottom,_#06ACF180,_#FFFFFF82)] p-5 md:p-10 flex items-center justify-center'>
      <div className='bg-white w-[60vh] rounded-2xl p-5'>
        <h1 className='text-2xl font-bold text-[#123C74] text-center'>Gov Official Login</h1>

      
        <div className='flex flex-col gap-2 mt-4'>
          <label className='font-semibold text-blue-400' htmlFor="number">Mobile Number</label>
          <input
            onChange={handleChange}
            className='bg-[linear-gradient(to_bottom,_#06ACF180,_#FFFFFF82)] p-3 rounded'
            id='number'
            type="number"
            name='number'
            value={values.number}
            placeholder='e.g. 9876543210'
            required
          />
        </div>

      
        <div className='flex flex-col gap-2 mt-4'>
          <label className='font-semibold text-blue-400' htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            className='bg-[linear-gradient(to_bottom,_#06ACF180,_#FFFFFF82)] p-3 rounded'
            id='password'
            type="password"
            name='password'
            value={values.password}
            placeholder='Password'
            required
          />
        </div>

        
        <button
          onClick={handleSubmit}
          className='font-semibold text-white text-xl mt-4 bg-[#123C74] rounded hover:rounded-4xl transition-all duration-300 px-5 py-3 w-full'
        >
          Sign In
        </button>

        <p className='mt-3 text-center font-semibold text-[#123C74]'>Or</p>
        <p className='mt-3 text-center text-black'>
          Create new Account <Link className='text-blue-400 underline ml-2' to='/gov-sign-up'>Gov Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
