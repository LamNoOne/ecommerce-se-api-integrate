import { apiSlice } from "../../app/api/apiSlice"

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllProduct: builder.query({
            query: (page = 1) => `/api/products?_page=${page}&_limit=10`
        }),
        getProductById: builder.query({
            query: (id) => `/api/products/${id}`
        }),
        getLimitProduct: builder.query({
            query: (limit = 10) => `/api/products?_limit=${limit}`
        })
    })
})

export const {
    useGetAllProductQuery,
    useGetProductByIdQuery,
    useGetLimitProductQuery
} = productsApiSlice