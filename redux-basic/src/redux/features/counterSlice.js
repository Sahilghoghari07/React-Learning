import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        INCREMENT: (state) => {
            state.value += 1;
        },
        DECREMENT: (state) => {
            state.value -= 1;
        }
    }
});

export const {INCREMENT, DECREMENT} = counterSlice.actions;
export default counterSlice.reducer;