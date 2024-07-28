import { configureStore } from "@reduxjs/toolkit";
import patientsReducer  from "./patientsSlice";

const store = configureStore({
    reducer: {
        data: {
            patients: patientsReducer,
        },
    },
});

export default store;