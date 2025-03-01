
import axios from 'axios';

// Create an instance of axios
const api = axios.create({
  // baseURL: 'http://localhost:5000', // Adjust this to match your backend URL 
  baseURL: 'https://cooknest.onrender.com', 
  headers: {
    'Content-Type': 'application/json',
  },
});


// Function to handle signup
export const signup = async (data) => {
    try {
      const response = await api.post('/api/signup', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };


// Function to fetch users
export const adUser = async () => {
  try {
    const response = await api.get('/admin/users'); // No extra parameters needed
    return response.data; // Return the actual data
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    await api.delete(`/admin/users/${id}`);
  } catch (error) {
    throw error;
  }
};

export const Payment = async ()=>{
  try {
   const response = await api.get('/admin/order')
    return response.data
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
}

// Delete Order
export const deleteOrder = async (orderId) => {
  try {
    const response = await api.delete(`/admin/order/${orderId}`); // use 'api' instance
    return response.data;
  } catch (error) {
    throw error
  }

};


// Update Order
export const updateOrder = async (orderId, updatedData) => {
  const response = await api.put(`/admin/order/${orderId}`, updatedData);
  return response.data;
};


export const sendEmail = async ()=>{
try {
  const response = await api.post('/sendEmail', )
  return response.data
} catch (error) {
  console.error('Error Sending otp:', error);
  throw error;
}
}
  export default api;