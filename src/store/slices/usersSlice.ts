import { createSelector, createSlice } from "@reduxjs/toolkit";
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
    selectors: {
        selectUsers: (state) => state.data,
    },
    reducers: {
        addUser: (state, action) => {
            state.data.unshift(action.payload);
        },
        deleteUser: (state, action) => {
            state.data = state.data.filter(
                (user) => user.email !== action.payload
            );
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

export const { addUser, deleteUser } = authSlices.actions;
export const { selectUsers } = authSlices.selectors;

export const users = createSelector(selectUsers, (users) => users);

export default authSlices.reducer;
