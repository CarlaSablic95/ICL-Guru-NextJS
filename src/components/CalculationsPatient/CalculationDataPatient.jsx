"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputCheckbox } from "../Inputs/Input";
import { fetchCalculationsStart, fetchCalculationsSuccess,fetchCalculationsFailure } from "@/reduxSlices/calculations/calculationSlice";
import { getCalculation } from "@/services/ApiService";
import FollowUp from "@/components/CalculationsPatient/FollowUp";
import Button from "../Button/Button";
import ArrowBack from "/public/icons/arrow-back.png";
import Eye from "../Eyes/EyesOdOs";
import SurgicalData from "../OcularSurgeryCards/SurgicalData";
import AnatomicData from "../OcularSurgeryCards/AnatomicData";
import RightEyeResult from "../Table/RightEyeResult";
import LeftEyeResult from "../Table/LeftEyeResult";
import graphicOd from "/public/icons/graphic-od.png";
import graphicOs from "/public/icons/graphic-os.png";
import { useParams } from "next/navigation";

const CalculationDataPatient = ({ handleReturnClick }) => {
    const { id } = useParams();
    console.log("ID recibido en Calculations: ", id);
    const [showOD, setShowOD] = useState(true);
    const [showOS, setShowOS] = useState(true);
    const calculations = useSelector((state) => state.calculations.calculations);

    console.log("CALCULATIONS: ", calculations)
    const dispatch = useDispatch();

    const [showFollowUp, setShowFollowUp] = useState(false);

    const handleShowOD = (e) => {
        if(!showOS && !e.target.checked) {
            return;
        }
        setShowOD(e.target.checked);
    }

    const handleShowOS = (e) => {
        if(!showOD && !e.target.checked) {
            return;
        }
        setShowOS(e.target.checked);
    }

    const handleFollowUp = () => {
        setShowFollowUp(true);
    }

    const onReturn = () => {
        setShowFollowUp(false);
    }

    // Traigo los datos del cálculo del paciente
    useEffect(() => {
        const fetchCalculations = async () => {
            dispatch(fetchCalculationsStart());

            try { 
                const data = await getCalculation(id);
                console.log("TRAIGO DATOS DE CALCULOS: ", data);
                dispatch(fetchCalculationsSuccess(data));
            } catch (error) {
                dispatch(fetchCalculationsFailure(error.message));
            }
        }

        fetchCalculations();
    }, [dispatch, id]);


    return (
        <>
        { showFollowUp ? (<FollowUp onReturn = {onReturn} />)
        : (<div className="pt-5 px-3 px-md-5">
                <span className="d-block p-2">
            <a onClick={ handleReturnClick } className="text-uppercase text-decoration-none" style={{color: "#666666", fontSize:"18px", cursor: "pointer"}}><Image src={ ArrowBack }  alt="Ícono de retroceso" className="icon-arrow" />{" "} Return</a>
        </span>
            <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center mb-5 gap-3">
                <h1 className="text-center text-uppercase">Icl Calculations</h1>
                <div className="d-flex flex-row justify-content-center align-items-center gap-3">
                    <a href="#" className="p-2 px-3 text-decoration-none" style={{backgroundColor:"#B02F92", color:"#fefefe", borderRadius:"2rem"}} onClick={ handleFollowUp }>Follow up</a>
                </div>
                <Button title="Download report" bgColor="#3DC2DD" textColor="#1A2A2F" rounded="2rem" icon="../icons/file_download.svg" />
                <form>
                        <div className="mb-3">
                                    <p className="fw-bold text-center">Eye</p>
                                <div className="d-flex justify-content-center">
                                    <InputCheckbox label="OD" name="eye" id="od" value="od" bgColor="rgb(72, 136, 200)" onChange={handleShowOD} checked={showOD} />
                                    <InputCheckbox label="OS" name="eye" id="os" value="os" bgColor="rgb(47, 178, 151)" onChange={handleShowOS} checked={showOS} />
                                </div>
                        </div>
                    </form>
            </div>
        
            <section className="ps-4 py-4">
                <div className="mb-5 ps-3">
                        <h5 className="mb-1">Patient: </h5>
                        <h5 className="text-uppercase mb-1">ID: </h5>
                        <h5 className="text-uppercase mb-1">DOB</h5>
                        <h5 className="text-uppercase mb-1">MRN:</h5>
                        <h5 className="mb-1">Method:</h5>
                    {/* { calculations.map((calc) =>(
                    <>
                        <h5 className="mb-1">{`Patient: ${calc.patient.name}`}</h5>
                        <h5 className="text-uppercase mb-1">{`ID: ${calc.patient.id}`}</h5>
                        <h5 className="text-uppercase mb-1">{`Dob: ${calc.patient.dob}`}</h5>
                        <h5 className="text-uppercase mb-1">{`Mrn: ${calc.patient.mrn}`}</h5>
                        <h5 className="mb-1">Method:</h5>
                    </>
                ))} */}
                </div>
            <div className="d-flex flex-column flex-md-row justify-content-evenly">
               <div className="d-flex flex-column justify-content-center">
                    <div className="text-center mb-4">
                        <Eye bgColor="#4888C8" color="#fefefe" title="OD" width={50} height={50} fontSize="1.5rem" />
                    </div>
                    <div className="mb-5">
                        <Image src={ graphicOd } alt="OD Graphic" className="img-fluid" width={500} height={500} />
                    </div>
                </div>

                    <div className="d-flex flex-column justify-content-center">
                        <div className="text-center mb-4">
                            <Eye bgColor="#2FB297" color="#fefefe" title="OS" width={50} height={50} fontSize="1.5rem" />
                        </div>
                        <div className="mb-5">
                            <Image src={ graphicOs } alt="OS Graphic" className="img-fluid" width={500} height={500} />
                        </div>
                </div>
                </div>
            </section>
            
        {/* DATOS ESTÁTICOS DE LOS CÁLCULOS */}
            <section className="row flex-column flex-md-row ustify-content-center justify-content-md-evenly">
                 <div className="col-12 col-md-6">
                    <div className="text-center mb-4">
                        <Eye bgColor="#4888C8" color="#fefefe" title="OD" width="50px" height="50px" fontSize="1.5rem" />
                    </div>
                        <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly mb-3">
                            <SurgicalData  IntraocularLensPower="-10D/2.5D/90°" DateOfSurgery=""/>
                            <AnatomicData  AtA="12.138" ARise="0.078" ACD="3.489" WtW="12.000" />
                        </div>
                        <RightEyeResult />
                    </div>

                    <div className="col-12 col-md-6 d-flex flex-column">
                        <div className="text-center mb-4">
                            <Eye bgColor="#2FB297" color="#fefefe" title="OS" width="50px" height="50px" fontSize="1.5rem" />
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly mb-3">
                            <SurgicalData  IntraocularLensPower="-10D" DateOfSurgery=""/>
                            <AnatomicData  AtA="12.131" ARise="0.022" ACD="3.597" WtW="12.100" />
                            </div>
                        <LeftEyeResult />
                    </div>
                </section>

                {/* DATOS DINÁMICOS DE LOS CÁLCULOS */}
                <section className="row flex-column flex-md-row ustify-content-center justify-content-md-evenly">
                 
                 { calculations.map((calc, index) => (
                <>
                   <div className="col-12 col-md-6">
                    <div className="text-center mb-4">
                        <Eye bgColor="#4888C8" color="#fefefe" title="OD" width="50px" height="50px" fontSize="1.5rem" />
                    </div>
                        <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly mb-3">
                            <SurgicalData  IntraocularLensPower="-10D/2.5D/90°" DateOfSurgery=""/>
                            <AnatomicData  AtA="12.138" ARise="0.078" ACD="3.489" WtW="12.000" />

                             <SurgicalData  IntraocularLensPower={calc.surg_data_od.power_sph} DateOfSurgery={calc.surg_data_od.qx_date}  />
                            <AnatomicData  AtA={calc.anat_data_od.ata} ARise={calc.anat_data_od.aRise} ACD={calc.anat_data_od.acd} WtW={calc.anat_data_od.wtw} />
                            
                        </div>
                        <RightEyeResult />
                    </div>

                    <div className="col-12 col-md-6 d-flex flex-column">
                        <div className="text-center mb-4">
                            <Eye bgColor="#2FB297" color="#fefefe" title="OS" width="50px" height="50px" fontSize="1.5rem" />
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly mb-3">
                            <SurgicalData  IntraocularLensPower="-10D" DateOfSurgery=""/>
                            <AnatomicData  AtA="12.131" ARise="0.022" ACD="3.597" WtW="12.100" />
                            
                            <SurgicalData  IntraocularLensPower={calc.surg_data_os.power_sph} DateOfSurgery={calc.surg_data_os.qx_date}  />
                            <AnatomicData  AtA={calc.anat_data_os.ata} ARise={calc.anat_data_os.aRise} ACD={calc.anat_data_os.acd} WtW={calc.anat_data_os.wtw} />
                        </div>
                        <LeftEyeResult />
                    </div>
                    </>
                 ))}
                </section>

            </div>)

            }
        </>
    )
}

export default CalculationDataPatient;