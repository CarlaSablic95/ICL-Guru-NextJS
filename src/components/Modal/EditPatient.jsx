"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPatient } from "@/features/patients/patientSlice";
import Button2 from "../Button/Button2";
import { FormInput, InputRadio } from "../Inputs/FormInput";
import { useForm, FormProvider } from "react-hook-form";

const EditPatient = ({ patientId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const currentPatient = useSelector((state) =>
    state.patients.patients.find((patient) => patient.id === patientId)
  );
  console.log("CURRENT PACIENT: ", currentPatient);

  const methods = useForm();
  const { reset, handleSubmit, watch } = methods;
  // console.log("METHODS: ", methods);


  useEffect(() => {
    if(currentPatient) {
        reset(currentPatient);
        console.log("CURRENT PATIENT: ", reset(currentPatient) );
        
    }
  }, [currentPatient, reset])

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await dispatch(editPatient({ id: patientId, ...data })).unwrap();
      console.log("Submitted data: ", data);
    } catch(error) {
      console.error("Error updating data: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="ModalEditPatient"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered py-5">
          <div className="modal-content">
            <div className="d-flex justify-content-end p-2">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body pb-0">
              <FormProvider {...methods}>
                <form
                  onSubmit={handleSubmit(onSubmit)} // methods es un objeto que contiene todas las funciones de useForm(), una de ellas es handleSubmit
                  className="px-3 px-md-5"
                >
                  <FormInput
                    label="Name"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="example"
                    {...methods.register("name")}
                    defaultValue={currentPatient?.name}

                  />

                  <FormInput
                    label="Last name"
                    id="surname"
                    name="surname"
                    type="text"
                    placeholder="example"
                    {...methods.register("surname")}
                    defaultValue={currentPatient?.surname}
                  />

                  <FormInput
                    label="Date of birth"
                    type="date"
                    name="dob"
                    {...methods.register("dob")}
                    defaultValue={currentPatient?.dob}
                  />

                  <div className="mb-3">
                    <label className="mb-0">
                      Sex<span className="text-danger">*</span>
                    </label>
                    <div className="d-flex justify-content-evenly">
                      <InputRadio
                        id="female"
                        name="sex"
                        value="F"
                        label="Female"
                        {...methods.register("sex")} // { name: sex }
                        checked={watch("sex") === "F"}
                        className={watch("sex") ? "bg-aliceblue" : ""}
                      />

                      <InputRadio
                        id="male"
                        name="sex"
                        value="M"
                        label="Male"
                        {...methods.register("sex")} // { name: sex }
                        checked={watch("sex") === "M"}
                        className={watch("sex") ? "bg-aliceblue" : ""}
                        />
                    </div>
                  </div>

                  <FormInput
                    label="Medical records number (MRN)"
                    id="medical_record"
                    name="medical_record"
                    type="text"
                    placeholder="00000"
                    {...methods.register("medical_record")}
                  />

                    <FormInput 
                            label="Organization"
                            id="organization"
                            name="organization"
                            type="number"
                            placeholder="example"
                            {...methods.register("organization")}
                    defaultValue={currentPatient?.organization}
                        />


                  <FormInput
                    label="Patients ID"
                    id="identification"
                    name="identification"
                    type="text"
                    placeholder="00000"
                    {...methods.register("identification")}
                    defaultValue={currentPatient?.identification}
                  
                  />
            <div className="modal-footer border-0 d-flex justify-content-evenly">
              <Button2
                type={isLoading ? "Updating..." : "Update"}
                title="Update"
                bgColor="#3DC2DD"
                textColor="#ffffff"
                disabled={isLoading}
              />
            </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPatient;
