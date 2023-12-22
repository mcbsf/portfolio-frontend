import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import chatReducer from "./reducer";

const rootReducer = combineReducers({task: chatReducer});
const store = configureStore({ reducer: rootReducer });

export default store;