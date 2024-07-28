import ButtonModal from "@/components/Button/ButtonModal";
import Image from "next/image";
import Edit from "/public/icons/edit.svg";
import Delete from "/public/icons/delete.svg";
import styles from "./Account.module.css";

const Accounts = () => {
    return (
        <section className="col-12 col-md-11 px-5 py-4 mx-auto">
      <h1 className="text-center  text-uppercase  fw-bold mb-4">Account Manager</h1>
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
                <tr>
                <td className="text-center align-middle">user-tester</td>

                <td className="text-center align-middle">Juan</td>

                <td className="text-center align-middle">juan@gmail.com</td>

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
                <td className="text-center align-middle">user.demo</td>

                <td className="text-center align-middle">Pablo</td>

                <td className="text-center align-middle">pablo@gmail.com</td>
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
    )
}

export default Accounts;