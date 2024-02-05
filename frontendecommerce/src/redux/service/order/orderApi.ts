import { OrderApiSlice } from '../../api/apiSlice';
export const authApi = OrderApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchOrders: builder.mutation({
      query: () => ({
        url: `/api/order`,
        method: 'Get',
      }),
    }),
  }),
});

export const { useFetchOrdersMutation } =
  authApi;
