import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataInbox = createApi({
  reducerPath: 'dataInbox',
  tagTypes: ['notes'],
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
    getCaseNotes: builder.query<
      any,
      {
        CaseId: number;
      }
    >({
      query: ({ CaseId }) => ({
        url: `PMNote/GetCaseNote`,
        params: { CaseId },
        method: `GET`,
      }),
      providesTags: ['notes'],
    }),
    getBindVaribleSelections: builder.query<any, void>({
      query: () => ({
        url: 'PMProcessVariable/BindVariableSelections/',
        method: 'GET',
      }),
    }),
    createNote: builder.mutation<
      any,
      {
        payload: {
          noteText: string;
          app_uid: string;
        };
      }
    >({
      query: ({ payload }) => ({
        url: `PMNote/CreateNewNote/`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['notes'],
    }),
  }),
});

export const {
  usePostGetDataInboxMutation,
  useGetBindVaribleSelectionsQuery,
  useGetCaseNotesQuery,
  useCreateNoteMutation,
} = dataInbox;
