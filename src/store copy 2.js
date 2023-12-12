import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "../src/feautures/accounts/accountSlice"
import customerReducer from "../src/feautures/customers/CustomerSlice"

import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";


import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;

