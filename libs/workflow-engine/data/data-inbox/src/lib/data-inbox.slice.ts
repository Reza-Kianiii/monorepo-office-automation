import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataInbox = createApi({
  reducerPath: 'dataInbox',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/',

    // credentials: 'include',
  }),

  endpoints: (builder) => ({
    postGetDataInbox: builder.mutation<
      any,
      {
        payload: any;
      }
    >({
      query: ({ payload }) => ({
        url: `PMCase/GetTodoAsync/`,
        method: 'POST',
        body: payload,
      }),
    }),
    getBindVaribleSelections: builder.query<any, void>({
      query: () => ({
        url: 'PMProcessVariable/BindVariableSelections/',
        method: 'GET',
      }),
    }),
  }),
});

export const { usePostGetDataInboxMutation, useGetBindVaribleSelectionsQuery } =
  dataInbox;
