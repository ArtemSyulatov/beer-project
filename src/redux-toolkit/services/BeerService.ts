import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Beer } from '../../types/Beer';

export const beerApi = createApi({
  reducerPath: 'beer',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.punkapi.com/v2' }),
  endpoints: (build) => ({
    getAllBeers: build.query<Beer[], { per_page: number }>({
      query: (per_page) => ({
        url: '/beers',
        params: per_page,
      }),
    }),
    getSingleBeer: build.query({
      query: (id) => ({
        url: `/beers/${id}`,
      }),
    }),
  }),
});
