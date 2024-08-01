// reducers.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        multiply: (state, action) => state * action.payload, // Update the state with multiplication
    },
});

export const { increment, decrement, multiply } = counterSlice.actions;
export default counterSlice.reducer;
