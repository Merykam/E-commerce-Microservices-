import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import productSlice from './features/product/productSlice';
import { authApi } from './service/auth/authApi';
import { productApi } from './service/product/productApi';
import cartSlice from './features/cart/cartSlice';
import orderSlice from './features/order/orderSlice';
export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
      [authApi.reducerPath]: authApi.reducer,
      product: productSlice,
      [productApi.reducerPath]: productApi.reducer,
      cart: cartSlice,
      order: orderSlice,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        authApi.middleware,
        productApi.middleware,
      ]),
  });
};

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
