"use client";

import { useState, useEffect } from "react";
import { getPatient } from "@/services/ApiService";
import ButtonModal from "../Button/ButtonModal";
import CalculationDataPatient from "./CalculationDataPatient";
import CalculationData from "../Table/CalculationData";


const CalculationTable = ({ id }) => {
  const [patient, setPatient] = useState(null);    
  const [isLoading, setIsLoading] = useState(true);    
  const [error, setError] = useState(null);    
    
    // TRAIGO DATOS DESDE /patients/patients/{id}
    useEffect(() => {
                const fetchPantientData = async () => {
                    try {
                        setIsLoading(true);
                        const patientData = await getPatient(id);
                        console.log("TRAIGO PACIENTE: ", patientData)
                        setPatient(patientData);
                    } catch(error) {
                        console.error("Error fetching data: ", error);
                        setError("Failed to load patient data");
                    } finally {
                        setIsLoading(false);
                    }
                }
                fetchPantientData();
            },[id] )
            
            if(isLoading) return <div>Loading patient data...</div>
            if(error) return <div>Error: {error}</div>
            if(!patient) return <div>Patient not found for ID: {id}</div>
    
            return (
        <section className="col-12 col-md-11 px-5 mx-auto">
            <div className="mb-5">
                <h1 className="text-center text-uppercase fw-bold">Calculations</h1>
            </div>
                    <div className="mb-5 d-flex flex-column align-items-center">
                        <h5 className="mb-1">{`Patient: ${patient.name} ${patient.surname}`}</h5>
                        <h5 className="text-uppercase mb-1">{`Dob:  ${patient.dob}`}</h5>
                        <h5 className="mb-1">{`Organization:  ${patient.organization}`}</h5>
                    </div>
            <div className="d-flex justify-content-end align-items-center mb-5">
                <ButtonModal title="New calculation" icon="./icons/add-user.svg" />
            </div>
                    <CalculationData />
            
            <CalculationDataPatient />
        </section>
    )
}

export default CalculationTable;