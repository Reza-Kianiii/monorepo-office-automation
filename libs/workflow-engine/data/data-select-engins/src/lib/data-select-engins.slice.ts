import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  CreateSelectEngineApi,
  SelectEnginsTypes,
} from './data-select-engins-models';

export const dataSelectEnginsAPI = createApi({
  reducerPath: 'dataSelectEnginsAPI',

  baseQuery: fetchBaseQuery({
    baseUrl: 'api/PMEngine/',
  }),
  tagTypes: ['selectEngins'],
  endpoints: (builder) => ({
    getSelectEngins: builder.query<SelectEnginsTypes[], void>({
      query: () => ({
        url: `SelectEngins/`,
        method: 'GET',
      }),
      providesTags: ['selectEngins'],
    }),
    createSelectEngine: builder.mutation<any, CreateSelectEngineApi>({
      query: (body) => ({
        url: `InsertEngine/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['selectEngins'],
    }),
    updateSelectEngine: builder.mutation<any, any>({
      query: (body) => ({
        url: `UpdateEngine/`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['selectEngins'],
    }),
    deleteSelectEngine: builder.mutation<any, any>({
      query: (body) => ({
        url: `DeleteEngine`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['selectEngins'],
    }),
  }),
});

export const {
  useGetSelectEnginsQuery,
  useCreateSelectEngineMutation,
  useUpdateSelectEngineMutation,
  useDeleteSelectEngineMutation,
} = dataSelectEnginsAPI;
