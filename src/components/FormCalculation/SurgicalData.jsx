"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { addCalculation } from "@/reduxSlices/calculations/calculationSlice";
import Button from "../Button/Button2";


const SurgicalData = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [isEnabled, setIsEnabled] = useState(true);
    


    const handleDisabledInput = () => {
        setIsEnabled((prevState) => !prevState);
    }


    const onSubmit = async (data) => {
        console.log("DATOS A ENVIAR: ", data);
        setIsLoading(true);
        try {
            const response = await dispatch(addCalculation(data)).unwrap();
            console.log("Cálculo añadido con éxito: ", response);
        } catch (error) {
            if(error.response) {
                console.error("Data Error: ", error.response.data);
                console.error("Status Error: ", error.response.status);
                console.error("Headers Error: ", error.response.headers);
            } else if(error.request) {
                console.error("Error creating a patient: ", error);
            } else {
                console.error("Error: ", error.message);
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className="w-100">
            <div className="card rounded-5" style={{ width: "100%" }}>
            <div className="card-body">
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={ () => handleDisabledInput() } style={{ cursor:"pointer" }} />
                <label className="form-check-label fw-bold fs-5" for="flexSwitchCheckChecked">Edit </label>
            </div>
                <h3 className="card-title text-center">Surgical Data</h3>
                
                <div className="container">
                    <div>
                            <form action="" onSubmit={handleSubmit(onSubmit)} className="row justify-content-evenly">
                            {/* OD FORM */}
                            <div className="col-12 col-md-5 rounded-5 p-3 mb-3" style={{ backgroundColor:"#AAC7E5" }}>
                                <div className="rounded-5 mx-auto p-2" style={{ backgroundColor:"#4888C8", width:"50px" }}>
                                    <h4 className="text-white fw-bold text-center">OD</h4>
                                </div>
                                <div>
                                    <label htmlFor="id_power_sph_od" className="fw-bold">IOL power:<span className="text-danger">*</span></label>
                                    <div className={`${errors.power_sph_od ? "mb-0" : "mb-3"}`}>
                                        <div className="input-group">
                                            <input type="number" step="0.5" min="-18" max="-0.5" className={`form-control ${errors.power_sph_od ? "border border-2 border-danger" : ""}`} placeholder="Sphere" aria-label="Sphere power" id="id_power_sph_od" name="power_sph_od"
                                            {...register("power_sph_od", { required: true })}
                                            disabled={isEnabled} />
                                            <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }}>Dp</span>
                                        </div>
                                    </div>
                                    { errors.power_sph_od && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }

                                    <div className={`${errors.power_cyl_od ? "mb-0" : "mb-3"}`}>
                                        <div className="input-group">
                                        <input type="number" step="0.5" min="-18" max="-0.5" className={`form-control ${errors.power_cyl_od ? "border border-2 border-danger" : ""}`} placeholder="Cylinder" aria-label="Cylinder power" id="id_power_cyl_od" name="power_cyl_od"
                                        {...register("power_cyl_od")} disabled={isEnabled} />
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }}>Dp</span>
                                    </div> 
                                    </div>
                                    { errors.power_cyl_od && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }

                                            <div className={`${errors.power_axis_od ? "mb-0" : "mb-3"}`}>
                                                <div className="input-group">
                                                <input type="number" step="0.1" className={`form-control ${errors.power_axis_od ? "border border-2 border-danger" : ""}`} placeholder="Axis" aria-label="Axis" id="id_power_axis_od" name="power_axis_od" 
                                                {...register("power_axis_od")}
                                                disabled={isEnabled} />
                                            <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }}>°</span>
                                            </div>
                                        </div>
                                        { errors.power_axis_od && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                                    </div>
                                    <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" name="viva_od" id="id_viva_od" {...register("viva_od")} disabled={isEnabled} />
                                <label className="form-check-label fw-bold" for="id_viva_od">VIVA*</label>
                            </div>
                            
                            <div>
                                    <label className="fw-bold">Data of surgery:<span className="text-danger">*</span></label>
                                    <div className="input-group">
                                        <input type="date" className={`form-control ${errors.dqx_od ? "border border-2 border-danger" : ""}`} id="id_dqx_od" name="dqx_od" 
                                        {...register("dqx_od", {required: true})}
                                        disabled={isEnabled} />
                                    </div>
                                </div>
                                { errors.dqx_od && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                            </div>

                            {/* OS FORM */}

                            <div className="col-12 col-md-5 rounded-5 p-3 mb-3" style={{ backgroundColor:"#98D3C7" }}>
                            <div className="rounded-5 mx-auto p-2" style={{ backgroundColor:"#2FB297", width:"50px" }}>
                                    <h4 className="text-white fw-bold text-center">OS</h4>
                                </div>
                                <label htmlFor="id_power_sph_os" className="fw-bold">IOL power:<span className="text-danger">*</span></label>
                                <div className={`${errors.power_sph_os ? "mb-0" : "mb-3"}`}>
                                        <div className="input-group">
                                        <input type="number" step="0.5" min="-18" max="-0.5" className={`form-control ${errors.power_sph_os ? "border border-2 border-danger" : ""}`} placeholder="Sphere" aria-label="Sphere power" id="id_power_sph_os" name="power_sph_os" 
                                        {...register("power_sph_os", {required: true})}
                                        disabled={isEnabled} />
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }}>Dp</span>
                                    </div>
                                    { errors.power_sph_os && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                                    </div>

                                    <div className={`${errors.power_cyl_os ? "mb-0" : "mb-3"}`}>
                                    <div className="input-group">
                                        <input type="number" step="0.5" className={`form-control ${errors.power_cyl_os ? "border border-2 border-danger" : ""}`} placeholder="Cylinder" aria-label="Cylinder power" id="id_power_cyl_os" name="power_cyl_os" 
                                        {...register("power_cyl_os")}
                                        disabled={isEnabled} />
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }}>Dp</span>
                                    </div>
                                    { errors.power_cyl_os && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                                    </div>

                                    <div className={`${errors.power_axis_os ? "mb-0" : "mb-3"}`}>
                                                <div className="input-group">
                                        <input type="number" step="0.1" className={`form-control ${errors.power_axis_os ? "border border-2 border-danger" : ""}`} placeholder="Axis" aria-label="Axis" id="id_power_axis_os" name="power_axis_os" 
                                        {...register("power_axis_os")}
                                        disabled={isEnabled} />
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }}>°</span>
                                    </div>
                                    { errors.power_axis_os && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                                    </div>

                                    <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" name="viva_os" id="id_viva_os" {...register("viva_os")} disabled={isEnabled} />
                                <label className="form-check-label fw-bold" for="id_viva_os">VIVA* </label>
                            </div>

                                <div>
                                    <label className="fw-bold">Data of surgery:<span className="text-danger">*</span> </label>
                                    <div className="input-group">
                                    <input type="date" className={`form-control ${errors.dqx_os ? "border border-2 border-danger" : ""}`} {...register("dqx_os", {required: true})} id="id_dqx_os" name="dqx_os" disabled={isEnabled} />
                                    </div>
                                    { errors.dqx_os && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                                </div>

                            </div>
                            <div className="d-flex justify-content-center">
                            <button
                                type="submit"
                                className="btn py-2 px-4 border-0 fw-bold"
                                style={{ backgroundColor: "#3DC2DD", color: "#fefefe", textTransform: "uppercase", borderRadius: "2rem", width: "220px", height: "50px", fontWeight:"bold"}}
                                disabled={ isEnabled || isLoading }
                            >
                                {isLoading ? (<div className="d-flex justify-content-center align-items-center"><span className="me-1">SAVING</span> <span className="loader"></span></div>) : "SAVE"}
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>

                                        

        </section>
    )
}

export default SurgicalData;