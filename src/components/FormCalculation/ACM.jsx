import { Input } from "../Inputs/Input";
import Button from "../Button/Button2";
import Image from "next/image";
import icon from "../../../public/icons/backup.svg";

const ACM = () => {

    return (
        <section className="w-100">
            <div className="card rounded-5" style={{ width: "100%" }}>
            <div className="card-body">
            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <label className="form-check-label fw-bold" for="flexSwitchCheckChecked">Edit </label>
                            </div>
                <h3 className="card-title text-center">Anterior chamber measurements</h3>
                
                <div className="container">
                    <div>
                        <form action="" className="row justify-content-evenly">
                            <div className="col-10 col-md-5 rounded-5 p-3 mb-3" style={{ backgroundColor:"#AAC7E5" }}>
                                <div className="rounded-5 mx-auto p-2" style={{ backgroundColor:"#4888C8", width:"50px" }}>
                                    <h4 className="text-white fw-bold text-center">OD</h4>
                                </div>
                                <div className="mb-3">
                                    <label className="fw-bold">ATA*:</label>
                                    <div className="input-group calc-form mb-3">
                                        <input step="0.001" className="form-control vault" id="c_vault_postop_QX" aria-describedby="Central vault" type="number" name="c_vault_postop_QX" />
                                        <span className="input-group-text bg-white" id="basic-addon2">mm</span>
                                        </div>
                                </div>

                                <div className="mb-3">
                                    <label className="fw-bold">aRISE*:</label>
                                    <div className="input-group calc-form mb-3">
                                        <input step="0.001" className="form-control vault" id="c_vault_postop_QX" aria-describedby="Central vault" type="number" name="c_vault_postop_QX" />
                                        <span className="input-group-text bg-white" id="basic-addon2">mm</span>
                                        </div>
                                </div>

                                <div className="mb-3">
                                    <label className="fw-bold">ACD*:</label>
                                    <div className="input-group calc-form mb-3">
                                        <input step="0.001" className="form-control vault" id="c_vault_postop_QX" aria-describedby="Central vault" type="number" name="c_vault_postop_QX" />
                                        <span className="input-group-text bg-white" id="basic-addon2">mm</span>
                                        </div>
                                </div>

                                <div>
                                    <p className="fw-bold">Image:</p>
                                    <div className="form-control d-flex justify-content-between align-items-center rounded-4">
                                        <Image alt="icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" src={icon} style={{color: "transparent"}} />
                                        <p className="text-secondary mb-0">No file chosen</p>
                                        <button className="btn py-2 px-4" style={{ backgroundColor: "rgb(24, 73, 214)", textTransform: "capitalize", borderRadius: "0.5rem", fontSize: "16px"}}>Upload</button>
                                    </div>
                                </div>

                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked1" />
                                    <label className="form-check-label fw-bold" for="flexSwitchCheckChecked1">Delete image and data* </label>
                                </div>

                            <form action="">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected value="unknown">Unknown device</option>
                                        <option value="casia2">Tomey - Casia 2</option>
                                    </select>
                                 </form>
                            </div>

                            <div className="col-10 col-md-5 rounded-5 p-3 mb-3" style={{ backgroundColor:"#98D3C7" }}>
                                <div className="rounded-5 mx-auto p-2" style={{ backgroundColor:"#2FB297", width:"50px" }}>
                                    <h4 className="text-white fw-bold text-center">OS</h4>
                                </div>
                                <div className="mb-3">
                                    <label className="fw-bold">ATA*:</label>
                                    <div className="input-group calc-form mb-3">
                                        <input step="0.001" className="form-control vault" id="c_vault_postop_QX" aria-describedby="Central vault" type="number" name="c_vault_postop_QX" />
                                        <span className="input-group-text bg-white" id="basic-addon2">mm</span>
                                        </div>
                                </div>

                                <div className="mb-3">
                                    <label className="fw-bold">aRISE*:</label>
                                    <div className="input-group calc-form mb-3">
                                        <input step="0.001" className="form-control vault" id="c_vault_postop_QX" aria-describedby="Central vault" type="number" name="c_vault_postop_QX" />
                                        <span className="input-group-text bg-white" id="basic-addon2">mm</span>
                                        </div>
                                </div>

                                <div className="mb-3">
                                    <label className="fw-bold">ACD*:</label>
                                    <div className="input-group calc-form mb-3">
                                        <input step="0.001" className="form-control vault" id="c_vault_postop_QX" aria-describedby="Central vault" type="number" name="c_vault_postop_QX" />
                                        <span className="input-group-text bg-white" id="basic-addon2">mm</span>
                                        </div>
                                </div>

                                <div>
                                    <p className="fw-bold">Image:</p>
                                    <div className="form-control d-flex justify-content-between align-items-center rounded-4">
                                        <Image alt="icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" src={icon} style={{color: "transparent"}} />
                                        <p className="text-secondary mb-0">No file chosen</p>
                                        <button className="btn py-2 px-4" style={{ backgroundColor: "rgb(24, 73, 214)", textTransform: "capitalize", borderRadius: "0.5rem", fontSize: "16px"}}>Upload</button>
                                    </div>
                                </div>

                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked1" />
                                    <label className="form-check-label fw-bold" for="flexSwitchCheckChecked1">Delete image and data* </label>
                                </div>

                            <form action="">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected value="unknown">Unknown device</option>
                                        <option value="casia2">Tomey - Casia 2</option>
                                    </select>
                                 </form>
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

export default ACM;