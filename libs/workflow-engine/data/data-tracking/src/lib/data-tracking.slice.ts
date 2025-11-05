import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataTracking = createApi({
  reducerPath: 'dataTracking',
  tagTypes: ['notes'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/',
  }),

  endpoints: (builder) => ({
    getParticipatedAsync: builder.query<any, void>({
      query: () => ({
        url: `PMCase/GetParticipatedAsync/`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetParticipatedAsyncQuery } = dataTracking;
