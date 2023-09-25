import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../data/taskData";


const userListSlice = createSlice({
    name: 'userList',
    initialState:  userList,
    reducers: {
        addUser(state, action) {
           state.push(action.payload)
            console.log(action)
        },
        removeUser(state, action) {
            const { id } = action.payload;
            const uu = state.find((user) => user.id == id);
            if (uu) {
                return state.filter((f) => f.id !== id);
            }
        },
        updateUser(state, action) {
            const { id, title, description, status } = action.payload;
            const uu = state.find((user) => user.id == id);
            if (uu) {
                uu.title = title;
                uu.description = description;
                uu.status = status;
            }
        },
    }
});

export const {addUser, updateUser,removeUser} = userListSlice.actions
export default userListSlice.reducer;



