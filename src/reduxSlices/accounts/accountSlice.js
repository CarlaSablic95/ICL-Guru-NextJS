import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: "accounts",
    initialState: {
        accounts: [],
        status: "idle",
        error: null
    },
    reducers: {
        fetchAccountsStart(state) {
            state.status = "loading";
        },
        fetchAccountsSuccess(state, action) {
            state.accounts = action.payload;
            state.status = "succeeded";
        },
        fetchAccountsFailure(state, action) {
            state.error = action.payload;
            state.status = "failed";
        }
    },
});

export const { fetchAccountsStart, fetchAccountsSuccess, fetchAccountsFailure } = accountSlice.actions;

export default accountSlice.reducer;