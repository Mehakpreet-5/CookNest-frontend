
// CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems,addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using the context
export const useCart = () => {
  return useContext(CartContext);
};


