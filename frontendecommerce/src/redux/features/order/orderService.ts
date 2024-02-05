import orderApi from '@/config/orderApi';

const fetchOrders = async () => {
  const response = await orderApi.get('/order');
  console.log(response);
  return response.data;
};
const setOrder = async (order:object) => {
  const response = await orderApi.post('/order',order);
  console.log(response);
  return response.data;
};

export default {
  fetchOrders,
  setOrder
};
