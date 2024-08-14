"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getClinics } from "@/services/ApiService";
import { fetchClinicsStart, fetchClinicsSuccess, fetchClinicsFailure } from "@/features/clinics/clinicSlice";
import Image from "next/image";
import Edit from "/public/icons/edit.svg";
import Delete from "/public/icons/delete.svg";
import ButtonModal from "@/components/Button/ButtonModal";
import { SearchBar } from "@/components/Inputs/Inputs";
import styles from "./Clinics.module.css";

const Clinics = () => {
  // CONSUMO DE API DE CLÍNICAS (ORGANIZACIONES)
  const {clinics, status, error } = useSelector((state) => state.clinics);
  console.log("STATE CLINICS: ", useSelector((state) => state.clinics));

  const dispatch = useDispatch();

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

if(status === "loading") return <div>Loading...</div>;
if(status === "failed") return <div>Error: {error}</div>;

  return (
    <section className="col-12 col-md-11 px-5 py-4 mx-auto">
      <h1 className="text-center text-uppercase fw-bold mb-4">Clinics</h1>
        <form className="d-flex justify-content-center" role="search">
              {/* <SearchBar placeholder="Find clinics" onChange={filterPatients}/> */}
                <SearchBar placeholder="Find clinics" />
        </form>
        <div className="my-5 d-flex justify-content-end">
        <ButtonModal dataBsTarget="#modalForm" title="New clinics" icon="./icons/add-clinic.svg" />
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
              { clinics.map((clinic) => (
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
  );
};

export default Clinics;
