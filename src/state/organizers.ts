import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Organizer from "../types/Organizer";

const organizersSlice = createSlice({
    name: 'organizers',
    initialState: {
        data: [] as Organizer[] | undefined
    },
    reducers: {
        setOrganizers: (state, action : PayloadAction<{ data: Organizer[]}>) => {
            state.data = action.payload.data
        }
    }
});

export const { setOrganizers } = organizersSlice.actions;
export default organizersSlice.reducer;