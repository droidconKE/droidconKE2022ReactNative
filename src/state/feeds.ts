import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pagination } from "../types/Pagination";
import Feed from "../types/Feed";

interface FeedState {
    feeds: Feed[] | null | undefined;
    meta: Pagination | null | undefined;
}

const feedsSlice = createSlice({
    name: 'feeds',
    initialState: {
        feeds: [],
        meta: null,
    } as FeedState,
    reducers: {
        setFeeds: (state, {payload: { feeds, meta}}: PayloadAction<FeedState>) => {
            state.feeds = feeds;
            state.meta = meta
        }
    }
})

export const { setFeeds } = feedsSlice.actions;
export default feedsSlice.reducer;