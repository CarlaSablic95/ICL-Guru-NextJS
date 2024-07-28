const LeftEyeResult = () => {
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
              <td className="align-middle" style={{ backgroundColor: "#FF0000", borderRadius: "0" }}>0.078 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#FF0000", borderRadius: "0" }}>0.067 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>38°</td>
            </tr>

            <tr className="text-center">
              <td className="align-middle" style={{ backgroundColor: "#82BECA", borderRadius: "0" }}>12.6 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>0.309 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>0.298 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>35°</td>
            </tr>

            <tr className="text-center">
              <td className="align-middle" style={{ backgroundColor: "#ADD7EE", borderRadius: "0" }}>13.2 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>0.341 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>0.330 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>34°</td>
            </tr>

            <tr className="text-center">
              <td className="align-middle" style={{ backgroundColor: "#82BECA", borderRadius: "0" }}>13.7 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>0.552 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>0.541 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "0" }}>21°</td>
            </tr>
          
          </tbody>
        </table>
      </div>
    )
}

export default LeftEyeResult;