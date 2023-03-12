import { createSlice } from "@reduxjs/toolkit";

//intial state
const dialogSlice= createSlice({
name:'dialog',
initialState:{
    cartDialog: false,
    overlay:false,
    bodyScroll:false,
   shopFilter:false,
},
reducers:{
    openCartDialog:(state,action)=>{
        state.cartDialog=action.payload;
    },
    openShopFilterDialogDialog:(state,action)=>{
        state.shopFilter=action.payload;
    },
    showOverLay:(state,action)=>{
        state.overlay=action.payload;
    },
    showScroll:(state,action)=>{
        state.bodyScroll=action.payload;
    },
    reset: (state)=>{
        state.cartDialog= false;
        state.overlay=false;
        state.bodyScroll=false;
        state.shopFilter=false;
    }
}
});
export const { openCartDialog, showOverLay,  showScroll, openShopFilterDialogDialog, reset } =dialogSlice.actions;
export default dialogSlice.reducer;