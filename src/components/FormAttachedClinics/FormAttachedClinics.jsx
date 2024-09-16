import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { getClinics, getAccounts } from "@/services/ApiService";
import {
  fetchClinicsStart,
  fetchClinicsSuccess,
  fetchClinicsFailure,
} from "@/reduxSlices/clinics/clinicSlice";
import { fetchAccountsStart, fetchAccountsSuccess, fetchAccountsFailure, addClinicToAccount, removeClinicFromAccount } from "@/reduxSlices/accounts/accountSlice";
import Button from "../Button/Button2";
import Image from "next/image";
import styles from "@/app/clinics/Clinics.module.css"
import Delete from "/public/icons/delete.svg";

const FormAttachedClinics = ({ accountId }) => {
  console.log("ACCOUNT ID: ", accountId)
  const methods = useForm();
  const { register, handleSubmit } = methods;
  const dispatch = useDispatch();

  // FETCH CLINICS FROM REDUX STATE
  const { clinics, clinicsStatus, clinicsError } = useSelector((state) => state.clinics);
  const { accounts, accountsStatus, accountsError } = useSelector((state) => state.accounts);

  const currentAccount = accounts.find(account => account.id === accountId )

//   Obtengo las clínicas para añadir, en la lista desplegable
  useEffect(() => {
    const fetchClinics = async () => {
      dispatch(fetchClinicsStart());
      try {
        const clinicsData = await getClinics();
        console.log("Clinics data: ", clinicsData);
        dispatch(fetchClinicsSuccess(clinicsData));
      } catch (error) {
        console.error("Error fetching clinics or accounts: ", error);
        dispatch(fetchClinicsFailure(error.toString()));
      }
    };

    fetchClinics();
  }, [dispatch]);

  // TRAIGO CUENTAS
  useEffect(() => {
    const fetchAccounts = async () => {
      dispatch(fetchAccountsStart());
      try {
        const accountsData = await getAccounts();
        console.log("Accounts data: ", accountsData);
        dispatch(fetchAccountsSuccess(accountsData));
      } catch (error) {
        console.error("Error fetching clinics or accounts: ", error);
        dispatch(fetchAccountsFailure(error.toString()));
      }
    };

    fetchAccounts();
  }, [dispatch]);

//  AÑADO CLÍNICA A UN PERFIL
const handleClinics = (data) => {
    const clinic = clinics.find((clinic) => clinic.id === parseInt(data.clinicId));
    dispatch(addClinicToAccount({ accountId, clinic }));
    console.log("Clinic attached successfully: ", clinic.name);
}

  const deleteClinic = (clinicToDelete) => {
   dispatch(removeClinicFromAccount({ accountId, clinicId: clinicToDelete.id }))
    console.log("Clinic deleted successfully: ", clinicToDelete.name);
  };


  if (clinicsStatus === "loading" || accountsStatus === "loading") return <div>Loading...</div>;

  if (clinicsStatus === "failed") return <div>Error: {clinicsError}</div>;

  if(accountsStatus === "failed") return <div>Error: {accountsError}</div>;

  if(!currentAccount) return <div>Cuenta no encontrada</div>;

  return (
    <>
        <section className="col-12 col-md-5">
        <FormProvider {...methods}>
            {console.log("METHODS: ", methods.getValues())}
            <h2 className="text-center mb-3">Clinics Attached to user</h2>
            <form
            onSubmit={handleSubmit(handleClinics)}
            className="px-3 px-md-5 mb-4"
            >
            <div className="mb-3">
                <p>Add clinic to user</p>
                <div className="d-flex align-items-center justify-content-between">
                <select
                    class="form-select"
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
                <Button
                    title="Add clinic"
                    bgColor="#59B03D"
                    borderRadius="2rem"
                />
                </div>
            </div>

            <div className="mb-3">
                <div>
                <p>Delete clinic to user</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select one clinic</option>
                    <option value="option">Option</option> {/* ACÁ DEBO IMPRIMIR EL LISTADO DE CLINICAS ASOCIADAS */}
                </select>
                <Button
                    title="Delete clinic"
                    bgColor="#FF0000"
                    borderRadius="2rem"
                />
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
                        <th scope="col" className="text-center">
                        Clinic
                        </th>
                        <th scope="col" className="text-center">
                        Delete
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    { currentAccount.organizations.map((clinic) => (
                            <tr className="text-center" style={{ cursor: "pointer"}} key={clinic.id}>
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
    </>
  );
};
export default FormAttachedClinics;
