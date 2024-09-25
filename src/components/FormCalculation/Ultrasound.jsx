import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button2";
import Image from "next/image";
import icon from "../../../public/icons/backup.svg";
import FilesOD from "../Modal/FilesOD";
import FilesOS from "../Modal/FilesOS";

const Ultrasound = () => {
    const [fileNameOD, setFileNameOD] = useState("No file chosen");
    const [fileNameOS, setFileNameOS] = useState("No file chosen");
    const [selectedOptionOD, setSelectedOptionOD] = useState("Cloud");
    const [selectedOptionOS, setSelectedOptionOS] = useState("Cloud");

    const [isEnabled, setIsEnabled] = useState(false);
    const { register, handleSubmit, formState: {errors} } = useForm();

    const fileInputRefOD = useRef(null);
    const fileInputRefOS = useRef(null);

    const handleOptionClick = (eye, option) => {
        if(eye === "OD") {
            setSelectedOptionOD(option);
        } else {
            setSelectedOptionOS(option);
        }
    }

    const handleDisabledInput = () => {
        setIsEnabled((prevState) => !prevState);
    }

    // Campo file
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

    // const onSubmit = () => {
    //     console.log("Form data");
        
    // }

    return (
        <section className="w-100">
            <div className="card rounded-5" style={{ width: "100%" }}>
            <div className="card-body">
                <h3 className="card-title text-center">Ultrasound*</h3>
                
                <div className="container">
                    <div>
                        <form action="" className="row justify-content-evenly">
                                {/* OD FORM */}
                            <div className="col-10 col-md-5 rounded-5 p-3 mb-3" style={{ backgroundColor:"#AAC7E5" }}>
                                <div className="rounded-5 mx-auto p-2" style={{ backgroundColor:"#4888C8", width:"50px" }}>
                                    <h4 className="text-white fw-bold text-center">OD</h4>
                                </div>
                                <div className="d-flex justify-content-evenly mb-4">
                                    <button type="button" className={`btn py-2 px-4 ${ selectedOptionOD === "Cloud" ? "selected-button": "unselected-button" }`} onClick={() => handleOptionClick("OD", "Cloud")}>Cloud</button>
                                    <button type="button" className={`btn py-2 px-4 ${ selectedOptionOD === "Local" ? "selected-button": "unselected-button" }`} onClick={() => handleOptionClick("OD", "Local")}>Local</button>
                                </div>

                               { selectedOptionOD === "Cloud" ? (
                                <div className="d-flex justify-content-center mb-4">
                                    <button type="button" className="btn py-2 px-4 text-white rounded-5" id="id_iclguru_cloud_od" style={{ color:"#0051A1", backgroundColor:"#3DC2DD" }} data-bs-toggle="modal" data-bs-target="#filesOD">Upload from ICLGuru Cloud</button>
                                </div>)
                                :
                                (<div className="mb-3">
                                    <label htmlFor="id_eyeOD_us" className="form-label w-100">
                                    <div className="form-control d-flex justify-content-between align-items-center rounded-4">
                                        <Image alt="icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" src={icon} style={{color: "transparent"}} />
                                        <small className="text-secondary mb-0">{fileNameOD}</small>
                                        <button type="button" className="btn py-2 px-4" style={{ backgroundColor: "rgb(24, 73, 214)", textTransform: "capitalize", borderRadius: "0.5rem", fontSize: "16px"}}
                                         onClick={handleUploadClickOD}>Upload</button>
                                    </div>
                                </label>
                                    <input className="form-control d-none" type="file" id="id_eyeOD_us" name="eyeOD_us" onChange={handleFileChangeOD}  ref={fileInputRefOD} />
                                    </div>)}

                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked1" />
                                    <label className="form-check-label fw-bold" for="flexSwitchCheckChecked3">Delete image and data</label>
                                 </div>

                                 <form action="">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected value="unknown">Unknown device</option>
                                        <option value="sonomed_u">Sonomed Escalon VuMAX HD / VuPad</option>
                                        <option value="sonomed_ii">Sonomed - VuMax II</option>
                                        <option value="arcscan">Arcscan</option>
                                    </select>
                                 </form>
                            </div>

                            {/* OS FORM */}

                            <div className="col-10 col-md-5 rounded-5 p-3 mb-3" style={{ backgroundColor:"#98D3C7" }}>
                                <div className="rounded-5 mx-auto p-2" style={{ backgroundColor:"#2FB297", width:"50px" }}>
                                    <h4 className="text-white fw-bold text-center">OS</h4>
                                </div>
                            <div>
                            <div className="d-flex justify-content-evenly mb-4">
                                    <button type="button" className={`btn py-2 px-4 ${ selectedOptionOS === "Cloud" ? "selected-button": "unselected-button" }`} onClick={ () => handleOptionClick("OS", "Cloud") }>Cloud</button>

                                    <button type="button" className={`btn py-2 px-4 ${ selectedOptionOS === "Local" ? "selected-button": "unselected-button" }`} onClick={ () => handleOptionClick("OS", "Local") }>Local</button>
                                </div>

                               { selectedOptionOS === "Cloud" ? (<div className="d-flex justify-content-center mb-4">
                                    <button type="button" className="btn py-2 px-4 text-white rounded-5" id="id_iclguru_cloud_os" style={{ color:"#0051A1", backgroundColor:"#3DC2DD" }} data-bs-toggle="modal" data-bs-target="#filesOS">Upload from ICLGuru Cloud</button>
                                </div>)
                                :
                                (<div className="mb-3">
                                    <label for="id_eyeOS_us" className="form-label w-100">
                                    <div className="form-control d-flex justify-content-between align-items-center rounded-4">
                                        <Image alt="icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" src={icon} style={{color: "transparent"}} />
                                        <small className="text-secondary mb-0">{fileNameOS}</small>
                                        <button type="button" className="btn py-2 px-4" style={{ backgroundColor: "rgb(24, 73, 214)", textTransform: "capitalize", borderRadius: "0.5rem", fontSize: "16px"}} 
                                        onClick={handleUploadClickOS}>Upload</button>
                                    </div>
                                </label>
                                    <input className="form-control d-none" id="id_eyeOS_us" ref={fileInputRefOS} type="file" onChange={handleFileChangeOS} />
                                    </div>)}

                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked1" />
                                    <label className="form-check-label fw-bold" for="flexSwitchCheckChecked3">Delete image and data</label>
                                 </div>

                                    <select className="form-select" aria-label="Default select example">
                                        <option selected value="unknown">Unknown device</option>
                                        <option value="sonomed_u">Sonomed Escalon VuMAX HD / VuPad</option>
                                        <option value="sonomed_ii">Sonomed - VuMax II</option>
                                        <option value="arcscan">Arcscan</option>
                                    </select>

                            </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Button title="SAVE" bgColor="#3DC2DD" rounded="2rem" fontWeight="bold" disabled={isEnabled}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>

            {/* VENTANA MODAL PARA SELECCIONAR ARCHIVOS OS/OD*/}
            <FilesOD />                             
              <FilesOS /> 
        </section>
    )
}

export default Ultrasound;