"use client";

import { useState } from "react";
import { useDispatch} from "react-redux";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { authenticate } from "@/services/ApiService";
import { login } from "@/features/auth/authSlice";
import Image from "next/image";
import EyeOff from "/public/icons/eye-off.svg";
import EyeOn from "/public/icons/eye.svg";
import styles from "./Login.module.css";

const Login = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log("DATOS ENVIADOS: ", data) // DATA:  {username: 'user.demo', password: 'U4u4iclguru$'}
      setLoading(true);
      setErrorMessage("");
// PROCESO DE AUTENTICACIÓN
      try {
        const response = await authenticate(data);
        dispatch(login(response));
        console.log("TOKENS RECIBIDOS: ", response)
        router.push("/patients");
        
      } catch (error) {
        if(error.response) { // El servidor respondió con un estado diferente a 2xx
            console.error("Error Response: ", error.response.data);
            console.error("Error Status: ", error.response.status);
            console.error("Error Headers: ", error.response.headers);
        } else if( error.request) { // La solicitud fue hecha pero no se recibió respuesta
            console.error("Error Request: ", error.request);
            
        } else { // Ocurrió un error al configurar la solicitud
            console.error("Error: ", error.message);
            
        }
        setErrorMessage("Incorrect username or password");
        console.error("Error: ", error);
      } finally {
        setLoading(false);
      }
};

return (
    <section className={`${styles.background} d-flex align-items-center col-12 mx-auto`}>
        <div className="container">
            <div className="row justify-content-center form-login">
            <div className={`col-10 col-lg-5 ${styles.backgroundContainer} d-none d-lg-block`}></div>
            <div className={`col-10 col-lg-5 px-5 px-md-4 ${styles.backgroundForm} d-flex flex-column justify-content-center`}>
                    <form onSubmit={handleSubmit(onSubmit)} className="px-3 px-md-5">
                        <h1 className="text-uppercase text-center py-4 text-white">Icl Guru</h1>
                        <div className="form-floating mb-4 text-center">
                            <input
                                {...register("username", { required: true })}
                                placeholder="Username"
                                className={`form-control rounded-5 ${errors.username ? "border border-2 border-danger" : ""}`}
                                type="text"
                            />
                            {errors.username && (
                                <small className="text-danger fw-bold">This field is required</small>
                            )}
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="form-floating mb-3 text-center">
                            <span
                                className="position-absolute eye-icon"
                                onClick={handleShowPassword}
                            >
                               <Image src={showPassword ? EyeOn : EyeOff} alt="ícono de ojo" />
                            </span>
                            <input
                                {...register("password", { required: true })}
                                placeholder="Password"
                                className={`form-control rounded-5 ${errors.password ? "border border-2 border-danger" : ""}`}
                                type={showPassword ? "text" : "password"}
                            />
                            {errors.password && (
                                <small className="text-danger fw-bold">
                                    {errors.password.type === "required" && "This field is required"}
                                </small>
                            )}
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button
                                type="submit"
                                className="btn py-2 px-4 border-0 fw-bold"
                                style={{ backgroundColor: "#00507C", color: "#fefefe", textTransform: "uppercase", borderRadius: "3rem", width: "220px", height: "50px" }}
                                disabled={loading}
                            >
                                {loading ? (<div className="d-flex justify-content-center align-items-center"><span className="me-1">Loading</span> <span className="loader"></span></div>) : "Login"}
                            </button>
                        </div>
                        {errorMessage && (
                            <div className="text-center py-2">
                                <small className="text-danger fw-bold mt-3">
                                    {errorMessage}
                                </small>
                            </div>
                        )}
                        <p className="text-center py-3"><a href="#" className="text-white text-decoration-none">I forgot my password</a></p>
                    </form>
                </div>
            </div>
        </div>
    </section>
);
};

export default Login;
