
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import orderIcon from '../assets/orderdone.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative text-green-900 ">
      {/* Main Navbar */}
      <div className="lg:flex  hidden w-full justify-between items-center px-6 py-4 bg-transparent z-50 fixed top-0 left-0 right-0">
        {/* Logo */}
        <h1 className="text-5xl fontt ml-48 mt-1">
          <span className="oragg">Cook</span>
          <span className="text-green-800">Nest</span>
        </h1>

        {/* Links for larger screens */}
        <ul className="flex space-x-7 text-green-900 text-2xl">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/see-order">View Order</Link></li>
      
          {/* <li><Link to="/admin">Admin</Link></li> */}
        </ul>

        {/* Booking and AI buttons */}
        <div className="flex space-x-6 mr-52">
        
                <Link to="/cart">    <FontAwesomeIcon icon={faCartShopping} className='mt-3 h-7' /></Link>
          <div className="p-2 px-5 text-center text-2xl rounded-full bg-yellow-600 bg-opacity-45 ">
            <Link to="/ai">AI Recipe</Link>
          </div>
        </div>
      </div>

      {/* Mobile Navbar Toggle Button */}
      <div className="lg:hidden flex  justify-between items-center px-6 py-4 bg-transparent z-50 fixed top-0 left-0 right-0">
        <h1 className="text-4xl fontt ml-2">
          <span className="oragg">Cook</span>
          <span className="greenn">Nest</span>
        </h1>
        <div className="flex items-center space-x-4">
          {/* Cart Icon for Mobile */}
          {/* <Link to="/ShowOrder"> <img src={orderIcon} alt="Cart" className="h-8" /></Link> */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl"
            aria-label="Toggle navigation"
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-yellow-50 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-300 z-50`}
      >
        <div className="flex flex-col p-6 space-y-4 overflow-y-auto">
          <h1 className="text-4xl fontt mb-4">CookNest</h1>
          <ul className="flex flex-col space-y-4 text-lg">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
            <li><Link to="/see-order" onClick={() => setIsOpen(false)}>View Order</Link></li>
            <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
            
          </ul>

          <div className="mt-8">
            {/* <div className="p-2 w-full text-center rounded-full bg-yellow-600 bg-opacity-45 rubi mb-4">
              <Link to="/booking" onClick={() => setIsOpen(false)}>Book Now</Link>
            </div> */}
                 <Link to="/cart">    <FontAwesomeIcon icon={faCartShopping} className='mt-3 h-5' /></Link>
            <div className="p-2 w-full text-center rounded-full bg-yellow-600 bg-opacity-45 rubi">
              <Link to="/ai" onClick={() => setIsOpen(false)}>AI Recipe</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for small screen sidebar */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default Navbar;
