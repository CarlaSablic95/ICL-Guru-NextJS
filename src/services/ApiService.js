export const BASE_URL = "https://test.iclguru.com";
console.log("URL BASE: " + BASE_URL);

export const authenticate = async (credentials) => {
    try {
        const response = await fetch(`${BASE_URL}/accounts/token/`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials) // username y password
        });

        console.log("RESPONSE STATUS: ", response.status);
        console.log("RESPONSE HEADERS: ", response.headers);
        
        const data = await response.json();
        console.log("AUTHENTICATE - DATA ACCESS: ", data.access);
        console.log("AUTHENTICATE - CREDENTIALS: ", credentials);
        
        
        console.log("RESPONSE DATA: ", data);
        console.log("AUTHENTICATE - DATA REFRESH: ", data.refresh);
        if(!response.ok) {
            console.log("Error data: ", data);
            throw new Error(data.detail || "Incorrect username or password.");
        }
        return data;
    } catch (error) {
        console.error("Error during authentication: ", error);
        throw error;
    }

};

// export const refreshAcccessToken = async () => {
//     const refreshToken = localStorage.getItem("refreshToken");

//     if(!refreshToken) {
//         throw new Error("No refresh token found");
//     }

//     try {
//         const response = await fetch(`${BASE_URL}/accounts/refresh-token`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ refreshToken })
//         });

//         if(!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`)
//         }

//         const data = await response.json();
//         console.log("accessToken", data.access);
//         return data.access;
//     } catch(error) {
//         console.error("Error during token refresh: ", error);
//         throw error;
//     }
// }

// PATIENTS
// export const getPatients = async (accessToken) => {
//     try {
//         const response = await fetch(`${BASE_URL}/patients/patients/`, {
//             method:"GET",
//             headers: {
//                 "Authorization": `Bearer ${accessToken}`,
//                 "Content-Type": "application/json"
//             }
//         });
//         const data = await response.json();
//         console.log("DATA: ", data);

//         if(!response.ok) {
//             throw new Error("Error al obtener pacientes");
//         }
//         return data;
//     } catch (error) {
//         console.error("Error: ", error);
//         throw error;
//     }
// }

// // PATIENT
// export const getPatient = async (id, accessToken) => {
//     try {
//         const response = await fetch(`${BASE_URL}/patients/patients/id/`, {
//             method: "GET",
//             headers: {
//                 "Authorization": `Bearer ${accessToken}`,
//                 "Content-Type": "application/json"
//             }
//         });

//         const data = await response.json();
//         console.log("PATIENT: ", data);

//         if(!response.ok) {
//             if(!response.status === 401) {
//                 const newAccessToken = await refreshAcccessToken();
//                 return getPatient(id, newAccessToken);
//             } else {
//                 throw new Error(data.detail || "Error al obtener paciente");
//             }
//         }

//         return data;
//     } catch (error) {
//         console.error("Error: ", error);
//         throw error;
//     }
// }

// // CLINICS
// export const getClinics = async (accessToken) => {
    
//         const response = await fetch(`${BASE_URL}/accounts/organizations/`, {
//             method:"GET",
//             headers: {
//                 "Authorization": `Bearer ${accessToken}`,
//                 "Content-Type": "application/json"
//             }
//         });

//         const data = await response.json();
//         console.log("DATA: ", data);

//         if(!response.ok) {  
//             throw new Error("Error al obtener clínicas");
//         }
//         return data;
    
// }

// // ACCOUNTS
// export const getAccounts = async (accessToken) => {
//     try {
//         const response = await fetch(`${BASE_URL}/accounts/profiles`, {
//             method:"GET",
//             headers: {
//                 "Authorization": `Bearer ${accessToken}`,
//                 "Content-Type": "application/json"
//             }
//         });

//         const data = await response.json();
//         console.log("DATA: ", data);

//         if(!response.ok) {
//             throw new Error("Error al obtener cuentas");
//         }
//         return data;
//     } catch (error) {
//         console.error("Error: ", error);
//         throw error;
//     }
// }