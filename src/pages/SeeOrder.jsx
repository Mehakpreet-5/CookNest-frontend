

// import React, { useEffect, useState } from 'react';
// import { Payment, deleteOrder } from '../connection/api';
// import SubmitImg from '../assets/Screenshot_53.png';
// import Orderbgg from '../assets/Screenshot_60.png';
// import blurBg from '../assets/ssh.png';
// import greenn from '../assets/Screenshot_68.png';
// import foodbgg from '../assets/food-bgg.png';
// import halfbg from '../assets/half-bgg.png';
// function SeeOrder() {
//     const [orders, setOrders] = useState([]);
//     const [filteredOrders, setFilteredOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [email, setEmail] = useState('');
//     const [emailSubmitted, setEmailSubmitted] = useState(false);

//     useEffect(() => {
//         const fetchOrders = async () => {
//             setLoading(true);
//             try {
//                 const response = await Payment(); // Fetch orders with items, address, and email
//                 setOrders(response);
//             } catch (error) {
//                 console.error('Error fetching orders:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchOrders();
//     }, []);

//     const handleDelete = async (orderId) => {
//         try {
//             await deleteOrder(orderId);
//             setOrders(orders.filter(order => order._id !== orderId));
//             if (emailSubmitted) {
//                 setFilteredOrders(filteredOrders.filter(order => order._id !== orderId));
//             }
//         } catch (error) {
//             console.error('Error deleting order:', error);
//         }
//     };

//     const handleEmailSubmit = (e) => {
//         e.preventDefault();
//         const matchedOrders = orders.filter(order => order.address.email.toLowerCase() === email.toLowerCase());
//         setFilteredOrders(matchedOrders);
//         setEmailSubmitted(true); // Hide background image on submit
//     };

//     return (
//         <div className="min-h-screen w-full relative mb-36">
//             {!emailSubmitted && (
//                 <div className="absolute inset-0">
//                     <div className="flex flex-row ">
//                         {/* foodbgg image hidden on small screens */}
//                         <div className="hidden sm:block">
//                             <img src={foodbgg} alt="Background" className="w-[1320px]  h-full  object-cover" />
//                         </div>
//                         {/* greenn image always visible */}
//                         <div>
//                             <img src={greenn} alt="Background" className="w-full h-full lg:h-full object-cover" />
//                             <div className="absolute inset-0 flex mt-40 justify-center sm:justify-end sm:pr-10 md:pr-28">
//                                 <div className=" text-center lg:mt-10">
//                                 <h1 className="mb-5 fontt text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-orange-600">
//                                     Order
//                                     </h1>
//                                     <h1 className="mb-7 fontt text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-800">
//                                         Enter Your Email
//                                     </h1>
//                                     <form onSubmit={handleEmailSubmit}>
//                                         <div className="bg-white bg-opacity-20 p-3 rounded-lg shadow-lg flex space-x-3">
//                                             <input
//                                                 type="email"
//                                                 value={email}
//                                                 onChange={(e) => setEmail(e.target.value)}
//                                                 placeholder="Enter Customer Email"
//                                                 className="border border-gray-300 rounded-l-lg p-4 w-full sm:w-80 md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                                 required
//                                             />
//                                         </div>
//                                         <div className="relative mt-5 flex justify-center">
//                                             <img src={SubmitImg} alt="Submit" className="h-16 md:h-24 object-cover" />
//                                             <button
//                                                 className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg md:text-xl"
//                                                 type="submit"
//                                             >
//                                                 Submit
//                                             </button>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {emailSubmitted && (
//                 <div className="h-screen relative flex flex-row transition-opacity duration-1000 ease-in-out">
//                     <div className=''>
//                     <img src={blurBg} alt="Orders Background" className=" relative h-[1000px] w-[980px] object-cover opacity-85 " />
//                     <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 p-5 absolute inset-0 mt-16 md:mt-44 ml-4 sm:ml-6">
//                         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 fontt text-emerald-800 ml-10">
//                             Your Orders
//                         </h1>

