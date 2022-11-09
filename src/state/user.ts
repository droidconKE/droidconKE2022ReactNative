import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../types/Users";
import AuthStorage from "../utils/authStorage";

interface UserState {
  user: User | null | undefined;
  token: string | null | undefined;
}

const authStorage = new AuthStorage();

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
      //authStorage.setUser({user, token})
    },
    saveUser: (
      state,
      { payload: { user, token } }: PayloadAction<UserState>
    ) => {
      authStorage.setUser({user, token})
    },
    removeUser: () => {
      authStorage.removeUser()
    },
  },
});

export const { setUser, saveUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
