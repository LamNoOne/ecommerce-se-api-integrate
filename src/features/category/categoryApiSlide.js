import { apiSlice } from "~/app/api/apiSlice";

export const categoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategory: builder.query({
            query: () => "/categories",
        }),
        getAllProductsByCategory: builder.query({
            query: (params) => {
                const {
                    type = 1,
                    page = 1,
                    limit = 40,
                    order,
                    sortBy = "price",
                } = params;
                let queryString;
                if (!order) {
                    queryString = `/categories/get-products?id=${type}&_page=${page}&_limit=${limit}`;
                } else {
                    queryString = `/categories/get-products?id=${type}&_page=${page}&_limit=${limit}&_order=${order}&_sortBy=${sortBy}`;
                }
                return queryString;
            },
        }),
    }),
});

export const { useGetAllCategoryQuery, useGetAllProductsByCategoryQuery } =
    categoryApiSlice;
