/** 学习redux、redux-toolkit */
import { applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

// 创建 store
const store = configureStore({ reducer: rootReducer });

export default store;
