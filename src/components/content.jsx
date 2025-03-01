
import React from 'react'
import Food from '../assets/ss.food.png'
// import FoodItems from '../pages/fooditems'
import Footer from '../pages/footer'
import HomePage from '../pages/homePage'
import AboutPage from '../pages/aboutPage'
import Service from '../service/service'
import Menu from '../service/Menu'
import Contact from '../service/booking'
import Comment from '../pages/comment'
import MapComponent from '../pages/MapComponent'
function Content() {
  return (
    <>
     <div className='mont'>
      <div><HomePage /></div>
      <div><Menu/></div>
      <div> <AboutPage /></div> <br />
      <div><Contact/></div>
      <div> <Service /></div>
      
    
      <div><Comment/></div>
    


      {/* <div><Footer /></div> */}
      </div>
    </>
  )
}

export default Content
