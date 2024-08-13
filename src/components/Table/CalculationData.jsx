

import Edit from "/public/icons/edit.svg";
import Delete from "/public/icons/delete.svg";
import Eye from "../Eyes/EyesOdOs";
import Image from "next/image";

const CalculationData = () => {
    return (
        <div className="table-responsive p-2">
        <table className="table table-striped calculations-table mb-5">
          <thead>
            <tr className="text-center border-bottom border-black">
              <th scope="col" className="align-middle">Calculation date</th>
              <th scope="col" className="align-middle">Surgery date</th>
              <th scope="col" className="align-middle">Result Eyes</th>
              <th scope="col" className="align-middle">Method</th>
              <th scope="col" className="align-middle">Edit calculation</th>
              <th scope="col" className="align-middle">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="align-middle">February 21,2024</td>
              <td className="align-middle">February 21,2024</td>
              <td className="align-middle">
              <Eye bgColor="#4888C8" color="#fefefe" title="OD" />
              </td>
              <td className="align-middle">ZV1</td>
              <td className="align-middle">
                <Image src={ Edit }  style={{ width:"18px", cursor:"pointer" }} data-bs-toggle="modal" data-bs-target="#ModalEditPatient" alt="icon" />
              </td>
              <td className="align-middle">
                <Image src={ Delete } style={{ width: "22px", cursor:"pointer"}}data-bs-toggle="modal" data-bs-target="#modalDelete" alt="icon" />
              </td>
            </tr>

            <tr className="text-center">
              <td className="align-middle">February 21,2024</td>
              <td className="align-middle">February 21,2024</td>
              <td className="align-middle">
                <Eye bgColor="#2FB297" color="#fefefe" title="OS" />
              </td>
              <td className="align-middle">ZV1</td>
              <td className="align-middle">
                <Image src={ Edit }  style={{ width:"18px", cursor:"pointer" }} data-bs-toggle="modal" data-bs-target="#ModalEditPatient" alt="icon" />
              </td>
              <td className="align-middle">
                <Image src={ Delete } style={{ width: "22px", cursor:"pointer"}}data-bs-toggle="modal" data-bs-target="#modalDelete" alt="icon" />
              </td>
            </tr>

          
          </tbody>
        </table>

        <table className="table table-striped calculations-table">
          <thead>
            <tr className="text-center border-bottom border-black">
              <th scope="col" className="align-middle">Calculation date</th>
              <th scope="col" className="align-middle">Surgery date</th>
              <th scope="col" className="align-middle">Result Eyes</th>
              <th scope="col" className="align-middle">Method</th>
              <th scope="col" className="align-middle">Edit</th>
              <th scope="col" className="align-middle">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="align-middle">June 11,2024</td>
              <td className="align-middle"></td>
              <td className="align-middle">
                <Eye bgColor="#8F8F8F" color="#212529" title="OD" />
              </td>
              <td className="align-middle">ZV1</td>
              <td className="align-middle">
                <Image src={ Edit }  style={{ width:"18px", cursor:"pointer" }} data-bs-toggle="modal" data-bs-target="#ModalEditPatient" alt="edit icon" />
              </td>
              <td className="align-middle">
                <Image src={ Delete } style={{ width: "22px", cursor:"pointer"}}data-bs-toggle="modal" data-bs-target="#modalDelete" alt="trash icon"/>
              </td>
            </tr>

            <tr className="text-center">
              <td className="align-middle">June 11,2024</td>
              <td className="align-middle"></td>
              <td className="align-middle">
              <Eye bgColor="#8F8F8F" color="#212529" title="OS" />
              </td>
              <td className="align-middle">ZV1</td>
              <td className="align-middle">
                <Image src={ Edit }  style={{ width:"18px", cursor:"pointer" }} data-bs-toggle="modal" data-bs-target="#ModalEditPatient" alt="edit icon"/>
              </td>
              <td className="align-middle">
                <Image src={ Delete } style={{ width: "22px", cursor:"pointer"}}data-bs-toggle="modal" data-bs-target="#modalDelete" alt="trash icon"/>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
    )
}

export default CalculationData;