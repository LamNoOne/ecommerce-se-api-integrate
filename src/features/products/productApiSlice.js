import { apiSlice } from "../../app/api/apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: (params) => {
                let queryString;
                const { page = 1, order, limit = 100 } = params;
                if (!order) {
                    queryString = `/products?_page=${page}&_limit=${limit}`;
                } else {
                    queryString = `/products?_page=${page}&_limit=${limit}&_order=${order}&_sortBy=price`;
                }
                return queryString;
            },
        }),
        getProductById: builder.query({
            query: (id) => `/products/get-product?id=${id}`,
        }),
        getLimitProduct: builder.query({
            query: (limit = 10) => `/products?_limit=${limit}`,
        }),
        searchProduct: builder.query({
            query: (params) => {
                const {
                    page = 1,
                    name,
                    order,
                    limit = 100,
                    sortBy = "price",
                } = params;
                let queryString;
                if (!order && name) {
                    queryString = `/products?name=${name}&_page=${page}&_limit=${limit}`;
                } else if (order && name) {
                    queryString = `/products?name=${name}&_page=${page}&_limit=${limit}&_order=${order}&_sortBy=${sortBy}`;
                }
                return queryString;
            },
        }),
    }),
});

export const {
    useGetAllProductQuery,
    useGetProductByIdQuery,
    useGetLimitProductQuery,
    useSearchProductQuery,
} = productsApiSlice;
