import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

// export const placeOrder = async (orderData) => {
//   const response = await axios.post(`${API_URL}/orders`, orderData);
//   return response.data;
// };

export const fetchOrders = async () => {
  const response = await axios.get(`${API_URL}/orders`);
  return response.data;
};

export const updateOrderStatus = async (id, status) => {
  const response = await axios.put(`${API_URL}/orders/${id}`, { status });
  return response.data;
};
export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/products/${id}`);
  return response.data;
};


export const placeOrder = async (orderData) => {
  const token = localStorage.getItem("token"); // Retrieve token from localStorage
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Add token for authenticated routes
    },
  };

  const response = await axios.post(
    `${API_BASE_URL}/api/orders`,
    orderData,
    config
  );
  return response.data;
};
