"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAccounts } from "@/services/ApiService";
import ButtonModal from "@/components/Button/ButtonModal";
import AddAccount from "../Modal/AddAccount";
import styles from "@/app/accounts/Account.module.css";
import {
  fetchAccountsStart,
  fetchAccountsSuccess,
  fetchAccountsFailure,
} from "@/reduxSlices/accounts/accountSlice";

const Accounts = ({ clinicId }) => {
  console.log("ID recibido en Cuentas: ", clinicId);

  const dispatch = useDispatch();
  const { accounts, status, error } = useSelector((state) => state.accounts);

  useEffect(() => {
    const fetchAccounts = async () => {
      dispatch(fetchAccountsStart());

      try {
        const data = await getAccounts();
        dispatch(fetchAccountsSuccess(data));
      } catch (error) {
        dispatch(fetchAccountsFailure(error.message));
      }
    };

    fetchAccounts();
  }, [dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  // Filtro las cuentas que estan asociadas a la clinica especificada

  // comparo el id de la clinica con el id de la clinica que esta en el array de clinicas
  const accountsForClinic = accounts.filter(
    (account) =>
      account.organizations &&
      account.organizations.some((org) => org.id === Number(clinicId))
  );

  return (
    <>
      <section className="col-12 col-md-11 px-5 py-4 mx-auto">
        <h1 className="text-center text-uppercase fw-bold mb-4">Accounts</h1>
        <div className="my-3 d-flex justify-content-end">
          <ButtonModal
            dataBsTarget="#modalForm"
            title="New account"
            icon="./icons/add-account.svg"
          />
        </div>
        <div>
          <div className="pb-5">
            <div className="table-responsive mb-4">
              <table className={`table table-striped ${styles.tableAccounts}`}>
                <thead>
                  <tr>
                    <th scope="col" className="text-center">
                      Username
                    </th>
                    <th scope="col" className="text-center">
                      Name
                    </th>
                    <th scope="col" className="text-center">
                      Email
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {accountsForClinic.length > 0 ? (
                    accountsForClinic.map((account) => (
                      <tr
                        className="text-center"
                        style={{ cursor: "pointer" }}
                        key={account.id}
                      >
                        <td className="text-center align-middle">
                          {account.user}
                        </td>
                        <td className="text-center align-middle">
                          {account.name}
                        </td>
                        <td className="text-center align-middle">
                          {account.email}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center">
                        No hay cuentas asociadas
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <AddAccount />
    </>
  );
};

export default Accounts;
