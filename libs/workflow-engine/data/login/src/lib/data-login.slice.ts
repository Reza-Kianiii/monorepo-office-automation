import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const login = createApi({
  reducerPath: 'login',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/Accounts/',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    postlogin: builder.mutation<any, { payload: any }>({
      query: ({ payload }) => ({
        url: `Login/`,
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { usePostloginMutation } = login;
