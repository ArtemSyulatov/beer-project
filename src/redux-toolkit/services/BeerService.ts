import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Beer, TransformedBeer } from '../../types/Beer';
import { transformBeer } from '../../utils/transformBeer';

export const beerApi = createApi({
  reducerPath: 'beer',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.punkapi.com/v2' }),
  endpoints: (build) => ({
    getAllBeers: build.query<
      TransformedBeer[],
      { per_page: number; beer_name?: string }
    >({
      query: ({ per_page, beer_name }) => ({
        url: '/beers',
        params: { per_page, beer_name: beer_name || undefined },
      }),
      transformResponse: (response: Beer[]): TransformedBeer[] =>
        transformBeer(response),
    }),
    getSingleBeer: build.query<TransformedBeer, string>({
      query: (id) => ({
        url: `/beers/${id}`,
      }),
      transformResponse: (response: Beer[]): TransformedBeer =>
        transformBeer(response)[0],
    }),
  }),
});
