
import React,{useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Content from './components/content.jsx';
import AboutPage from './pages/aboutPage.jsx';
import Menu from './service/Menu.jsx';
import Booking from './service/booking.jsx' 
import Cart from './cart/cartPage.jsx';
import Footer from './pages/footer.jsx';
import Login from './pages/login.jsx';
import PageAI from './chatbot/pageAI.jsx';
import { CartProvider } from './cart/CartContext.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import WOW from 'wowjs';
import Signup from './pages/signup.jsx';
import AddressDetail from './cart/address.jsx'
import PaymentPage from './cart/PaymentPage.jsx';
import AdminPanel from './admin/AdminPanel.jsx';
import OrderDonepage from './cart/orderDonepage.jsx';
import ShowOrder from './cart/showOrder.jsx';
import { OrderProvider } from './cart/OrderContext.jsx';
import SeeOrder from './pages/SeeOrder.jsx';
import {SeeOrderContext} from './cart/SeeOrderContext.jsx'
import DelayedLoader from './components/DelayedLoader.jsx'
function App() {
  const [cartItems, setCartItems] = useState([]); 


useEffect(() => {
  AOS.init();
  // new WOW.WOW().init();
}, []);

  return (
    <> <SeeOrderContext>
       < OrderProvider >
      <CartProvider>
      <Router>
   
        <Navbar />
        <Routes>
          <Route path='/' element={<Content/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/menu' element={<Menu setCartItems={setCartItems} />} /> 
          <Route path='/booking' element={<Booking/>} />
             <Route path='/login' element={<Login />} />
             <Route path='/signup' element={<Signup />} />

             <Route path='/ai' element={<PageAI/>} />
          <Route path='/cart' element={<Cart cartItems={cartItems} />} />
          <Route path="/address" element={<AddressDetail/>} />
          <Route path="/payment" element={<PaymentPage  />} />
          <Route path="/admin" element={<AdminPanel/>} />
          <Route path="/done" element={<OrderDonepage/>} />
          <Route path="/see-order" element={<DelayedLoader><SeeOrder /></DelayedLoader>} />
        </Routes>
       <Footer/>
   
      </Router>
      </CartProvider>
      </OrderProvider>
      </SeeOrderContext>
    </>
  );
}

export default App;
