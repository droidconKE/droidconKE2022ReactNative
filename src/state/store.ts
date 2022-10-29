import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import scheduleReducer from "./schedule";
import { userApi } from "../services/auth";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    user: userReducer,
    schedule: scheduleReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
