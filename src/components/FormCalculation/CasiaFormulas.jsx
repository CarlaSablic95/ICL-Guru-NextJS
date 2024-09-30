import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button2";
import Image from "next/image";
import icon from "../../../public/icons/backup.svg";

const CasiaFormulas = () => {
    const [fileNameOD, setFileNameOD] = useState("No file chosen");
    const [fileNameOS, setFileNameOS] = useState("No file chosen");
    const [isEnabled, setIsEnabled] = useState(true);

    const fileInputRefOD = useRef(null);
    const fileInputRefOS = useRef(null);

    const handleDisabledInput = () => {
        setIsEnabled((prevState) => !prevState);
    }

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = () => {
        console.log("Form data");
    }

    // Campo File
    const handleFileChangeOD = (e) => {
        const file = e.target.files[0];
        if(file) {
          setFileNameOD(file.name);
        } else {
          setFileNameOD("No file chosen");
        }
      }

      const handleFileChangeOS = (e) => {
        const file = e.target.files[0];
        if(file) {
          setFileNameOS(file.name);
        } else {
          setFileNameOS("No file chosen");
        }
      }

      const handleUploadClickOD = () => {
        fileInputRefOD.current.click();
    };

    const handleUploadClickOS = () => {
        fileInputRefOS.current.click();
    };


    return (
        <section className="w-100">
            <div className="card rounded-5" style={{ width: "100%" }}>
            <div className="card-body">
            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={() => handleDisabledInput()} style={{ cursor:"pointer" }} />
                                <label className="form-check-label fw-bold fs-5" for="flexSwitchCheckChecked">Edit </label>
                </div>
                <h3 className="card-title text-center">Casia 2 Formulas</h3>
                
                <div className="container">
                    <div>
                        <form action="" className="row justify-content-evenly" onSubmit={(handleSubmit(onSubmit))}>
                            <div className="col-12  col-md-5 rounded-5 p-3 mb-3" style={{ backgroundColor:"#AAC7E5" }}>
                                <div className="rounded-5 mx-auto p-2" style={{ backgroundColor:"#4888C8", width:"50px" }}>
                                    <h4 className="text-white fw-bold text-center">OD</h4>
                                </div>
                                <div className="mb-3">
                                <p className="fw-bold">Image:</p>
                                    <label htmlFor="id_eyeOD_oct" className="form-label w-100">
                                    <div className="form-control d-flex justify-content-between align-items-center rounded-4">
                                        <Image alt="icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" src={icon} style={{color: "transparent"}} />
                                        <small className="text-secondary mb-0">{fileNameOD}</small>
                                        <button type="button" className="btn py-2 px-4" style={{ backgroundColor: "rgb(24, 73, 214)", textTransform: "capitalize", borderRadius: "0.5rem", fontSize: "16px"}}
                                         onClick={handleUploadClickOD}>Upload</button>
                                    </div>
                                </label>
                                    <input className="form-control d-none" type="file" id="id_eyeOD_oct_f" name="eyeOD_oct_f" ref={fileInputRefOD} onChange={handleFileChangeOD}  />
                                    </div>
                                
                                <div className="row justify-content-evenly">
                                    <div className="col-12  col-md-5">
                                        <h5>NK Formula (Ver.3)</h5>
                                <div className={`${errors.nk_121_od ? "mb-0" : "mb-3"}`}>
                                    <label>12.1 mm:</label>
                                    <div className="input-group">
                                        <input type="number" step="1" className={`form-control ${errors.nk_121_od ? "border border-2 border-danger" : ""}`} id="id_nk_121_od" name="nk_121_od" {...register("nk_121_od", { required: true })} disabled={isEnabled}/>
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                </div>
                                { errors.nk_121_od && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }

                                <div className={`${errors.nk_126_od ? "mb-0" : "mb-3"}`}>
                                    <label>12.6 mm:</label>
                                    <div className="input-group">
                                        <input type="number" step="1" className={`form-control ${errors.nk_126_od ? "border border-2 border-danger" : ""}`} id="id_nk_126_od" name="nk_126_od" {...register("nk_126_od", { required: true })} disabled={isEnabled} />
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                </div>
                                { errors.nk_126_od && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }

                                <div className={`${errors.nk_126_od ? "mb-0" : "mb-3"}`}>
                                <label>13.2 mm:</label>
                                    <div className="input-group">
                                        <input type="number" step="1" className={`form-control ${errors.nk_126_od ? "border border-2 border-danger" : ""}`} id="id_nk_132_od" aria-describedby="Central vault" name="c_vault_postop_QX" {...register("nk_132_od", { required: true })} disabled={isEnabled}/>
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                </div>
                                { errors.nk_132_od && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }


                                <div className={`${errors.nk_137_od ? "mb-0" : "mb-3"}`}>
                                <label>13.7 mm:</label>
                                    <div className="input-group">
                                        <input type="number" step="1" className={`form-control ${errors.nk_137_od ? "border border-2 border-danger" : ""}`} id="id_nk_137_od" name="nk_137_od" {...register("nk_137_od", { required: true })} disabled={isEnabled} />
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                </div>
                                    { errors.nk_137_od && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                                    </div>

                                    <div className="col-12  col-md-5">
                                        <h5>KS Formula (Ver.4)</h5>
                                        <div className={`${errors.ks_121_od ? "mb-0" : "mb-3"}`}>
                                    <label>12.1 mm:</label>
                                    <div className="input-group">
                                        <input type="number" step="1" className={`form-control ${errors.ks_121_od ? "border border-2 border-danger" : ""}`} id="id_ks_121_od" name="ks_121_od" {...register("ks_121_os", { required: true })} disabled={isEnabled}/>
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                        { errors.ks_121_od && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                                </div>

                                <div className={`${errors.ks_126_od ? "mb-0" : "mb-3"}`}>
                                    <label>12.6 mm:</label>
                                    <div className="input-group">
                                        <input type="number" step="1" className={`form-control ${errors.ks_126_od ? "border border-2 border-danger" : ""}`} id="id_ks_126_od" name="ks_126_od" {...register("ks_126_od", { required: true })} disabled={isEnabled}/>
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                        { errors.ks_126_od && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                                </div>

                                <div className={`${errors.ks_132_od ? "mb-0" : "mb-3"}`}>
                                <label>13.2 mm:</label>
                                    <div className="input-group">
                                        <input type="number" step="1" className={`form-control ${errors.ks_132_od ? "border border-2 border-danger" : ""}`} id="id_ks_132_od" name="ks_132_od" {...register("ks_132_od", { required: true })} disabled={isEnabled}/>
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                        { errors.ks_132_od && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                                </div>

                                <div className={`${errors.ks_137_od ? "mb-0" : "mb-3"}`}>
                                <label>13.7 mm:</label>
                                    <div className="input-group">
                                        <input type="number" step="1" className={`form-control ${errors.ks_137_od ? "border border-2 border-danger" : ""}`} id="id_ks_137_od" name="ks_137_od" {...register("ks_137_od", { required: true })} disabled={isEnabled}/>
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                </div>
                                { errors.ks_137_od && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                                    </div>
                                </div>
                            </div>
                            
                            {/* OS FORM */}
                            <div className="col-12  col-md-5 rounded-5 p-3 mb-3" style={{ backgroundColor:"#98D3C7" }}>
                                <div className="rounded-5 mx-auto p-2" style={{ backgroundColor:"#2FB297", width:"50px" }}>
                                    <h4 className="text-white fw-bold text-center">OS</h4>
                                </div>
                                <div className="mb-3">
                                    <p className="fw-bold">Image:</p>
                                    <div className="mb-3">
                                    <label htmlFor="id_eyeOD_oct" className="form-label w-100">
                                    <div className="form-control d-flex justify-content-between align-items-center rounded-4">
                                        <Image alt="icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" src={icon} style={{color: "transparent"}} />
                                        <small className="text-secondary mb-0">{fileNameOS}</small>
                                        <button type="button" className="btn py-2 px-4" style={{ backgroundColor: "rgb(24, 73, 214)", textTransform: "capitalize", borderRadius: "0.5rem", fontSize: "16px"}}
                                         onClick={handleUploadClickOS}>Upload</button>
                                    </div>
                                </label>
                                    <input className="form-control d-none" type="file" id="id_eyeOS_oct_f" name="eyeOS_oct_f" ref={fileInputRefOS} onChange={handleFileChangeOS}  />
                                    </div>
                                </div>
                                
                                <div className="row justify-content-evenly">
                                    <div className="col-12  col-md-5">
                                        <h5>NK Formula (Ver.3)</h5>
                                        <div className={`${errors.nk_121_os ? "mb-0" : "mb-3"}`}>
                                    <label>12.1 mm:</label>
                                    <div className="input-group">
                                        <input type="number" step="1" className={`form-control ${errors.nk_121_os ? "border border-2 border-danger" : ""}`} id="id_nk_121_os" name="nk_121_os" {...register("nk_121_os", { required: true })}  disabled={isEnabled}/>
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                        { errors.nk_121_os && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                                </div>

                                <div className={`${errors.nk_126_os ? "mb-0" : "mb-3"}`}>
                                    <label>12.6 mm:</label>
                                    <div className="input-group">
                                        <input type="number" step="1" className={`form-control ${errors.nk_126_os ? "border border-2 border-danger" : ""}`} id="id_nk_126_os" name="nk_126_os" {...register("nk_126_os", { required: true })} disabled={isEnabled}/>
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                        { errors.nk_126_os && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                                </div>

                                <div className={`${errors.nk_132_os ? "mb-0" : "mb-3"}`}>
                                <label>13.2 mm:</label>
                                    <div className="input-group">
                                        <input type="number" step="1" className={`form-control ${errors.nk_132_os ? "border border-2 border-danger" : ""}`} id="id_nk_132_os" name="nk_132_os" {...register("nk_132_os", { required: true })} disabled={isEnabled}/>
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                        { errors.nk_132_os && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                                </div>

                                <div className={`${errors.nk_137_os ? "mb-0" : "mb-3"}`}>
                                <label>13.7 mm:</label>
                                    <div className="input-group">
                                        <input type="number" step="1" className={`form-control ${errors.nk_137_os ? "border border-2 border-danger" : ""}`} id="id_nk_137_os" name="nk_137_os" {...register("nk_137_os", { required: true })} disabled={isEnabled}/>
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                </div>
                                { errors.nk_137_os && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                                    </div>

                                    <div className="col-12  col-md-5">
                                        <h5>KS Formula (Ver.4)</h5>
                                        <div className={`${errors.ks_121_os ? "mb-0" : "mb-3"}`}>
                                    <label>12.1 mm:</label>
                                    <div className="input-group">
                                        <input type="number" step="1" className={`form-control ${errors.ks_121_os ? "border border-2 border-danger" : ""}`} id="id_ks_121_os" name="ks_121_os" {...register("ks_121_os", { required: true })} disabled={isEnabled}/>
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                        { errors.ks_121_os && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                                </div>

                                <div className={`${errors.ks_126_os ? "mb-0" : "mb-3"}`}>
                                    <label>12.6 mm:</label>
                                    <div className="input-group">
                                        <input type="number" step="1" className={`form-control ${errors.ks_126_os ? "border border-2 border-danger" : ""}`} id="id_ks_126_os" name="ks_126_os" {...register("ks_126_os", { required: true })} disabled={isEnabled}/>
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                        { errors.ks_126_os && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                                </div>

                                <div className={`${errors.ks_132_os ? "mb-0" : "mb-3"}`}>
                                <label>13.2 mm:</label>
                                    <div className="input-group">
                                        <input type="number" step="1" className={`form-control ${errors.ks_132_os ? "border border-2 border-danger" : ""}`} id="id_ks_132_os" name="ks_132_os" {...register("ks_132_os", { required: true })} disabled={isEnabled}/>
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                        { errors.ks_132_os && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                                </div>

                                <div className={`${errors.ks_137_os ? "mb-0" : "mb-3"}`}>
                                <label>13.7 mm:</label>
                                    <div className="input-group">
                                        <input type="number" step="1" className={`form-control ${errors.ks_137_os ? "border border-2 border-danger" : ""}`} id="id_ks_137_os" name="ks_137_os" {...register("ks_137_os", { required: true })} disabled={isEnabled}/>
                                        <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                </div>
                                { errors.ks_137_os && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                                    </div>
                                </div>
                                
                            </div>
                                
                            <div className="d-flex justify-content-center">
                                <Button type="submit" title="SAVE" bgColor="#3DC2DD" rounded="2rem" fontWeight="bold" disabled={isEnabled} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default CasiaFormulas;