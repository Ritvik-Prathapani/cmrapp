import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Name: "",
  Branch: "",
  Year: "",
};

export const Auth = createSlice({
  name: "loginandlogout",
  initialState,
  reducers: {
    login: (state, action) => {
      state.Name = action.payload;
      state.Branch = action.payload;
      state.Year = action.payload;
    },
    logout: (state, action) => {
      state.Name = null;
      state.Branch = null;
      state.Year = null;
    },
  },
});

export const { login, logout } = Auth.actions;
export default Auth.reducer;
