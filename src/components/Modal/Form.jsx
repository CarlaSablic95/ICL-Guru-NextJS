import Button from "../Button/Button";

const Form = () => {
    return (
        <div className="modal fade" id="modalForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered py-5">
                <div className="modal-content">
                <div className="modal-header"> 
                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body pb-0">
                <form className="px-4">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="name" placeholder="example" />
                </div>

                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="lastname" placeholder="example" />
                </div>

                <div className="mb-3">
                    <label htmlFor="dob" className="form-label">Date of birth <span className="text-danger">*</span></label>
                    <input type="date" className="form-control" id="dob" />
                </div>

                    <p className="mb-0">Sex <span className="text-danger">*</span></p>
                    <div className="d-flex justify-content-evenly mb-3">
                        <div className="form-check">
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Female
                    </label>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    </div>

                    <div className="form-check">
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Male
                        </label>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="mrn" className="form-label">Medical records number (MRN) <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="mrn" placeholder="000000" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="patientsID" className="form-label">Patients ID <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="patientsID" placeholder="000000" />
                    </div>
                </form>
                </div>
                <div className="modal-footer border-0 d-flex justify-content-center">
                    <Button type="submit" name="Submit" bg_color="#3DC2DD" />
                </div>
                </div>
            </div>
        </div>
        
    )
}

export default Form;