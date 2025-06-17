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
    getCaseNotes: builder.query<any, void>({
      query: () => ({
        url: `PMNote/GetCaseNote`,
        method: `GET`,
      }),
    }),
    getBindVaribleSelections: builder.query<any, void>({
      query: () => ({
        url: 'PMProcessVariable/BindVariableSelections/',
        method: 'GET',
      }),
    }),
    createNote: builder.mutation<any, any>({
      query: ({ payload }) => ({
        url: `PMNote/CreateNewNote`,
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const {
  usePostGetDataInboxMutation,
  useGetBindVaribleSelectionsQuery,
  useGetCaseNotesQuery,
  useCreateNoteMutation,
} = dataInbox;
