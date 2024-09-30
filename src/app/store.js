import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/reduxSlices/auth/authSlice"; // Maneja el estado de autenticación
import patientsReducer from "@/reduxSlices/patients/patientSlice";
import clinicsReducer from "@/reduxSlices/clinics/clinicSlice";
import accountsReducer from "@/reduxSlices/accounts/accountSlice";
import calculationsReducer from "@/reduxSlices/calculations/calculationSlice";

// Configuración del almacenamiento de Redux (Redux Store). El store de Redux se configura para manejar el estado de la autenticación, pacientes y clínicas.
export const store = configureStore({ // Se crea un almacenamiento usando "configureStore"
    reducer: {
        auth: authReducer,// Cualquier estado y acción de la autenticación, se maneja mediante authReducer
        patients: patientsReducer,
        clinics: clinicsReducer,
        accounts: accountsReducer,
        calculations: calculationsReducer
    },
});