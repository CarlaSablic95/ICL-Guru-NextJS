import { jwtDecode } from "jwt-decode";

// Función para decodificar el token
export const decodeToken = (token) => {
    if(!token || typeof token !== "string") {
        console.error("Invalid token: must be a non-empty string");
        return null;
    }
    console.log("TOKEN: ", token);
    return jwtDecode(token);  
};

// Función para verificar si el token está a punto de expirar
export const isTokenExpiring = (token, threshold = 300000) => { // 5 mins.
    if(!token) return true;

    const decodedToken = decodeToken(token);
    console.log("TOKEN DECODIFICADO: ", decodedToken)
    if(!decodedToken) return true;

    const expirationTime = decodedToken.exp * 1000;
    const currentTime = Date.now();
    console.log("Token Expiration Time: ", expirationTime);
    console.log("Current Time: ", currentTime);
    console.log("Time until expiration: ", expirationTime - currentTime);
    return (expirationTime - currentTime) < threshold;
}