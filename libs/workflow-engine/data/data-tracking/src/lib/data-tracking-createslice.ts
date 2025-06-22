import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  requiredVarsByProcess: {
    [processName: string]: string[];
  };
};

const initialState: InitialState = {
  requiredVarsByProcess: {},
};

const TRACKING_FILTERS_HORIZONTAL = 'trackingFiltersHorizontal';

const trackingFiltersHorizontalSlice = createSlice({
  name: TRACKING_FILTERS_HORIZONTAL,
  initialState,
  reducers: {
    toggleButton(state, action: PayloadAction<any>) {
      state.requiredVarsByProcess = {
        ...action.payload,
      };
    },
  },
});

export const { toggleButton } = trackingFiltersHorizontalSlice.actions;
export const {
  reducerPath: trackingFiltersHorizontalSliceReducerPath,
  reducer: trackingFiltersHorizontalSliceReducer,
} = trackingFiltersHorizontalSlice;

export const customDispatch = createAsyncThunk(
  'trackingFiltersHorizontal/toggleButton',
  async (TrackingFilters: InitialState, { getState, dispatch }) => {
    dispatch(toggleButton(TrackingFilters));
    return TrackingFilters;
  }
);
