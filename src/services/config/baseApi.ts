/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    BaseQueryApi,
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "users.json",
    prepareHeaders: (headers, { getState }) => {},
});

const baseQueryModified = async (
    args: unknown,
    api: BaseQueryApi,
    extraOptions: unknown
) => {
    const result = await baseQuery(args as string, api, extraOptions as object);

    return result;
};

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryModified,
    endpoints: () => ({}),
});
