import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { getClinics, getAccounts } from "@/services/ApiService";
import {
  fetchClinicsStart,
  fetchClinicsSuccess,
  fetchClinicsFailure,
} from "@/reduxSlices/clinics/clinicSlice";
import {
  fetchAccountsStart,
  fetchAccountsSuccess,
  fetchAccountsFailure,
  addClinicToAccount,
  removeClinicFromAccount,
} from "@/reduxSlices/accounts/accountSlice";
import Button from "../Button/Button2";
import Image from "next/image";
import styles from "@/app/clinics/Clinics.module.css";
import Delete from "/public/icons/delete.svg";
import DeleteClinic from "../Modal/DeleteClinic";

const FormAttachedClinics = ({ accountId }) => {
  const methods = useForm();
  const { register, handleSubmit } = methods;
  const dispatch = useDispatch();

  // Fetch clinics and accounts from Redux state
  const { clinics, clinicsStatus, clinicsError } = useSelector((state) => state.clinics);
  const { accounts, accountsStatus, accountsError } = useSelector((state) => state.accounts);

  const currentAccount = accounts.find((account) => account.id === Number(accountId));

  // Obtener clínicas
  useEffect(() => {
    const fetchClinics = async () => {
      dispatch(fetchClinicsStart());
      try {
        const clinicsData = await getClinics();
        dispatch(fetchClinicsSuccess(clinicsData));
      } catch (error) {
        dispatch(fetchClinicsFailure(error.toString()));
      }
    };
    fetchClinics();
  }, [dispatch]);

  // Obtener cuentas
  useEffect(() => {
    const fetchAccounts = async () => {
      dispatch(fetchAccountsStart());
      try {
        const accountsData = await getAccounts();
        dispatch(fetchAccountsSuccess(accountsData));
      } catch (error) {
        dispatch(fetchAccountsFailure(error.toString()));
      }
    };
    fetchAccounts();
  }, [dispatch]);

  // Añadir clínica al perfil
  const handleClinics = (data) => {
    const clinic = clinics.find((clinic) => clinic.id === Number(data.clinicId));
    if (clinic) {
      const roles = currentAccount.roles || [1];
      const activeOrganizations = currentAccount.active_organizations;
  
      // Verifica que active_organizations tenga un valor válido
      if (!activeOrganizations || activeOrganizations.length === 0) {
        console.error("active_organizations es obligatorio y no se ha proporcionado.");
        return; // O asigna un valor por defecto válido
      }
  
      const payload = {
        roles,
        active_organizations: activeOrganizations,
      };
  
      // Log para depuración
      console.log("Payload a enviar: ", payload);
  
      dispatch(addClinicToAccount({ accountId, ...payload }));
    } else {
      console.error("No se encontró la clínica con el ID proporcionado.");
    }
  };
  // Eliminar clínica
  const deleteClinic = (clinicToDelete) => {
    dispatch(removeClinicFromAccount({ accountId, clinicId: clinicToDelete.id }));
  };

  // Manejando estados de carga y error
  if (clinicsStatus === "loading" || accountsStatus === "loading") return <div>Loading...</div>;
  if (clinicsStatus === "failed") return <div>Error: {clinicsError}</div>;
  if (accountsStatus === "failed") return <div>Error: {accountsError}</div>;
  if (!currentAccount) return <div>Cuenta no encontrada</div>;

  return (
    <>
      <section className="col-12 col-md-5">
        <FormProvider {...methods}>
          <h2 className="text-center mb-3">Clinics Attached to user</h2>
          <form onSubmit={handleSubmit(handleClinics)} className="px-3 px-md-5 mb-4">
            <div className="mb-3">
              <p>Add clinic to user</p>
              <div className="d-flex align-items-center justify-content-between">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  {...register("clinicId")}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one clinic
                  </option>
                  {clinics.map((clinic) => (
                    <option key={clinic.id} value={clinic.id}>
                      {clinic.name}
                    </option>
                  ))}
                </select>
                <Button title="Add clinic" bgColor="#59B03D" borderRadius="2rem" type="submit" />
              </div>
            </div>
          </form>
        </FormProvider>
      </section>

      {/* Tabla de clínicas asignadas */}
      <section className="col-10 col-md-11 py-4 mx-auto">
        <div>
          <div className="pb-5">
            <div className="table-responsive mb-4">
              <table className={`table table-striped ${styles.tableClinics}`}>
                <thead>
                  <tr>
                    <th scope="col" className="text-center">Clinic</th>
                    <th scope="col" className="text-center">Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {currentAccount?.organizations?.map((clinic) => (
                    <tr className="text-center" style={{ cursor: "pointer" }} key={clinic.id}>
                      <td className="text-center align-middle">{clinic.name}</td>
                      <td className="text-center align-middle">
                        <Image
                          src={Delete}
                          style={{ width: "22px", cursor: "pointer" }}
                          data-bs-toggle="modal"
                          data-bs-target="#modalDelete"
                          onClick={() => deleteClinic(clinic)}
                          alt="Delete icon"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <DeleteClinic />
    </>
  );
};

export default FormAttachedClinics;
