import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataSelectEnginsAPI = createApi({
  reducerPath: 'dataSelectEnginsAPI',

  baseQuery: fetchBaseQuery({
    baseUrl: 'api/PMEngine/',
  }),
  tagTypes: ['selectEngins'],
  endpoints: (builder) => ({
    getSelectEngins: builder.query<any, void>({
      query: () => ({
        url: `SelectEngins/`,
        method: 'GET',
      }),
      providesTags: ['selectEngins'],
    }),
    createSelectEngine: builder.mutation<any, any>({
      query: (body) => ({
        url: `InsertEngine/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['selectEngins'],
    }),
  }),
});

export const { useGetSelectEnginsQuery, useCreateSelectEngineMutation } =
  dataSelectEnginsAPI;
