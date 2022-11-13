import { configureStore } from "@reduxjs/toolkit";
import userReducer, { setUser } from "./user";
import scheduleReducer from "./schedule";
import sessionsReducer from './sessions';
import organizersReducer from './organizers';
import sponsorsReducer from './sponsors';
import feedsReducer from './feeds';
import { userApi } from "../services/auth";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import AuthStorage from "../utils/authStorage";



const authStorage = new AuthStorage();

export const store = configureStore({
  reducer: {
    user: userReducer,
    schedule: scheduleReducer,
    sessions: sessionsReducer,
    organizers: organizersReducer,
    sponsors: sponsorsReducer,
    feeds: feedsReducer,
    // Add the generated reducer as a specific top-level slice
    [userApi.reducerPath]: userApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Function that sets user from async storage to redux store
const initializeUser = () => {
  return (dispatch : typeof store.dispatch) => {
    authStorage.getUser().then(user => {
      if(user !== null) {
       //console.log('token from asyncstorage is' + user.token)
        dispatch(setUser({user: user.user, token: user.token}))
      }
    })
  }
}

store.dispatch(initializeUser());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
