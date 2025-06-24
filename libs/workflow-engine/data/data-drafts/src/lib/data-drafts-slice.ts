import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DraftsTypes } from './data-drafts-models';

export const dataDraftsAPI = createApi({
  reducerPath: 'dataDraftsAPI',

  baseQuery: fetchBaseQuery({
    baseUrl: 'api/PMCase/',
  }),
  endpoints: (builder) => ({
    getDrafts: builder.query<DraftsTypes[], void>({
      query: () => ({
        url: `GetCasesDraft/`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetDraftsQuery } = dataDraftsAPI;
