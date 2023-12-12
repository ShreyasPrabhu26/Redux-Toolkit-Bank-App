import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "../src/feautures/accounts/accountSlice"
import customerReducer from "../src/feautures/customers/CustomerSlice"
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer
    }
})

export default store;