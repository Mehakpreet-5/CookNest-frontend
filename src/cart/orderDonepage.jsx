
// OrderConfirmationPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useOrder } from '../cart/SeeOrderContext';
import Orderbgg from '../assets/Screenshot_60.png';
const OrderConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setOrderData } = useOrder();
  const { cartItems = [], total = 0, paymentMethod, address } = location.state || {};

  const handleGoToOrder = () => {
    setOrderData({ cartItems, total, paymentMethod, address });
    navigate('/see-order');
  };
  return (
    <div className=' '>
      <img src={Orderbgg} alt="" className='h-full w-full object-cover opacity-85' />
      <div className="p-8 mt-20 max-w-xl ml-24 absolute inset-0">
        <h1 className="text-4xl fontt text-green-700 font-bold mb-5 text-center">Order Confirmation</h1>
        <h2 className="text-2xl font-semibold mb-4 text-center">Thank you for your order!</h2>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
          <ul className="mb-3 border-t border-gray-300">
            {cartItems.map((item, index) => (
              <li key={index} className="py-1 flex justify-between border-b border-gray-200">
                <div className="flex flex-col">
                  <span className="text-lg font-medium">{item.name}</span>
                  <span className="text-sm text-gray-500">Quantity: {item.quantity}</span>
                </div>
                <span className="text-lg text-gray-700">Price: {item.price}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 font-semibold text-xl text-right">
            Total: ₹{total.toFixed(2)}
          </div>
        </div>

        {address && (
          <div className="mt-3">
            <h3 className="text-2xl font-semibold mb-4">Shipping Address</h3>
            <p className="text-lg text-gray-700">{address.name},{address.email}</p>
        
            <p className="text-lg text-gray-700">{address.street},    {address.city}, {address.state} {address.zip}</p>
           
          </div>
        )}


      </div>
    </div>
  );
};

export default OrderConfirmationPage;
