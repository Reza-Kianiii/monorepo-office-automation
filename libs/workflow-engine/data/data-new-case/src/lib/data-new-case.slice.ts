import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newCaseApi = createApi({
  reducerPath: 'newCase',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/PMCase/',

    // credentials: 'include',
  }),
  endpoints: (builder) => ({
    postNewCase: builder.mutation<any, any>({
      query: ({ ...params }) => ({
        url: `CreateNewCase/`,
        params,
        method: 'POST',
      }),
    }),
  }),
});

export const { usePostNewCaseMutation } = newCaseApi;
