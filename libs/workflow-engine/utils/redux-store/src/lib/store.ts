import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { permissonMenuApi } from '@office-automation/shared/data/permission';
import { dataInbox } from '@office-automation/workflow-engine/data/data-inbox';
import { login } from '@office-automation/workflow-engine/data/login';
export const store = configureStore({
  reducer: {
    [permissonMenuApi.reducerPath]: permissonMenuApi.reducer,
    [dataInbox.reducerPath]: dataInbox.reducer,
    [login.reducerPath]: login.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend()
      .concat(
        permissonMenuApi.middleware,
        dataInbox.middleware,
        login.middleware
      ),
});
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
