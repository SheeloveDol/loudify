import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '255fef60ffmshd6b0d170fb74e74p1aaba7jsn2319f9dac50d',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
  },
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '255fef60ffmshd6b0d170fb74e74p1aaba7jsn2319f9dac50d',
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
