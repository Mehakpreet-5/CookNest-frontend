

import React, { useState } from 'react';
import menu from '../list/menuList';
import Dosa from '../assets/dosaimg.webp';
import { useCart } from '../cart/CartContext';
import Footer from '../pages/footer';

function Menu() {
  const { setCartItems } = useCart();
  const [selectedFoodType, setSelectedFoodType] = useState(menu[0].foodType);

  const selectedCategory = menu.find(category => category.foodType === selectedFoodType);

  const addToCart = (dish) => {
    setCartItems(prevItems => [...prevItems, dish]);
  };

  return (
    <div className='bgg h-full pt-7 lg:pt-16 pb-2'>
      {/* Header Section */}
      <div className='mt-16 flex flex-col justify-center items-center lg:mt-16 '
           data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease-in-out" data-aos-duration="800">
        <h1 className='border greenn uppercase border-yellow-600 w-32 lg:w-40 rounded-full bgg py-1 mx-0 text-center text-lg lg:text-xl font-semibold '>
          Our Menu
        </h1>
        <h1 className='font-bold greenn text-4xl md:text-4xl lg:text-7xl fontt mt-4'>Delicious Menu Meals</h1>
      </div>

   {/* Food Types Section */}
<div className='greenn flex flex-wrap justify-center items-center md:mt-0 space-x-10 md:space-x-6 lg:space-x-8 space-y-20 lg:space-y-24'>
    {/* //  data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-duration="300"> */}
  {menu.map((category, index) => (
    <button
      key={index}
      onClick={() => setSelectedFoodType(category.foodType)}
      className={`flex flex-col items-center h-20 w-20 md:h-28 md:w-28 rounded-full p-2 
        transition duration-300 ease-in-out transform 
        ${selectedFoodType === category.foodType ? 'bg-yellow-200 scale-105' : 'bg-transparent hover:bg-yellow-100'} 
        ${selectedFoodType !== category.foodType ? 'mt-24' : 'mt-24'}`}
    >
      <img 
        src={category.image} 
        alt={category.foodType} 
        className='h-16 w-16 md:h-24 md:w-24 rounded-full mb-2 object-cover border-2 border-yellow-600 border-opacity-50' 
      />
      <h2 className='text-sm md:text-lg font-semibold text-center mt-4'>{category.foodType}</h2>
    </button>
  ))}
</div>


      {/* Menu Section */}
      <div className='flex flex-col items-center mt-10 px-4 md:px-6 mb-2 greenn'>
        <div className='mt-20 lg:ml-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 lg:w-9/12'
             data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="700">
          {selectedCategory && selectedCategory.dishes.map((dish, index) => (
            <div key={index} className='flex items-center space-y-1 md:space-x-1 px-4 ml-10 lg:ml-10 w-10/12 lg:w-12/12'>
              <img 
                src={dish.image || Dosa} 
                alt={dish.name} 
                className='h-24 w-24 lg:h-28 lg:w-28 rounded-full object-cover mr-6 md:h-24 md:w-24 sm:h-24 sm:w-24' 
              />
              <div className='flex flex-col  lg:ml-24'>
                <div className='flex justify-between items-center'>
                  <h1 className='text-xl md:text-2xl font-semibold'>{dish.name}</h1>
                  <div className='flex items-center space-x-2 mt-2 md:mt-0'>
                    <h1 className='text-lg md:text-xl font-semibold'>{dish.price || 'N/A'}</h1>
                    <button 
                      onClick={() => addToCart(dish)} 
                      className='yell text-white px-2 md:px-2 h-8 rounded-full text-center text-sm bg-yellow-600 bg-opacity-50 
                      md:text-lg hover:bg-yellow-600 transition duration-300 active:bg-yellow-700 active:scale-95'>
                      +
                    </button>
                  </div>
                </div>
                <hr className='my-1' />
                <p className='text-sm md:text-sm'>Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
}

export default Menu;
