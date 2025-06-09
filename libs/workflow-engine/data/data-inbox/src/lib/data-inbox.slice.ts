import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataInbox = createApi({
  reducerPath: 'dataInbox',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/PMProcessVariable/',

    // credentials: 'include',
  }),

  endpoints: (builder) => ({
    getDataInbox: builder.query<any, void>({
      query: () => ({
        url: `GetTodoWithNotesAsync/`,
        method: 'GET',
      }),
    }),
    getBindVaribleSelections: builder.query<any, void>({
      query: () => ({
        url: 'BindVariableSelections/',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetDataInboxQuery, useGetBindVaribleSelectionsQuery } =
  dataInbox;
