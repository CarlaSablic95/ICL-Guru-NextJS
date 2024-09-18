import Image from "next/image";
import ArrowBack from "/public/icons/arrow-back.png";
import Collapse from "../Collapse/Collapse";
import AddCalculation from "@/components/Wizard/AddCalculation";

const NewCalculation = ({ handleReturnClick }) => {

    return (
        <section className="col-12 col-md-11 px-5 mx-auto">
            <span className="d-block p-2">
                <a onClick={ handleReturnClick } className="text-uppercase text-decoration-none" style={{color: "#666666", fontSize:"18px", cursor: "pointer"}}><Image src={ ArrowBack }  alt="Ícono de retroceso" className="icon-arrow" />{" "} Return</a>
            </span>
            <h1 className="text-center mb-3 text-uppercase">Patient</h1>

            <div className="d-flex justify-content-evenly mb-5">
                <div>
                    <h4>Name:</h4>
                    <h4>Last name:</h4>
                    <h4>Patient ID:</h4>
                </div>

                <div>
                    <h4>Date of birth (DOB):</h4>
                    <h4>Medical Record Number (MRN):</h4>
                </div>
            </div>

        {/* Collapse de imagenes */}
            <Collapse />
        
        {/* WIZARD */}
            <AddCalculation />
        </section>
    )
}

export default NewCalculation;