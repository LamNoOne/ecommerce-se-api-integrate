import { createSlice } from "@reduxjs/toolkit";

const wishList = createSlice({
    name: "wishList",
    initialState: { isUpdate: null, path: null },
    reducers: {
        setWishListUpdate: (state, action) => {
            const { isUpdate, path } = action.payload;
            state.isUpdate = isUpdate;
            state.path = path;
        },
    },
});

export const { setWishListUpdate } = wishList.actions;

export default wishList.reducer;

export const selectCurrentUpdateWishlist = (state) => state.wishList;
