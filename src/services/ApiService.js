import axiosInstance from "./axiosConfig";
import{ store }from "@/app/store";
import { login } from "@/features/auth/authSlice"; // Utilidad para verificar la expiración del token

export const authenticate = async (credentials) => {
    try {
        const response = await axiosInstance.post("/accounts/token/", credentials);
        console.log("DATA RESPONSE AUTHENTICATE: ", response.data);

        // Guarda el refresh token en una cookie HttpOnly
        document.cookie = `refreshToken=${response.data.refresh}; path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${24 * 60 * 60}`;
        console.log("DOCUMENT COOKIE: ", document.cookie)

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

export const getData = async (url, options = {}) => {
    try {
        const response = await axiosInstance({
            url,
            ...options,
        });
        console.log(`API Request to ${url} successful: `, response.data);
        console.log(`options `, response.data);
        return response.data;
    } catch (error) {
        console.error(`API Request to ${url} failed: `, error);
        throw error;
    }
};

// CREATE
export const postData = async (url, data, token) => {
    try {
        const response = await axiosInstance.post(url, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        console.log("reponse POST DATA: ", response.data);
        return response.data;
    } catch (error) {
        throw error;
}
}

// EDIT
export const editData = async (url, data, token) => {
    try {
        const response = await axiosInstance.put(url, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }

        });
        console.log("response PUT DATA: ", response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// DELETE
export const deleteData = async (url, token) => {
    try {
        const response = await axiosInstance.delete(url, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        console.log("response DELETE DATA: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Error during DELETE request: ", error);
        throw error;
    }
}

// PATIENTS
export const getPatients = async () => {
    try {
        const response = await getData("/patients/patients/");
        console.log("PATIENTS: ", response);
        return response;
    } catch (error) {
        console.error("Error fetching patients: ", error);
        throw error;
    }
}

// PATIENT
export const getPatient = async (id) => {
    try {
        const response = await getData(`/patients/patients/${id}/`);
        console.log("PATIENT: ", response);
        return response;
    } catch (error) {
        console.error(`Error fetching patient with id ${id}: `, error);
        throw error;
    }
}

// CLINICS
export const getClinics = async () => {
    try {
        const response = await getData(`/accounts/organizations/`);
        console.log("CLINICS: ", response);
        return response;
    } catch (error) {
        console.error(`Error fetching clinics: `, error);
        throw error;
    }
        
}

// ACCOUNTS
export const getAccounts = async () => {
    try {
        const response = await getData(`/accounts/profiles/`);
        console.log("ACCOUNTS: ", response);

        return response;
    } catch (error) {
        console.error("Error fetching accounts: ", error);
        throw error;
    }
}
