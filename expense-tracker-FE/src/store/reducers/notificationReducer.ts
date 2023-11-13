import { createSlice } from "@reduxjs/toolkit";

interface NotificationState {
  message: string;
  isOpen: boolean;
}

const initialState: NotificationState = {
  message: "",
  isOpen: false,
};

const notificationSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setNotification: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
