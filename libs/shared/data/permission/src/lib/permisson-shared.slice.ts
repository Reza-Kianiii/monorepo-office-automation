import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PermissonMenu } from './permission-shared.models';

export const permissonMenuApi = createApi({
  reducerPath: 'permissonMenuApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://172.16.192.214:8010/api/' }),
  endpoints: (builder) => ({
    getPermissonMenu: builder.mutation<PermissonMenu, { payload: any }>({
      query: ({ payload }) => ({
        url: `AccessEntity/SelectAccessEntity`,
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useGetPermissonMenuMutation } = permissonMenuApi;
