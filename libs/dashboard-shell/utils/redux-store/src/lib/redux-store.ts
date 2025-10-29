import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

// Create a dummy reducer if you don't have any real reducers yet
const dummyReducer = (state = {}, action: { type: string }) => state;

export const store = configureStore({
  reducer: {
    dummy: dummyReducer,
    // Add your actual reducers here, for example:
    // auth: authReducer,
    // users: usersReducer,
    // etc.
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend().concat(),
});
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
