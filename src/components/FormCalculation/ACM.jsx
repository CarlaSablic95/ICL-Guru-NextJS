import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button2";
import Image from "next/image";
import icon from "../../../public/icons/backup.svg";

const ACM = () => {
    const [isEnabled, setIsEnabled] = useState(true);

    const handleDisabledInput = () => {
        setIsEnabled((prevState) => !prevState);
    }

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = () => {
        console.log("Form data");
    }


    return (
        <section className="w-100">
            <div className="card rounded-5" style={{ width: "100%" }}>
            <div className="card-body">
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={() => handleDisabledInput()} style={{ cursor:"pointer" }}/>
                <label className="form-check-label fw-bold fs-5" htmlFor="flexSwitchCheckChecked">Edit</label>
            </div>
                <h3 className="card-title text-center">Anterior chamber measurements</h3>
                
                <div className="container">
                    <div>
                        <form action="" className="row justify-content-evenly" onSubmit={handleSubmit(onSubmit)}>
                            {/* OD FORM */}
                            <div className="col-10 col-md-5 rounded-5 p-3 mb-3" style={{ backgroundColor:"#AAC7E5" }}>
                                <div className="rounded-5 mx-auto p-2" style={{ backgroundColor:"#4888C8", width:"50px" }}>
                                    <h4 className="text-white fw-bold text-center">OD</h4>
                                </div>

                               <div className={`${errors.ata_od ? "mb-0" : "mb-3"}`}>
                              <label htmlFor="id_ata_od" class="form-label fw-bold">ATA*:</label>
                              <div class="input-group">
                                  <input type="number" step="0.001" class="form-control" id="id_ata_od" aria-label="AtA" aria-describedby="AtA" className={`form-control ${errors.ata_od ? "border border-2 border-danger" : ""}`} {...register("ata_od", { required: true })} name="ata_od" disabled={isEnabled}  />
                                  <span class="input-group-text" id="basic-addon2" style={{ backgroundColor:"#e9ecef" }}>mm</span>
                              </div>
                            </div>
                            { errors.ata_od && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }

                                <div className={`${errors.arise_od ? "mb-0" : "mb-3"}`}>
                                    <label htmlFor="id_arise_od" className="fw-bold">aRISE*:</label>
                                    <div className="input-group">
                                        <input type="number" step="0.001" className={`form-control ${errors.arise_od ? "border border-2 border-danger" : ""}`} id="id_arise_od" aria-label="aRISE" aria-describedby="aRISE" name="arise_od" {...register("arise_od", { required: true })} disabled={isEnabled} />
                                        <span className="input-group-text"  style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                </div>
                                { errors.arise_od && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }

                                <div className={`${errors.acd_od ? "mb-0" : "mb-3"}`}>
                                    <label htmlFor="id_acd_od" className="fw-bold">ACD*:</label>
                                    <div className="input-group">
                                        <input type="number" step="0.001" className={`form-control ${errors.acd_od ? "border border-2 border-danger" : ""}`} id="id_acd_od" aria-label="ACD" aria-describedby="ACD" name="acd_od" {...register("acd_od", { required: true })} disabled={isEnabled}/>
                                        <span className="input-group-text"  style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                </div>
                                { errors.acd_od && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }

                                <div>
                                    <p className="fw-bold">Image:</p>
                                    <div className="form-control d-flex justify-content-between align-items-center rounded-4">
                                        <Image alt="icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" src={icon} style={{color: "transparent"}} disabled={isEnabled}/>
                                        <p className="text-secondary mb-0">No file chosen</p>
                                        <button className="btn py-2 px-4" style={{ backgroundColor: "rgb(24, 73, 214)", textTransform: "capitalize", borderRadius: "0.5rem", fontSize: "16px"}}>Upload</button>
                                    </div>
                                </div>

                                <div className="form-check form-switch my-3">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked1" disabled={isEnabled}/>
                                    <label className="form-check-label fw-bold" htmlFor="flexSwitchCheckChecked1">Delete image and data* </label>
                                </div>

                                    <select className="form-select" aria-label="Default select example">
                                        <option selected value="unknown">Unknown device</option>
                                        <option value="casia2">Tomey - Casia 2</option>
                                    </select>
                            </div>

                            <div className="col-10 col-md-5 rounded-5 p-3 mb-3" style={{ backgroundColor:"#98D3C7" }}>
                                <div className="rounded-5 mx-auto p-2" style={{ backgroundColor:"#2FB297", width:"50px" }}>
                                    <h4 className="text-white fw-bold text-center">OS</h4>
                                </div>
                                <div className={`${errors.ata_os ? "mb-0" : "mb-3"}`}>
                                    <label htmlFor="id_ata_os" className="fw-bold">ATA*:</label>
                                    <div className="input-group">
                                        <input type="number" step="0.001" className={`form-control ${errors.ata_os ? "border border-2 border-danger" : ""}`} id="id_ata_os" aria-label="AtA" aria-describedby="AtA" name="ata_os" {...register("ata_os", { required: true })} disabled={isEnabled}/>
                                        <span className="input-group-text"  style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                </div>
                                { errors.ata_os && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }

                            <div className={`${errors.arise_os ? "mb-0" : "mb-3"}`}>
                                    <label htmlFor="id_arise_os" className="fw-bold">aRISE*:</label>
                                    <div className="input-group">
                                        <input type="number" step="0.001" className={`form-control ${errors.arise_os ? "border border-2 border-danger" : ""}`} id="id_arise_os" aria-label="aRISE" aria-describedby="aRISE" name="arise_os" {...register("arise_os", { required: true })} disabled={isEnabled}/>
                                        <span className="input-group-text"  style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                </div>
                                { errors.arise_os && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }

                            <div className={`${errors.acd_os ? "mb-0" : "mb-3"}`}>
                                    <label htmlFor="id_acd_os" className="fw-bold">ACD*:</label>
                                    <div className="input-group">
                                        <input type="number" step="0.001" className={`form-control ${errors.acd_os ? "border border-2 border-danger" : ""}`} id="id_acd_os" aria-label="ACD" aria-describedby="ACD" name="acd_os" {...register("acd_os", { required: true })} disabled={isEnabled}/>
                                        <span className="input-group-text"  style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                </div>
                                { errors.acd_os && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }

                                <div>
                                    <p className="fw-bold">Image:</p>
                                    <div className="form-control d-flex justify-content-between align-items-center rounded-4">
                                        <Image alt="icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" src={icon} style={{color: "transparent"}} disabled={isEnabled}/>
                                        <p className="text-secondary mb-0">No file chosen</p>
                                        <button className="btn py-2 px-4" style={{ backgroundColor: "rgb(24, 73, 214)", textTransform: "capitalize", borderRadius: "0.5rem", fontSize: "16px"}}>Upload</button>
                                    </div>
                                </div>

                                <div className="form-check form-switch my-3">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked1" disabled={isEnabled}/>
                                    <label className="form-check-label fw-bold" htmlFor="flexSwitchCheckChecked1">Delete image and data* </label>
                                </div>

                                    <select className="form-select" aria-label="Default select example">
                                        <option selected value="unknown">Unknown device</option>
                                        <option value="casia2">Tomey - Casia 2</option>
                                    </select>
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