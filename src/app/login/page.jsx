"use client";

import { useState } from "react";
import { useDispatch} from "react-redux";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { authenticate } from "@/services/ApiService";
import { login } from "@/reduxSlices/auth/authSlice";
import { Input } from "@/components/Inputs/Input";
import Image from "next/image";
import EyeOff from "/public/icons/eye-off.svg";
import EyeOn from "/public/icons/eye.svg";
import styles from "./Login.module.css";

const Login = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState("");

    const methods = useForm();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (data) => {
        console.log("DATOS ENVIADOS: ", data);
      setIsLoading(true);
      
// PROCESO DE AUTENTICACIÓN
      try {
        const response = await authenticate(data);
        dispatch(login(response));
        console.log("TOKENS RECIBIDOS: ", response);
        router.push("/patients");
        
      } catch (error) {
        if(error.response) { // El servidor respondió con un estado diferente a 2xx
            console.error("Data Error: ", error.response.data);
            console.error("Status Error: ", error.response.status);
            console.error("Headers Error: ", error.response.headers);
        } else if( error.request) { // La solicitud fue hecha pero no se recibió respuesta
            console.error("Error Request: ", error.request);
            
        } else { // Ocurrió un error al configurar la solicitud
            console.error("Error: ", error.message);
            
        }
        console.error("Error: ", error);
        setLoginError("Wrong user or password");

        // Oculto mensaje de error despues de 3 segundos
        setTimeout(() => {
            setLoginError("");
        }, 3000);
      } finally {
        setIsLoading(false);
      }
};

return (
    <section className={`${styles.background} d-flex align-items-center col-12 mx-auto`}>
        <div className="container">
            <div className="row justify-content-center form-login">
            <div className={`col-10 col-lg-5 ${styles.backgroundContainer} d-none d-lg-block`}></div>
            <div className={`col-10 col-lg-5 px-5 px-md-4 ${styles.backgroundForm} d-flex flex-column justify-content-center`}>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className="px-3 px-md-5">
                        <h1 className="text-uppercase text-center py-4 text-white">Icl Guru</h1>
                        <div className="form-floating mb-4 text-center">
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Username"
                                rules= {{ required: "This field is required"}}
                                rounded="2rem"
                                label="Username"
                            />
                            <label htmlFor="username">Username</label>
                        </div>

                        <div className="form-floating mb-3 text-center">
                            <span
                                className="position-absolute eye-icon"
                                onClick={handleShowPassword}
                            >
                               <Image src={showPassword ? EyeOn : EyeOff} alt="ícono de ojo" />
                            </span>
                            <Input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                label="Password"
                                rules= {{ required: "This field is required"}}
                                rounded="2rem"        
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                                { loginError && <div className="text-center mb-3"><small className="text-danger fw-bold">{ loginError }</small></div> }
                        <div className="d-flex justify-content-center">
                            <button
                                type="submit"
                                className="btn py-2 px-4 border-0 fw-bold"
                                style={{ backgroundColor: "#00507C", color: "#fefefe", textTransform: "uppercase", borderRadius: "3rem", width: "220px", height: "50px"}}
                                disabled={ isLoading }
                            >
                                {isLoading ? (<div className="d-flex justify-content-center align-items-center"><span className="me-1">Loading</span> <span className="loader"></span></div>) : "Login"}
                            </button>
                        </div>
                           
                        <p className="text-center py-3"><a href="#" className="text-white text-decoration-none">I forgot my password</a></p>
                    </form>
                </FormProvider>
                </div>
            </div>
        </div>
    </section>
);
};

export default Login;
