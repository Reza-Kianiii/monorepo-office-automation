import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getUserToken = createApi({
  reducerPath: 'getUserToken',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/PMAuth/',

    // credentials: 'include',
  }),
  endpoints: (builder) => ({
    getUserToken: builder.query<any, void>({
      query: () => ({
        url: `GetUserToken/`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetUserTokenQuery } = getUserToken;
