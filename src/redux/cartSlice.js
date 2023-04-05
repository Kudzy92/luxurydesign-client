import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    cartTotalVATInc:0,
    cartVAT:0,
    cartCouponRate:0,
    cartCouponValue:0,
  };
const cartSlice= createSlice({
name:'cart',
initialState,
reducers:{
    addProduct:(state,action)=>{
        const existingIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
          );
    
          if (existingIndex >= 0) {
            //console.log("state.cartItems[existingIndex].nowprice"+state.cartItems[existingIndex].nowprice+"QTY"+state.cartItems[existingIndex].cartQuantity)
            //state.cartTotalAmount += state.cartItems[existingIndex].nowprice * state.cartItems[existingIndex].cartQuantity;
            state.cartItems[existingIndex] = {
              ...state.cartItems[existingIndex],
              cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
            };
            toast.info("Increased product quantity", {
              position: "bottom-left",
            });
          } else {
            let tempProductItem = { ...action.payload, cartQuantity: 1 };
            state.cartItems.push(tempProductItem);
            state.cartTotalQuantity +=1;
            //state.cartTotalAmount += action.payload.nowprice * 1;
            //console.log("PAYLOAD"+action.payload.nowprice);
            toast.success("Product added to cart", {
              position: "bottom-left",
            });
          }
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
removeProduct:(state,action)=>{
  const existingIndex = state.cartItems.findIndex(
    (item) => item.id === action.payload.id
  );
  if (existingIndex >= 0) {
    state.cartItems[existingIndex].cartQuantity -= 1
  }
    state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;
          if(state.cartTotalQuantity>0){state.cartTotalQuantity -=1;}else{
            state.cartTotalQuantity=0;
          }
          //state.cartTotalAmount -= action.payload.nowprice * action.payload.cartQuantity;
            
          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },

    incrementProduct:(state,action)=>{
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.cartItems[itemIndex].cartQuantity += 1;

        toast.info("Incremented product quantity", {
          position: "bottom-left",
        });
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
     },
     decreaseProduct:(state,action)=>{
        
        const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
          );
    
          if (state.cartItems[itemIndex].cartQuantity > 1) {
            state.cartItems[itemIndex].cartQuantity -= 1;
    
            toast.info("Decreased product quantity", {
              position: "bottom-left",
            });
          } 

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
        let { total,cartTotalVATInc,cartVAT, quantity } = state.cartItems.reduce(
          (cartTotal, cartItem) => {
            const { nowprice, cartQuantity } = cartItem;
            const itemTotal = nowprice * cartQuantity;
  
            cartTotal.total += itemTotal;
            cartTotal.quantity += cartQuantity;
            
            return cartTotal;
          },
          {
            total: 0,
            quantity: 0,
          }
        );
        const vat=0.15*total;
        const vatInc=1.15*total;
        total = parseFloat(total.toFixed(2));
        state.cartTotalVATInc=parseFloat(vatInc.toFixed(2));
        state.cartVAT=parseFloat(vat.toFixed(2));
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
      },
      getCouponDiscount(state, action) {
        let { total,quantity,cartCouponRate } = state.cartItems.reduce(
          (cartTotal, cartItem) => {
            const { nowprice, cartQuantity } = cartItem;
            const itemTotal = nowprice * cartQuantity;
  
            cartTotal.total += itemTotal;
            cartTotal.quantity += cartQuantity;
            return cartTotal;
          },
          {
            total: 0,
            quantity: 0,
          }
          
        );
       
        
        state.cartCouponRate=action.payload;
        //const tt=parseFloat(total)*parseFloat(cartCouponRate);
        const tt=action.payload * total;;
        console.log("action.payload"+action.payload+"Total"+total+"tt"+tt);
            state.cartCouponValue = parseFloat(tt);
      },
      clearCart(state, action) {
        state.cartItems = [];
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        toast.error("Cart cleared", { position: "bottom-left" });
      },
    reset: (state)=>{
        state.products=[];
        state.quantity =0;
        state.customPrice =[];
        state.total =0;
    }
}
});
export const { addProduct ,removeProduct, incrementProduct, decreaseProduct, getTotals, clearCart,getCouponDiscount, reset } =cartSlice.actions;
export default cartSlice.reducer;