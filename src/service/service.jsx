import React from 'react';
import images from '../list/galleryList.jsx'; // Adjust the path if needed
import photo from '../assets/hjj.png';
import Gallery from './gallery.jsx'

function Service() {
 

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className='lg:mt-14 flex flex-col justify-center items-center greenn'
             data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="600" data-aos-easing="ease-in-out" data-aos-duration="700">
        <h1 className='border border-yellow-600 w-40 rounded-full  bgg uppercase py-1 mx-0 text-center'>
        Latest Events
        </h1>
        <h1 className='font-bold text-4xl lg:text-6xl fontt mt-4'>Our Social Events Gallery</h1>
      </div>

      {/* Gallery Section */}
      <div><Gallery/></div>


    </div>
  );
}

export default Service;
