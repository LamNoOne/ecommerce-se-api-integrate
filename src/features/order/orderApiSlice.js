import { apiSlice } from "../../app/api/apiSlice"

export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrder: builder.query({
            query: () => "/api/orders",
            providesTags: ["Order"],
        }),
        getOrderById: builder.query({
            query: (id) => {
                let userId = ""
                if (localStorage.getItem("user")) {
                    userId = JSON.parse(localStorage.getItem("user"))?.id
                }
                return `/api/orders/${id}/${userId}`
            },
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
