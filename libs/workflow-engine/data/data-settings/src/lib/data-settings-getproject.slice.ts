import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  DetailedProcessVaribles,
  GetProjects,
  GetSaveProcessVaribleSelection,
  GetSaveProcessVaribleSelectionAPIPARAMS,
  SaveProcessVaribleSelectionAPIPARAMS,
} from './data-settings-getproject.models';

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
      DetailedProcessVaribles[],
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
    postSaveProcessVaribleSelection: builder.mutation<
      void,
      {
        payload: SaveProcessVaribleSelectionAPIPARAMS;
      }
    >({
      query: ({ payload }) => ({
        url: `PMProcessVariable/SaveProcessVariableSelections/`,
        method: 'POST',
        body: payload,
      }),
    }),
    postGetSaveProcessVaribleSelection: builder.mutation<
      GetSaveProcessVaribleSelection,
      {
        payload: GetSaveProcessVaribleSelectionAPIPARAMS;
      }
    >({
      query: ({ payload }) => ({
        url: `PMProcessVariable/GetSaveProcessVariableSelections/`,
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const {
  useGetSettingsProjectQuery,
  usePostDetailedProcessVariblesMutation,
  usePostSaveProcessVaribleSelectionMutation,
  usePostGetSaveProcessVaribleSelectionMutation,
} = dataSettingsProject;
