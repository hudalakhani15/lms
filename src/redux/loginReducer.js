import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginReducer",
  initialState: {
    email: "abc@gmail.com",
    password: "123456",
    userName: "ABC",
  },
  reducers: {
    edit(state, action) {
      console.log(action.payload);

      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { edit } = loginSlice.actions;

export default loginSlice.reducer;