import React from 'react';
import { Link } from 'react-router-dom';
import { faUtensils, faHeadset, faEdit, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import catering from '../assets/about123.png';
import servicesList from '../list/list.jsx'; // Update the path if needed
import Footer from './footer.jsx';
import design from '../assets/ss.png'
import ss1 from '../assets/ss1.png'
import explore from '../assets/e5.png'
import MapComponent from './MapComponent.jsx';
function AboutPage() {
  return (
    <>
      <div className='flex flex-col md:flex-row bgg pt-10 pb-10 lg:pb-28 md:pt-24 justify-center items-center px-4 space-y-6 md:space-x-14 lg:space-x-3'>
        {/* Image Section */}
        <img
          src={design}
          alt="About"
          className='w-4/6  md:w-6/12 lg:w-5/12 lg:mr-4'
          data-aos="zoom-in-up"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
          data-aos-duration="1100"
          data-aos-once='true'
        />

        {/* Text Section */}
        <div
          className='w-full md:w-6/12  md:text-left px-2 lg:px-4 greenn mt-7 lg:mt-40'
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-easing="ease-in-out"
          data-aos-duration="1100"
          data-aos-once='true'
        >
          <h1 className='border border-yellow-600 w-32 lg:w-32 rounded-full bgg uppercase py-1 mb-5   text-center mt-16 lg:mt-0'>
            About us
          </h1>
          <h1 className='font-bold text-3xl md:text-5xl mb-4 text-yellow-600 text-opacity-80 fontt'>
            Trusted By 150+ Satisfied Clients
          </h1>
          <p className='text-base md:text-lg mb-4 ml-1 lg:w-10/12'>
            CookNest brings gourmet meals straight to your door. Specializing in home delivery and catering,
            we offer delicious, chef-crafted dishes that cater to your taste and convenience. From intimate dinners
            to grand events, CookNest ensures every meal is a delightful experience.
          </p>
          <div className='text-gray-700 lg:w-5/6'>
            <ul className=' grid lg:grid-cols-2 space-x-8 lg:space-x-4 space-y-1  md:text-base text-green-950 text-opacity-90 md:font-medium'>
              <li className='ml-8 lg:ml-4'>   <FontAwesomeIcon icon={faUtensils} className="text-yellow-600 text-lg mr-2" /> Fresh and Fast Food Delivery</li>
              <li>    <FontAwesomeIcon icon={faHeadset} className="text-yellow-600 text-lg mr-2" /> 24/7 Customer Support</li>
              <li>  <FontAwesomeIcon icon={faEdit} className="text-yellow-600 text-lg mr-2" /> Easy Customization </li>
              <li>   <FontAwesomeIcon icon={faTags} className="text-yellow-600 text-lg mr-2" /> Delicious Deals for Meals</li>
            </ul>
          </div>
          <div className='ml-5 mt-2 lg:ml-1 lg:mt-5'>
            <Link
              to="/about"
              className='block text-center text-lg bg-yellow-600 bg-opacity-60 mt-7 lg:mt-0 lg:text-lg text-white rounded-full lg:px-5 py-2 w-44 lg:w-44 '
            >
              Learn More →
            </Link>
          </div>

          {/* Image on Small Screens */}
          <div className='hidden sm:block '>
            <img
              src={ss1}
              alt="About"
              className='h-24 w-64 mx-auto mt-8 lg:mt-0 lg:ml-96 lg:pl-12'
            />
          </div>
        </div>
      </div>


      <div><MapComponent /></div>
      {/* What We Offer */}
      <div className='p-6 bg-yellow-50 bg-opacity-15 greenn mt-6 mb-10'>
        <div className='text-center'
          data-aos="fade-up" data-aos-once='true' data-aos-delay="400" data-aos-easing="ease-in-out" data-aos-duration="600">
          <div className=' flex flex-col justify-center items-center '>
            <h1 className=' py-4 bgg border border-yellow-600 border-opacity-50 flex justify-center items-center rounded-full uppercase text-center  w-40 h-8'>our service</h1> <br />
            <h1 className='font-bold text-4xl lg:text-6xl fontt  mb-10'>Explore Our Services</h1></div>

        </div>

        {/* Cards Div */}
        <div className='flex justify-center mt-5'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8'>
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="relative items-center flex flex-col bg-yellow-50 bg-opacity-20  shadow-lg border border-slate-200 rounded-lg p-2 w-ful h-72 lg:w-72 lg:h-80 transition-all duration-300 hover:bg-yellow-600 hover:bg-opacity-60 group"
                data-aos="fade-up" data-aos-once='true' data-aos-delay="500" data-aos-easing="ease-in-out" data-aos-duration="700">

                {React.cloneElement(service.icon, { className: 'icon-style fixx   ml-0 lg:ml-2 mt-5 group-hover:text-black sm:ml-24 md:ml-16 light-text bg-transparent' })}

                <div className="p-2 text-center items-center justify-center mt-3 flex flex-col sm:items-center">
                  <h6 className="mb-2 text-xl font-semibold group-hover:text-black">{service.title}</h6>
                  <p className="leading-normal font-light px-1 group-hover:text-black">{service.description}</p>
                  <h1 className="w-32 lg:w-36 rounded-full text-black py-2 px-4 border border-transparent text-center 
    text-sm lg:text-base transition-all duration-300 group-hover:bg-white mt-4 hover:text-yellow-600 hover:text-opacity-80 light-bg">
                    Read more
                  </h1>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default AboutPage;
