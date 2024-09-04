import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "room",
  initialState: {
    name: "",
    game: {},
    history: [],
  },
  reducers: {
    setRoomName: (state, action) => {
      state.name = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRoomName } = gameSlice.actions;

export default gameSlice.reducer;
