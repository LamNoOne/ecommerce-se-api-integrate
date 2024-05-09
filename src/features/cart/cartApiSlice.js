import { apiSlice } from "~/app/api/apiSlice";

export const cartApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCartByUserId: builder.query({
            query: () => "/carts/get-my-cart",
            providesTags: ["Cart"],
        }),
        addCart: builder.mutation({
            query: (params) => ({
                url: "/carts/add-to-cart",
                method: "POST",
                body: {
                    cartId: JSON.parse(localStorage.getItem("user"))?.id,
                    productId: params.productId,
                    quantity: params.quantity,
                },
            }),
            invalidatesTags: ["Cart"],
        }),
        updateProductCartQuantity: builder.mutation({
            query: (params) => ({
                url: "/carts/update-quantity-product",
                method: "PATCH",
                body: {
                    cartId: JSON.parse(localStorage.getItem("user"))?.id,
                    productId: params.productId,
                    quantity: params.quantity,
                },
            }),
            invalidatesTags: ["Cart"],
        }),
        deleteProductFromCart: builder.mutation({
            query: ({ id }) => {
                const cartId = JSON.parse(localStorage.getItem("user"))?.id;
                return {
                    url: `/carts/delete-product-from-cart?cartId=${cartId}&productId=${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["Cart"],
        }),
    }),
});

export const {
    useAddCartMutation,
    useGetCartByUserIdQuery,
    useUpdateProductCartQuantityMutation,
    useDeleteProductFromCartMutation,
} = cartApiSlice;
