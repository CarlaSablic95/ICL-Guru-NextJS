import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { getClinics } from "@/services/ApiService";
import { fetchClinicsStart, fetchClinicsSuccess, fetchClinicsFailure } from "@/reduxSlices/clinics/clinicSlice";
import Button from "../Button/Button2";

const FormAttachedClinics = () => {
    const methods = useForm();
    const { register, handleSubmit, setValue, getValues } = methods;
    const dispatch = useDispatch();
    
    // FETCH CLINICS FROM REDUX STATE
    const { clinics, status, error } = useSelector((state) => state.clinics);
    const [selectedClinic, setSelectedClinic] = useState("");

    useEffect(() => {
        const fetchClinics = async () => {
            dispatch(fetchClinicsStart());

            try {
                const data = await getClinics();
                dispatch(fetchClinicsSuccess(data));
            } catch (error) {
                dispatch(fetchAccountsFailure(error.toString()));
            }
        };

        fetchClinics();
    }, [dispatch]);

    if(status === "loading") return <div>Loading...</div>;
    if(status === "failed") return <div>Error: {error}</div>;

     // AÑADIR QUITAR CLINICAS
     const handleClinics = (data) => {
        console.log("Submitted data: ", data)
        setSelectedClinic(clinics.find(clinic => clinic.id === data.clinicId)?.name || "");
        }

        const assignClinic = () => {
            console.log("Assign clinic logic here");
            
        }

        const deleteClinic = () => {
            console.log("Delete clinic logic here");
            
        }

    return (

 <div className="col-10 col-md-5">
 <FormProvider {...methods}>
        { console.log("METHODS: ", methods.getValues()) }
        <h2 className="text-center mb-3">Clinics Attached to user</h2>
        <form onSubmit={ handleSubmit(handleClinics) } className="px-3 px-md-5 mb-4">
        <div className="mb-3">
            <p>Add clinic to user</p>
        <div className="d-flex align-items-center justify-content-between">
        <select 
            class="form-select"
            aria-label="Default select example"
            {...register("clinicId")}
            defaultValue=""
        >
            <option value="" selected >Select one clinic</option>
            { clinics.map((clinic) => (
                <option key={clinic.id} value={clinic.id}>{clinic.name}</option>
            ))
            }
        </select>
            <Button 
                title="Add clinic"
                bgColor="#59B03D"
                borderRadius="2rem"
                onClick={ assignClinic }
        />
        </div>
        </div>

        <div className="mb-3">
        <div>
            <p>Delete clinic to user</p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
        <select class="form-select" aria-label="Default select example">
            <option selected>Select one clinic</option>
        <option value="option">Option</option>
        </select>
            <Button 
            title="Delete clinic"
            bgColor="#FF0000"
            borderRadius="2rem"
            />
        </div>
        </div>
        </form>
</FormProvider>
        </div>
    )

}
export default FormAttachedClinics;