import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Session from "../types/Session";

const sessionsSlice = createSlice({
    name: 'sessions',
    initialState: {
        sessions: undefined as Session[] | undefined,
    },
    reducers: {
        setSessions: (state, action: PayloadAction<Session[] | undefined >) => {
            state.sessions = action.payload;
        }
    }
});

export const { setSessions } = sessionsSlice.actions;
export default sessionsSlice.reducer;