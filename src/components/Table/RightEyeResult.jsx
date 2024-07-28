const RightEyeResult = () => {
    return (
        <div className="table-responsive p-2 w-100">
        <table className="table table-striped calculations-table mb-5">
          <thead>
            <tr className="text-center border-bottom border-black">
              <th scope="col" className="align-middle">IOL overall diameter</th>
              <th scope="col" className="align-middle">Central vault</th>
              <th scope="col" className="align-middle">Peripheral vault</th>
              <th scope="col" className="align-middle">Angle</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="text-center">
              <td className="align-middle" style={{ backgroundColor: "#ADD7EE", borderRadius: "0" }}>12.1 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#FF0000", borderRadius: "0" }}>0.133 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#FF0000", borderRadius: "0" }}>0.122 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>36°</td>
            </tr>

            <tr className="text-center">
              <td className="align-middle" style={{ backgroundColor: "#82BECA", borderRadius: "0" }}>12.6 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>0.364 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>0.353 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>32°</td>
            </tr>

            <tr className="text-center">
              <td className="align-middle" style={{ backgroundColor: "#ADD7EE", borderRadius: "0" }}>13.2 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>0.396 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>0.385 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>32°</td>
            </tr>

            <tr className="text-center">
              <td className="align-middle" style={{ backgroundColor: "#82BECA", borderRadius: "0" }}>13.7 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>0.607 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>0.596 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>29°</td>
            </tr>
          
          </tbody>
        </table>
      </div>
    )
}

export default RightEyeResult;