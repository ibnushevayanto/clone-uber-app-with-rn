import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    SET_ORIGIN(state, { payload }) {
      state.origin = payload;
    },
    SET_DESTINATION(state, { payload }) {
      state.destination = payload;
    },
    SET_TRAVEL_TIME_INFORMATION(state, { payload }) {
      state.travelTimeInformation = payload;
    },
  },
});

export const { SET_ORIGIN, SET_DESTINATION, SET_TRAVEL_TIME_INFORMATION } =
  navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
