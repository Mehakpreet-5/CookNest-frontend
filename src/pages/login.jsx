
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from './signup';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {                                 
      // const response = await fetch('http://localhost:5000/api/login', { 
        const response = await fetch('https://cooknest.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Login response:", result); // Log response for debugging
      if (response.ok) {
        setLoginMessage('Login successful!');
        
        // Navigate based on role
        if (result.user.isAdmin) {
          // console.log("Navigating to admin page...");
          navigate('/admin');
        } else {
          // console.log("Navigating to home page...");
          navigate('/');
        }

        setTimeout(() => setLoginMessage(''), 1000); // Clear message after redirect
      } else {
        setLoginMessage(`Login error: ${result.message}`);
      }
    } catch (error) {
      setLoginMessage('An error occurred while logging in. Please try again.');
      console.error("Login error:", error); // Log error for debugging
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-yellow-50 to-pink-50">
      <div className="flex pt-20 lg:pt-52  justify-center w-full min-h-screen">
        <div className="w-full  max-w-sm">
          <div className="relative z-10 text-center  p-10 bg-white bg-opacity-25 rounded-lg shadow-xl">
            <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
              <h2 className="text-black mb-10 mt-7 md:text-5xl font-semibold">Login</h2>

              {/* Email Input */}
              <input 
                {...register('email', { required: 'Email is required' })}
                className="w-full p-2 mb-4 text-xl text-gray-800 bg-transparent border-b border-gray-800 outline-none"
                type="email" 
                placeholder="Email"
              /> 
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}

              {/* Password Input */}
              <input 
                {...register('password', { required: 'Password is required' })}
                className="w-full p-2 mb-4 text-xl text-gray-800 bg-transparent border-b border-gray-800 outline-none"
                type="password" 
                placeholder="Password"
              /> 
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}

              {/* Submit Button */}
              <button type="submit" className="w-full py-3 mt-6 bg-gradient-to-r from-blue-400 to-pink-400 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 transition-all duration-300">
                Log in
              </button> 
            </form>

            {/* Message Section */}
            {loginMessage && (
              <div className={`mt-4 text-sm ${loginMessage.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
                {loginMessage}
              </div>
            )}

            {/* Signup Section */}
            <div className="flex justify-center items-center space-x-2 mb-7">
              <p className="message mt-4 text-lg text-gray-400">Not registered?</p>
              <div className="text-blue-500 mt-4"> 
                <Signup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
