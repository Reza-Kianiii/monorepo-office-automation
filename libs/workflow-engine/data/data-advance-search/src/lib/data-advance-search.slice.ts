import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AdvanceSearch } from './data-advance-search.models';

export const dataAdvanceSearchAPI = createApi({
  reducerPath: 'dataAdvanceSearchAPI ',

  baseQuery: fetchBaseQuery({
    baseUrl: 'api/PMSearch/',
  }),
  endpoints: (builder) => ({
    getAdvanceSearch: builder.query<AdvanceSearch[], void>({
      query: () => ({
        url: `GetAdvanceSearch/`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAdvanceSearchQuery } = dataAdvanceSearchAPI;
