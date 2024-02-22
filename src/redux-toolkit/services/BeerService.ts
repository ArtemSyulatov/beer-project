import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const beerApi = createApi({
  reducerPath: 'beer',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.punkapi.com/v2' }),
  endpoints: (build) => ({
    getAllBeers: build.query({
      query: () => ({
        url: '/beers',
      }),
    }),
    getSingleBeer: build.query({
      query: (id) => ({
        url: `/beers/${id}`,
      }),
    }),
  }),
});
