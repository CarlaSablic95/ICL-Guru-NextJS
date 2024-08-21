import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice"; // Maneja el estado de autenticación
import patientsReducer from "@/features/patients/patientSlice";
import clinicsReducer from "@/features/clinics/clinicSlice";
import accountsReducer from "@/features/accounts/accountSlice";
// import calculationsReducer from "@/features/accounts/calculationSlice";

// Configuración del almacenamiento de Redux (Redux Store). El store de Redux se configura para manejar el estado de la autenticación, pacientes y clínicas.
export const store = configureStore({ // Se crea un almacenamiento usando "configureStore"
    reducer: {
            auth: authReducer,// Cualquier estado y acción de la autenticación, se maneja mediante authReducer
            patients: patientsReducer,
            clinics: clinicsReducer,
            accounts: accountsReducer,
            // falta calculationsReducer
    },
});