import { createSlice } from "@reduxjs/toolkit";

const patientsSlice = createSlice({
    name: "patients",
    initialState: [],
    reducers: {
        fetchPatients: (state, action) => {
            return action.payload;
        }
    }
});

export const { fetchPatients } = patientsSlice.actions;

export default patientsSlice.reducer;