
"use client";

import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
import { Input } from "@/components/Inputs/Input";
import ChangePassword from "@/components/ChangePassword/ChangePassword"
import Button from "@/components/Button/Button2";
import Image from "next/image";
import ArrowBack from "/public/icons/arrow-back.png";
// import { fetchAccountsFailure } from "@/reduxSlices/accounts/accountSlice";
import FormAttachedClinics from "@/components/FormAttachedClinics/FormAttachedClinics";

const EditAccount = () => {
    const router = useRouter();
    const methods = useForm();

    const { handleSubmit } = methods;

    // EDITAR DATOS
    const onSubmit = async (data) => {
        console.log("DATA: ", data);
    }

    return (
        <>
        <span className="d-block p-2">
            <a onClick={ () => router.push("/accounts") } className="text-uppercase text-decoration-none" style={{color: "#666666", fontSize:"18px", cursor: "pointer"}}><Image src={ ArrowBack }  alt="Ícono de retroceso" className="icon-arrow" />{" "} Return</a>
        </span>
        <section className="container px-5 py-4 mx-auto">
                <div className="row align-items-start justify-content-between">
                    <div className="col-10 col-md-5">
                        <FormProvider {...methods}>
                            { console.log("METHODS: ", methods.getValues()) }
                    <h2 className="text-center mb-3">Personal Data</h2>
                            <form onSubmit={ handleSubmit(onSubmit) } className="px-3 px-md-5 mb-4">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label mb-1">Name<span className="text-danger">*</span>:</label>
                                    <Input 
                                        id="name_edit"
                                        name="name"
                                        type="text"
                                        placeholder="name"
                                        rules= {{required: "This field is required"}}
                                        rounded="2rem"
                                    />
                                </div>

                                <div className="mb-3">
                                <label htmlFor="lastname" className="form-label mb-1">Last Name<span className="text-danger">*</span>:</label>
                                <Input 
                                id="lastname_edit"
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
                                    id="email_edit"
                                    name="email"
                                    type="email"
                                    placeholder="email@email.com"
                                    rules= {{required: "This field is required"}}
                                    rounded="2rem"
                                />
                        </div>

                            <div className="modal-footer border-0 d-flex justify-content-center">
                                {/* <Button type="submit" title="Submit" bgColor="#3DC2DD" disabled={isLoading} /> */}

                                <Button type="submit" title="CHANGE DATA" bgColor="#3DC2DD"  />
                            </div>
                            </form>
                        </FormProvider>
                    </div>
                        {/* FORMULARIO PARA CAMBIAR LA CONTRASEÑA */}
                        <ChangePassword />
                </div>

            
                <FormAttachedClinics />
    </section>
        </>
    )
}

export default EditAccount;