import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        value:0,
    },
    reducers:{
        incrementBy5:(state)=>{
            state.value+=5;
        },
        decrementBy5:(state)=>{
            state.value-=5;
        },
        incrementBy2: (state) => {
            state.value += 2;
        },
        decrementBy2: (state) => {
            state.value -= 2;
        },
    }
})

export const { incrementBy5, decrementBy5,incrementBy2,decrementBy2 } = counterSlice.actions;
export default counterSlice.reducer;
