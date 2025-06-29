import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProcessesType } from './data-processes.models';
//For missing data, specific types are used for the list
export const dataProcessesAPI = createApi({
  reducerPath: 'dataProcessesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/PMProcess/',
  }),
  tagTypes: ['project'],
  endpoints: (builder) => ({
    getProcesses: builder.query<ProcessesType[], void>({
      query: () => ({
        url: `GetProjects/`,
        method: 'GET',
      }),
      providesTags: ['project'],
    }),
    getCategory: builder.query<any, void>({
      query: () => ({
        url: `GetCategory/`,
        method: 'GET',
      }),
    }),
    createProject: builder.mutation<any, any>({
      query: (body) => ({
        url: `CreateProject/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['project'],
    }),
    deleteProject: builder.mutation<any, any>({
      query: (body) => ({
        url: `DeleteProject/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['project'],
    }),
  }),
});

export const {
  useGetProcessesQuery,
  useGetCategoryQuery,
  useCreateProjectMutation,
  useDeleteProjectMutation,
} = dataProcessesAPI;
