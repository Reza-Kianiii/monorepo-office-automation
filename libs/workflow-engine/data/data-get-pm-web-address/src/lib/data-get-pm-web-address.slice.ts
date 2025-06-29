import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getPmWebAddress = createApi({
  reducerPath: 'getPmWebAddress',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/PMAuth/',
  }),
  endpoints: (builder) => ({
    getPmWebAddress: builder.query<any, void>({
      query: () => ({
        url: `GetPmWebAddress/`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPmWebAddressQuery } = getPmWebAddress;
