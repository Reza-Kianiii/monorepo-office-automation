import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { v4 as uuidv4 } from 'uuid';
import {
  CaseNoteTypes,
  IncomingDocumentsTypes,
  OutPutDocumentTypes,
} from './data-inbox.models';

export const dataTracking = createApi({
  reducerPath: 'dataTracking',
  tagTypes: ['notes'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/',
  }),

  endpoints: (builder) => ({
    postParticipatedAsync: builder.mutation<any, any>({
      query: ({ payload }) => ({
        url: `PMCase/GetParticipatedAsync/`,
        // url: `/ PMCase/GetParticipatedAsync`,
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { usePostParticipatedAsyncMutation } = dataTracking;
