import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignupPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    fullname: "",
    number: "",
    password: "",
    role:"citizen"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues, [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const { fullname, number, password } = values;

      if (!fullname || !number || !password) {
        return alert('All fields are required!');
      }

      const res = await axios.post("http://localhost:8080/api/user/citizen/signup", values, {
        headers: { "Content-Type": "application/json" },
      });

      // Reset input fields
      setValues({
        fullname: "",
        number: "",
        password: "",
        role:"citizen"
      });

      // Navigate to login
      navigate('/sign-in');

    } catch (err) {
      console.log(err.response?.data?.message || "Signup Error");
      alert(err.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className='pt-28 border-[#8AC8E9] border-1 h-[85vh] sm:h-screen bg-[linear-gradient(to_bottom,_#06ACF180,_#FFFFFF82)] px-10 flex items-center justify-center'>
      <div className='bg-white w-[60vh] rounded-2xl p-5'>
        <h1 className='text-2xl font-bold text-[#123C74] text-center'>Create Your Civic Identity</h1>

        {/* Full Name */}
        <div className='flex flex-col gap-2 mt-4'>
          <label className='font-semibold text-blue-400' htmlFor="fullname">Full Name</label>
          <input
            onChange={handleChange}
            className='bg-[linear-gradient(to_bottom,_#06ACF180,_#FFFFFF82)] p-3 rounded'
            id='fullname'
            type="text"
            name='fullname'
            value={values.fullname}
            placeholder='Full Name'
            required
          />
        </div>

        {/* Mobile Number */}
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

        {/* Password */}
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

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className='font-semibold text-white text-xl mt-4 bg-[#123C74] rounded hover:rounded-4xl transition-all duration-300 px-5 py-3 w-full'
        >
          Sign Up
        </button>

        {/* Login Redirect */}
        <p className='mt-3 text-center'>Or</p>
        <p className='mt-3 text-center'>
          Already have an account? <Link className='text-blue-400 underline' to='/sign-in'>Sign In</Link>
        </p>
      </div>
    </div>
  );
}
