import axios from "axios"; 
import{ store }from "@/app/store";
import { login, logout, refreshToken} from "@/features/auth/authSlice";
import { isTokenExpiring } from "@/utils/tokenUtils";  // Utilidad para verificar la expiración del token

export const BASE_URL = "https://test.iclguru.com"; 

export const authenticate = async (credentials) => {
    // console.log("CREDENTIALS: ", credentials); // { username: 'user.demo', password: 'U4u4iclguru$' }
    
    try {
        const response = await axios.post(`${BASE_URL}/accounts/token/`, credentials);
        console.log("DATA RESPONSE AUTHENTICATE: ", response.data);

        // Guarda el refresh token en una cookie HttpOnly
        document.cookie = `refreshToken=${response.data.refresh}; path=/; HttpOnly; SameSite=Strict; Max-Age=${24 * 60 * 60}`;

        // document.cookie = `refreshToken=${response.data.refresh}; path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${24 * 60 * 60}`;

        console.log("DOCUMENT COOKIE: ", document.cookie)

        // console.log("LOGIN PAYLOAD: ", payload);
        // console.log("Despachando acción de login con payload:", payload);

        // console.log("Dispatching login with payload:", payload);

        const payload = {
            access: response.data.access,
            user: credentials.username
        }

         store.dispatch(login(payload));
        console.log("Estado después del login:", store.getState().auth);
        return response.data;
    } catch (error) {
        console.error("Error during authentication: ", error);
        throw error;
    }
};

const refreshAccessToken = async () => {
    try {
        const refreshToken = document.cookie.split("=")[1];
        const response = await axios.post(`${BASE_URL}/accounts/token/refresh/`, {
            refresh: refreshToken
        },
        {
            withCredentials: true // Asegura que las cookies HttpOnly se envíen con la solicitud
        });
        console.log("RESPONSE DE REFRESH TOKEN: ", response)

        store.dispatch(refreshToken({ access: response.data.access }));

        console.log("New Access Token:", response.data.access);
        return response.data.access;
    } catch(error) {
        console.error("Error refreshing token: ", error);
        store.dispatch(logout());
        return null;
    }
}

export const apiRequest = async (url, options = {}) => {
    let state = store.getState(); // Guardo el estado global actual del almacén de Redux toolkit, de la aplicacion: AUTH, PATIENTS, CLINICS, ACCOUNTS 

    // console.log("ESTADO DEL ALMACEN EN REDUX: ", state)
    let accessToken = state.auth.access;
    console.log("Token antes de la solicitud:", accessToken);
    // console.log("ACCESO PERMITIDO: ", accessToken)

    if(!accessToken || typeof accessToken !== "string") {
        console.error("Invalid access token: must be a non-empty string");
        throw new Error("Access token is invalid or not present");
    }
    try {
        if (isTokenExpiring(accessToken)) {
            accessToken = await refreshAccessToken();
        }

        const fullUrl = `${BASE_URL}${url}`;

        const config = {
            method: options.method || 'GET',
            url: fullUrl,
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
                ...options.headers,
            },
            ...options,
        };

        const response = await axios(config);

        if (response && response.data) {
            console.log(`API Request to ${fullUrl} successful:`, response.data);
            console.log("RESPUESTA API REQUEST: ", response.data)
            return response.data;
        } else {
            console.error('API response does not contain data');
            return null;
        }
    } catch (error) {
        console.error(`API Request to ${url} failed:`, error);
        throw error;
    }
};



// PATIENTS
export const getPatients = async () => {
    try {
        const response = await apiRequest("/patients/patients/", {
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        console.log("PATIENTS: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
}

// PATIENT
export const getPatient = async (id) => {
    try {
        const response = await apiRequest(`/patients/patients/${id}/`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        console.log("PATIENT: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
}

// CLINICS
export const getClinics = async () => {
    try {
        const response = await apiRequest(`/accounts/organizations/`, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        console.log("CLINICS: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
        
}

// ACCOUNTS
export const getAccounts = async () => {
    try {
        const response = await apiRequest(`/accounts/profiles/`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log("DATA: ", response.data);

        return response.data;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
}
