import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function GovSignupPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    fullname: "",
    number: 0,
    password: "",
    email: "",
    department: "Road",
    city: "",
    role: "government"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues, [name]: value
    }));
  };

  const handleSubmit = async () => {
    console.log(values);

    try {
      const { fullname, number, password, email, department, city } = values;

      if (!fullname || !number || !password || !email || !department || !city) {
        return alert('All fields are required!');
      }

      const res = await axios.post("http://localhost:8080/api/user/government/signup", values);

      setValues({
        fullname: "",
        number: "",
        password: "",
        email: "",
        department: "Road",
        city: "",
        role: "government"
      });

      navigate('/gov-sign-in');

    } catch (err) {
      console.log(err.response?.data?.message || "Signup Error");
      alert(err.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className='pt-60 sm:min-h-screen bg-[linear-gradient(to_bottom,_#06ACF180,_#FFFFFF82)] px-10 flex items-center justify-center '>
      <div className='bg-white w-[50vw] rounded-2xl p-5'>
        <h1 className='text-2xl font-bold text-[#123C74] text-center'>Gov Official Registration</h1>

        {/* Full Name */}
        <div className='flex flex-col gap-2 mt-4'>
          <label className='font-semibold text-blue-400'>Full Name</label>
          <input
            name="fullname"
            type="text"
            value={values.fullname}
            onChange={handleChange}
            placeholder="Full Name"
            className='bg-[linear-gradient(to_bottom,_#06ACF180,_#FFFFFF82)] p-3 rounded'
            required
          />
        </div>

       <div className="flex justify-between items-center w-full gap-3">
         {/* Email */}
        <div className='flex flex-col gap-2 mt-4 w-[50%]'>
          <label className='font-semibold text-blue-400'>Email</label>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            className='bg-[linear-gradient(to_bottom,_#06ACF180,_#FFFFFF82)] p-3 rounded'
            required
          />
        </div>

        {/* Mobile Number */}
        <div className='flex flex-col gap-2 mt-4 w-[50%]'>
          <label className='font-semibold text-blue-400'>Mobile Number</label>
          <input
            name="number"
            type="number"
            value={values.number}
            onChange={handleChange}
            placeholder="e.g. 987*******"
            className='bg-[linear-gradient(to_bottom,_#06ACF180,_#FFFFFF82)] p-3 rounded'
            required
          />
        </div>
       </div>

        {/* Password */}
        <div className='flex flex-col gap-2 mt-4'>
          <label className='font-semibold text-blue-400'>Password</label>
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
            className='bg-[linear-gradient(to_bottom,_#06ACF180,_#FFFFFF82)] p-3 rounded'
            required
          />
        </div>

        {/* Department */}
        <div className='flex flex-col gap-2 mt-4'>
          <label className='font-semibold text-blue-400'>Department</label>
          <select
            name="department"
            value={values.department}
            onChange={handleChange}
            className='bg-[linear-gradient(to_bottom,_#06ACF180,_#FFFFFF82)] p-3 rounded'
          >
            <option>Road</option>
            <option>Drainage</option>
            <option>Electricity</option>
            <option>Water Supply</option>
            <option>Garbage Collection</option>
            <option>Others</option>
          </select>
        </div>

        {/* City */}
        <div className='flex flex-col gap-2 mt-4'>
          <label className='font-semibold text-blue-400'>City</label>
          <input
            name="city"
            type="text"
            value={values.city}
            onChange={handleChange}
            placeholder="City"
            className='bg-[linear-gradient(to_bottom,_#06ACF180,_#FFFFFF82)] p-3 rounded'
            required
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className='font-semibold text-white text-xl mt-4 bg-[#123C74] rounded hover:rounded-4xl transition-all duration-300 px-5 py-3 w-full'
        >
          Sign Up
        </button>

        <p className='mt-3 text-center font-semibold text-[#123C74]'>Or</p>
        <p className='mt-3 text-center'>
          Already registered? <Link className='text-blue-400 underline' to='/gov-sign-in'>Sign In</Link>
        </p>
      </div>
    </div>
  );
}
