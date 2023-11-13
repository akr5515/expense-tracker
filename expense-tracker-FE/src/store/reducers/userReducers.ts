import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  accessToken: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
}

const initialState: UserState = {
  accessToken: "",
  userId: "",
  firstName: "",
  lastName: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      Object.assign(state, action.payload);
    },
    logout: (state) => {
      const emptyObject = {
        accessToken: "",
        userId: "",
        firstName: "",
        lastName: "",
        email: "",
      };
      Object.assign(state, emptyObject);
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
