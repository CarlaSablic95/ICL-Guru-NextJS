"use client";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getPatients } from "@/services/ApiService";
import { fetchPatientsStart, fetchPatientsSuccess, fetchPatientsFailure } from "@/features/patients/patientSlice";
import { SearchBar } from "../Inputs/Inputs";
import CreatePatient from "../Modal/CreatePatient";
import ButtonModal from "../Button/ButtonModal";
import Image from "next/image";
import Edit from "/public/icons/edit.svg";
import Delete from "/public/icons/delete.svg";
// import styles from "../../patients/Patients.module.css";

const PatientsList = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.access);
  const {patients, status, error} = useSelector((state) => state.patients);// tiene acceso a todo el estado, quiero acceder del estado a los pacientes
  console.log("STATE PATIENTS: ", useSelector((state) => state.patients));

  const [searchPatient, setSearchPatient] = useState("");
  const [filteredPatients, setFilteredPatients] = useState([]);


// trayendo los pacientes 
useEffect(() => {
  if(!accessToken) {
    console.error("Invalid access token: must be a non-empty string");
    return;
  }

  const fetchPatients = async () => {
    dispatch(fetchPatientsStart());

    try {
      const data = await getPatients();
      dispatch(fetchPatientsSuccess(data));
    } catch (error) {
      dispatch(fetchPatientsFailure(error.message));
    }
  };

  fetchPatients();
}, [dispatch, accessToken]);

useEffect(() => {
  setFilteredPatients(patients);
}, [patients]); 


// FILTRO DE PACIENTES
const filterPatients = (event) => {
  const filterValue = event.target.value.toLowerCase();

  console.log("VALOR INGRESADO: ", filterValue);

  // Se actualiza la variable de estado "searchPatient" con el valor filtrado
  setSearchPatient(filterValue);

  // Variable que almacena el resultado del filtrado
  const filteredData = patients.filter((patient) => {
      const patientName = patient.name.toLowerCase();
      const patientSurname = patient.surname.toLowerCase();

      console.log("LISTA DE PACIENTES: ", filterPatients)
      return patientName.includes(filterValue) || patientSurname.includes(filterValue);
  });

  setFilteredPatients(filteredData);
}

if(status === "loading") return <div>Loading...</div>;
if(status === "failed") return <div>Error: {error}</div>;
// Función para ver el cálculo del paciente

// const handlePatient = (id) => {
//   console.log("PACIENTE: ", id);
//   setSelectedPatient(id);
//   redirect(`/calculations/${id}`);
// }


return (
  <section className="col-12 col-md-11 px-5 mx-auto">
    <div className="row py-4 mb-2">
      <h1 className="mb-4 fw-bold text-uppercase text-center pt-2">Patients</h1>
      <form className="d-flex justify-content-center" role="search">
        <SearchBar placeholder="Find patients by name or surname" onChange={filterPatients} value={searchPatient} />
      </form>
    </div>
    <div className="mb-4 d-flex justify-content-end">
      <ButtonModal dataBsTarget="#createPatient" title="Add patients" icon="./icons/add-user.svg" />
    </div>

    {/* TABLA */}
    <div className="table-responsive mb-4" style={{ backgroundColor:"#EDF2FB" }}>
      <table className="table table-striped">
        <thead>
          <tr className="text-center border-bottom border-black">
            <th scope="col" className="align-middle">Lastname</th>
            <th scope="col" className="align-middle">Name</th>
            <th scope="col" className="align-middle">Sex</th>
            <th scope="col" className="align-middle">DOB</th>
            <th scope="col" className="align-middle patient-id">Patient ID</th>
            <th scope="col" className="align-middle">MRN</th>
            <th scope="col" className="align-middle">Organization</th>
            <th scope="col" className="align-middle">Follow Up</th>
            <th scope="col" className="align-middle">Edit patients</th>
            <th scope="col" className="align-middle">Delete</th>
          </tr>
        </thead>

        <tbody className="align-middle">
          {filteredPatients.map((patient) => (
            <tr className="text-center" style={{ cursor:"pointer" }} key={patient.id}>
              <td className="text-center">{ patient.surname }</td>
              <td className="text-center">{ patient.name }</td>
              <td className="text-center">{ patient.sex }</td>
              <td className="text-center">{ patient.dob }</td>
              <td className="text-center">{ patient.identification }</td>
              <td className="text-center">{ patient.medical_record }</td>
              <td className="text-center">{ patient.organization }</td>
              <td className="align-middle">
                <div className="mx-auto">-</div>
              </td>
              <td className="align-middle">
                <Image src={Edit} style={{ width:"18px", cursor:"pointer" }} data-bs-toggle="modal" data-bs-target="#ModalEditPatient" alt="edit icon" />
              </td>
              <td className="align-middle">
                <Image src={Delete} style={{ width: "22px", cursor:"pointer" }} data-bs-toggle="modal" data-bs-target="#modalDelete" alt="trash icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <CreatePatient />
  </section>
)
}

export default PatientsList;