// OtpVerification.js
import React, { useState } from 'react';

const OtpVerification = ({ onVerify }) => {
  const [otp, setOtp] = useState('');

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your OTP verification logic here
    // For now, we just call onVerify if OTP is 123456
    console.log('OTP submitted:', otp);
    if (otp === '123456') { // Replace with actual verification logic
      onVerify();
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4">Enter OTP</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={otp}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded w-full p-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300"
          placeholder="Enter your OTP"
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded shadow transition duration-300 transform hover:scale-105"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default OtpVerification;

