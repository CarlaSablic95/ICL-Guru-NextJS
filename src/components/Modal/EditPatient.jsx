"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { editPatient } from "@/reduxSlices/patients/patientSlice";
import Button2 from "../Button/Button2";
import { Input, InputRadio } from "../Inputs/Input";

const EditPatient = ({ patientId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const currentPatient = useSelector((state) =>
    state.patients.patients.find((patient) => patient.id === patientId)
  );
  console.log("CURRENT PACIENT: ", currentPatient);

  const methods = useForm();
  const { reset, watch } = methods;
  // console.log("METHODS: ", methods);


  useEffect(() => {
    if(currentPatient) {
        reset(currentPatient);
        console.log("CURRENT PATIENT: ", reset(currentPatient) );
        
    }
  }, [currentPatient, reset]) // reset

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await dispatch(editPatient({ id: patientId, ...data })).unwrap();
      // CERRAR EL MODAL
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
                  onSubmit={methods.handleSubmit(onSubmit)} // methods es un objeto que contiene todas las funciones de useForm(), una de ellas es handleSubmit
                  className="px-3 px-md-5 edited-form"
                >
                  <div className="mb-3">
                  <label htmlFor="name" className="form-label mb-1">Name<span className="text-danger">*</span>:</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="example"
                    defaultValue={currentPatient?.name}
                    rules={{required: "This field is required"}}
                    rounded="2rem"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="surname" className="form-label mb-1">Surname<span className="text-danger">*</span>:</label>
                  <Input
                    id="surname"
                    name="surname"
                    type="text"
                    placeholder="example"
                    defaultValue={currentPatient?.surname}
                    rules={{required: "This field is required"}}
                    rounded="2rem"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="dob" className="form-label mb-1">Date of birth<span className="text-danger">*</span>:</label>
                  <Input
                    name="dob"
                    type="date"
                    defaultValue={currentPatient?.dob}
                    rules={{required: "This field is required"}}
                    rounded="2rem"
                  />
                </div>

                  <div className="mb-3">
                    <label className="mb-0">
                      Sex<span className="text-danger">*</span>
                    :</label>
                    <div className="d-flex justify-content-evenly">
                      <InputRadio
                        id="female"
                        name="sex"
                        value="F"
                        label="Female"
                        checked={watch("sex") === "F"}
                        className={watch("sex") ? "bg-aliceblue" : ""}
                      />

                      <InputRadio
                        id="male"
                        name="sex"
                        value="M"
                        label="Male"
                        checked={watch("sex") === "M"}
                        className={watch("sex") ? "bg-aliceblue" : ""}
                        />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="medical_record" className="form-label mb-1">Medical records number (MRN)<span className="text-danger">*</span>:</label>
                    <Input
                      id="medical_record"
                      name="medical_record"
                      type="text"
                      placeholder="00000"
                      rules={{required: "This field is required"}}
                      rounded="2rem"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="organization" className="form-label mb-1">Organization<span className="text-danger">*</span>:</label>
                    <Input 
                            id="organization"
                            name="organization"
                            type="number"
                            placeholder="example"
                            {...methods.register("organization")}
                    defaultValue={currentPatient?.organization}
                    rules={{required: "This field is required"}}
                    rounded="2rem"
                        />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="identification" className="form-label mb-1">Patients ID<span className="text-danger">*</span>:</label>
                    <Input
                      id="identification"
                      name="identification"
                      type="text"
                      placeholder="00000"
                      label="Patients ID"
                      {...methods.register("identification")}
                      defaultValue={currentPatient?.identification}
                      rules={{required: "This field is required"}}
                      rounded="2rem"
                    
                    />
                  </div>
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
