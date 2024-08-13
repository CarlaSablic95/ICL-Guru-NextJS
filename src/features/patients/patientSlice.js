import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
    name: "patients",
    initialState: {
        patients: [],
        status: "idle", // la solicitud está en estado de inactividad
        error: null
    },
    reducers: {
        fetchPatientsStart(state) {
            state.status = "loading";
        },
        fetchPatientsSuccess(state, action) {
            console.log("PATIENTS LIST: ", action.payload)
            state.patients = action.payload;
            state.status = "succeeded";
        },
        fetchPatientsFailure(state, action) {
            state.error = action.payload;
            state.status = "failed";
        },
    },
    
});

export const { fetchPatientsStart, fetchPatientsSuccess, fetchPatientsFailure } = patientSlice.actions;


export default patientSlice.reducer;