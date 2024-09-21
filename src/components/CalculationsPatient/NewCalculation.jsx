"use client";
import {useState, useEffect} from "react";
import { getPatient } from "@/services/ApiService";
import { useParams } from "next/navigation";
import Image from "next/image";
import ArrowBack from "/public/icons/arrow-back.png";
import Collapse from "../Collapse/Collapse";
import AddCalculation from "@/components/Wizard/AddCalculation"

const NewCalculation = ({ handleReturnClick }) => {
    const { id } = useParams();
    console.log("ID recibido en Calculations: ", id);
    const [patient, setPatient] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

    // TRAIGO DATOS DESDE /patients/patients/{id}
    useEffect(() => {
        const fetchPantientData = async () => {
            try {
                // setIsLoading(true);
                const patientData = await getPatient(id);
                console.log("TRAIGO PACIENTE: ", patientData);
                setPatient(patientData);
            } catch (error) {
                console.error("Error fetching data: ", error);
                // setError("Failed to load patient data");
            }
            // finally {
            //     setIsLoading(false);
            // }
        }
        fetchPantientData();
    }, [id]);

    return (
        <section className="col-12 col-md-11 px-5 mx-auto">
            <span className="d-block p-2">
                <a onClick={ handleReturnClick } className="text-uppercase text-decoration-none" style={{color: "#666666", fontSize:"18px", cursor: "pointer"}}><Image src={ ArrowBack }  alt="Ícono de retroceso" className="icon-arrow" />{" "} Return</a>
            </span>
            <h1 className="text-center mb-3 text-uppercase">Patient</h1>

            { patient ? (
            <div className="d-flex justify-content-evenly mb-5">
                <div>
                <h4 className="mb-1 fs-4 fw-bold">
                            Patient: <small class="text-muted">{`${patient.name} ${patient.surname}`}</small>
                        </h4>
                        <h4 className="mb-1 fs-4 fw-bold">
                        Last name: <small class="text-muted">{`${patient.name} ${patient.surname}`}</small>
                        </h4>
                        <h4 className="mb-1 fs-4 fw-bold">
                        Patient ID: <small class="text-muted">{`${patient.name} ${patient.id}`}</small>
                        </h4>
                </div>

                <div>
                <h4 className="mb-1 fs-4 fw-bold">
                        DOB: <small class="text-muted">{`${patient.dob}`}</small>
                        </h4>
                    <h4 className="mb-1 fs-4 fw-bold">
                    Medical Record Number (MRN): <small class="text-muted">{`${patient.medical_record}`}</small>
                        </h4>
                </div>
            </div>
        ) : (
            <p>Loading patient data...</p>
        )}
        {/* Collapse de imagenes */}
            <Collapse />
        
        {/* WIZARD */}
            <AddCalculation />
        </section>
    )
}

export default NewCalculation;