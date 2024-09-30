
"use client";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getClinics } from "@/services/ApiService";
import { fetchClinicsStart, fetchClinicsSuccess, fetchClinicsFailure } from "@/reduxSlices/clinics/clinicSlice";
import Image from "next/image";
import Pagination from "@/components/Pagination/Pagination";
import Edit from "/public/icons/edit.svg";
import Delete from "/public/icons/delete.svg";
import ButtonModal from "@/components/Button/ButtonModal";
import { SearchBar } from "@/components/Inputs/Input";
import AddClinic from "@/components/Modal/AddClinic";
import DeleteClinic from "@/components/Modal/DeleteClinic";
import styles from "./Clinics.module.css";
import IclGif from "/public/img/icl-gif.gif";

const Clinics = () => {
  const { id } = useParams();
  console.log("ID recibido en Clinics: ", id);
const router = useRouter(); // para redireccionar a la pagina de detalle


  const dispatch = useDispatch();
  // CONSUMO DE API DE CLÍNICAS (ORGANIZACIONES)
  const {clinics, status, error } = useSelector((state) => state.clinics);
  console.log("STATE CLINICS: ", useSelector((state) => state.clinics));

  // FILTRADO
  const [searchClinic, setSearchClinic] = useState("");
  const [filteredClinics, setFilteredClinics] = useState([]);
  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [clinicsPerPage] = useState(4);

// Eliminación de clínicas
const [deletedClinicId, setDeletedClinicId] = useState(null);

// Calcula las clinicas que se mostrarán en la pagina actual
const indexOfLastClinic = currentPage * clinicsPerPage;
const indexOfFirstClinic = indexOfLastClinic - clinicsPerPage;
const currentClinics = filteredClinics.slice(indexOfFirstClinic, indexOfLastClinic);

const totalPages = Math.ceil(filteredClinics.length / clinicsPerPage);



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

  // Redirige a la página de detalle de la clínica
 const handleEdit = (id) => {
  router.push(`/clinics/${id}`)
 }

// Mensajes de éxito o error para informar al usuario
const showToast = (type, message) => {
  if(type === "success") {
    toast.success(message, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  } else {
    toast.error(message, {
      position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    })
  }
}

if(status === "loading"){ 
  return (
<div className="d-flex justify-content-center align-items-center vh-100">
      <Image src={IclGif} alt="Gif" style={{ width:"250px", height:"200px" }} />
</div>
)};

if(status === "failed") {
  return (
  <div className="d-flex justify-content-center align-items-center vh-100 text-danger">Error: {error}</div>
  )}

  return (
    <>
    <section className="col-12 col-md-11 px-3 px-md-5 py-4 mx-auto">
        <h1 className="text-center text-uppercase fw-bold mb-4">Clinics</h1>
          <form className="d-flex justify-content-center" role="search">
              <SearchBar placeholder="Find clinics" onChange={filterClinics} value={searchClinic} />
          </form>
          <div className="my-5 d-flex justify-content-end">
          <ButtonModal dataBsTarget="#addClinic" title="New clinics" icon="./icons/add-clinic.svg" />
        </div>
        <div>
          <div className="pb-2">
            <div className="table-responsive mb-4">
            <table className={`table table-striped ${styles.tableClinics}`} style={{ backgroundColor:"#EDF2FB"}}>
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

              
                { filteredClinics.length === 0 ? 
                        (<tbody>
                          <tr>
                            <td colSpan={10} className="text-center">
                              <p>Clinic not found</p>
                            </td>
                          </tr>
                        </tbody>) : (
                          <tbody className="align-middle">
                          {currentClinics.map((clinic) => (
                          <tr className="text-center" style={{ cursor: "pointer"}} key={clinic.id}>
                          <td className="text-center align-middle">{clinic.name}</td>
                          <td className="text-center align-middle">
                            <Image
                              src={Edit}
                              style={{ width: "18px", cursor: "pointer" }}
                              alt="edit icon"
                              onClick={ () => handleEdit(clinic.id) }
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
                        </tr>))}
                
                      </tbody> )} 
              </table>
            </div>
          </div>
        </div>

        <ToastContainer />

        <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
      </section>


    <AddClinic showToast={showToast} />
    <DeleteClinic clinicId={deletedClinicId} showToast={showToast} />
    </>
  );
};

export default Clinics;
