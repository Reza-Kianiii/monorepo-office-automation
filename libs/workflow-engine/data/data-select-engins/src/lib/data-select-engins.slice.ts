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
  }),
});

export const { useGetSelectEnginsQuery, useCreateSelectEngineMutation } =
  dataSelectEnginsAPI;
