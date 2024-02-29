import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Beer, TransformedBeer } from '../../types/Beer';
import { transformBeer } from '../../utils/transformBeer';

export const beerApi = createApi({
  reducerPath: 'beer',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.punkapi.com/v2' }),
  endpoints: (build) => ({
    getAllBeers: build.query<TransformedBeer[], { per_page: number }>({
      query: (per_page) => ({
        url: '/beers',
        params: per_page,
      }),
      transformResponse: (response: Beer[]): TransformedBeer[] =>
        transformBeer(response),
    }),
    getSingleBeer: build.query({
      query: (id) => ({
        url: `/beers/${id}`,
      }),
      transformResponse: (response: Beer[]): TransformedBeer =>
        transformBeer(response)[0],
    }),
  }),
});
