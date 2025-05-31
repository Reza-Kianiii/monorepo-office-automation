import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataInbox = createApi({
  reducerPath: 'dataInbox',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/ProcessMaker/',

    // credentials: 'include',
  }),
  endpoints: (builder) => ({
    getDataInbox: builder.query<any, void>({
      query: () => ({
        url: `GetTodoWithNotesAsync/`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetDataInboxQuery } = dataInbox;
