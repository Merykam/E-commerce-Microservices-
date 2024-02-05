import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const BaseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3005',
  prepareHeaders: (headers) => {
    return headers;
  },
  credentials: 'include',
});

export const ApiSlice = createApi({
  baseQuery: BaseQuery,
  endpoints: (builder) => ({}),
});


export const BaseQueryProduct = fetchBaseQuery({
  baseUrl: 'http://localhost:3003/api',
  prepareHeaders: (headers) => {
    return headers;
  },
  credentials: 'include',
});

export const ApiSliceProduct = createApi({
  baseQuery: BaseQueryProduct,
  endpoints: (builder) => ({}),
});
