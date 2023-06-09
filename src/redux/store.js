import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import dialogReducer from './dialogSlice'
import checkoutReducer from './checkoutSlice'
export default configureStore({
    reducer:{
        cart: cartReducer,
        dialog:dialogReducer,
        checkout:checkoutReducer,
    },
})
/* 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

const reducer = combineReducers({});

const intialState = {}

const middleware = [thunk]

const store = createStore{
    reducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))
};
export default store;
*/