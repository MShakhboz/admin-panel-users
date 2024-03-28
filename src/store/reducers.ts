import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import rootPersistConfig from "./persistConfig";
import { baseApi } from "../services/config/baseApi";
import { users } from "./slices";

const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    users,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;
