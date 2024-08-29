"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { addPatient } from "@/reduxSlices/patients/patientSlice";
import Button from "../Button/Button2";
import {Input, InputRadio} from "@/components/Inputs/Input";

const AddPatient = () => {
    const dispatch = useDispatch();
    const methods = useForm();
    const [isLoading, setIsLoading] = useState(false);
    // const [errorMessage, setErrorMessage] = useState("");
    // const modalRef = useRef(null);

    const { handleSubmit } = methods;
    
    const onSubmit = async (data) => { //async 
        console.log("DATOS A ENVIAR: ", data);
        setIsLoading(true);
        // setErrorMessage("");
        try {
            const response = await dispatch(addPatient(data)).unwrap();
            console.log("Paciente añadido con éxito: ", response);
            // AGREGAR UN MENSAJE CON TOASTIFY
            // CERRAR EL MODAL
           
            setIsLoading(true);

            
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
            // setErrorMessage("")
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="modal fade" id="addPatient" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered py-5">
                <div className="modal-content">
                <div className="d-flex justify-content-end p-2"> 
                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body pb-0">
                    <FormProvider {...methods}>
                        { console.log("METHODS: ", methods.getValues()) }
                        <form onSubmit={ handleSubmit(onSubmit) } className="px-3 px-md-5">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label mb-1">Name<span className="text-danger">*</span>:</label>
                                <Input 
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="example"
                                    rules= {{required: "This field is required"}}
                                    rounded="2rem"
                                />
                            </div>

                            <div className="mb-3">
                            <label htmlFor="surname" className="form-label mb-1">Surname<span className="text-danger">*</span>:</label>
                            <Input 
                            id="surname"
                            name="surname"
                            type="text"
                            placeholder="example"
                            rules= {{required: "This field is required"}}
                            rounded="2rem"
                        />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="dob" className="form-label mb-1">Date of birth<span className="text-danger">*</span>:</label>
                            <Input 
                                label="Date of birth"
                                name="dob"
                                type="date"
                                rules={{required: "This field is required"}}
                                rounded="2rem"
                            />
                        </div>

                    <div>
                        <span>Sex<small className="text-danger">*</small>:</span>
                    <div className="d-flex justify-content-evenly">
                        <InputRadio 
                            id="sexFemale"
                            name="sex"
                            label="Female"
                            value="F"
                        />

                        <InputRadio 
                            id="sexMale"
                            name="sex"
                            label="Male"
                            value="M"
                        />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="medical_record" className="form-label mb-1">Medical records number (MRN)<span className="text-danger">*</span>:</label>
                            <Input 
                                id="medical_record"
                                name="medical_record"
                                type="text"
                                placeholder="00000"
                                rules= {{required: "This field is required"}}
                                rounded="2rem"
                            />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="organization" className="form-label mb-1">Organization<span className="text-danger">*</span>:</label>
                        <Input 
                            id="organization"
                            name="organization"
                            label="Organization"
                            type="number"
                            placeholder="example"
                            rules= {{required: "This field is required"}}
                            rounded="2rem"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="identification" className="form-label mb-1">Patients ID<span className="text-danger">*</span>:</label>
                        <Input 
                            id="identification"
                            name="identification"
                            label="Patients ID"
                            type="text"
                            placeholder="00000"
                            rules= {{required: "This field is required"}}
                            rounded="2rem"
                        />
                    </div>
                        <div className="modal-footer border-0 d-flex justify-content-center">
                            <Button type="submit" title="Submit" bgColor="#3DC2DD" disabled={isLoading} />
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