import { apiSlice } from "../../app/api/apiSlice"

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/api/auth/sign-in",
                method: "POST",
                body: { ...credentials },
            }),
        }),
        getUser: builder.query({
            query: () => {
                return {
                    url: "/api/users/get-info",
                }
            },
        }),
    }),
})

export const { useLoginMutation, useGetUserQuery } = authApiSlice
