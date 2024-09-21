"use client";

import { useState, useEffect } from "react";
import { getPatient } from "@/services/ApiService";
import { InputCheckbox } from "../Inputs/Input";
import ArrowBack from "/public/icons/arrow-back.png";
import WizardComponent from "../Wizard/WizardComponent";
import Image from "next/image";
import { useParams } from "next/navigation";

const FollowUp = ({ onReturn }) => {
    const { id } = useParams();
    console.log("ID recibido en Calculations: ", id);

    const [patient, setPatient] = useState();
    //  Para mostrar el cálculo de ambos ojos
    const [showOD, setShowOD] = useState(true);
    const [showOS, setShowOS] = useState(true);
    

    const handleShowOD = (e) => {
        setShowOD(e.target.checked);
    }

    const handleShowOS = (e) => {
        setShowOS(e.target.checked);
    }

    // Traigo datos de pacientes
    useEffect(() => {
        const fetchPantientData = async () => {
            try {
                const patientData = await getPatient(id);
                console.log("TRAIGO PACIENTE: ", patientData);
                setPatient(patientData);
            }catch (error) {
                console.error("Error fetching data: ", error);
                // setError("Failed to load patient data");
            }
        }
        fetchPantientData();
    }, [id])

    return(
        <div className="pt-5 px-3 px-md-5">
            <span className="d-block p-2">
            <a onClick={ onReturn } className="text-uppercase text-decoration-none" style={{color: "#666666", fontSize:"18px", cursor: "pointer"}}><Image src={ ArrowBack }  alt="Ícono de retroceso" className="icon-arrow" />{" "} Return</a>
        </span>
            <h1 className="text-uppercase text-center mb-5">Icl calculations</h1>

                {(patient ? (<div className="d-flex justify-content-evenly text-align-center">
                    <div>
                    <h4 className="mb-1 fs-4 fw-bold">
                            Patient: <small class="text-muted">{`${patient.name} ${patient.surname}`}</small>
                        </h4>
                        <h4 className="mb-1 fs-4 fw-bold">
                            ID: <small class="text-muted">{`${patient.id}`}</small>
                        </h4>
                        <h4 className="mb-1 fs-4 fw-bold">
                        DOB: <small class="text-muted">{`${patient.dob}`}</small>
                        </h4>
                </div>
            <div>
                <h4 className="mb-1 fs-4 fw-bold">
                            MRN: <small class="text-muted">{`${patient.medical_record}`}</small>
                        </h4>
                <h4 className="mb-1">Method:</h4>
            </div>
            </div>) : (<p>Loading patient data...</p>))}
                    
                <form>
                <div className="mb-3">
                  <p className="fw-bold text-center">Eye</p>
                                <div className="d-flex justify-content-center">
                                    <InputCheckbox label="OD" name="eye" id="od" value="od" bgColor="rgb(72, 136, 200)" onChange={handleShowOD} checked={showOD} />
                                    <InputCheckbox label="OS" name="eye" id="os" value="os" bgColor="rgb(47, 178, 151)" onChange={handleShowOS} checked={showOS} />
                                </div>
                        </div>
            </form>
            {/* FORM WIZARD */}
           <WizardComponent />
        </div>
        
    )
}

export default FollowUp;