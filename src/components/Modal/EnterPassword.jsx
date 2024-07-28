import { Input } from "../Inputs/Inputs";


const EnterPassword = () => {
    return(
        <div className="modal fade" id="enterPassword" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content px-2 px-md-4">
                <div className="modal-header pb-2">
                    <h4>Please put your password</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <Input 
                    label="Password:"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="********"
                        />
                </div>
                <div className="d-flex justify-content-evenly pb-3">
                    <button type="button" className="btn text-white text-uppercase py-2 rounded-4" style={{ backgroundColor: "#3DC2DD", width:"130px" }} data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn border-0 text-white text-uppercase py-2 rounded-4" style={{ backgroundColor: "#E92F30", width:"130px" }} data-bs-dismiss="modal">Delete</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default EnterPassword;