//                         {loading ? (
//                             <p className="text-center text-lg">Loading...</p>
//                         ) : (
//                             <div className="overflow-x-auto absolute w-10/12 rounded-lg shadow-lg border border-gray-200 mt-10 ml-10">
//                                 {filteredOrders.length > 0 ? (
//                                     <table className="min-w-full divide-y divide-gray-200 bg-white bg-opacity-35 ">
//                                         <thead className="bg-emerald-900 bg-opacity-55 text-white ">
//                                             <tr>
//                                                 <th className="px-2 py-3 text-left text-sm font-medium pl-10">Amount</th>
//                                                 <th className="px-2 py-3 text-left text-sm font-medium">Payment </th>
//                                                 <th className="px-2 py-3 text-left text-sm font-medium pl-24">Items</th>
//                                                 <th className="px-2 py-3 text-left text-sm font-medium">Address</th>
//                                                 <th className="px-2 py-3 text-left text-sm font-medium">Actions</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody className="divide-y divide-gray-200">
//                                             {filteredOrders.map((order) => (
//                                                 <tr key={order._id} className="hover:bg-white hover:bg-opacity-40 transition duration-150">
//                                                     <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-700 pl-10">
//                                                         ₹{order.totalAmount}
//                                                     </td>
//                                                     <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-700">
//                                                         {order.paymentMethod}
//                                                     </td>
//                                                     <td className=" py-4 whitespace-nowrap text-sm text-gray-700">
//                                                         <ul className="list-disc list-inside">
//                                                             {order.cartItems.map((item) => (
//                                                                 <li key={item.name}>
//                                                                     {item.name} (Qty: {item.quantity}, Price: {item.price})
//                                                                 </li>
//                                                             ))}
//                                                         </ul>
//                                                     </td>
//                                                     <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-700">
//                                                         {order.address.email},<br />
//                                                         {order.address.street},<br />
//                                                         {order.address.state}, {order.address.zip}
//                                                     </td>
//                                                     <td className="px-2 py-4 whitespace-nowrap">
//                                                         <button
//                                                             onClick={() => handleDelete(order._id)}
//                                                             className="text-red-600 hover:text-red-800 transition duration-150"
//                                                         >
//                                                             Cancel
//                                                         </button>
//                                                     </td>
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                 ) : (
//                                     <div className="text-center text-gray-700 py-4">No orders found for this email.</div>
//                                 )}
//                             </div>
//                         )}
//                     </div>
//                     </div>
//                     <div>
//                     <img src={halfbg} alt="Orders Background" className="  relative  h-[1000px] w-[930px]  hidden sm:block md:block   opacity-85" />
//                 </div>  </div>
//             )}
//         </div>
//     );
// }

// export default SeeOrder;


import React, { useEffect, useState } from 'react';
import { Payment, deleteOrder } from '../connection/api';
import SubmitImg from '../assets/Screenshot_53.png';
import Orderbgg from '../assets/Screenshot_60.png';
import blurBg from '../assets/ssh.png';
import greenn from '../assets/Screenshot_68.png';
import foodbgg from '../assets/food-bgg.png';
import halfbg from '../assets/half-bgg.png';

function SeeOrder() {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    // ✅ Preload background images
    useEffect(() => {
        const preloadImages = [foodbgg, greenn, blurBg, halfbg];
        preloadImages.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true);
            try {
                const response = await Payment();
                setOrders(response);
            } catch (error) {
                console.error('Error fetching orders:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    const handleDelete = async (orderId) => {
        try {
            await deleteOrder(orderId);
            setOrders(orders.filter(order => order._id !== orderId));
            if (emailSubmitted) {
                setFilteredOrders(filteredOrders.filter(order => order._id !== orderId));
            }
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        const matchedOrders = orders.filter(order => order.address.email.toLowerCase() === email.toLowerCase());
        setFilteredOrders(matchedOrders);
        setEmailSubmitted(true);
    };

    return (
        <div className="min-h-screen w-full relative mb-36">
            {!emailSubmitted && (
                <div className="absolute inset-0">
                    <div className="flex flex-row">
                        <div className="hidden sm:block">
                            <img src={foodbgg} alt="Background" className="w-[1320px] h-full object-cover" />
                        </div>
                        <div>
                            <img src={greenn} alt="Background" className="w-full h-full lg:h-full object-cover" />
                            <div className="absolute inset-0 flex mt-40 justify-center sm:justify-end sm:pr-10 md:pr-28">
                                <div className="text-center lg:mt-10">
                                    <h1 className="mb-5 fontt text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-orange-600">
                                        Order
                                    </h1>
                                    <h1 className="mb-7 fontt text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-800">
                                        Enter Your Email
                                    </h1>
                                    <form onSubmit={handleEmailSubmit}>
                                        <div className="bg-white bg-opacity-20 p-3 rounded-lg shadow-lg flex space-x-3">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter Customer Email"
                                                className="border border-gray-300 rounded-l-lg p-4 w-full sm:w-80 md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                        <div className="relative mt-5 flex justify-center">
                                            <img src={SubmitImg} alt="Submit" className="h-16 md:h-24 object-cover" />
                                            <button
                                                className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg md:text-xl"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {emailSubmitted && (
                <div className="h-screen relative flex flex-row transition-opacity duration-1000 ease-in-out">
                    <div>
                        <img src={blurBg} alt="Orders Background" className="relative h-[1000px] w-[980px] object-cover opacity-85" />
                        <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 p-5 absolute inset-0 mt-16 md:mt-44 ml-4 sm:ml-6">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 fontt text-emerald-800 ml-10">
                                Your Orders
                            </h1>

                            {loading ? (
                                <p className="text-center text-lg">Loading...</p>
                            ) : (
                                <div className="overflow-x-auto absolute w-10/12 rounded-lg shadow-lg border border-gray-200 mt-10 ml-10">
                                    {filteredOrders.length > 0 ? (
                                        <table className="min-w-full divide-y divide-gray-200 bg-white bg-opacity-35">
                                            <thead className="bg-emerald-900 bg-opacity-55 text-white">
                                                <tr>
                                                    <th className="px-2 py-3 text-left text-sm font-medium pl-10">Amount</th>
                                                    <th className="px-2 py-3 text-left text-sm font-medium">Payment</th>
                                                    <th className="px-2 py-3 text-left text-sm font-medium pl-24">Items</th>
                                                    <th className="px-2 py-3 text-left text-sm font-medium">Address</th>
                                                    <th className="px-2 py-3 text-left text-sm font-medium">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                {filteredOrders.map((order) => (
                                                    <tr key={order._id} className="hover:bg-white hover:bg-opacity-40 transition duration-150">
                                                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-700 pl-10">
                                                            ₹{order.totalAmount}
                                                        </td>
                                                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-700">
                                                            {order.paymentMethod}
                                                        </td>
                                                        <td className="py-4 whitespace-nowrap text-sm text-gray-700">
                                                            <ul className="list-disc list-inside">
                                                                {order.cartItems.map((item) => (
                                                                    <li key={item.name}>
                                                                        {item.name} (Qty: {item.quantity}, Price: {item.price})
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </td>
                                                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-700">
                                                            {order.address.email},<br />
                                                            {order.address.street},<br />
                                                            {order.address.state}, {order.address.zip}
                                                        </td>
                                                        <td className="px-2 py-4 whitespace-nowrap">
                                                            <button
                                                                onClick={() => handleDelete(order._id)}
                                                                className="text-red-600 hover:text-red-800 transition duration-150"
                                                            >
                                                                Cancel
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <div className="text-center text-gray-700 py-4">No orders found for this email.</div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <img src={halfbg} alt="Orders Background" className="relative h-[1000px] w-[930px] hidden sm:block md:block opacity-85" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default SeeOrder;
