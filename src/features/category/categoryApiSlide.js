import { apiSlice } from "~/app/api/apiSlice";

export const categoryApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllCategory: builder.query({
            query: () => '/api/categories'
        })
    })
})

export const { useGetAllCategoryQuery } = categoryApiSlice