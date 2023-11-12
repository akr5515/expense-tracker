import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  access_token: string;
}

const initialState: UserState = {
  access_token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.access_token = "login";
    },
    logout: (state) => {
      state.access_token = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
