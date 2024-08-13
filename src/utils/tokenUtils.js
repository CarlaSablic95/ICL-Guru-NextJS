import { jwtDecode } from "jwt-decode";

// Función para decodificar el token
export const decodeToken = (token) => {
    if(!token || typeof token !== "string") {
        console.error("Invalid token: must be a non-empty string");
        return null;
    }
    // console.log("TOKEN: ", token);
    return jwtDecode(token);  
};

// Función para verificar si el token está a punto de expirar
export const isTokenExpiring = (token, threshold = 300000) => {
    if(!token) return true;

    const decodedToken = decodeToken(token);
    console.log("TOKEN DECODIFICADO: ", decodedToken)
    if(!decodedToken) return true;

    const expirationTime = decodedToken.exp * 1000;
    // console.log("TIEMPO DE EXPIRACIÓN: ", expirationTime)
    const currentTime = Date.now();
    // console.log("TIEMPO ACTUAL: ", currentTime)
    return (expirationTime - currentTime) < threshold;
}