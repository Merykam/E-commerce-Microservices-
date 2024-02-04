import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { OrderEntity } from './OrderEntity';
import orderService from './orderService';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

interface OrderState {
  orders: OrderEntity[];
}

const initialState: OrderState = {
  orders:[],
};

export const fetchOrders = createAsyncThunk('order/fetch', async () => {
  try {
    return await orderService.fetchOrders();
  } catch (error) {
    toast.error('something went wrong while fetching orders');
    return [];
  }
});
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action: PayloadAction<OrderEntity[]>) => {
      state.orders = action.payload;
    })
  },
});

export default orderSlice.reducer;
