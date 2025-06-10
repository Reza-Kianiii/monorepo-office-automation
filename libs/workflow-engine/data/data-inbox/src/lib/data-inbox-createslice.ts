import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  requiredVarsByProcess: {
    [processName: string]: string[];
  };
};

const initialState: InitialState = {
  requiredVarsByProcess: {},
};

const INBOX_FILTERS_HORIZONTAL = 'inboxFiltersHorizontal';

const inboxFiltersHorizontalSlice = createSlice({
  name: INBOX_FILTERS_HORIZONTAL,
  initialState,
  reducers: {
    toggleButton(state, action: PayloadAction<any>) {
      state.requiredVarsByProcess = {
        ...action.payload,
      };
    },
  },
});

export const { toggleButton } = inboxFiltersHorizontalSlice.actions;
export const {
  reducerPath: inboxFiltersHorizontalSliceReducerPath,
  reducer: inboxFiltersHorizontalSliceReducer,
} = inboxFiltersHorizontalSlice;

export const customDispatch = createAsyncThunk(
  'inboxFiltersHorizontal/toggleButton',
  async (InboxFilters: InitialState, { getState, dispatch }) => {
    dispatch(toggleButton(InboxFilters));
    return InboxFilters;
  }
);
