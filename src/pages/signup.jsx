
// import React, { useState } from 'react'; // Import useState
// import { useForm } from 'react-hook-form';
// import api from '../connection/api.js'

// function Signup() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
  
//   // State for displaying messages
//   const [message, setMessage] = useState({ text: '', type: '' });

//   const onSubmit = async (data) => {
//     console.log("Form Data:", data); // Debugging: Check form data in the console
//     try {
//       // Use the api instance to make the request
//       const response = await api.post('/api/signup', data); // Adjusted to match the correct backend endpoint
//       console.log('Signup successful:', response.data);
//       // Show success message
//       setMessage({ text: 'Signup successful! You can now log in.', type: 'success' });
//       // Clear the form if needed
//       // reset(); // Uncomment if you want to reset the form
//     } catch (error) {
//       console.error('Signup failed:', error.response?.data?.message || error.message);
//       // Show error message
//       setMessage({ text: error.response?.data?.message || 'Signup failed. Please try again.', type: 'error' });
//     }
//   };

//   return (
//     <div>
//       <h3 className="cursor-pointer" onClick={() => document.getElementById('my_modal_4').showModal()}>Sign Up</h3>

//       <dialog id="my_modal_4" className="modal">
//         <div className="modal-box w-9/12 lg:w-5/12 xl:w-4/12 mt-28">
//           <div className='px-5 lg:px-10'>
//             <h1 className='text-3xl font-bold text-orange-500 lg:mb-2'>Signup</h1> <br />

//             {/* Message Box */}
//             {message.text && (
//               <div className={`p-4 mb-4 text-sm ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} border border-${message.type === 'success' ? 'green' : 'red'}-500 rounded`} role="alert">
//                 {message.text}
//               </div>
//             )}

//             <form className='text-black' action="/signup" method="POST" onSubmit={handleSubmit(onSubmit)}>
//               <div className="form-group text-lg">
//                 <label htmlFor="username" className='text-lg font-semibold text-gray-700 mr-80 ml-4'>Username:</label> <br />
//                 <input
//                   className={`w-11/12 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.username ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
//                   type="text"
//                   id="username"
//                   name="username"
//                   autoComplete="username"
//                   {...register('username', { required: 'Username is required' })}
//                 />
//                 {errors.username && <p className="text-red-500">{errors.username.message}</p>}
//               </div> <br />
//               <div className="form-group text-lg">
//                 <label htmlFor="email" className='text-lg font-semibold text-gray-700 mr-80 ml-4'>Email:</label> <br />
//                 <input
//                   className={`w-11/12 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
//                   type="email"
//                   id="email"
//                   name="email"
//                   autoComplete="email"
//                   {...register('email', { required: 'Email is required' })}
//                 />
//                 {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//               </div> <br />
//               <div className="form-group text-lg">
//                 <label htmlFor="password" className='text-lg font-semibold text-gray-700 mr-80 ml-4'>Password:</label> <br />
//                 <input
//                   className={`w-11/12 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
//                   type="password"
//                   id="password"
//                   name="password"
//                   autoComplete="password"
//                   {...register('password', { required: 'Password is required' })}
//                 />
//                 {errors.password && <p className="text-red-500">{errors.password.message}</p>}
//               </div> <br />
//               <div className="modal-action mt-1 justify-between px-4 ml-1">
//                 <button type="submit" className='w-18 py-2 px-5 bg-orange-400 text-white text-lg font-semibold rounded-lg hover:bg-orange-500'>
//                   Sign Up
//                 </button>
//                 <button type="button" className="btn mr-4" onClick={() => document.getElementById('my_modal_4').close()}>
//                   Close
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// }

// export default Signup;


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../connection/api.js';

function Signup() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [message, setMessage] = useState({ text: '', type: '' });

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/api/signup', data);
      setMessage({ text: 'Signup successful! You can now log in.', type: 'success' });
      reset(); // Clear form after successful submission
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Signup failed. Please try again.';
      setMessage({ text: errorMsg, type: 'error' });
    }
  };

  return (
    <div>
      <h3 className="cursor-pointer" onClick={() => document.getElementById('my_modal_4').showModal()}>Sign Up</h3>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-9/12 lg:w-5/12 xl:w-4/12 mt-28">
          <div className="px-5 lg:px-10">
            <h1 className="text-3xl font-bold text-orange-500 lg:mb-2">Signup</h1> <br />

            {/* Message Box */}
            {message.text && (
              <div className={`p-4 mb-4 text-sm ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} border border-${message.type === 'success' ? 'green' : 'red'}-500 rounded`} role="alert">
                {message.text}
              </div>
            )}

            <form className="text-black" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group text-lg">
                <label htmlFor="username" className="text-lg font-semibold text-gray-700 mr-80 ml-4">Username:</label> <br />
                <input
                  className={`w-11/12 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.username ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
                  type="text"
                  id="username"
                  {...register('username', { required: 'Username is required' })}
                />
                {errors.username && <p className="text-red-500">{errors.username.message}</p>}
              </div> <br />
              <div className="form-group text-lg">
                <label htmlFor="email" className="text-lg font-semibold text-gray-700 mr-80 ml-4">Email:</label> <br />
                <input
                  className={`w-11/12 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
                  type="email"
                  id="email"
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div> <br />
              <div className="form-group text-lg">
                <label htmlFor="password" className="text-lg font-semibold text-gray-700 mr-80 ml-4">Password:</label> <br />
                <input
                  className={`w-11/12 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
                  type="password"
                  id="password"
                  {...register('password', { required: 'Password is required' })}
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div> <br />
              <div className="modal-action mt-1 justify-between px-4 ml-1">
                <button type="submit" className="w-18 py-2 px-5 bg-orange-400 text-white text-lg font-semibold rounded-lg hover:bg-orange-500">
                  Sign Up
                </button>
                <button type="button" className="btn mr-4" onClick={() => document.getElementById('my_modal_4').close()}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Signup;
