"use client";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getClinics } from "@/services/ApiService";
import { fetchClinicsStart, fetchClinicsSuccess, fetchClinicsFailure } from "@/reduxSlices/clinics/clinicSlice";
import Image from "next/image";
import Edit from "/public/icons/edit.svg";
import Delete from "/public/icons/delete.svg";
import ButtonModal from "@/components/Button/ButtonModal";
import { SearchBar } from "@/components/Inputs/Input";
import AddClinic from "@/components/Modal/AddClinic";
import ClinicDetails from "@/components/ClinicDetails/ClinicDetails";
import DeleteClinic from "@/components/Modal/DeleteClinic";
import styles from "./Clinics.module.css";

const Clinics = () => {
  const { id } = useParams();
  console.log("ID recibido en Clinics: ", id);
  
  const dispatch = useDispatch();
  // CONSUMO DE API DE CLÍNICAS (ORGANIZACIONES)
  const {clinics, status, error } = useSelector((state) => state.clinics);
  console.log("STATE CLINICS: ", useSelector((state) => state.clinics));

  // FILTRADO
  const [searchClinic, setSearchClinic] = useState("");
  const [filteredClinics, setFilteredClinics] = useState([]);
// Mostrar componente token manager
  const [showClinicDetails, setShowClinicDetails] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState(null);
// Eliminación de clínicas
const [deletedClinicId, setDeletedClinicId] = useState(null);

  useEffect(() => {
    const fetchClinics = async () => {
      dispatch(fetchClinicsStart());

      try {
        const data = await getClinics();
        dispatch(fetchClinicsSuccess(data));
      } catch (error) {
        dispatch(fetchClinicsFailure(error.message));
      }
    };

    fetchClinics();
  }, [dispatch]);

  // FILTRO DE CLÍNICAS
  useEffect(() => {
    setFilteredClinics(clinics);
  }, [clinics]);

  const filterClinics = (e) => {
    const filterValue = e.target.value.toLowerCase();
    console.log("VALOR INGRESADO: ", filterValue);
    // Se actualiza la variable de estado "searchClinic" con el valor filtrado
    setSearchClinic(filterValue);

    // Variable que almacena el resultado del filtrado
    const filteredData = clinics.filter((clinic) => {
      const clinicName = clinic.name.toLowerCase();
      return clinicName.includes(filterValue);
    });

    setFilteredClinics(filteredData);
  }

  // Muestra componente para edición
 const handleEdit = (clinic) => {
  setShowClinicDetails(true);
  setSelectedClinic(clinic);
 }
// Muestra componente de la tabla de clínicas
 const handleReturnClick = () => {
  setShowClinicDetails(false);
  setSelectedClinic(null);
 }

if(status === "loading") return <div>Loading...</div>;
if(status === "failed") return <div>Error: {error}</div>;

  return (
    <>
    {showClinicDetails ? (
      <ClinicDetails onReturn={ handleReturnClick } clinic={ selectedClinic } />) 
      : 
     ( <section className="col-12 col-md-11 px-5 py-4 mx-auto">
        <h1 className="text-center text-uppercase fw-bold mb-4">Clinics</h1>
          <form className="d-flex justify-content-center" role="search">
              <SearchBar placeholder="Find clinics" onChange={filterClinics} value={searchClinic} />
          </form>
          <div className="my-5 d-flex justify-content-end">
          <ButtonModal dataBsTarget="#addClinic" title="New clinics" icon="./icons/add-clinic.svg" />
        </div>
        <div>
          <div className="pb-5">
            <div className="table-responsive mb-4">
              <table className={`table table-striped ${styles.tableClinics}`}>
                <thead>
                  <tr>
                    <th scope="col" className="text-center">
                      Name
                    </th>
                    <th scope="col" className="text-center">
                      Edit
                    </th>
                    <th scope="col" className="text-center">
                      Delete
                    </th>
                  </tr>
                </thead>

                <tbody>
                { filteredClinics.map((clinic) => (
                          <tr className="text-center" style={{ cursor: "pointer"}} key={clinic.id}>
                          <td className="text-center align-middle">{clinic.name}</td>
                          <td className="text-center align-middle">
                            <Image
                              src={Edit}
                              style={{ width: "18px", cursor: "pointer" }}
                              alt="edit icon"
                              onClick={ () => handleEdit(clinic) }
                              />
                          </td>
                          <td className="text-center align-middle">
                            <Image
                              src={Delete}
                              style={{ width: "22px", cursor: "pointer" }}
                              data-bs-toggle="modal"
                              data-bs-target="#modalDelete"
                              onClick={() => setDeletedClinicId(clinic.id)}
                              alt="trash icon"
                              />
                          </td>
                        </tr>
                        )) }
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>)
      }

    <AddClinic />
    <DeleteClinic clinicId={deletedClinicId} />
    </>
  );
};

export default Clinics;
