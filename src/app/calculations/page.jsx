import CalculationTable from "@/components/CalculationsPatient/CalculationTable";
import CalculationDataPatient from "@/components/CalculationsPatient/CalculationDataPatient";
import FollowUp from "@/components/CalculationsPatient/FollowUp";


const Calculations = () => {

// CONSUMO DE API DE CÁLCULOS


    return (
        <>
            <CalculationTable />
            <CalculationDataPatient />
            <FollowUp />
        </>
    )
}

export default Calculations;