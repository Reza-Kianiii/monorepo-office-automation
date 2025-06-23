import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { v4 as uuidv4 } from 'uuid';
import {
  CaseNoteTypes,
  IncomingDocumentsTypes,
  OutPutDocumentTypes,
} from './data-inbox.models';

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
    GetUploadDocument: builder.query<
      IncomingDocumentsTypes[],
      {
        app_uid: number;
      }
    >({
      query: ({ app_uid }) => ({
        url: `PMDocument/GetInputDocument/`,
        params: { app_uid },
        method: `GET`,
      }),
    }),
    GetOutPutDocument: builder.query<
      OutPutDocumentTypes[],
      {
        app_uid: number;
      }
    >({
      query: ({ app_uid }) => ({
        url: `PMDocument/GetOutPutDocument/`,
        params: { app_uid },
        method: `GET`,
      }),
    }),

    getBindVaribleSelections: builder.query<any, void>({
      query: () => ({
        url: 'PMProcessVariable/BindVariableSelections/',
        method: 'GET',
      }),
    }),
    getCasesVarible: builder.query<any, any>({
      query: ({ app_uid }) => ({
        url: `PMProcessVariable/GetCaseVariable`,
        params: { app_uid },
        method: 'GET',
      }),
    }),
  }),
});

export const {
  usePostGetDataInboxMutation,
  useGetBindVaribleSelectionsQuery,
  useGetUploadDocumentQuery,
  useGetOutPutDocumentQuery,
  useGetCasesVaribleQuery,
} = dataInbox;
