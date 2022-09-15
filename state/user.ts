import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  username: string;
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: undefined as User | undefined,
  },
  reducers: {
    setUser: (state, action: PayloadAction<User | undefined>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
