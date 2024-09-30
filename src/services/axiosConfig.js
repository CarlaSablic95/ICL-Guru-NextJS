import axios from 'axios';
import { store } from '@/app/store';
import { logout } from '@/reduxSlices/auth/authSlice';

// Usando Interceptores de Axios para solicitudes HTTP:
const axiosInstance = axios.create({
    baseURL: "https://test.iclguru.com",
});

// Interceptor de solicitud
axiosInstance.interceptors.request.use(
    (config) => {
        const state = store.getState();
        const token = state.auth.access;
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Interceptor de respuesta, trabajo con la respuesta en caso de error
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Si el error es 401 y no hemos intentado actualizar el token antes
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const newAccessToken = await refreshAccessToken();
                if (newAccessToken) {
                    originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                    return axiosInstance(originalRequest);
                }
            } catch (refreshError) {
                store.dispatch(logout());
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

const refreshAccessToken = async () => {
    try {
        const refreshToken = document.cookie.split("; ")
            .find(row => row.startsWith("refreshToken"))
            ?.split("=")[1];

        const response = await axios.post(`${axiosInstance.defaults.baseURL}/accounts/token/refresh/`, {
            refresh: refreshToken
        }, {
            widthCredentials: true
        });

        const newAccessToken = response.data.access;
        store.dispatch(updateToken({ access: newAccessToken }));
        console.log("New access token: ", newAccessToken);
        return newAccessToken;
    } catch (error) {
        console.error("Error refreshing token: ", error);
        store.dispatch(logout());
        return null;

    }
}


export default axiosInstance;