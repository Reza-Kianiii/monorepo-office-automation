import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetProjects } from './data-settings-getproject.models';

export const dataSettingsProject = createApi({
  reducerPath: 'dataSettingsProject',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/',
  }),
  endpoints: (builder) => ({
    getSettingsProject: builder.query<GetProjects[], void>({
      query: () => ({
        url: `PMProcess/GetProjects/`,
        method: 'GET',
      }),
    }),
    PostDetailedProcessVaribles: builder.mutation<
      any,
      {
        payload: {
          prj_uid: string;
        };
      }
    >({
      query: ({ payload }) => ({
        url: `PMProcessVariable/GetDetailedProcessVariablesAsync/`,
        method: 'POST',
        body: payload,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const {
  useGetSettingsProjectQuery,
  usePostDetailedProcessVariblesMutation,
} = dataSettingsProject;
