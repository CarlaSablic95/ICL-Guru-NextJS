"use client";

import Button from "../Button/Button2";

const FilesOD = () => {
    return (
        <div className="modal fade" id="filesOD" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered py-5">
                    <div className="modal-content">
                    <div className="d-flex justify-content-between p-2"> 
                        <h4 className="ps-3">OD - Please, choose a file</h4>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body pb-0">
                        <p>Lista de archivos</p>
                    </div>
                    <div class="modal-footer">
                                <Button type="button" title="Cancel" bgColor="#3DC2DD"  />
                                <Button type="button" title="OK" bgColor="#3DC2DD"  />
                            </div>
                    </div>
                </div>
            </div>
    )
}

export default FilesOD;