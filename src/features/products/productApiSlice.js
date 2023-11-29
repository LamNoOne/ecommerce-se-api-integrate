import { apiSlice } from "../../app/api/apiSlice"

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: (params) => {
                let queryString
                const { page = 1, order } = params
                if (!order) {
                    queryString = `/api/products?_page=${page}&_limit=100`
                } else {
                    queryString = `/api/products?_page=${page}&_limit=100&_order=${order}&_sortBy=price`
                }
                return queryString
            },
        }),
        getProductById: builder.query({
            query: (id) => `/api/products/get-product?id=${id}`,
        }),
        getLimitProduct: builder.query({
            query: (limit = 10) => `/api/products?_limit=${limit}`,
        }),
    }),
})

export const {
    useGetAllProductQuery,
    useGetProductByIdQuery,
    useGetLimitProductQuery,
} = productsApiSlice
