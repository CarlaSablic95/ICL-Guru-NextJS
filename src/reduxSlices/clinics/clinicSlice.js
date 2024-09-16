import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postData, deleteData } from "@/services/ApiService";

// Agrego clínica
export const addClinic = createAsyncThunk(
    "clinics/addClinic",
    async (clinicData, { rejectWithValue }) => {
        console.log("CLINIC DATA: ", clinicData);
        try {
            const response = await postData("/accounts/organizations/", clinicData);
                console.log("Respuesta de envío de datos para agregar clínicas", clinicData);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

// Elimino clínica
export const deleteClinic = createAsyncThunk(
    "clinics/deleteClinic",
    async({id}, { rejectWithValue }) => {
        console.log("CLINIC DATA ID TO ELIMINATE: ", id);
        
        try {
            const response = await deleteData(`/accounts/organizations/${id}/`);
            console.log("Elimino el paciente: ", response);

            return { id: id }
        } catch(error) {
            return rejectWithValue(error.response.data);
        }
    }
)

const clinicSlice = createSlice({
    name: "clinics",
    initialState: {
        clinics: [],
        clinicsStatus: "idle",
        error: null
    },
    reducers: {
        fetchClinicsStart(state) {
            state.clinicsStatus = "loading";
        },
        fetchClinicsSuccess(state, action) {
            state.clinics = action.payload;
            state.clinicsStatus = "succeeded";
        },
        fetchClinicsFailure(state, action) {
            state.error = action.payload;
            state.clinicsStatus = "failed";
        },
    },
    extraReducers: (builder) => {
        // AGREGAR CLÍNICA
        builder
        .addCase(addClinic.pending, (state) => {
            state.clinicsStatus = "loading";
        })
        .addCase(addClinic.fulfilled, (state, action) => {
            console.log("CLÍNICA AÑADIDA: ", action.payload);
            state.clinicsStatus = "succeeded";
            state.clinics.push(action.payload);
        })
        .addCase(addClinic.rejected, (state, action) => {
            console.log("ERROR AL AÑADIR CLÍNICA", action.payload);
            state.clinicsStatus = "failed";
            state.error = action.payload;
        })

        // ELIMINAR CLÍNICA
        .addCase(deleteClinic.pending, (state) => {
            state.clinicsStatus = "loading";
        })
        .addCase(deleteClinic.fulfilled, (state, action) => {
            console.log("CLÍNICA ELIMINADA: ", action.payload);

            state.clinicsStatus = "succeeded";
            state.clinics = state.clinics.filter((clinic) => clinic.id !== action.payload.id);
        })
        .addCase(deleteClinic.rejected, (state, action) => {
            console.log("ERROR AL ELIMINAR EL PACIENTE: ", action.payload);
            state.clinicsStatus = "failed";
            state.error = action.payload;
        })
    }
    
});

export const { fetchClinicsStart, fetchClinicsSuccess, fetchClinicsFailure } = clinicSlice.actions;

export default clinicSlice.reducer; // clinicSlice es un objeto, al cual accedo a una de sus propiedades que es "reducers"