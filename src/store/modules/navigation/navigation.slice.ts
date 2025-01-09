import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Navigation {
  lastVisitedPage: number;
  lastNumberPage: number;
}

const initialState: Navigation = {
  lastVisitedPage: 0,
  lastNumberPage: 1,
};

export const lastPageNavigateSlice = createSlice({
  name: "navigation",
  initialState: initialState,
  reducers: {
    setLastVisitedPage: (state, action: PayloadAction<number>) => {
      state.lastVisitedPage = action.payload;
    },
    setNumberPage: (state, action: PayloadAction<number>) => {
      state.lastNumberPage = action.payload;
    },
  },
});

export const { setLastVisitedPage, setNumberPage } = lastPageNavigateSlice.actions;
export const navigationReducer = lastPageNavigateSlice.reducer;
