import { baseApi } from "../config/baseApi";

export const usersService = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => ({ url: `` }),
        }),
    }),
});

export const { useGetUsersQuery } = usersService;
