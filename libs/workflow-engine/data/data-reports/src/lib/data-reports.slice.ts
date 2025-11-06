import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DraftsTypes } from './data-drafts-models';

export const dataReportsAPI = createApi({
  reducerPath: 'dataReportsAPI',

  baseQuery: fetchBaseQuery({
    baseUrl: 'api/PMReport/',
  }),
  endpoints: (builder) => ({
    getTreeGetReportsTabls: builder.query<DraftsTypes[], void>({
      query: () => ({
        url: `GetReportTabls/`,
        method: 'GET',
      }),
    }),
    getProjectReportTables: builder.query<
      any,
      {
        projectId: string;
      }
    >({
      query: ({ ...params }) => ({
        url: 'GetProjectReportTables/',
        method: 'GET',
        params,
      }),
    }),
  }),
});

export const {
  useGetTreeGetReportsTablsQuery,
  useGetProjectReportTablesQuery,
} = dataReportsAPI;
