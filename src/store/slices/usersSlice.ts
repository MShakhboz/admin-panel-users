import { createSlice } from "@reduxjs/toolkit";
import { usersService } from "../../services/api/usersService";

export type UserType = {
    email: string;
    image: string;
    name: string;
    permission: string[];
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
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            usersService.endpoints.getUsers.matchFulfilled,
            (state, action) => {
                state.data = action.payload;
            }
        );
    },
});

// export const {} = authSlices.actions;
export const { selectUsers } = authSlices.selectors;

export default authSlices.reducer;
