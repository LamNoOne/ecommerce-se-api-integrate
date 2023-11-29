import { apiSlice } from "../../app/api/apiSlice"

export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrder: builder.query({
            query: () => "/api/orders",
            providesTags: ["Order"],
        }),
        getOrderById: builder.query({
            query: (id) => `/api/checkout/get-order?orderId=${id}`,
        }),
        createOrder: builder.mutation({
            query: (initialOrder) => ({
                url: "/api/checkout/order",
                method: "POST",
                body: initialOrder,
            }),
            invalidatesTags: ["Order"],
        }),
    }),
})

export const {
    useCreateOrderMutation,
    useGetAllOrderQuery,
    useGetOrderByIdQuery,
} = orderApiSlice
