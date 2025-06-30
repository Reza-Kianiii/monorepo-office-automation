import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//For missing data, specific types are used for the list
export const dataPausedAPI = createApi({
  reducerPath: 'dataPausedAPI',

  baseQuery: fetchBaseQuery({
    baseUrl: 'api/PMCase/',
  }),
  endpoints: (builder) => ({
    getPaused: builder.query<any, void>({
      query: () => ({
        url: `GetPaused/`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPausedQuery } = dataPausedAPI;
