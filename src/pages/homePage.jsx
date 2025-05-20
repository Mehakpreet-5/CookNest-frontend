

import React from 'react';
import Food from '../assets/ss.food.png';
import Foood from '../assets/foood.png';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className='bgg  h-4/5 w-full lg:pb-16  greenn'>
            <div className='flex flex-col lg:flex-row justify-center items-center lg:px-0 pt-12'>
                {/* Text and Button Container */}
                <div className='jump w-full lg:w-5/12  lg:mt-28 space-y-4 lg:space-y-1 px-4 lg:px-0 lg:ml-72 '
                 data-aos="fade-down"  data-aos-once='true'   data-aos-delay="700" data-aos-easing="ease-in-out" data-aos-duration="800">
                    <h1 className='border mt-10 border-yellow-600 border-opacity-50 text-center p-1 px-1 lg:p-2 lg:px-2 w-60 lg:w-60 rounded-full bg-transparent mb-5 
                    rubi text-base ml-16 lg:ml-2 lg:mt-0 md:ml-72 ' >
                        WELCOME TO COOKNEST
                    </h1>
                    <h1 className='fontt text-5xl md:text-4xl lg:text-7xl lg:font-medium text-center lg:text-left lg:mb-20'>
                    Delicious Catering  <br /> <span className="text-yellow-500">& </span>Home Delivery Solutions
                    </h1>
                    <div className='flex justify-center lg:justify-start space-x-6 lg:space-x-10 lg:mt-9 '
                         data-aos="fade-right"  data-aos-delay="700" data-aos-easing="ease-in-out" data-aos-duration="800">
                        <div className=' text-lg font-semibold text-center p-2 px-3 w-36 rounded-full bg-yellow-600 bg-opacity-45 rubi  lg:mt-[30px]'>
                            <Link to="/menu">Order Now</Link>
                        </div>
                        <div className='text-center text-lg font-semibold p-2 px-3 w-36 rounded-full bg-yellow-600 bg-opacity-45 rubi lg:mt-[30px]'>
                            <Link to="/ai"> Get Recipe </Link>
                        </div>
                    </div>
                </div>
                {/* Image Container */}
                <div className='w-4/5 lg:w-2/6 flex justify-center mt-14 lg:mt-32 lg:mr-60 lg:ml-10 '
                    data-aos="zoom-in"  data-aos-once='true'  data-aos-delay="300" data-aos-easing="ease-in-out" data-aos-duration="800" >
                    <img src={Foood} alt="Catering Food" className='max-w-full h-2/5 object-contain lg:ml-0' />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
