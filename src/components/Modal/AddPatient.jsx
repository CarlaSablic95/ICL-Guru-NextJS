"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { addPatient } from "@/features/patients/patientSlice";
import Button2 from "../Button/Button2";
import {FormInput, InputRadio} from "@/components/Inputs/FormInput";

const AddPatient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const methods = useForm();
    const { handleSubmit } = methods;

    const onSubmit = async (data) => { //async 
        console.log("DATOS A ENVIAR: ", data);
        setIsLoading(true);

        try {
            const result = await dispatch(addPatient(data)).unwrap();
            console.log("Paciente añadido con éxito: ", result);
            setIsLoading(false);
            // CERRAR EL MODAL
            document.getElementById("addPatient").classList.remove("show");
            document.body.classList.remove("modal-open");
            document.getElementsByClassName("modal-backdrop")[0]?.remove();
        } catch (error) {
            console.error("Error creating a patient: ", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="modal fade" id="addPatient" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered py-5">
                <div className="modal-content">
                <div className="d-flex justify-content-end p-2"> 
                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body pb-0">
                    <FormProvider {...methods}>
                        { console.log("METHODS: ", methods.getValues()) }
                        <form onSubmit={ handleSubmit(onSubmit) } className="px-3 px-md-5">
                        <FormInput 
                            label="Name"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="example"
                            {...methods.register("name")}
                        />

                            <FormInput 
                            label="Surname"
                            id="surname"
                            name="surname"
                            type="text"
                            placeholder="example"
                            {...methods.register("surname")}
                        />

                        <FormInput 
                            label="Date of birth"
                            name="dob"
                            type="date"
                            {...methods.register("dob")}
                        />
                    <div>
                        <span>Sex <small className="text-danger">*</small></span>
                    <div className="d-flex justify-content-evenly">
                        <InputRadio 
                            label="Female"
                            name="sex"
                            id="sexFemale"
                            value="F"
                            {...methods.register("sex", { required: "Required" })}
                        />

                        <InputRadio 
                            label="Male"
                            name="sex"
                            id="sexMale"
                            value="M"
                            {...methods.register("sex", { required: "Required" })}
                        />
                        </div>
                        {/* { errors.sex && <small className="text-danger">{errors.sex.message}</small> } */}
                    </div>

                        <FormInput 
                            label="Medical records number (MRN)"
                            id="medical_record"
                            name="medical_record"
                            type="text"
                            placeholder="00000"
                            {...methods.register("medical_record")}
                        />

                        <FormInput 
                            label="Organization"
                            id="organization"
                            name="organization"
                            type="number"
                            placeholder="example"
                            {...methods.register("organization")}
                        />

                        <FormInput 
                            label="Patients ID"
                            id="identification"
                            name="identification"
                            type="text"
                            placeholder="00000"
                            {...methods.register("identification")}
                        />

                        <div className="modal-footer border-0 d-flex justify-content-center">
                            <Button2 type="submit" title="Submit" bgColor="#3DC2DD" textColor="#ffffff" disabled={isLoading} />
                        </div>
                        </form>
                    </FormProvider>
                </div>
                </div>
            </div>
        </div>
        
    )
}

export default AddPatient;