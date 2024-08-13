import { createSlice } from "@reduxjs/toolkit";

// Define el estado inicial de autenticación
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        access: null,
        isAuthenticated: false,
    },
    reducers: { // Objeto que define las funciones reductoras para manejar diferentes acciones
        login: (state, action) => {
    console.log("LOGIN ACTION PAYLOAD: ", action.payload);
    if (action.payload && action.payload.user) {
        state.user = action.payload.user;
        state.access = action.payload.access;
        state.isAuthenticated = true;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
    console.log("LOGIN ACTION PAYLOAD ACCESS: ", action.payload.access);
    } else {
        console.error("Invalid login payload:", action.payload);
    }
},
        logout: (state) => {
            state.user = null;
            state.access = null;
            state.isAuthenticated = false;
            localStorage.removeItem("user");
        },
        refreshToken: (state, action) => { // Esta acción actualiza sólo el token de acceso con el valor proporcionado en 'action.payload'
            state.access = action.payload.access;
            console.log("ACCESS REFRESH TOKEN: ", action.payload.access);
        }
    }
});


export const { login, logout, refreshToken } = authSlice.actions;

export default authSlice.reducer;