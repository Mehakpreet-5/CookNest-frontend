
import React from 'react';
import Footer from '../pages/footer';
import { useCart } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, setCartItems } = useCart();

    const updateCount = (index, value) => {
        setCartItems((prevItems) =>
            prevItems.map((item, i) =>
                i === index
                    ? {
                          ...item,
                          quantity: Math.max(1, (item.quantity || 1) + value),
                      }
                    : item
            )
        );
    };

    const removeFromCart = (index) => {
        setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    // Calculate total price
    const total = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]+/g, ''));
        const subtotal = price * (item.quantity || 1);
        return sum + subtotal;
    }, 0);

    return (
        <>
            <div className='h-full pt-10 pb-96 bg-yellow-100 bg-opacity-25'>
                <div className="flex flex-col lg:flex-row pt-16 px-4 w-full mx-auto">
                    <div className="w-full lg:w-3/6 lg:ml-40 mt-20 ">
                        <h1 className="text-5xl md:text-6xl lg:ml-10 fontt mb-4 text-green-800">Your Cart</h1>
                        {cartItems.length === 0 ? (
                            <div>
                                <p className="text-2xl greenn lg:ml-10">Your cart is empty!</p>
                                <button className="text-3xl  lg:ml-10 border border-yellow-700 rounded-2xl mt-5 p-2 bg-yellow-100">
                                    <Link to="/menu"> ← Menu Page</Link>
                                </button>
                            </div>
                        ) : (
                            <div className="overflow-x-auto mt-10 ml-10">
                                <table className="min-w-full border border-gray-300">
                                    <thead>
                                        <tr className="bg-gray-950 md:text-2xl bg-opacity-5">
                                            <th className="py-2 border-b hidden sm:block">Item</th>
                                            <th className="py-2 border-b">Name</th>
                                            <th className="py-2 border-b">Price</th>
                                            <th className="py-2 border-b">Quantity</th>
                                            <th className="py-2 border-b">Subtotal</th>
                                            <th className="py-2 border-b">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item, index) => {
                                            const price = parseFloat(item.price.replace(/[^0-9.]+/g, ''));
                                            const itemTotal = price * (item.quantity || 1);
                                            return (
                                                <tr key={index} className="hover:bg-gray-500 hover:bg-opacity-5 ">
                                                    <td className="py-5 border-b hidden sm:block">
                                                        <img src={item.image} alt={item.name} className="h-20 w-24 rounded-lg ml-6" />
                                                    </td>
                                                    <td className="py-4 border-b">
                                                        <h2 className="text-base md:text-2xl font-semibold">{item.name}</h2>
                                                    </td>
                                                    <td className="py-4 border-b">
                                                        <p className="md:text-2xl text-lg">{item.price || 'N/A'}</p>
                                                    </td>
                                                    <td className="py-4 border-b">
                                                        <div className="flex items-center">
                                                            <button
                                                                onClick={() => updateCount(index, -1)}
                                                                className="border border-gray-300 text-gray-600 hover:bg-gray-400 md:px-3 md:py-2 px-1  rounded-s-2xl"
                                                            >
                                                                <FontAwesomeIcon icon={faMinus} />
                                                            </button>
                                                            <input
                                                                type="number"
                                                                readOnly
                                                                value={item.quantity || 1}
                                                                className="text-center w-10 border border-gray-300 md:py-2 bgg font-semibold"
                                                            />
                                                            <button
                                                                onClick={() => updateCount(index, 1)}
                                                                className="border border-gray-300 text-gray-600 hover:bg-gray-400 md:px-3 md:py-2 px-1  rounded-e-2xl"
                                                            >
                                                                <FontAwesomeIcon icon={faPlus} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 border-b">
                                                        <p className="md:text-2xl">{itemTotal.toFixed(2)}</p>
                                                    </td>
                                                    <td className="py-4 border-b">
                                                        <button
                                                            onClick={() => removeFromCart(index)}
                                                            className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                                                        >
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                    <tfoot>
                                        <tr className="bg-gray-950 bg-opacity-5">
                                            <td colSpan="4" className="text-right text-2xl  font-bold py-4 border-t">
                                                Total Price: 
                                            </td>
                                            <td className="py-4 border-t">
                                                <p className="text-2xl font-bold">₹{total.toFixed(2)}</p>
                                            </td>
                                            <td className="border-t"></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        )}
                    </div>
                    {cartItems.length > 0 && (
                        <div className="mt-4  lg:mt-44 lg:w-72 lg:h-96 text-center bg-orange-200 bg-opacity-50 shadow-xl flex items-center mx-auto p-4">
                            <div className="space-y-3 text-center lg:ml-6">
                                <h2 className="md:text-3xl text-xl font-bold">Total: ₹{total.toFixed(2)}</h2>
                                <h4 className='text-lg mt-2 mb-2'>Standard Delivery (Free)</h4>
                                <button className="bg-orange-500 text-white w-40 text-xl p-2 cursor-pointer mt-2">
                                    <Link to='/address'>Order Now</Link>
                                </button>
                                <h2 className="text-xl md:text-2xl">We Accept</h2>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
