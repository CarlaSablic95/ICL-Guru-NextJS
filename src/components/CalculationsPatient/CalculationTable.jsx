import ButtonModal from "../Button/ButtonModal";
import CalculationDataPatient from "./CalculationDataPatient";
import CalculationData from "../Table/CalculationData";

const CalculationTable = () => {

    return (
        <section className="col-12 col-md-11 px-5 mx-auto">
            <div className="mb-5">
                <h1 className="text-center text-uppercase fw-bold">Calculations</h1>
            </div>
                    <div className="mb-5 d-flex flex-column align-items-center">
                        <h5 className="mb-1">Patient: </h5>
                        <h5 className="text-uppercase mb-1">Dob:  </h5>
                        <h5 className="mb-1">Organization:  </h5>
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