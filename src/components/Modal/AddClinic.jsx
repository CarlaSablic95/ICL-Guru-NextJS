import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "../Inputs/Input";
import Button2 from "../Button/Button2";

const AddClinic = () => {
    const methods = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const { handleSubmit } = methods;

    const onSubmit = (data) => {
        console.log("DATOS A ENVIAR: ", data);
       
    }

    return(
        <>
        <div className="modal fade" id="addClinic" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered py-5">
                <div className="modal-content">
                <div className="d-flex justify-content-end p-2"> 
                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body pb-0">
                <h1 className="text-center">New Clinics</h1>
                    <FormProvider {...methods}>
                        { console.log("METHODS: ", methods.getValues()) }
                        <form onSubmit={ handleSubmit(onSubmit) } className="px-3 px-md-5">
                        <Input 
                            label="Name"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="example"
                            rules= {{ required: "This field is required" }}
                        />

                            <Input 
                            label="City"
                            id="city"
                            name="city"
                            type="text"
                            placeholder="example"
                            rules= {{ required: "This field is required" }}
                        />

                            <Input 
                            label="Country"
                            id="country"
                            name="country"
                            type="text"
                            placeholder="example"
                            rules={{ required: "This field is required" }}
                        />

                        <div className="modal-footer border-0 d-flex justify-content-center">
                            <Button2 type="submit" title={ isLoading ? "Saving...": "Save"} bgColor="#3DC2DD" textColor="#ffffff" disabled={isLoading} />
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

export default AddClinic