import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import picc from '../assets/about1.png'
import CountUp from "react-countup";
function MapComponent() {
  return (
    <>
      {/* <div className="flex justify-center items-center p-4 mt-32 mb-16"
    data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease-in-out" data-aos-duration="700">
      <div className="w-9/12 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63201540.37313585!2d35.70793392375362!3d14.796276627196125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1726406004330!5m2!1sen!2sin"
          className="w-full h-80 border-0 rounded-lg shadow-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div> */}


      <div className='flex flex-row space-x-3  justify-center lg:pt-5 lg:pl-10 pb-20 bg-yellow-50 bg-opacity-20'>
        <div className='flex flex-col  space-y-5 lg:space-y-0 lg:flex-row space-x-7 mt-36 lg:mt-40  justify-center text-black  text-center'
        data-aos="fade-up" data-aos-once='true' data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="200">

          {/* Happy Customers Box */}
          <div className='bg-yellow-600 ml-7  lg:ml-0 bg-opacity-50 h-52 w-72 lg:h-56 lg:w-52 rounded-xl flex flex-col items-center justify-center p-4'>
            <FontAwesomeIcon icon={faUsers} className="text-6xl lg:text-7xl text-white" />
            <h1 className='text-4xl lg:text-5xl mt-4 mb-2 font-semibold fontt' 
            data-aos="fade-up" data-aos-once='true' data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="200">
              <CountUp start={0} end={786} duration={1.2} /> </h1>
            <h3 className='text-lg font-semibold'>Happy Customers</h3>
          </div>
          {/* Expert Chiefs Box */}
          <div className='bg-yellow-600 bg-opacity-50 h-52 w-72 lg:h-56 lg:w-52 rounded-xl flex flex-col items-center justify-center p-4'>
            <FontAwesomeIcon icon={faUserPlus} className="text-6xl lg:text-7xl ml-2 lg:ml-0 text-white" />
            <h1 className='text-4xl lg:text-5xl mt-4 mb-2 font-semibold fontt' data-toggle="counter-up" >
              <CountUp start={0} end={52} duration={1.2} /></h1>
            <h3 className='text-lg font-semibold'>Expert Chiefs</h3>
          </div>

          {/* Events Completed Box */}
          <div className='bg-yellow-600 bg-opacity-50 h-52 w-72 lg:h-56 lg:w-52 rounded-xl flex flex-col items-center justify-center p-4'>
            <FontAwesomeIcon icon={faCheck} className="text-6xl lg:text-7xl text-white" />
            <h1 className='text-4xl lg:text-5xl mt-4 mb-2 font-semibold fontt'>
              <CountUp start={0} end={123} duration={1.2} /></h1>
            <h3 className='text-lg font-semibold'>Event Completed</h3>
          </div>
        </div>

        <div className="relative hidden sm:block h-2/5 w-2/5 lg:mt-4">
          <a href="https://youtu.be/5rNF9EZ3CDw?si=S_7M-njISMzgs6gI" target="_blank" rel="noopener noreferrer">
            {/* Image */}
            <img
              src={picc}
              alt="Gallery"
              className="ml-12 lg:ml-5 h-5/6 lg:h-full lg:w-11/12 rounded-xl lg:px-12 w-5/6 rounded-lg brightness-75 cursor-pointer"
            />

            {/* Play Icon with Slower Glowing Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                {/* Slower Glowing Effect */}
                <div className="absolute w-20 h-20  bg-white opacity-80 rounded-full animate-[ping_2s_ease-in-out_infinite]"></div>

                {/* Play Icon */}
                <div className="bg-white rounded-full p-4 lg:p-5 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-gray-900"
                    viewBox="0 0 24 24"
                    fill="black"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
    </>
  );
}

export default MapComponent;
