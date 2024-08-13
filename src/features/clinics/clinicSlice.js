import { createSlice } from "@reduxjs/toolkit";

const clinicSlice = createSlice({
    name: "clinics",
    initialState: {
        clinics: [],
        status: "idle",
        error: null
    },
    reducers: {
        fetchClinicsStart(state) {
            state.status = "loading";
        },
        fetchClinicsSuccess(state, action) {
            state.clinics = action.payload;
            state.status = "succeeded";
        },
        fetchClinicsFailure(state, action) {
            state.error = action.payload;
            state.status = "failed";
        },
    },
    
});

export const { fetchClinicsStart, fetchClinicsSuccess, fetchClinicsFailure } = clinicSlice.actions;

export default clinicSlice.reducer;