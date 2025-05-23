import React, { useState } from 'react';
import flower from '../assets/125.png';
import spicy1 from '../assets/spicy1.jpg';
import { Link } from 'react-router-dom';
// import { contact } from '../services/api';
import Footer from '../pages/footer';

function Contact() {
  const [formData, setData] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    event: "",
    date: "",
    message: ""
  });

  const handleChange = (e) => {
    setData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  
    // try {
    //   await contact(formData);
    //   setData({ name: "", email: "", number: "", city: "", event: "", date: "", message: "" });
    //   alert('Your message has been sent successfully!');
    // } catch (error) {
    //   console.error('Error submitting contact form:', error);
    //   alert('An error occurred while sending your message.');
    // }
  };

  return (
    <> 
      {/* <div className="relative min-h-screen flex items-center justify-center mt-1 lg:mt-20"
        data-aos="fade-up"  data-aos-once='true'  data-aos-delay="900" data-aos-easing="ease-in-out" data-aos-duration="900">
        
        {/* Background Image */}
        {/* <img 
          src={flower} 
          alt="flower background"
          className="absolute  h-5/6 lg:h-4/6 lg:w-7/12 border rounded-md shadow-gray-300 md:h-6/7
            shadow-[0_0_20px_2px_rgba()] bg-opacity-65 transition-all duration-500 bottom-[3%] lg:bottom-[+16%] 
            md:bottom-[-8%] w-full object-cover"
        /> */}
        
        {/* Form Overlay
        <div className="relative bg-transparent w-11/12 sm:w-10/12 md:w-8/12 lg:w-5/12 xl:w-4/12 p-6 bg-opacity-70 ">
          <h1 className="text-5xl sm:text-5xl fontt lg:text-6xl font-bold text-center mb-6 text-gray-800 mt-16 lg:mt-0 greenn">
            Book Catering
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-2 lg:p-3 border border-yellow-300 bg-opacity-35 rounded-md"
                value={formData.name} 
                onChange={handleChange} 
                required
              />
              <input
                type="text"
                name="city"
                placeholder="Select City"
                className="w-full p-2 lg:p-3 border border-yellow-300 bg-opacity-35 rounded-md"
                value={formData.city} 
                onChange={handleChange} 
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 lg:p-3 border border-yellow-300 bg-opacity-35 rounded-md"
                value={formData.email} 
                onChange={handleChange} 
              />
              <input
                type="text"
                name="event"
                placeholder="Event Type"
                className="w-full p-2 lg:p-3 border border-yellow-300 bg-opacity-35 rounded-md"
                value={formData.event} 
                onChange={handleChange} 
              />
              <input
                type="tel"
                name="number"
                placeholder="Your Contact No."
                className="w-full p-2 lg:p-3 border border-yellow-300 bg-opacity-35 rounded-md"
                value={formData.number} 
                onChange={handleChange} 
              />
              <input
                type="datetime-local"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 lg:p-3 border border-yellow-300 bg-opacity-35 rounded-md"
              />
            </div>
            
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full h-24 p-2 lg:p-3 border border-yellow-300 bg-opacity-35 rounded-md"
              value={formData.message} 
              onChange={handleChange} 
              required
            ></textarea>
            
            <button
              type="submit"
              className="w-40 lg:w-44 py-2 lg:p-3 bg-yellow-600 bg-opacity-50 text-xl text-gray-600 rounded-full hover:bg-yellow-600 mx-auto block mt-4"
            >
              Submit Now
            </button>
          </form>
        </div> */}
      {/* </div>
      jj */} 
  
  <div className="flex flex-col md:flex-row items-stretch mt-10 md:mt-20 mb-10 justify-center h-auto md:h-[550px] lg:h-[600px] w-full">
  {/* Left Image (Hidden on Small Screens) */}
  <img
    src={spicy1}
    alt="imgg"
    className="hidden md:block w-28 md:w-32 lg:w-40 xl:w-44 h-full opacity-70 rounded-s-xl object-cover"
  />

  {/* Form Container */}
  <div className="relative bgg border-t border-b  border-yellow-500 w-full md:w-11/12 lg:w-8/12 xl:w-5/12 p-6 md:p-8 bg-opacity-70 flex items-center">
    <div className="w-full lg:px-5">
      <h1 className="text-4xl md:text-5xl lg:text-6xl fontt greenn font-bold text-center mb-9 text-gray-800">
        Book Catering
      </h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border border-yellow-300 rounded-md"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="Select City"
            className="w-full p-3 border border-yellow-300 rounded-md"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border border-yellow-300 rounded-md"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="event"
            placeholder="Event Type"
            className="w-full p-3 border border-yellow-300 rounded-md"
            value={formData.event}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="number"
            placeholder="Your Contact No."
            className="w-full p-3 border border-yellow-300 rounded-md"
            value={formData.number}
            onChange={handleChange}
          />
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border border-yellow-300 rounded-md"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full h-24 p-3 border border-yellow-300 rounded-md"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          className="w-40 py-2 bg-yellow-600 bg-opacity-70 text-xl text-white rounded-full hover:bg-yellow-700 mx-auto block mt-4"
        >
          Submit Now
        </button>
      </form>
    </div>
  </div>

  {/* Right Image (Hidden on Small Screens) */}
  <img
    src={spicy1}
    alt="imgg"
    className="hidden md:block w-28 md:w-32 lg:w-40 xl:w-44 opacity-70 rounded-e-xl h-full object-cover"
  />
</div>

    </>
  );
}

export default Contact;
