import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { permissonMenuApi } from '@office-automation/shared/data/permission';
import {
  dataInbox,
  inboxFiltersHorizontalSliceReducer,
  inboxFiltersHorizontalSliceReducerPath,
} from '@office-automation/workflow-engine/data/data-inbox';
import { login } from '@office-automation/workflow-engine/data/login';
import { getUserToken } from '@office-automation/workflow-engine/data/data-get-user-token';
import { getPmWebAddress } from '@office-automation/workflow-engine/data/data-get-pm-web-address';
import { dataSettingsProject } from '@office-automation/workflow-engine/data/data-settings';
import {
  dataTracking,
  trackingFiltersHorizontalSliceReducer,
  trackingFiltersHorizontalSliceReducerPath,
} from '@office-automation/workflow-engine/data/data-tracking';
import { NotesAPi } from '@office-automation/workflow-engine/data/data-notes';
import { dataDraftsAPI } from '@office-automation/workflow-engine/data/data-drafts';
import { dataUnassignedAPI } from '@office-automation/workflow-engine/data/data-unassigned';
import { dataAdvanceSearchAPI } from '@office-automation/workflow-engine/data/data-advance-search';
import { dataPausedAPI } from '@office-automation/workflow-engine/data/data-paused';
import { dataSelectEnginsAPI } from '@office-automation/workflow-engine/data/data-select-engings';
import { dataProcessesAPI } from '@office-automation/workflow-engine/data/data-processes';
import { dataUserSyncAPI } from '@office-automation/workflow-engine/data/data-user-sync';
import { dataReportsAPI } from '@office-automation/workflow-engine/data/data_reports';

export const store = configureStore({
  reducer: {
    [permissonMenuApi.reducerPath]: permissonMenuApi.reducer,
    [dataInbox.reducerPath]: dataInbox.reducer,
    [login.reducerPath]: login.reducer,
    [getUserToken.reducerPath]: getUserToken.reducer,
    [getPmWebAddress.reducerPath]: getPmWebAddress.reducer,
    [dataSettingsProject.reducerPath]: dataSettingsProject.reducer,
    [inboxFiltersHorizontalSliceReducerPath]:
      inboxFiltersHorizontalSliceReducer,
    [trackingFiltersHorizontalSliceReducerPath]:
      trackingFiltersHorizontalSliceReducer,
    [dataTracking.reducerPath]: dataTracking.reducer,
    [NotesAPi.reducerPath]: NotesAPi.reducer,
    [dataDraftsAPI.reducerPath]: dataDraftsAPI.reducer,
    [dataUnassignedAPI.reducerPath]: dataUnassignedAPI.reducer,
    [dataAdvanceSearchAPI.reducerPath]: dataAdvanceSearchAPI.reducer,
    [dataPausedAPI.reducerPath]: dataPausedAPI.reducer,
    [dataSelectEnginsAPI.reducerPath]: dataSelectEnginsAPI.reducer,
    [dataProcessesAPI.reducerPath]: dataProcessesAPI.reducer,
    [dataUserSyncAPI.reducerPath]: dataUserSyncAPI.reducer,
    [dataReportsAPI.reducerPath]: dataReportsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend()
      .concat(
        permissonMenuApi.middleware,
        dataInbox.middleware,
        login.middleware,
        getUserToken.middleware,
        getPmWebAddress.middleware,
        dataSettingsProject.middleware,
        dataTracking.middleware,
        NotesAPi.middleware,
        dataDraftsAPI.middleware,
        dataUnassignedAPI.middleware,
        dataAdvanceSearchAPI.middleware,
        dataPausedAPI.middleware,
        dataSelectEnginsAPI.middleware,
        dataProcessesAPI.middleware,
        dataUserSyncAPI.middleware,
        dataReportsAPI.middleware
      ),
});
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
