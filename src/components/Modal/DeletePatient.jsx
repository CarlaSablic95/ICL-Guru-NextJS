"use client";
import { useDispatch, useSelector } from "react-redux";
import { deletePatient } from "@/features/patients/patientSlice";

const DeletePatient = ({ patientId }) => {
    const dispatch = useDispatch();
    const deletedPatient = useSelector((state) => state.patients.patients.find((patient) => patient.id === patientId));

    console.log("PACIENTE A ELIMINAR: ", deletedPatient);

    const handleDelete = () => {
        try {
            dispatch(deletePatient({id: patientId}));
        } catch (error) {
            console.error("Error deleting patient: ", error);
            
        }
    }
    
    return(
        <div className="col-10 px-5">
        <div className="modal fade" id="modalDelete" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content px-2 px-md-4">
                <div className="modal-header pb-2">
                    <h4>Are you sure you want to delete it?</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p className="text-center">The patient and all his records will be deleted. Do you wish to continue?</p>
                </div>
                <div className="d-flex justify-content-evenly pb-3">
                    <button type="button" className="btn text-white text-uppercase py-2 rounded-4" style={{ backgroundColor: "#3DC2DD", width:"130px" }} data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn border-0 text-white text-uppercase py-2 rounded-4" style={{ backgroundColor: "#E92F30", width:"130px" }} data-bs-dismiss="modal" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
};

export default DeletePatient;