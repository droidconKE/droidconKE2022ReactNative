import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../types/Users";

export interface UserState {
  user?: User | null;
  token?: string | null;
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
  } as UserState,
  reducers: {
    setUser: (
      state,
      { payload: { user, token } }: PayloadAction<UserState>
    ) => {
      state.user = user;
      state.token = token;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
