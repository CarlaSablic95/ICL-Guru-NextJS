import Button from "../Button/Button2";

const WTW = () => {

    return (
        <section className="w-100">
        <div className="card rounded-5" style={{ width: "100%" }}>
        <div className="card-body">
        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                            <label className="form-check-label fw-bold" for="flexSwitchCheckChecked">Edit </label>
                        </div>
            <h3 className="card-title text-center">WTW</h3>
            <p className="fw-bold text-center">(Required for reference and validation only)</p>
            
            <div className="container">
                <div>
                    <form action="" className="row justify-content-evenly">
                        <div className="col-10 col-md-5 rounded-5 p-3 mb-3" style={{ backgroundColor:"#AAC7E5" }}>
                            <div className="rounded-5 mx-auto p-2" style={{ backgroundColor:"#4888C8", width:"50px" }}>
                                <h4 className="text-white fw-bold text-center">OD</h4>
                            </div>
                            <div className="mb-3">
                                <h5>WTW*: </h5>
                                        <div className="input-group calc-form mb-3">
                                            <input step="0.001" className="form-control vault" id="c_vault_postop_QX" aria-describedby="Central vault" type="number" name="c_vault_postop_QX" />
                                            <span className="input-group-text bg-white" id="basic-addon2">mm</span>
                                        </div>
                                    </div>
                        </div>

                        <div className="col-10 col-md-5 rounded-5 p-3 mb-3" style={{ backgroundColor:"#98D3C7" }}>
                            <div className="rounded-5 mx-auto p-2" style={{ backgroundColor:"#2FB297", width:"50px" }}>
                                <h4 className="text-white fw-bold text-center">OS</h4>
                            </div>
                            
                            <div className="mb-3">
                            <h5>WTW*: </h5>
                                        <div className="input-group calc-form mb-3">
                                            <input step="0.001" className="form-control vault" id="c_vault_postop_QX" aria-describedby="Central vault" type="number" name="c_vault_postop_QX" />
                                            <span className="input-group-text bg-white" id="basic-addon2">mm</span>
                                        </div>
                                    </div>
                            
                        </div>
                            
                        <div className="d-flex justify-content-center">
                            <Button title="SAVE" bgColor="#3DC2DD" rounded="2rem" fontWeight="bold" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </section>
    )
}

export default WTW;