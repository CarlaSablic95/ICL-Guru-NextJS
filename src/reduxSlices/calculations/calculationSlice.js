import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postData } from "@/services/ApiService";

export const addCalculation = createAsyncThunk(
    "calculations/addCalculation",
    async (calculationData, { rejectWithValue }) => {
        console.log("CALCULATION PATIENT DATA");
        try {
            const response = await postData(`/calculation/register/${id}/`, calculationData);
            return response;
        } catch (error) {
           return rejectWithValue(error.response.data);
        }
    }
)

const calculationSlice = createSlice({
    name: "calculations",
    initialState: {
        calculations: [],
        status: "idle",
        error: null
    },
    reducers: {
        fetchCalculationsStart(state) {
            state.status = "loading";
        },
        fetchCalculationsSuccess(state, action) {
            console.log("CALCULATIONS DATA: ", action.payload);
            state.calculations = action.payload;
            state.status = "succeeded";
        },
        fetchCalculationsFailure(state, action) {
            state.error = action.payload;
            state.status = "failed";
        }
    }
})

export const { fetchCalculationsStart, fetchCalculationsSuccess, fetchCalculationsFailure } = calculationSlice.actions;

export default calculationSlice.reducer;