import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetProjects } from './data-settings-getproject.models';

export const dataSettingsProject = createApi({
  reducerPath: 'dataSettingsProject',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/ProcessMaker/',
  }),
  endpoints: (builder) => ({
    getSettingsProject: builder.query<GetProjects[], void>({
      query: () => ({
        url: `GetProjects/`,
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
        url: `GetDetailedProcessVariablesAsync/`,
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
