"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addAccount } from "@/reduxSlices/accounts/accountSlice";
import Button from "../Button/Button2";
import { Input } from "../Inputs/Input";


const AddAccount = () => {
    const dispatch = useDispatch();
    // const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const methods = useForm();
    // const methods = useForm({
    //     defaultValues: {
    //         password: "",
    //         confirm_password: ""
    //     },
    //     resolver: async (values) => {
    //         const errors = {};
    //         if(values.password !== values.confirm_password) {
    //             errors.confirm_password = {
    //                 type: "manual",
    //                 message: "Passwords do not match"
    //             };
    //         }
    //         return { values, errors };
    //     }
    // });

    const { handleSubmit } = methods;

    const onSubmit = async (data) => {
        console.log("DATOS A ENVIAR: ", data);

        try {
            const response = await dispatch(addAccount(data)).unwrap();
            console.log("Response: ", response);
            // setSuccess(true);
            // setError(null);
            // reset();
        } catch (error) {
            if(error.response) {
                console.error("Data Error: ", error.response.data);
                console.error("Status Error: ", error.response.status);
                console.error("Headers Error: ", error.response.headers);
                setError(`Error: ${error.response.data.message || 'Unknown error ocurred'}`);
            } else if(error.request) {
                console.error("Error creating a patient: ", error);
            } else {
                console.error("Error: ", error.message);
            }
        }
    }

    return (
            <div className="modal fade" id="modalForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered py-5">
                    <div className="modal-content">
                    <div className="d-flex justify-content-end p-2"> 
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-header border-0 justify-content-center">
                        <h2>New Account</h2>
                    </div>
                    <div className="modal-body pb-0">
                        { error && <div className="alert alert-danger">{error}</div> }
                        <FormProvider {...methods}>
                            { console.log("METHODS: ", methods.getValues()) }
                            <form onSubmit={ handleSubmit(onSubmit) } className="px-3 px-md-2">
                                <div className="d-flex justify-content-evenly">
                                <div className="col-6">
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label mb-1">Username<span className="text-danger">*</span>:</label>
                                    <Input 
                                        id="username"
                                        name="username"
                                        type="text"
                                        placeholder="username"
                                        rules= {{required: "This field is required"}}
                                        rounded="2rem"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label mb-1">Name<span className="text-danger">*</span>:</label>
                                    <Input 
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Name"
                                        rules= {{required: "This field is required"}}
                                        rounded="2rem"
                                    />
                                </div>
    
                                <div className="mb-3">
                                <label htmlFor="lastname" className="form-label mb-1">Last Name<span className="text-danger">*</span>:</label>
                                <Input 
                                id="lastname"
                                name="lastname"
                                type="text"
                                placeholder="Last Name"
                                rules= {{required: "This field is required"}}
                                rounded="2rem"
                            />
                            </div>
                        
    
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label mb-1">Email<span className="text-danger">*</span>:</label>
                                <Input 
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="email@email.com"
                                    rules= {{required: "This field is required"}}
                                    rounded="2rem"
                                />
                        </div>
                                </div>
                        
                        {/* CAMPOS AGREGADOS, SIN ESTOS NO SE PUEDE CREAR UNA CUENTA */}
                        <div className="col-6">
                            {/* <div className="mb-3">
                                <label htmlFor="roles" className="form-label mb-1">Rol<span className="text-danger">*</span>:</label>
                                    <Input 
                                        id="roles"
                                        name="roles"
                                        type="text"
                                        placeholder="1"
                                        rules= {{required: "This field is required"}}
                                        rounded="2rem"
                                    />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="active_organizations" className="form-label mb-1">Organizacion<span className="text-danger">*</span>:</label>
                                    <Input 
                                        id="active_organizations"
                                        name="active_organizations"
                                        type="text"
                                        placeholder="organizacion"
                                        rules= {{required: "This field is required"}}
                                        rounded="2rem"
                                    />
                            </div> */}


                        <div className="mb-3">
                            <label htmlFor="password" className="form-label mb-1">Password<span className="text-danger">*</span>:</label>
                            <Input 
                                id="password"
                                name="password"
                                type="password"
                                placeholder="*********"
                                rules= {{required: "This field is required"}}
                                rounded="2rem"
                            />
                        </div>
    
                        <div className="mb-3">
                            <label htmlFor="confirm_password" className="form-label mb-1">Confirm Password<span className="text-danger">*</span>:</label>
                            <Input 
                                id="confirm_password"
                                name="confirm_password"
                                type="password"
                                placeholder="*********"
                                rules= {{required: "This field is required"}}
                                rounded="2rem"
                            />
                        </div>
                        </div>
                                </div>
                            <div className="modal-footer border-0 d-flex justify-content-center">
                                {/* <Button type="submit" title="Submit" bgColor="#3DC2DD" disabled={isLoading} /> */}

                                <Button type="submit" title="Submit" bgColor="#3DC2DD"  />
                            </div>
                            </form>
                        </FormProvider>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default AddAccount;