"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCalculation, getPatient} from "@/services/ApiService";
import { useParams } from "next/navigation";
import { fetchCalculationsFailure, fetchCalculationsStart, fetchCalculationsSuccess } from "@/reduxSlices/calculations/calculationSlice";
import Button from "@/components/Button/Button";
import Edit from "/public/icons/edit.svg";
import Delete from "/public/icons/delete.svg";
import Eye from "@/components/Eyes/EyesOdOs";
import Image from "next/image";
import CalculationDataPatient from "@/components/CalculationsPatient/CalculationDataPatient";
import NewCalculation from "@/components/CalculationsPatient/NewCalculation";

const Calculations = () => {

    const { id } = useParams(); // obtiene el ID de la URL
    console.log("ID recibido en Calculations: ", id);
    const [patient, setPatient] = useState(null);
    const [isLoading, setIsLoading] = useState(true);    
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const calculations = useSelector((state) => state.calculations);
    
    // Obtener el nombre del usuario desde Redux
    const userName = useSelector((state) => state.auth.user?.name);
    
    const [showUsername, setShowUsername] = useState(false);
    const [showCalculation, setShowCalculation] = useState(false);
    const [showNewCalculation, setShowNewCalculation] = useState(false);
    
    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 100) {
          setShowUsername(true);
        } else {
          setShowUsername(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll)
      };
    }, []);
     
     // TRAIGO DATOS DESDE /patients/patients/{id}
     useEffect(() => {
                 const fetchPantientData = async () => {
                     try {
                         setIsLoading(true);
                         const patientData = await getPatient(id);
                         console.log("TRAIGO PACIENTE: ", patientData)
                         setPatient(patientData);
                     } catch(error) {
                         console.error("Error fetching data: ", error);
                         setError("Failed to load patient data");
                     } finally {
                         setIsLoading(false);
                     }
                 }
                 fetchPantientData();
             },[id] );

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
      }

      fetchCalculations();
    }, [dispatch, id]);

    // Muestra componente para edición
    const handleEdit = () => {
      setShowCalculation(true);
    }

    // Muestra componente de la tabla de cálculos
    const handleReturnClick = () => {
      setShowCalculation(false);
      setShowNewCalculation(false);
    }

    // Muestra el componente para crear
    const handleNewCalculation = () => {
      setShowNewCalculation(true);
    }

      
    if(isLoading) return <div>Loading calculation data...</div>
    if(error) return <div>Error: {error}</div>
    if(!patient) return <div>Patient not found for ID: {id}</div>

            return (
                <>
                { showNewCalculation ? (
                  <NewCalculation handleReturnClick={handleReturnClick} />
                ) : showCalculation ?
                 (<CalculationDataPatient handleReturnClick={handleReturnClick} />)     
        :
        (<section className="col-12 col-md-11 px-5 mx-auto">
            
            {/* Muestro nombre del usuario */}
            { showUsername && (
              <div className="bg-warning">
                <p>{ userName }</p>
              </div>
            ) }

            <div className="mb-5">
                <h1 className="text-center text-uppercase fw-bold">Calculations</h1>
            </div>
                    <div className="mb-5 d-flex flex-column align-items-center">
                    <h4 className="mb-1 fs-4 fw-bold">
                            Patient: <small class="text-muted">{`${patient.name} ${patient.surname}`}</small>
                        </h4>
                        <h4 className="mb-1 fs-4 fw-bold">
                        DOB: <small class="text-muted">{`${patient.dob}`}</small>
                        </h4>

                        {/* MOSTRAR NOMBRE DE LA CLINICA */}
                        <h4 className="mb-1 fs-4 fw-bold">
                        Organization: <small class="text-muted">{`${patient.organization}`}</small>
                        </h4>
                    </div>
            <div className="d-flex justify-content-end align-items-center mb-5">
                <Button title="New calculation" icon="../icons/add-user.svg" bgColor="#3DC2DD" rounded="2rem" fontWeight="bold" onClick={() => handleNewCalculation()} />
            </div>
            <div className="table-responsive p-2">
        <table className="table table-striped calculations-table mb-5">
          <thead>
            <tr className="text-center border-bottom border-black">
              <th scope="col" className="align-middle">Calculation date</th>
              <th scope="col" className="align-middle">Surgery date</th>
              <th scope="col" className="align-middle">Result Eyes</th>
              <th scope="col" className="align-middle">Method</th>
              <th scope="col" className="align-middle">Edit calculation</th>
              <th scope="col" className="align-middle">Delete</th>
            </tr>
          </thead>
          <tbody>
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
              <td className="align-middle" onClick={ () => handleEdit() } style={{ cursor:"pointer" }}>February 21,2024</td>
              <td className="align-middle" onClick={ () => handleEdit() } style={{ cursor:"pointer" }}>February 21,2024</td>
              <td className="align-middle" onClick={ () => handleEdit() } style={{ cursor:"pointer" }}>
              <Eye bgColor="#4888C8" color="#fefefe" title="OD" />
              </td>
              <td className="align-middle" onClick={ () => handleEdit() } style={{ cursor:"pointer" }}>ZV1</td>
              <td className="align-middle">
                <Image src={ Edit }  style={{ width:"18px", cursor:"pointer" }} alt="icon" />
              </td>
              <td className="align-middle">
                <Image src={ Delete } style={{ width: "22px", cursor:"pointer"}}data-bs-toggle="modal" data-bs-target="#modalDelete" alt="icon" />
              </td>
            </tr>

          
          </tbody>
        </table>
        </div>
            
        </section>)
        }
   
        
    </>
    )

}


export default Calculations;