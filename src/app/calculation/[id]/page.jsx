"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCalculation, getPatient } from "@/services/ApiService";
import { useParams } from "next/navigation";
import {
  fetchCalculationsFailure,
  fetchCalculationsStart,
  fetchCalculationsSuccess,
} from "@/reduxSlices/calculations/calculationSlice";
import Button from "@/components/Button/Button";
import Edit from "/public/icons/edit.svg";
import Delete from "/public/icons/delete.svg";
import Image from "next/image";
import CalculationDataGraphic from "@/components/CalculationsPatient/CalculationDataGraphic";
import AddCalculation from "@/components/Wizard/AddCalculation";
import IclGif from "/public/img/icl-gif.gif";

const Calculations = () => {
  const { id } = useParams(); // obtiene el ID de la URL
  console.log("ID recibido en Calculations: ", id);
  const [patient, setPatient] = useState(null);

  const dispatch = useDispatch();
  const { calculations, status, error } = useSelector(
    (state) => state.calculations.calculations
  );
  console.log("CALCULATIONS: ", calculations);

  const [showCalculation, setShowCalculation] = useState(false);
  const [showNewCalculation, setShowNewCalculation] = useState(false);

  // TRAIGO DATOS DESDE /patients/patients/{id}
  useEffect(() => {
    const fetchPantientData = async () => {
      try {
        const patientData = await getPatient(id);
        console.log("TRAIGO PACIENTE: ", patientData);
        setPatient(patientData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchPantientData();
  }, [id]);

  // TRAIGO DATOS DE CÁLCULOS DEL PACIENTE
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
    };

    fetchCalculations();
  }, [dispatch, id]);

  // Muestra componente para edición
  const handleEdit = () => {
    setShowCalculation(true);
  };

  // Muestra componente de la tabla de cálculos
  const handleReturnClick = () => {
    setShowCalculation(false);
    setShowNewCalculation(false);
  };

  // Muestra el componente para crear
  const handleNewCalculation = () => {
    setShowNewCalculation(true);
  };

  if (status === "loading") {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Image
          src={IclGif}
          alt="Gif"
          style={{ width: "250px", height: "200px" }}
        />
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 text-danger">
        Error: {error}
      </div>
    );
  }

  return (
    <>
      {showNewCalculation ? (
        <AddCalculation handleReturnClick={handleReturnClick} />
      ) : showCalculation ? (
        <CalculationDataGraphic handleReturnClick={handleReturnClick} />
      ) : (
        <section className="col-12 col-md-11 px-5 mx-auto">
          <div className="mb-5">
            <h1 className="text-center text-uppercase fw-bold">Calculations</h1>
          </div>

          <div className="mb-5 d-flex flex-column align-items-center">
            <h4 className="mb-1 fs-4 fw-bold">
              Patient:{" "}
              <small className="text-muted">
                {patient ? `${patient.name} ${patient.surname}` : "Loading..."}
              </small>
            </h4>
            <h4 className="mb-1 fs-4 fw-bold">
              DOB:{" "}
              <small className="text-muted">
                {patient ? `${patient.dob}` : "Loading..."}
              </small>
            </h4>

            {/* MOSTRAR NOMBRE DE LA CLINICA */}
            <h4 className="mb-1 fs-4 fw-bold">
              Organization:{" "}
              <small className="text-muted">
                {patient ? `${patient.organization}` : "Loading..."}
              </small>
            </h4>
          </div>
          <div className="d-flex justify-content-end align-items-center mb-5">
            <Button
              title="New calculation"
              icon="../icons/add-user.svg"
              bgColor="#3DC2DD"
              rounded="2rem"
              fontWeight="bold"
              onClick={() => handleNewCalculation()}
            />
          </div>
          <div className="table-responsive p-2">
            <table className="table table-striped calculations-table mb-5">
              <thead>
                <tr className="text-center border-bottom border-black">
                  <th scope="col" className="align-middle">
                    Calculation date
                  </th>
                  <th scope="col" className="align-middle">
                    Surgery date
                  </th>
                  <th scope="col" className="align-middle">
                    Result Eyes
                  </th>
                  <th scope="col" className="align-middle">
                    Method
                  </th>
                  <th scope="col" className="align-middle">
                    Edit calculation
                  </th>
                  <th scope="col" className="align-middle">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* ERROR 404 */}
                {/* { calculations.map((calc, index) => (
              <tr className="text-center" key={index}>
              <td className="align-middle">February 21,2024</td>
              <td className="align-middle">{ calc.surg_data_od.qx_date}</td>
              <td className="align-middle">
              <Eye bgColor="#4888C8" color="#fefefe" title="OD" />
              </td>
              <td className="align-middle">ZV1</td>
              <td className="align-middle">
                <Image src={ Edit }  style={{ width:"18px", cursor:"pointer" }} data-bs-toggle="modal" data-bs-target="#ModalEditPatient" alt="icon" />
              </td>
              <td className="align-middle">
                <Image src={ Delete } style={{ width: "22px", cursor:"pointer"}}data-bs-toggle="modal" data-bs-target="#modalDelete" alt="icon" />
              </td>
            </tr>
            ))
            } */}

                <tr className="text-center">
                  <td
                    className="align-middle"
                    onClick={() => handleEdit()}
                    style={{ cursor: "pointer" }}
                  >
                    -
                  </td>
                  <td
                    className="align-middle"
                    onClick={() => handleEdit()}
                    style={{ cursor: "pointer" }}
                  >
                    -
                  </td>
                  <td
                    className="align-middle"
                    onClick={() => handleEdit()}
                    style={{ cursor: "pointer" }}
                  >
                    -
                  </td>
                  <td
                    className="align-middle"
                    onClick={() => handleEdit()}
                    style={{ cursor: "pointer" }}
                  >
                    -
                  </td>
                  <td className="align-middle">
                    <Image
                      src={Edit}
                      style={{ width: "18px", cursor: "pointer" }}
                      alt="icon"
                      onClick={() => handleNewCalculation()}
                    />
                  </td>
                  <td className="align-middle">
                    <Image
                      src={Delete}
                      style={{ width: "22px", cursor: "pointer" }}
                      data-bs-toggle="modal"
                      data-bs-target="#modalDelete"
                      alt="icon"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}
    </>
  );
};

export default Calculations;
