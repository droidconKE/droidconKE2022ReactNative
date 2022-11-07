import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Schedule from "../types/Schedule";

const scheduleSlice = createSlice({
  name: "schedule",
  initialState: {
    schedule: undefined as Schedule | undefined,
    selectedDay: undefined as string | undefined,
  },
  reducers: {
    setSchedule: (state, action: PayloadAction<Schedule | undefined>) => {
      state.schedule = action.payload;
    },
    setSelectedDay: (state, action: PayloadAction<string | undefined>) => {
      state.selectedDay = action.payload;
    },
  },
});

export const { setSchedule, setSelectedDay } = scheduleSlice.actions;
export default scheduleSlice.reducer;
