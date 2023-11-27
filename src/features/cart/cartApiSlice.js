import { apiSlice } from "~/app/api/apiSlice"

export const cartApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCartByUserId: builder.query({
            query: () => "/api/carts/get-by-user-id",
            providesTags: ["Cart"],
        }),
        addCart: builder.mutation({
            query: (cartInfo) => ({
                url: "/api/carts/add-to-cart",
                method: "POST",
                body: {
                    cartId: JSON.parse(localStorage.getItem('user'))?.id,
                    productId: cartInfo.productId,
                    quantity: cartInfo.quantity,
                },
            }),
            invalidatesTags: ["Cart"],
        }),
        //Wait for back-end fix
        // updateProductCartQuantity: builder.mutation({
        //     query: (cartProductInfo) => ({
        //         url: '/api/carts/reduce-quantity-product',
        //         // back-end use POST instead
        //         method: 'PATCH',
        //         body: {
        //             cartId: 1,
        //             productId: cartProductInfo.productId,
        //             quantity: cartProductInfo.quantity
        //         }
        //     })
        // })
    }),
})

export const { useAddCartMutation, useGetCartByUserIdQuery } = cartApiSlice
