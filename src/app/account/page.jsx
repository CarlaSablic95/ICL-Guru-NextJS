"use client"

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAccounts } from "@/services/ApiService";
import { fetchAccountsStart, fetchAccountsSuccess, fetchAccountsFailure } from "@/reduxSlices/accounts/accountSlice";
import ButtonModal from "@/components/Button/ButtonModal";
import Image from "next/image";
import Edit from "/public/icons/edit.svg";
import Delete from "/public/icons/delete.svg";
import styles from "./Account.module.css";
import AddAccount from "@/components/Modal/AddAccount";
import EditAccount from "@/components/Modal/EditAccount";
import DeleteAccount from "@/components/Modal/DeleteAccount";

const Accounts = () => {
  const dispatch = useDispatch();
  const { accounts, status, error } = useSelector((state) => state.accounts);
  console.log("STATE ACCOUNTS: ", useSelector((state) => state.accounts));
  
  // Eliminación de cuentas
  const [deletedAccountId, setDeletedAccountId] = useState(null);



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

if(status === "loading") return <div>Loading...</div>;
if(status === "failed") return <div>Error: {error}</div>;




    return (
      <>
        <section className="col-12 col-md-11 px-5 py-4 mx-auto">
          <h1 className="text-center text-uppercase fw-bold mb-4">Account Manager</h1>
        <div className="my-5 d-flex justify-content-end">
        <ButtonModal dataBsTarget="#modalForm" title="New account" icon="./icons/add-account.svg" />
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
                  <th scope="col" className="text-center">
                    Edit
                  </th>
                  <th scope="col" className="text-center">
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody>
                { accounts.map((account) => (
                  <tr className="text-center" style={{ cursor: "pointer"}} key={account.id}>
                  <td className="text-center align-middle">{account.user}</td>
                  <td className="text-center align-middle">{account.name}</td>
                  <td className="text-center align-middle">{account.mail}</td>
                    <td className="text-center align-middle">
                      <Image
                        src={Edit}
                        style={{ width: "18px", cursor: "pointer" }}
                        data-bs-toggle="modal"
                        data-bs-target="#ModalEdit"
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
                        onClick={() => setDeletedAccountId(account.id)}
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

        <AddAccount />
        <EditAccount />
        <DeleteAccount accountId={deletedAccountId}/>
      </>
    )
}

export default Accounts;