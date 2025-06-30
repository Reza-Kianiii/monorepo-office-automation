import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataUserSyncAPI = createApi({
  reducerPath: 'dataUserSyncAPI',

  baseQuery: fetchBaseQuery({
    baseUrl: 'api/SyncUser/',
  }),
  endpoints: (builder) => ({
    getUserSync: builder.query<any, void>({
      query: () => ({
        url: `SyncDashboardUserAndDepartmentWithPM/`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useLazyGetUserSyncQuery } = dataUserSyncAPI;
