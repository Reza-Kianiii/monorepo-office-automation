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
        dataSettingsProject.middleware
      ),
});
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
