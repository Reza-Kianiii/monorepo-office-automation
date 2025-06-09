import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
      console.log(state, 'state');
      console.log(action, 'uitututrrtrtrt');
    },
  },
});

export const { toggleButton } = inboxFiltersHorizontalSlice.actions;
export const {
  reducerPath: inboxFiltersHorizontalSliceReducerPath,
  reducer: inboxFiltersHorizontalSliceReducer,
} = inboxFiltersHorizontalSlice;
