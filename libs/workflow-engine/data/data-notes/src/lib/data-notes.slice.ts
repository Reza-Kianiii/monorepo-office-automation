import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CaseNoteTypes } from './data-notes.models';
import { v4 as uuidv4 } from 'uuid';

export const NotesAPi = createApi({
  reducerPath: 'getNotesAPi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/PMNote/',

    // credentials: 'include',
  }),
  tagTypes: ['note'],
  endpoints: (builder) => ({
    getCaseNotes: builder.query<
      CaseNoteTypes[],
      {
        CaseId: number;
      }
    >({
      query: ({ CaseId }) => ({
        url: `GetCaseNote`,
        params: { CaseId },
        method: `GET`,
      }),

      providesTags: ['note'],
      transformResponse: (response: CaseNoteTypes[]) => {
        const parsed = JSON.parse(response);

        const data: CaseNoteTypes[] = [];

        Array.isArray(parsed) &&
          parsed?.forEach((item) => data.push({ ...item, id: uuidv4() }));

        return data;
      },
    }),
    createNote: builder.mutation<
      { data: string },
      {
        payload: {
          noteText: string;
          app_uid: string;
        };
      }
    >({
      query: ({ payload }) => ({
        url: `CreateNewNote/`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['note'],
    }),
  }),
});

export const { useGetCaseNotesQuery, useCreateNoteMutation } = NotesAPi;
