"use client";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getClinics } from "@/services/ApiService";
import { fetchClinicsStart, fetchClinicsSuccess, fetchClinicsFailure } from "@/reduxSlices/clinics/clinicSlice";
import Image from "next/image";
import Edit from "/public/icons/edit.svg";
import Delete from "/public/icons/delete.svg";
import ButtonModal from "@/components/Button/ButtonModal";
import { SearchBar } from "@/components/Inputs/Input";
import AddClinic from "@/components/Modal/AddClinic";
import TokenManager from "@/components/Modal/TokenManager";
import DeleteClinic from "@/components/Modal/DeleteClinic";
import styles from "./Clinics.module.css";

const Clinics = () => {
  const dispatch = useDispatch();
  // CONSUMO DE API DE CLÍNICAS (ORGANIZACIONES)
  const {clinics, status, error } = useSelector((state) => state.clinics);
  console.log("STATE CLINICS: ", useSelector((state) => state.clinics));

  // FILTRADO
  const [searchClinic, setSearchClinic] = useState("");
  const [filteredClinics, setFilteredClinics] = useState([]);

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

  const filterClinics = (event) => {
    const filterValue = event.target.value.toLowerCase();

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


if(status === "loading") return <div>Loading...</div>;
if(status === "failed") return <div>Error: {error}</div>;

  return (
    <>
      <section className="col-12 col-md-11 px-5 py-4 mx-auto">
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
                              data-bs-toggle="modal"
                              data-bs-target="#ModalEditPatient"
                              alt="edit icon"
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
      </section>

    <AddClinic />
    <TokenManager />
    <DeleteClinic clinicId={deletedClinicId} />
    </>
  );
};

export default Clinics;
