"use client";

import { useParams } from "next/navigation";
import CalculationTable from "@/components/CalculationsPatient/CalculationTable";
import CalculationDataPatient from "@/components/CalculationsPatient/CalculationDataPatient";
import FollowUp from "@/components/CalculationsPatient/FollowUp";


const Calculations = () => {

    const { id } = useParams(); // obtiene el ID de la URL
    console.log("ID recibido en Calculations: ", id);

    return (
        <>
            <CalculationTable id={id}/>
            <CalculationDataPatient />
            <FollowUp />
        </>
    )
}

export default Calculations;