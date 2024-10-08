"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import {
  fetchPatientsStart,
  fetchPatientsSuccess,
  fetchPatientsFailure,
} from "@/reduxSlices/patients/patientSlice";
import { getPatients } from "@/services/ApiService";
import { SearchBar } from "@/components/Inputs/Input";
import ButtonModal from "@/components/Button/ButtonModal";
import Pagination from "@/components/Pagination/Pagination";
import AddPatient from "@/components/Modal/AddPatient";
import EditPatient from "@/components/Modal/EditPatient";
import DeletePatient from "@/components/Modal/DeletePatient";
import Edit from "/public/icons/edit.svg";
import Delete from "/public/icons/delete.svg";
import IclGif from "/public/img/icl-gif.gif";

const PatientsList = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { patients, status, error } = useSelector((state) => state.patients);
  console.log("PACIENTES EN EL ESTADO: ", patients);

  const [searchPatient, setSearchPatient] = useState("");
  const [filteredPatients, setFilteredPatients] = useState([]);
  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [patientsPerPage] = useState(4);
  // Edición de pacientes
  const [editingPatientId, setEditingPatientId] = useState(null);
  // Eliminación de pacientes
  const [deletedPatientId, setDeletedPatientId] = useState(null);

  // Calcula los pacientes que se mostrarán en la pagina actual
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = filteredPatients.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );

  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage);

  // Obtención de pacientes
  useEffect(() => {
    const fetchPatients = async () => {
      dispatch(fetchPatientsStart());
      try {
        const data = await getPatients();
        console.log("Pacientes cargados: ", data);
        dispatch(fetchPatientsSuccess(data));
      } catch (error) {
        dispatch(fetchPatientsFailure(error.message));
      }
    };

    fetchPatients();
  }, [dispatch]);

  // FILTRO DE PACIENTES
  useEffect(() => {
    setFilteredPatients(patients);
  }, [patients]);

  const filterPatients = (e) => {
    const filterValue = e.target.value.toLowerCase();
    console.log("VALOR INGRESADO: ", filterValue);

    // Se actualiza la variable de estado "searchPatient" con el valor filtrado
    setSearchPatient(filterValue);

    // Variable que almacena el resultado del filtrado
    const filteredData = patients.filter((patient) => {
      const patientName = patient.name.toLowerCase();
      const patientSurname = patient.surname.toLowerCase();

      return (
        patientName.includes(filterValue) ||
        patientSurname.includes(filterValue)
      );
    });

    setFilteredPatients(filteredData);
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

  // Función para ver el cálculo del paciente

  const handleSetSelectedPatient = (id) => {
    console.log("ID DE PACIENTE: ", id);
    // setSelectedPatient(id);
    router.push(`/calculation/${id}/`);
    // console.log("PACIENTE SELECCIONADO: ", id);
  };

  // Mensajes de éxito o error para informar al usuario
  const showToast = (type, message) => {
    if (type === "success") {
      toast.success(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.error(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <section className="col-12 col-md-11 px-3 px-md-5 mx-auto">
        <div className="row py-4 mb-2">
          <h1 className="mb-4 fw-bold text-uppercase text-center pt-2">
            Patients
          </h1>
          <form className="d-flex justify-content-center" role="search">
            <SearchBar
              placeholder="Find patients by name or surname"
              onChange={filterPatients}
              value={searchPatient}
            />
          </form>
        </div>
        <div className="mb-4 d-flex justify-content-end">
          <ButtonModal
            dataBsTarget="#addPatient"
            title="Add patients"
            icon="./icons/add-user.svg"
          />
        </div>

        {/* Notificación */}
        <ToastContainer />

        {/* TABLA */}
        <div
          className="table-responsive mb-4"
          style={{ backgroundColor: "#EDF2FB" }}
        >
          <table className="table table-striped">
            <thead>
              <tr className="text-center border-bottom border-black">
                <th scope="col" className="align-middle">
                  Lastname
                </th>
                <th scope="col" className="align-middle">
                  Name
                </th>
                <th scope="col" className="align-middle">
                  Sex
                </th>
                <th scope="col" className="align-middle">
                  DOB
                </th>
                <th scope="col" className="align-middle patient-id">
                  Patient ID
                </th>
                <th scope="col" className="align-middle">
                  MRN
                </th>
                <th scope="col" className="align-middle">
                  Organization
                </th>
                <th scope="col" className="align-middle">
                  Follow Up
                </th>
                <th scope="col" className="align-middle">
                  Edit patients
                </th>
                <th scope="col" className="align-middle">
                  Delete
                </th>
              </tr>
            </thead>
            {filteredPatients.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan={10} className="text-center">
                    <p>Patient not found</p>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody className="align-middle">
                {currentPatients.map((patient) => (
                  <tr
                    className="text-center"
                    style={{ cursor: "pointer" }}
                    key={patient.id}
                  >
                    <td
                      className="text-center"
                      onClick={() =>
                        handleSetSelectedPatient(String(patient.id))
                      }
                    >
                      {patient.surname}
                    </td>
                    <td
                      className="text-center"
                      onClick={() =>
                        handleSetSelectedPatient(String(patient.id))
                      }
                    >
                      {patient.name}
                    </td>
                    <td
                      className="text-center"
                      onClick={() =>
                        handleSetSelectedPatient(String(patient.id))
                      }
                    >
                      {patient.sex}
                    </td>
                    <td
                      className="text-center"
                      onClick={() =>
                        handleSetSelectedPatient(String(patient.id))
                      }
                    >
                      {patient.dob}
                    </td>
                    <td
                      className="text-center"
                      onClick={() =>
                        handleSetSelectedPatient(String(patient.id))
                      }
                    >
                      {patient.identification}
                    </td>
                    <td
                      className="text-center"
                      onClick={() =>
                        handleSetSelectedPatient(String(patient.id))
                      }
                    >
                      {patient.medical_record}
                    </td>
                    <td
                      className="text-center"
                      onClick={() =>
                        handleSetSelectedPatient(String(patient.id))
                      }
                    >
                      {patient.organization}
                    </td>
                    <td
                      className="align-middle"
                      onClick={() =>
                        handleSetSelectedPatient(String(patient.id))
                      }
                    >
                      <div className="mx-auto">-</div>
                    </td>
                    <td
                      className="align-middle"
                      data-bs-toggle="modal"
                      data-bs-target="#ModalEditPatient"
                      onClick={() => setEditingPatientId(patient.id)}
                    >
                      <Image
                        src={Edit}
                        style={{ width: "18px", cursor: "pointer" }}
                        alt="edit icon"
                      />
                    </td>
                    <td
                      className="align-middle"
                      data-bs-toggle="modal"
                      data-bs-target="#modalDelete"
                      onClick={() => setDeletedPatientId(patient.id)}
                    >
                      <Image
                        src={Delete}
                        style={{ width: "22px", cursor: "pointer" }}
                        alt="trash icon"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </section>
      {/* VENTANAS MODALES */}
      <AddPatient showToast={showToast} />
      <EditPatient patientId={editingPatientId} showToast={showToast} />
      <DeletePatient patientId={deletedPatientId} showToast={showToast} />
    </>
  );
};

export default PatientsList;
