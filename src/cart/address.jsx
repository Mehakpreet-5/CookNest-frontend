

import React, { useState } from 'react';
import { FaHome, FaUser, FaCity, FaMapSigns, FaEnvelope } from 'react-icons/fa'; // Import icons
import { useNavigate } from 'react-router-dom';
import deliveryImg from '../assets/11.png'; // Import the image

const AddressDetail = () => {
  // Address state to store the user's address input
  const [address, setAddress] = useState({
    name: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  const navigate = useNavigate(); // Hook for navigation

  // Handle input change and update the address state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission and navigate to the payment page with address data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Address submitted:', address);
    navigate('/payment', { state: { address } }); // Pass address as state to the payment page
  };

  return (
    <div className='lg:flex lg:flex-row lg:h-screen bg-gradient-to-r from-yellow-50 to-pink-50 text-gray-800 
    rounded-lg shadow-lg pt-4 lg:pt-16 pb-10 lg:pb-'>
      {/* Image Section */}
      <div className='hidden sm:block md:block mt-44'>
        <img src={deliveryImg} alt="Delivery" className='hidden sm:block md:block lg:h-9/12 lg:w-11/12 ml-32 ' />
      </div>

      {/* Address Form Section */}
      <div className="w-4/6 lg:w-2/6 h-5/6 mx-auto lg:mt-20 p-6 bg-transparent rounded-lg shadow-2xl">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 lg:mt-6">Enter Your Address</h2>
        <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6  lg:m-6 lg:text-2xl">
          
          {/* Name Field */}
          <div className="mb-4">
            <label className="flex lg:text-2xl items-center text-sm font-medium mb-2 text-gray-700">
              <FaUser className="mr-2  text-gray-600" /> Name
            </label>
            <input
              type="text"
              name="name"
              value={address.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded w-full p-2 bg-white  focus:bg-yellow-10 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="flex lg:text-2xl items-center text-sm font-medium mb-2 text-gray-700">
              <FaEnvelope className="mr-2 text-gray-600" /> Email
            </label>
            <input
              type="email"
              name="email"
              value={address.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded w-full p-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Street and City Fields */}
          <div className='grid grid-cols-2 space-x-2 lg:space-x-4'>
            <div className="mb-4">
              <label className="flex lg:text-2xl items-center text-sm font-medium mb-2 text-gray-700">
                <FaHome className="mr-2 text-gray-600" /> Street Address
              </label>
              <input
                type="text"
                name="street"
                value={address.street}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded w-full p-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300"
                placeholder="Enter your street address"
              />
            </div>

            <div className="mb-4">
              <label className="flex lg:text-2xl items-center text-sm font-medium mb-2 text-gray-700">
                <FaCity className="mr-2 text-gray-600" /> City
              </label>
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded w-full p-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300"
                placeholder="Enter your city"
              />
            </div>
          </div>

          {/* State and ZIP Code Fields */}
          <div className='grid grid-cols-2 space-x-2 lg:space-x-4'>
            <div className="mb-4">
              <label className="flex lg:text-2xl items-center text-sm font-medium mb-2 text-gray-700">
                <FaMapSigns className="mr-2 text-gray-600" /> State
              </label>
              <input
                type="text"
                name="state"
                value={address.state}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded w-full p-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300"
                placeholder="Enter your state"
              />
            </div>

            <div className="mb-4">
              <label className="flex lg:text-2xl items-center text-sm font-medium mb-2 text-gray-700">
                <FaEnvelope className="mr-2 text-gray-600" /> ZIP Code
              </label>
              <input
                type="text"
                name="zip"
                value={address.zip}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded w-full p-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300"
                placeholder="Enter your ZIP code"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-yellow-500 lg:text-2xl hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded shadow transition duration-300 
            transform hover:scale-105 ml-24 lg:ml-48"
          >
            Save Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressDetail;
