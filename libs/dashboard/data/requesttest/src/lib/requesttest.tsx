import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const testRequestApi = createApi({
  reducerPath: 'testRequestApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getAccountSets: builder.query<any, void>({
      query: () => ({
        url: 'posts',
      }),
    }),
  }),
});

export const { useGetAccountSetsQuery } = testRequestApi;

// https://jsonplaceholder.typicode.com/posts
