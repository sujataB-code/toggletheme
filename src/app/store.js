import { configureStore } from "@reduxjs/toolkit";
import  darkModeReducer  from "../features/darkModeSlice";
import userListReducer from "../features/UserListSlice";
export const store = configureStore({
    reducer:{
        darkMode: darkModeReducer,
        userList: userListReducer,
    }
})
