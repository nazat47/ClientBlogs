import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inGeneralUser: null,
  isInGeneralAuthenticated: false,
  token: null,
};

const userSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.inGeneralUser = action.payload.user;
      state.isInGeneralAuthenticated = true;
      state.token = action.payload.token;
    },
    signInFailure: (state, action) => {
      state.inGeneralUser = null;
      state.isInGeneralAuthenticated = false;
      state.token = null;
    },
  },
});

export const { signInSuccess, signInFailure } = userSlice.actions;
export default userSlice.reducer;
