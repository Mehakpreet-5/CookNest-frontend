
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot, faEnvelope, faPhone, faCheck } from '@fortawesome/free-solid-svg-icons';
// import { faTwitter, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
// import Dosa from '../assets/dosaimg.webp';

// function Footer() {
//   return (
//     <div className=''>
//       {/* Main Footer */}
//       <footer className="bgg  text-base-content p-10 border border-t shadow-xl shadow-black ">
//         <div className="grid grid-cols-1 md:grid-cols-4 pb-8 px-14 lg:h-5/6 w-4/7 ml-16 space-y-10">
//           {/* CookNest Description */}
//           <div className='mr-5 lg:ml-20'>
//             <nav className='mt-9'>
//             <h1 className="text-5xl fontt mb-4">
//           <span className="oragg">Cook</span>
//           <span className="text-green-800">Nest</span>
//         </h1>
//               <h2 className='text-lg rubi'>
//                 Delicious meals delivered to your door with CookNest. Perfect for home dining and catering, we make every occasion special 
//               </h2>
//               <div className="flex space-x-4 mt-2 oragg ">
//                 <a href="#"><FontAwesomeIcon icon={faTwitter} className="text-3xl " /></a>
//                 <a href="#"><FontAwesomeIcon icon={faYoutube} className="text-3xl" /></a>
//                 <a href="#"><FontAwesomeIcon icon={faFacebook} className="text-3xl" /></a>
//               </div>
//             </nav>
//           </div>

//           {/* Special Facilities */}
//           <div className="space-y-4 w-56 lg:ml-20">
//             <h6 className=" text-gray-700 text-2xl font-semibold"> SPECIAL FACILITIES</h6>
//             <ul className=' text-lg  space-y-1'>
//               <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-2 oragg" /> Cheese Burger</li>
//               <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-2 oragg" /> Sandwich</li>
//               <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-2 oragg" /> Paneer Burger</li>
//               <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-2 oragg" /> Special Sweets</li>
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div className="space-y-4 w-48">
//             <h6 className="text-gray-700 text-2xl font-semibold">CONTACT US</h6>
//             <ul className=' text-lg space-y-2'>
//               <li className="flex items-center"><FontAwesomeIcon icon={faLocationDot} className="mr-2 oragg" /> 123 Street, New York</li>
//               <li className="flex items-center"><FontAwesomeIcon icon={faPhone} className="mr-2 oragg" /> (+012) 3456 7890</li>
//               <li className="flex items-center"><FontAwesomeIcon icon={faEnvelope} className="mr-2 oragg" /> info@example.com</li>
//               <li className="flex items-center"><FontAwesomeIcon icon={faLocationDot} className="mr-2 oragg" /> 24/7 Hours Service</li>
//             </ul>
//           </div>

//           {/* Social Media and Gallery */}
//           <div className="space-y-4 lg:mr-32 w-72 hidden sm:block">
//             <h6 className="text-gray-700 text-2xl font-semibold">SOCIAL GALLERY</h6>
//             <div className="grid grid-cols-3 gap-1">
//               <img src={Dosa} alt="Gallery" className="rounded-full h-20 w-20 shadow-md" />
//               <img src={Dosa} alt="Gallery" className="rounded-full h-20 w-20 shadow-md" />
//               <img src={Dosa} alt="Gallery" className="rounded-full h-20 w-20 shadow-md" />
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Footer Bottom */}
//       <footer className="bg-gray-900 bg-opacity-90 p-4 text-gray-300">
//          <div className="flex  justify-center space-x-56 items-center ">
//            <p>Copyright © {new Date().getFullYear()} - All Rights Reserved</p>       
             
//         </div>
//        </footer>
//     </div>
//   );
// }

// export default Footer;



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Dosa from '../assets/dosaimg.webp';

function Footer() {
  return (
    <div className="">
      {/* Main Footer */}
      <footer className="bgg text-base-content p-10 border-t border-yellow-400 shadow-lg shadow-black">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-6 lg:px-14 lg:h-5/6">
          
          {/* CookNest Description */}
          <div className="lg:ml-20">
            <h1 className="text-5xl fontt mb-4">
              <span className="text-yellow-600">Cook</span>
              <span className="greenn">Nest</span>
            </h1>
            <p className="text-lg rubi text-gray-800">
              Delicious meals delivered to your door with CookNest. Perfect for home dining and catering, we make every occasion special.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#"><FontAwesomeIcon icon={faTwitter} className="text-3xl text-yellow-600" /></a>
              <a href="#"><FontAwesomeIcon icon={faYoutube} className="text-3xl text-yellow-600" /></a>
              <a href="#"><FontAwesomeIcon icon={faFacebook} className="text-3xl text-yellow-600" /></a>
            </div>
          </div>

          {/* Special Facilities */}
          <div className="space-y-4 lg:ml-20">
            <h6 className="text-gray-700 text-2xl font-semibold">SPECIAL FACILITIES</h6>
            <ul className="text-lg space-y-2">
              {["Cheese Burger", "Sandwich", "Paneer Burger", "Special Sweets"].map((item, index) => (
                <li key={index} className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="mr-2 text-yellow-600" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h6 className="text-gray-700 text-2xl font-semibold">CONTACT US</h6>
            <ul className="text-lg space-y-2">
              <li className="flex items-center"><FontAwesomeIcon icon={faLocationDot} className="mr-2 text-yellow-600" /> 123 Street, New York</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faPhone} className="mr-2 text-yellow-600" /> (+012) 3456 7890</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faEnvelope} className="mr-2 text-yellow-600" /> info@example.com</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faLocationDot} className="mr-2 text-yellow-600" /> 24/7 Hours Service</li>
            </ul>
          </div>

          {/* Social Media and Gallery */}
          <div className="hidden sm:block space-y-4 lg:mr-32">
            <h6 className="text-gray-700 text-2xl font-semibold">SOCIAL GALLERY</h6>
            <div className="grid grid-cols-3 gap-3">
              {[Dosa, Dosa, Dosa].map((img, index) => (
                <img key={index} src={img} alt="Gallery" className="rounded-full h-20 w-20 shadow-md" />
              ))}
            </div>
          </div>

        </div>
      </footer>

      {/* Footer Bottom */}
      <footer className="bg-gray-900 bg-opacity-90 p-4 text-gray-300 text-center">
        <p>© {new Date().getFullYear()} - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
