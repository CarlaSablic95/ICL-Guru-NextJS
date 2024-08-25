"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { addPatient } from "@/reduxSlices/patients/patientSlice";
import Button2 from "../Button/Button2";
import {Input, InputRadio} from "@/components/Inputs/Input";

const AddPatient = () => {
    const dispatch = useDispatch();
    const methods = useForm();
    const [isLoading, setIsLoading] = useState(false);
    // const [errorMessage, setErrorMessage] = useState("");

    const { handleSubmit } = methods;
    
    const onSubmit = async (data) => { //async 
        console.log("DATOS A ENVIAR: ", data);
        setIsLoading(true);
        // setErrorMessage("");
        try {
            const response = await dispatch(addPatient(data)).unwrap();
            console.log("Paciente añadido con éxito: ", response);
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
                        <Input 
                            label="Name"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="example"
                            rules= {{required: "This field is required"}}
                        />

                            <Input 
                            label="Surname"
                            id="surname"
                            name="surname"
                            type="text"
                            placeholder="example"
                            rules= {{required: "This field is required"}}
                        />

                        <Input 
                            label="Date of birth"
                            name="dob"
                            type="date"
                        />
                    <div>
                        <span>Sex <small className="text-danger">*</small></span>
                    <div className="d-flex justify-content-evenly">
                        <InputRadio 
                            id="sexFemale"
                            name="sex"
                            label="Female"
                            value="F"
                            rules= {{required: "This field is required"}}
                        />

                        <InputRadio 
                            id="sexMale"
                            name="sex"
                            label="Male"
                            value="M"
                        />
                        </div>
                        {/* { errors.sex && <small className="text-danger">{errors.sex.message}</small> } */}
                    </div>

                        <Input 
                            id="medical_record"
                            name="medical_record"
                            type="text"
                            placeholder="00000"
                            rules= {{required: "This field is required"}}
                        />

                        <Input 
                            label="Organization"
                            id="organization"
                            name="organization"
                            type="number"
                            placeholder="example"
                            rules= {{required: "This field is required"}}
                        />

                        <Input 
                            label="Patients ID"
                            id="identification"
                            name="identification"
                            type="text"
                            placeholder="00000"
                            rules= {{required: "This field is required"}}
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