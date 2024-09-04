import { createSlice } from "@reduxjs/toolkit";

export const playersSlice = createSlice({
  name: "players",
  initialState: {},
  reducers: {
    addPlayer: (state, action) => {
      state[action.payload.id] = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPlayer } = playersSlice.actions;

export default playersSlice.reducer;
