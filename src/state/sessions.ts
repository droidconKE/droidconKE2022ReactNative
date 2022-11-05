import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pagination } from "../types/Pagination";
import Session from "../types/Session";

interface SessionState {
    sessions: Session[] | null | undefined;
    meta: Pagination | null | undefined;
}
const sessionsSlice = createSlice({
    name: 'sessions',
    initialState: {
        sessions: [],
        meta: null,
    } as SessionState,
    reducers: {
        setSessions: (state, {payload: { sessions, meta}}: PayloadAction<SessionState>) => {
            state.sessions = sessions;
            state.meta = meta
        }
    }
});

export const { setSessions } = sessionsSlice.actions;
export default sessionsSlice.reducer;