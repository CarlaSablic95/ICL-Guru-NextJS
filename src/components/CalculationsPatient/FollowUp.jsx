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
    const [showStickyHeader, setShowStickyHeader] = useState(false);
    

    const handleShowOD = (e) => {
        if (!e.target.checked && !showOS) {
            return;
        }
        setShowOD(e.target.checked);
    };
    
    const handleShowOS = (e) => {
        if (!e.target.checked && !showOD) {
            return;
        }
        setShowOS(e.target.checked);
    };

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
    }, [id]);

    // Manejo el scroll para mostrar el encabezado con el nombre del paciente
    useEffect(() => {
        const handleScroll = () => {
            setShowStickyHeader(window.scrollY > 150);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <div className="pt-3 px-3 px-md-5">
            {showStickyHeader && patient && (
                        <div className="fixed-top text-white" style={{backgroundColor:"#00507C"}}>
                            <p className="fs-6 text-center">{`Patient: ${patient.name} ${patient.surname}`}</p>
                            {showOD && showOS && (
                                <div className="row">
                                    <div className="col-12 col-md-6" style={{backgroundColor:"#4888C8"}}>
                                        <p className="fs-6 text-center">OD</p>
                                    </div>
                                    <div className="col-12 col-md-6" style={{backgroundColor:"#2FB297"}}>
                                        <p className="fs-6 text-center">OS</p>
                                    </div>
                                </div>
                            )}
                            {showOD && !showOS && (
                                <div style={{backgroundColor:"#4888C8"}}>
                                    <p className="fs-6 text-center">OD</p>
                                </div>
                            )}
                            {!showOD && showOS && (
                                <div style={{backgroundColor:"#2FB297"}}>
                                    <p className="fs-6 text-center">OS</p>
                                </div>
                            )}
                        </div>
                    )}
            <span className="d-block p-2">
            <a onClick={ onReturn } className="text-uppercase text-decoration-none" style={{color: "#666666", fontSize:"18px", cursor: "pointer"}}><Image src={ ArrowBack }  alt="Ícono de retroceso" className="icon-arrow" />{" "} Return</a>
        </span>
            <h1 className="text-uppercase text-center mb-5">Icl calculations</h1>

                {(patient ? (<div className="d-flex flex-column flex-md-row justify-content-evenly text-align-center">
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
                  <form className="d-flex justify-content-center">
                                    <InputCheckbox
                                        label="OD"
                                        name="eye"
                                        id="od"
                                        value="od"
                                        bgColor="rgb(72, 136, 200)"
                                        onChange={handleShowOD}
                                        checked={showOD}
                                        disabled={!showOS}
                                    />
                                    <InputCheckbox
                                        label="OS"
                                        name="eye"
                                        id="os"
                                        value="os"
                                        bgColor="rgb(47, 178, 151)"
                                        onChange={handleShowOS}
                                        checked={showOS}
                                        disabled={!showOD}
                                    />
                                 </form>
                        </div>
            </form>
            {/* FORM WIZARD */}
           <WizardComponent />
        </div>
        
    )
}

export default FollowUp;