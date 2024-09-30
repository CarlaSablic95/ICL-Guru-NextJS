"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "../Inputs/Input";
import Button from "../Button/Button2";

const EnterPassword = () => {

    const methods = useForm();
    const { handleSubmit } = methods;
    const [error, setError] = useState(null);
    const onSubmit = (data) => {
        console.log("Contraseña ingresada: ", data);
    }
    return(
        <div className="modal fade" id="enterPassword" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content px-2 px-md-4">
                <div className="modal-header pb-2">
                    <h4>Please put your password</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                { error && <div className="alert alert-danger">{error}</div> }
                    <FormProvider {...methods}>
                    {console.log("METHODS: ", methods.getValues()) }
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <Input 
                                label="Password:"
                                id="password"
                                name="password"
                                type="password"
                                placeholder="********"
                                rules = {{ required: "This field is required" }}
                                rounded="2rem"
                                    />

                <div className="d-flex justify-content-evenly py-3">
                    <Button type="submit" title="Unlock" bgColor="#3DC2DD"  />
                </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    </div>
    )
}

export default EnterPassword;