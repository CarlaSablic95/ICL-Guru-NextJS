"use client";
import { useDispatch, useSelector }  from "react-redux";
import { deleteAccount } from "@/reduxSlices/accounts/accountSlice";

const DeleteAccount = ({ accountId }) => {
    const dispatch = useDispatch();
    const deletedAccount = useSelector((state) => state.accounts.accounts.find((account) => account.id === accountId));

    console.log("CUENTA A ELIMINAR: ", deletedAccount);
    
    const handleDelete = () => {
        try {
            dispatch(deleteAccount({ id: accountId }));
        } catch (error) {
            console.error("Error deleting account: ", error);
        }
    }

    return (
        <div className="col-10 px-5">
        <div className="modal fade" id="modalDelete" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content px-2 px-md-4">
                <div className="modal-header border-0 pb-2">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body pb-5">
                    <h4 className="text-center">Are you sure you want to delete it?</h4>
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
}

export default DeleteAccount;