import { FormProvider, useForm } from "react-hook-form";
import { Input, Select } from "../Inputs/Input";
import Button from "../Button/Button2";


const EditAccount = () => {
    const methods = useForm();

    const { handleSubmit } = methods;

    // EDITAR DATOS
    const onSubmit = async (data) => {
        console.log("DATA: ", data);
    }

    // AÑADIR QUITAR CLINICAS
    const handleClinics = async (data) => {
        console.log("DATA: ", data)
    }

    // CAMBIAR CONTRASEÑA
    const handlePassword = async (data) => {
        console.log("DATA: ", data)
    }
    return (
        <>
        <div className="modal fade" id="ModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered py-5">
                <div className="modal-content">
                <div className="d-flex justify-content-end p-2"> 
                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-header border-0 justify-content-center">
                    <h2>Personal Data</h2>
                </div>
                <div className="modal-body pb-0">
                    <FormProvider {...methods}>
                        { console.log("METHODS: ", methods.getValues()) }
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

                     {/* FORMULARIO PARA CONTRASEÑA */}
                     <FormProvider {...methods}>
                        { console.log("METHODS: ", methods.getValues()) }
                        <h2 className="text-center mb-3">Clinics Attached to user</h2>
                        <form onSubmit={ handleSubmit(handleClinics) } className="px-3 px-md-5 mb-4">
                        <div className="mb-3">
                        <div>
                            <p>Add clinic to user</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <Select />
                            <Button 
                                title="Add clinic"
                                bgColor="#59B03D"
                                borderRadius="2rem"
                       />
                        </div>
                         </div>

                    <div className="mb-3">
                        <div>
                            <p>Delete clinic to user</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <Select />
                            <Button 
                            title="Delete clinic"
                            bgColor="#FF0000"
                            borderRadius="2rem"
                            />
                        </div>
                    </div>
                        </form>
                    </FormProvider>

                    {/* FORMULARIO PARA CONTRASEÑA */}
                    <FormProvider {...methods}>
                        { console.log("METHODS: ", methods.getValues()) }
                        <h2 className="text-center mb-3">Change Password</h2>
                        <form onSubmit={ handleSubmit(handlePassword) } className="px-3 px-md-5 mb-4">
                        <div className="mb-3">
                        <label htmlFor="password" className="form-label mb-1">Password<span className="text-danger">*</span>:</label>
                        <Input 
                            id="password_edit"
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
                            id="confirm_password_edit"
                            name="confirm_password"
                            type="password"
                            placeholder="*********"
                            rules= {{required: "This field is required"}}
                            rounded="2rem"
                        />
                    </div>

                        <div className="modal-footer border-0 d-flex justify-content-center">
                            {/* <Button type="submit" title="Submit" bgColor="#3DC2DD" disabled={isLoading} /> */}

                            <Button type="submit" title="CHANGE PASSWORD" bgColor="#3DC2DD"  />
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

export default EditAccount;