
import React from 'react';
import { useLocation } from 'react-router-dom';

const ShowOrder = () => {
  const location = useLocation();
  const { cartItems = [], total = 0, paymentMethod, address } = location.state || {}; // Default values

  console.log('ShowOrder data:', { cartItems, total, paymentMethod, address }); // Debug log

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-16">
      <h1 className="text-3xl font-bold mb-8">Order Details</h1>
      
      <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="mb-4 border-b pb-2">
            <div className="text-lg font-medium">{item.name}</div>
            <div className="text-sm text-gray-500">Quantity: {item.quantity}</div>
            <div className="text-sm text-gray-700">Price: ₹{item.price}</div>
          </li>
        ))}
      </ul>
      <div className="mt-6 font-semibold text-xl">
        Total: ₹{total.toFixed(2)}
      </div>

      {address && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
          <p>{address.name}</p>
          <p>{address.street}</p>
          <p>{address.city}, {address.state} {address.zip}</p>
        </div>
      )}
    </div>
  );
};

export default ShowOrder;
