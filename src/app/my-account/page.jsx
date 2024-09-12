"use client";

import { useDispatch, useSelector } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import NewPassword from "@/components/ChangePassword/NewPassword";
import { Input } from "@/components/Inputs/Input";
import Button from "@/components/Button/Button2";
import { useEffect } from "react";
import { editAccount } from "@/reduxSlices/accounts/accountSlice";


const MyAccount = () => {
    const dispatch = useDispatch();
    const methods = useForm();
    const { reset, watch } = methods;

    const currentAcount = useSelector()
    // state.accounts.accounts.find((account) => account.id ===

    useEffect(() => {
        if(currentAcount) {
            reset(currentAcount);
            console.log("CURRENT ACCOUNT: ", reset(currentAcount));
            
        }
    }, [currentAcount, reset])


    // const onSubmit = async (data) => {
    //     try {
    //         await dispatch(editAccount())
    //         console.log("Submitted data: ", data);
    //     } catch (error) {
    //         console.error("Error updating data: ", error);
    //     }
    // }

   
    return (
        <section className="col-12 col-md-11 py-4 px-3 px-md-5 mx-auto">
            <h1 className="text-center text-uppercase fw-bold">My account</h1>
                <div className="container">
                <div className="row justify-content-evenly pt-4">
                    <div className="col-10 col-md-5 mb-5 mb-md-3">
                        <h2 className="fw-bold mb-4">Personal Data</h2>
                            <FormProvider {...methods}>
                                { console.log("METHODS: ", methods.getValues()) }
                                
                                <form onSubmit={handleSubmit(onSubmit)} className="px-3 px-md-5 edited-form">
                                <div className="mb-3">
                                    <label className="mb-2" htmlFor="name">Name<span className="text-danger">*</span>:
                                    </label>
                                    <Input 
                                        label="Name:"
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="First name"
                                        rules={{ required: "This field is required" }}
                                    />
                                </div>

                                <div className="mb-3">
                                <label className="mb-2" htmlFor="name">Last name<span className="text-danger">*</span>:
                                    </label>
                                    <Input 
                                    label="Last name:"
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    placeholder="Last name"
                                    rules={{ required: "This field is required" }}
                                    
                                />

                                </div>

                                <div className="mb-3">
                                <label className="mb-2" htmlFor="name">Email<span className="text-danger">*</span>:
                                </label>
                                <Input 
                                    label="Email:"
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="email@email.com"
                                    rules={{ required: "This field is required" }}
                                    
                                    />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button type="submit" title="CHANGE DATA" bgColor="#3DC2DD" textColor="#ffffff" fontWeight="400" rounded="10px"
                                    rules={{ required: "This field is required" }} />
                                </div>
                                </form>
                            </FormProvider>
                    </div>
                    
                    <NewPassword />
                </div>
            </div>
        </section>
    )
}

export default MyAccount;