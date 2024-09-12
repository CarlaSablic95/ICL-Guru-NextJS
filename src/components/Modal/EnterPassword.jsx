"use client";
import { Input } from "../Inputs/Input";
import Button from "../Button/Button2";

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
                    <Button type="submit" title="Submit" bgColor="#3DC2DD"  />
                </div>
            </div>
        </div>
    </div>
    )
}

export default EnterPassword;