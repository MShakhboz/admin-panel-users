import { createSlice } from "@reduxjs/toolkit";
import { usersService } from "../../services/api/usersService";

export type UserType = {
    email: string;
    image?: string;
    name?: string;
    permissions: string[];
};

type InitialProps = {
    data: UserType[];
};

const initialState: InitialProps = {
    data: [],
};

const authSlices = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.data.unshift(action.payload);
        },
        deleteUser: (state, action) => {
            state.data = state.data.filter(
                (user) => user.email !== action.payload
            );
        },
        editUser: (state, action) => {
            const index = state.data.findIndex(
                (user) => user.email === action.payload.email
            );
            state.data[index].permissions = action.payload.permissions;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            usersService.endpoints.getUsers.matchFulfilled,
            (state, action) => {
                state.data = action.payload;
            }
        );
    },
});

export const { addUser, deleteUser, editUser } = authSlices.actions;

export default authSlices.reducer;
