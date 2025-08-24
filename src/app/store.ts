import {configureStore} from "@reduxjs/toolkit";
import token from "../features/token/tokenSlice.ts";
import user from "../features/user/userSlice.ts";
export const store = configureStore({
    reducer: {
        user, token
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch