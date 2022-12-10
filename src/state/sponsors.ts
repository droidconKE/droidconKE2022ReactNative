import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Sponsor from "../types/Sponsor";


interface SponsorsState {
    data: Sponsor[] | undefined;
}

const sponsorsSlice = createSlice({
    name: 'sponsors',
    initialState: {
        data: [],
    } as SponsorsState,
    reducers: {
        setSponsors: (state, action: PayloadAction<SponsorsState>) => {
            state.data = action.payload.data;
        }
    }
})

export const { setSponsors } = sponsorsSlice.actions;
export default sponsorsSlice.reducer;