import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { getPatient, getCalculation } from "@/services/ApiService";
import { fetchCalculationsStart, fetchCalculationsSuccess, fetchCalculationsFailure } from "@/reduxSlices/calculations/calculationSlice";
import { InputCheckbox } from "../Inputs/Input";
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

const CalculationDataGraphic = ({ handleReturnClick }) => {
    const { id } = useParams();
    const [patient, setPatient] = useState(null);
    const [showOD, setShowOD] = useState(true);
    const [showOS, setShowOS] = useState(true);
    const [showStickyHeader, setShowStickyHeader] = useState(false);
    const [showFollowUp, setShowFollowUp] = useState(false);

    const calculations = useSelector((state) => state.calculations.calculations);
    const dispatch = useDispatch();

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

    const handleFollowUp = () => {
        setShowFollowUp(true);
    };

    const onReturn = () => {
        setShowFollowUp(false);
    };

    useEffect(() => {
        const fetchPatientData = async () => {
            try {
                const patientData = await getPatient(id);
                setPatient(patientData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchPatientData();
    }, [id]);

    useEffect(() => {
        const fetchCalculations = async () => {
            dispatch(fetchCalculationsStart());
            try {
                const data = await getCalculation(id);
                dispatch(fetchCalculationsSuccess(data));
            } catch (error) {
                dispatch(fetchCalculationsFailure(error.message));
            }
        };
        fetchCalculations();
    }, [dispatch, id]);

    useEffect(() => {
        const handleScroll = () => {
            setShowStickyHeader(window.scrollY > 150);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {showFollowUp ? (
                <FollowUp onReturn={onReturn} />
            ) : (
                <section className="pt-3 px-3">
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
                        <a
                            onClick={handleReturnClick}
                            className="text-uppercase text-decoration-none"
                            style={{ color: "#666666", fontSize: "18px", cursor: "pointer" }}
                        >
                            <Image src={ArrowBack} alt="Ícono de retroceso" className="icon-arrow" /> Return
                        </a>
                    </span>
                    <div>
                        <h1 className="text-center text-uppercase">ICL Calculations</h1>
                        {patient && (
                            <div className="d-flex flex-column align-items-center justify-content-center mb-5 text-start">
                                <h4 className="mb-1 fs-4 fw-bold">
                                    Patient: <small className="text-muted">{`${patient.name} ${patient.surname}`}</small>
                                </h4>
                                <h4 className="mb-1 fs-4 fw-bold">
                                    ID: <small className="text-muted">{`${patient.id}`}</small>
                                </h4>
                                <h4 className="mb-1 fs-4 fw-bold">
                                    DOB: <small className="text-muted">{`${patient.dob}`}</small>
                                </h4>
                                <h4 className="mb-1 fs-4 fw-bold">
                                    MRN: <small className="text-muted">{`${patient.medical_record}`}</small>
                                </h4>
                            </div>
                        )}
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                            <a
                                href="#"
                                className="p-2 px-3 text-decoration-none"
                                style={{ backgroundColor: "#B02F92", color: "#fefefe", borderRadius: "2rem" }}
                                onClick={handleFollowUp}
                            >
                                Follow up
                            </a>
                            <Button
                                title="Download report"
                                bgColor="#3DC2DD"
                                textColor="#1A2A2F"
                                rounded="2rem"
                                icon="../icons/file_download.svg"
                            />
                            <div className="col-5 mb-3">
                                <div>
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
                            </div>
                        </div>
                    </div>

                    <div className="py-4">
                        <div className="d-flex flex-column flex-md-row justify-content-evenly">
                            {showOD && (
                                <div>
                                    <div className="text-center mb-4">
                                        <Eye bgColor="#4888C8" color="#fefefe" title="OD" width={50} height={50} fontSize="1.5rem" />
                                    </div>
                                    <div className="mb-5">
                                        <Image src={graphicOd} alt="OD Graphic" className="img-fluid" width={500} height={500} />
                                    </div>
                                    <div className="container">
                                        <div className="row flex-column justify-content-center align-items-center">
                                            <SurgicalData IntraocularLensPower="-10D/2.5D/90°" DateOfSurgery="" />
                                            <AnatomicData AtA="12.138" ARise="0.078" ACD="3.489" WtW="12.000" />
                                        </div>
                                    </div>
                                    <RightEyeResult />
                                </div>
                            )}

                            {showOS && (
                                <div>
                                    <div className="text-center mb-4">
                                        <Eye bgColor="#2FB297" color="#fefefe" title="OS" width={50} height={50} fontSize="1.5rem" />
                                    </div>
                                    <div className="mb-5 w-50">
                                        <Image src={graphicOs} alt="OS Graphic" className="img-fluid" />
                                    </div>
                                    <div className="container">
                                        <div className="row flex-column justify-content-center align-items-center">
                                            <SurgicalData IntraocularLensPower="-10D" DateOfSurgery="" />
                                            <AnatomicData AtA="12.131" ARise="0.022" ACD="3.597" WtW="12.100" />
                                        </div>
                                    </div>
                                    <LeftEyeResult />
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default CalculationDataGraphic;