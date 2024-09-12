import ButtonModal from "@/components/Button/ButtonModal";

const Accounts = () => {

    return(
        <section className="col-12 col-md-11 px-5 py-4 mx-auto">
          <h1 className="text-center text-uppercase fw-bold mb-4">Accounts</h1>
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
                </tr>
              </thead>

              <tbody>
                {/* { accounts.map((account) => (
                  <tr className="text-center" style={{ cursor: "pointer"}} key={account.id}>
                  <td className="text-center align-middle">{account.user}</td>
                  <td className="text-center align-middle">{account.name}</td>
                  <td className="text-center align-middle">{account.mail}</td>
                  </tr>
                )) } */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
        </section>
    )
}

export default Accounts;