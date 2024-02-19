import { createSlice } from "@reduxjs/toolkit";
import { store } from "~/app/store";

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null },
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload;
        },
        logOut: (state, action) => {
            store.dispatch({ type: 'USER_LOGOUT' });
        },
    },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

// state, state.auth
export const selectCurrentUser = (state) => state.auth.user;
