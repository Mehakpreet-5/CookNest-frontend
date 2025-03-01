// OrderContext.js
import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrder = () => {
    return useContext(OrderContext);
};

export const SeeOrderContext = ({ children }) => {
    const [orderData, setOrderData] = useState({ cartItems: [], total: 0, paymentMethod: '', address: null });

    return (
        <OrderContext.Provider value={{ orderData, setOrderData }}>
            {children}
        </OrderContext.Provider>
    );
};
