"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getAccounts } from "@/services/ApiService";
import { fetchAccountsStart, fetchAccountsSuccess, fetchAccountsFailure } from "@/reduxSlices/accounts/accountSlice";
import ButtonModal from "@/components/Button/ButtonModal";
import Pagination from "@/components/Pagination/Pagination";
import { SearchBar } from "@/components/Inputs/Input";
import Image from "next/image";
import Edit from "/public/icons/edit.svg";
import Delete from "/public/icons/delete.svg";
import styles from "./Account.module.css";
import AddAccount from "@/components/Modal/AddAccount";
import DeleteAccount from "@/components/Modal/DeleteAccount";

const Accounts = () => {
  const { id } = useParams();
  console.log("ID recibido en Accounts: ", id);
  const router = useRouter();
  
  const dispatch = useDispatch();
  const { accounts, status, error } = useSelector((state) => state.accounts);
  console.log("STATE ACCOUNTS: ", useSelector((state) => state.accounts));

  // Eliminación de cuentas
  const [deletedAccountId, setDeletedAccountId] = useState(null);

  // FILTRADO
  const [searchAccount, setSearchAccount] = useState("");
  const [filteredAccounts, setFilteredAccounts] = useState([]);

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [accountsPerPage] = useState(3);

// Calcula las cuentas que se mostrarán en la pagina actual
const indexOfLastAccount = currentPage * accountsPerPage;
const indexOfFirstAccount = indexOfLastAccount - accountsPerPage;
const currentAccounts = filteredAccounts.slice(indexOfFirstAccount, indexOfLastAccount);

const totalPages = Math.ceil(filteredAccounts.length / accountsPerPage);

// FILTRO
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

// FILTRO DE CUENTAS
useEffect(() => {
  setFilteredAccounts(accounts);
}, [accounts]);

const filterAccounts = (e) => {
  const filterValue = e.target.value.toLowerCase();
  console.log("VALOR INGRESADO: ", filterValue);
 
  setSearchAccount(filterValue);

  // Variable que almacena el resultado del filtrado
  const filteredData = accounts.filter((account) => {
    const accountName = account.user.toLowerCase();
    return accountName.includes(filterValue);
  });

  setFilteredAccounts(filteredData);
}

// Muestra componente para edición
const handleEdit = (id) => {
  router.push(`/accounts/${id}`);
}

if(status === "loading") return <div>Loading...</div>;
if(status === "failed") return <div>Error: {error}</div>;


    return (
      <>
     {( <section className="col-12 col-md-11 px-5 py-4 mx-auto">
          <h1 className="text-center text-uppercase fw-bold mb-4">Accounts Manager</h1>
          <form className="d-flex justify-content-center" role="search">
              <SearchBar placeholder="Find accounts" onChange={filterAccounts} value={searchAccount} />
          </form>
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

              { filteredAccounts.length === 0 ? 
                        (<tbody>
                          <tr>
                            <td colSpan={10} className="text-center">
                              <p>Account not found</p>
                            </td>
                          </tr>
                        </tbody>) : (
                          <tbody className="align-middle">
                          {currentAccounts.map((account) => (
                          <tr className="text-center" style={{ cursor: "pointer"}} key={account.id}>
                          <td className="text-center align-middle">{account.user}</td>
                          <td className="text-center align-middle">{account.name}</td> <td className="text-center align-middle">{account.email}</td>
                          <td className="text-center align-middle">
                            <Image
                              src={Edit}
                              style={{ width: "18px", cursor: "pointer" }}
                              alt="edit icon"
                              onClick={ () => handleEdit(account.id) }
                              />
                          </td>
                          <td className="text-center align-middle">
                            <Image
                              src={Delete}
                              style={{ width: "22px", cursor: "pointer" }}
                              data-bs-toggle="modal"
                              data-bs-target="#modalDelete"
                              onClick={() => setDeletedAccountId(account.id)}
                              alt="trash icon"
                              />
                          </td>
                        </tr>))}
                
                      </tbody> )} 
            </table>
          </div>
        </div>
      </div>
        </section>)}

        <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />

        <AddAccount />
        <DeleteAccount accountId={deletedAccountId}/>
      </>
    )
}

export default Accounts;