import React from 'react';

const foodItems = [
  { name: 'Pizza', price: 12 },
  { name: 'Burger', price: 8 },
  { name: 'Sushi', price: 15 },
];

const Categories = ({ addToCart }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Food Items</h1>
      <ul>
        {foodItems.map((item, index) => (
          <li key={index} className="mb-4">
            {item.name} - ${item.price}
            <button
              onClick={() => addToCart(item)}
              className="ml-4 px-2 py-1 bg-green-500 text-white"
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
