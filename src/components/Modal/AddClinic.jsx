"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { addClinic } from "@/reduxSlices/clinics/clinicSlice";
import { useDispatch } from "react-redux";
import { Input } from "../Inputs/Input";

const AddClinic = ({ showToast }) => {
    const dispatch = useDispatch();
    const methods = useForm();
    const [isLoading, setIsLoading] = useState(false);
    // const [errorMessage, setErrorMessage] = useState(null);

    const { handleSubmit } = methods;

    const onSubmit = async (data) => {
        console.log("DATOS A ENVIAR: ", data);
        setIsLoading(true);

        try {
            const response = await dispatch(addClinic(data)).unwrap();

            showToast("success", "Clinic added successfully");
            console.log("Clinic added successfully: ", response);
        } catch (error) {
            showToast("error", "Clinic removal failed");
            console.error("Clinic removal failed: ", error);
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <>
        <div className="modal fade" id="addClinic" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered py-5">
                <div className="modal-content">
                <div className="d-flex justify-content-end p-2"> 
                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-header border-0 justify-content-center">
                        <h2>New Clinics</h2>
                    </div>
                <div className="modal-body pb-0">
                    <FormProvider {...methods}>
                        { console.log("METHODS: ", methods.getValues()) }
                        <form onSubmit={ handleSubmit(onSubmit) } className="px-3 px-md-5">
                        
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label mb-1">Name<span className="text-danger">*</span></label>
                            <Input 
                                label="Name"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="example"
                                rules= {{ required: "This field is required" }}
                                rounded="2rem"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="city" className="form-label mb-1">City<span className="text-danger">*</span></label>
                                <Input 
                                label="City"
                                id="city"
                                name="city"
                                type="text"
                                placeholder="example"
                                rules= {{ required: "This field is required" }}
                                rounded="2rem"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="country" className="form-label mb-1">Country<span className="text-danger">*</span></label>
                                <Input 
                                label="Country"
                                id="country"
                                name="country"
                                type="text"
                                placeholder="example"
                                rules={{ required: "This field is required" }}
                                rounded="2rem"
                            />
                        </div>


                        <div className="modal-footer border-0 d-flex justify-content-center">
                            <button
                                type="submit"
                                className="btn py-2 px-4 border-0 fw-bold"
                                style={{ backgroundColor: "#3DC2DD", color: "#fefefe", textTransform: "uppercase", borderRadius: "3rem", width: "220px", height: "50px"}}
                                disabled={ isLoading } data-bs-dismiss="modal"
                            >
                                {isLoading ? (<div className="d-flex justify-content-center align-items-center"><span className="me-1">Saving</span> <span className="loader"></span></div>) : "Save"}
                            </button>
                        </div>
                        </form>
                    </FormProvider>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AddClinic;