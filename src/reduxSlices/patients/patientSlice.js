import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postData, editData, deleteData} from "@/services/ApiService";

// Función asíncrona para crear un paciente
export const addPatient =  createAsyncThunk(
    "patients/addPatient",
    async (patientData, { rejectWithValue }) => {
        console.log("PATIENT DATA: ", patientData);
        try {
            const response = await postData("/patients/patients/", patientData);
            console.log("Respuesta de envío de datos para agregar pacientes: ", response);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Función asíncrona para editar datos de un paciente
export const editPatient = createAsyncThunk(
    "patients/editPatient",
    async ({ id, ...patientData }, { rejectWithValue }) => { // ... OPERADOR DE PROPAGACIÓN PARA EXTRAER EL ID
        console.log("EDIT PATIENT DATA: ", patientData); // name, surname, dob, mrn, identification.
        try {
            const response = await editData(`/patients/patients/${id}/`, patientData);
            console.log("Respuesta al editar datos de pacientes: ", response);
            return response;
            
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Función asíncrona para borrar a un paciente
export const deletePatient = createAsyncThunk(
    "patients/deletePatient",
    async ({id},  { rejectWithValue }) => {
        console.log("PATIENT DATA ID TO ELIMINATE: ", id);

        try {
            const response = await deleteData(`/patients/patients/${id}/` );
            console.log("Respuesta al eliminar paciente: ", response);
            
            return { id: id };
        } catch(error) {
            return rejectWithValue(error.response.data);
        }
    }
)


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
            console.log("PATIENTS LIST: ", action.payload);
            state.patients = action.payload;
            state.status = "succeeded";
        },
        fetchPatientsFailure(state, action) {
            state.error = action.payload;
            state.status = "failed";
        },
    },
    extraReducers: (builder) => {
        builder 
        // CREAR PACIENTE
        .addCase(addPatient.pending, (state) => {
            state.status = "loading";
        })
        .addCase(addPatient.fulfilled, (state, action) => {
            console.log("PACIENTE AÑADIDO: ", action.payload);
            state.status = "succeeded";
            state.patients.push(action.payload); // En caso de éxito, contiene los datos del paciente
        })
        .addCase(addPatient.rejected, (state, action) => {
            console.log("ERROR AL AÑADIR PACIENTE: ", action.payload);
            state.status = "failed";
            state.error = action.payload; // En caso de error, contiene el mensaje de error
        })

        // EDITAR PACIENTE
        .addCase(editPatient.pending, (state) => {
            state.status = "loading";
        })
        .addCase(editPatient.fulfilled, (state, action) => {
            console.log("PACIENTE EDITADO: ", action.payload);
            state.status = "succeeded";
            const index = state.patients.findIndex((patient) => patient.id === action.payload.id);
            
            if(index !== -1) {
                state.patients[index] = action.payload;
            }
        })
        .addCase(editPatient.rejected, (state, action) => {
            console.log("ERROR AL EDITAR PACIENTE: ", action.payload);
            state.status = "failed";
            state.error = action.payload;
        })

        // ELIMINAR PACIENTE
        .addCase(deletePatient.pending, (state) =>{
            state.status = "loading";
        })
        .addCase(deletePatient.fulfilled, (state, action) => {
            console.log("PACIENTE ELIMINADO: ", action.payload);
            state.status = "succeeded";
            state.patients = state.patients.filter((patient) => patient.id !== action.payload.id);
        })
        .addCase(deletePatient.rejected, (state, action) => {
            console.log("ERROR AL ELIMINAR EL PACIENTE: ", action.payload);
            state.status = "failed";
            state.error = action.payload;
        });
    }
    
});

export const { fetchPatientsStart, fetchPatientsSuccess, fetchPatientsFailure } = patientSlice.actions;


export default patientSlice.reducer;