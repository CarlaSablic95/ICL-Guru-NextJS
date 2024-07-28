"use client";
import Image from "next/image";
import Edit from "/public/icons/edit.svg";
import Delete from "/public/icons/delete.svg";
import ButtonModal from "@/components/Button/ButtonModal";
import { SearchBar } from "@/components/Inputs/Inputs";
import styles from "./Clinics.module.css";

const Clinics = () => {
  // CONSUMO DE API DE CLÍNICAS (ORGANIZACIONES)

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
                <tr>
                  <td className="text-center align-middle">Clínica prueba</td>

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
                <tr>
                  <td className="text-center">Clínica Rosario</td>

                  <td className="text-center">
                    <Image
                      src={Edit}
                      style={{ width: "18px", cursor: "pointer" }}
                      data-bs-toggle="modal"
                      data-bs-target="#ModalEditPatient"
                      alt="edit icon"
                      />
                  </td>
                  <td className="text-center">
                    <Image
                      src={Delete}
                      style={{ width: "22px", cursor: "pointer" }}
                      data-bs-toggle="modal"
                      data-bs-target="#modalDelete"
                      alt="trash icon"
                      />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clinics;
