import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import { authApi } from './service/auth/authApi';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
      [authApi.reducerPath]: authApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware),
  });
};

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
