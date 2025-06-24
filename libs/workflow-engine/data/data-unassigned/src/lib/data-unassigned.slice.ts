import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataUnassignedAPI = createApi({
  reducerPath: 'dataUnassignedAPI',

  baseQuery: fetchBaseQuery({
    baseUrl: 'api/PMCase/',
  }),
  endpoints: (builder) => ({
    getUnassigned: builder.query<any, void>({
      query: () => ({
        url: `GetUnAssigened/`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetUnassignedQuery } = dataUnassignedAPI;
