import PatientsList from "@/components/Table/PatientsList";
import CreatePatient from "@/components/Modal/CreatePatient";
import EditPatient from "@/components/Modal/EditPatient";
import DeletePatient from "@/components/Modal/DeletePatient";


const Patients = () => {
  
  return (
    <>
      {/* Tabla de pacientes */}
      <PatientsList />

      {/* Modales con 2 formularios para crear y editar pacientes. */}
      <CreatePatient />
      <EditPatient />

      {/* Modal de confirmación de eliminación del paciente */}
      <DeletePatient />
    </>
  );
};

export default Patients;


