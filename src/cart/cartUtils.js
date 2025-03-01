// src/cartUtils.js

export const addToCart = (item, cart, setCart) => {
    // Check if item already exists in the cart
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
  
    if (existingItem) {
      // If item exists, update the quantity
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      // If item does not exist, add it to the cart
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  