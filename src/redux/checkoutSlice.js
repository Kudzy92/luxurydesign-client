import { createSlice } from "@reduxjs/toolkit";

//intial state
const checkoutSlice= createSlice({
name:'checkout',
initialState:{
    checkoutform: {},
},
reducers:{
    checkoutFormValues:(state,action)=>{
        state.checkoutform=action.payload;
    },
    
    reset: (state)=>{
        state.checkoutform= {};
    }
}
});
export const { checkoutFormValues, reset } =checkoutSlice.actions;
export default checkoutSlice.reducer;