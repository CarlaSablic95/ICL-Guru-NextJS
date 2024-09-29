import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { updatePass } from "@/reduxSlices/accounts/accountSlice";
import { useDispatch } from "react-redux";
import { Input } from "../Inputs/Input";
import Button from "../Button/Button2";

const NewPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const methods= useForm();

    const newPassword = methods.watch("new_password");

    const { handleSubmit } = methods;

    const onSubmit = async (data) => {
        const accountData = {
            current_password: data.current_password,
            new_password: data.new_password
        }
        
        console.log("ACTUALIZAR CONTRASEÑA: ", accountData);

        try {
            setIsLoading(true);
            const response = await dispatch(updatePass(accountData)).unwrap();
            console.log("CONTRASEÑA ACTUALIZADA CON ÉXITO: ", response);
            
        } catch (error) {
            if(error.response) {
                console.error("Data Error: ", error.response.data);
                console.error("Status Error: ", error.response.status);
                console.error("Headers Error: ", error.response.headers);
            } else if(error.request) {
                console.error("Error updating password: ", error);
            } else {
                console.error("Error: ", error.message);
            }
            setErrorMessage("An unexpected error occurred. Please try again.")
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <div className="col-10 col-md-5">
                        <h3 className="fw-bold mb-4">Change Password</h3>
                        <FormProvider {...methods}>
                           { console.log("METHODS: ", methods.getValues())}                            
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label className="mb-2" htmlFor="current_password">Current password:
                                        <span className="text-danger">*</span>
                                    </label>
                                <Input
                                    id="current_password"
                                    name="current_password"
                                    type="password"
                                    placeholder="********"
                                    rules={{ required: "This field is required" }}
                            />
                                    </div>

                            <div className="mb-3">
                                <label className="mb-2" htmlFor="new_password">New password<span className="text-danger">*</span>:
                                </label>
                                <Input 
                                id="new_password"
                                name="new_password"
                                type="password"
                                placeholder="********"
                                rules={{ required: "This field is required" }}
                                
                            />
                        </div>

                        <div className="mb-3">
                                <label className="mb-2" htmlFor="name">Confirm password<span className="text-danger">*</span>:
                                </label>
                            <Input
                                id="confirmPass"
                                name="confirmPass"
                                type="password"
                                placeholder="********"
                                rules={{ required: "This field is required",
                                    validate: value => value === newPassword || "Passwords do not match"
                                 }}
                                
                            />
                        </div>
                        { errorMessage && <p className="text-danger text-center mb-3">{ errorMessage }</p> }
                            <div className="d-flex justify-content-center">
                            <Button type="submit" title={ isLoading ? "CHANGING...": "CHANGE PASSWORD"} bgColor="#3DC2DD" textColor="#ffffff" disabled={isLoading} />
                            </div>
                            </form>
                        </FormProvider>
                    </div>
    )
}

export default NewPassword;