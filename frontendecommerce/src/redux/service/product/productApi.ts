import { ApiSliceProduct } from '../../api/apiSlice';
export const productApi = ApiSliceProduct.injectEndpoints({
  endpoints: (builder) => ({
    product: builder.query({
      query: () => ({
        url: `/product`,
        method: 'Get',
      }),
    }),
  }),
});

export const { useProductQuery } = productApi;
