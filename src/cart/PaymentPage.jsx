
import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import payImg from '../assets/pay.png';
import api from '../connection/api';

const PaymentPage = () => {
  const { cartItems } = useCart();
  const location = useLocation();
  const address = location.state?.address || {};
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [message, setMessage] = useState(''); 
  const navigate = useNavigate(); 


  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]+/g, ''));
    // Ensure quantity is always at least 1
    const quantity = Math.max(1, item.quantity || 1);
    return sum + (price * quantity);
}, 0);

const handlePayment = async () => {
    // Check if cartItems and address have valid entries before proceeding
    if (!cartItems.length || !Object.keys(address).length || !paymentMethod || !total) {
      setMessage("Missing required information for payment.");
      return;
    }

      //   const cardDetails = paymentMethod === 'Card' ? {
  //     cardNumber: document.querySelector('input[placeholder="Card Number"]').value,
  //     expiryDate: document.querySelector('input[placeholder="Expiry Date (MM/YY)"]').value,
  //     cvv: document.querySelector('input[placeholder="CVV"]').value,
  //   } : undefined;

    const paymentDetails = {
      cartItems: cartItems.map(item => ({ ...item, quantity: Math.max(1, item.quantity || 1) })), // Ensure each item has at least quantity 1
      address,
      paymentMethod,
      totalAmount: total.toFixed(2),
        //     cardDetails
    };

    try {
      const response = await api.post('/api/payment', paymentDetails);
      setMessage("Payment processed successfully!");
      navigate('/done', { state: { cartItems, total, paymentMethod, address } });
    } catch (error) {
      console.error('Error processing payment:', error.response?.data?.message || error.message);
      setMessage(`Error processing payment: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="lg:h-screen bg-cover bg-center bg-gradient-to-r from-yellow-50 to-pink-50 flex flex-col lg:flex-row lg:space-x-10 pt-20">
      <div className=" font-serif w-9/12 h-5/12 lg:h-5/6 mb-10 lg:mb-0  lg:w-7/12 mx-auto mt-20 p-6 bg-transparent bg-opacity-80 rounded-lg shadow-2xl lg:flex lg:space-x-28 lg:ml-40">
        <div className='mt-10 lg:ml-14  flex flex-col md:flex-row space-x-28'>
          <div>
          <h2 className="md:text-5xl  text-2xl font mb-6 text-center  text-green-800">Payment Information</h2>

          <h3 className="md:text-3xl font-semibold mb-4">Order Summary</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="flex md:text-2xl justify-between mb-2">
                <span>{item.name} x {item.quantity || 1}</span>
                <span>₹{(parseFloat(item.price.replace(/[^0-9.]+/g, '')) * (item.quantity || 1)).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-bold md:text-3xl text-xl mt-4">
            <span>Total:</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          </div>
          <div>
          {Object.keys(address).length > 0 && (
            <div className="md:mt-0 mt-14">
              <h3 className="text-xl md:text-4xl mb-4 text-green-800">Shipping Address</h3>
              <p className='md:text-2xl'>{address.name}</p>
              <p className='md:text-2xl'>{address.email}</p>
              <p className='md:text-2xl'>{address.street}</p>
              <p className='md:text-2xl'>{address.city}, {address.state} {address.zip}</p>

              <div className='mt-6 '>
          {/* <label className="flex items-center md:text-4xl font-medium mb-1 text-green-800">Payment Method</label>
         
          <label className="flex items-center">
              <input type="radio" value="COD" checked={paymentMethod === 'COD'} onChange={() => setPaymentMethod('COD')} />
              <span className="ml-2 md:text-2xl lg:mt-4">Cash on Delivery</span>
            </label>
     */}

          <button
            onClick={handlePayment}
            className="lg:mt-3 bg-yellow-600 bg-opacity-65 className='md:text-2xl' hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300 mt-4">
            Place Order
          </button>
        </div>
            </div>
          )} </div>
        </div>

      
      </div>

      <div>
        <div> {/* Message Display */}
          {message && (
            <div className={`mb-4 p-2 rounded-lg text-center ml-40 mt-10 w-60 ${message.includes("Error") ? "bg-red-200 text-red-800" : "bg-green-200 text-green-800"}`}>
              {message}
            </div>
          )}
        </div>
        <div>
          <img src={payImg} alt="Payment" className=" hidden sm:block h-64 w-60 lg:h-4/6 lg:w-5/6 mt-14 lg:mt-44 ml-40 lg:ml-14" />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
