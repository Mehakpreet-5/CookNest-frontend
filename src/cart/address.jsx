
import React, { useState } from 'react';
import { FaHome, FaUser, FaCity, FaMapSigns, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import deliveryImg from '../assets/11.png';

const AddressDetail = () => {
  const [address, setAddress] = useState({
    name: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Address submitted:', address);
    navigate('/payment', { state: { address } });
  };

  return (
    <div className='flex flex-col lg:flex-row items-center  lg:h-screen bg-gradient-to-r from-yellow-50 to-pink-50 text-gray-800 
    rounded-lg shadow-lg p-6 lg:pt-16'>

      {/* Image Section */}
      <div className='w-full flex  mb-6 lg:mb-0 lg:w-5/12 ml-28 '>
        <img src={deliveryImg} alt="Delivery" className='w-5/6 sm:w-4/6 lg:w-11/12 mt-20 hidden sm:block' />
      </div>

      {/* Address Form Section */}
      <div className="w-full sm:w-5/6 md:w-3/4 lg:w-2/6 lg:ml-20 py-14 mt-7 lg:mt-0 bg-transparent p-6 lg:px-9 rounded-lg shadow-2xl shadow-gray500">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center text-gray-800">Enter Your Address</h2>
        <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">

          {/* Name Field */}
          <div>
            <label className="flex items-center text-sm sm:text-base font-medium mb-2 text-gray-700">
              <FaUser className="mr-2 text-gray-600" /> Name
            </label>
            <input
              type="text"
              name="name"
              value={address.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="flex items-center text-sm sm:text-base font-medium mb-2 text-gray-700">
              <FaEnvelope className="mr-2 text-gray-600" /> Email
            </label>
            <input
              type="email"
              name="email"
              value={address.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
              placeholder="Enter your email"
            />
          </div>

          {/* Street and City Fields */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label className="flex items-center text-sm sm:text-base font-medium mb-2 text-gray-700">
                <FaHome className="mr-2 text-gray-600" /> Street Address
              </label>
              <input
                type="text"
                name="street"
                value={address.street}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
                placeholder="Enter your street address"
              />
            </div>

            <div>
              <label className="flex items-center text-sm sm:text-base font-medium mb-2 text-gray-700">
                <FaCity className="mr-2 text-gray-600" /> City
              </label>
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
                placeholder="Enter your city"
              />
            </div>
          </div>

          {/* State and ZIP Code Fields */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label className="flex items-center text-sm sm:text-base font-medium mb-2 text-gray-700">
                <FaMapSigns className="mr-2 text-gray-600" /> State
              </label>
              <input
                type="text"
                name="state"
                value={address.state}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
                placeholder="Enter your state"
              />
            </div>

            <div>
              <label className="flex items-center text-sm sm:text-base font-medium mb-2 text-gray-700">
                <FaEnvelope className="mr-2 text-gray-600" /> ZIP Code
              </label>
              <input
                type="text"
                name="zip"
                value={address.zip}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
                placeholder="Enter your ZIP code"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-yellow-500 text-lg sm:text-xl hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded shadow transition transform hover:scale-105 w-full"
          >
            Save Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressDetail;
