import {createSlice} from "@reduxjs/toolkit";

const defaultCounterValue = {
    value: 0
}

const counterReducers = createSlice({
    name: 'counter',
    initialState: defaultCounterValue,
    reducers: {
        increaseBy1(state){
            state.value++;
        },
        decreaseBy1(state){
            state.value--;
        },
        increaseByValue(state,action){
            state.value = state.value + action.payload;
        },
        decreaseByValue(state,action){
            state.value = state.value - action.payload;
        }
    }
})

export const counterActions = counterReducers.actions;

export default counterReducers.reducer;