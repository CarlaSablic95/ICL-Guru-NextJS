import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button2";

const WTW = () => {
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
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={() => handleDisabledInput()} style={{ cursor:"pointer" }} />
                            <label className="form-check-label fw-bold fs-5" for="flexSwitchCheckChecked">Edit </label>
                        </div>
            <h3 className="card-title text-center">WTW</h3>
            <p className="fw-bold text-center mb-3">(Required for reference and validation only)</p>
            
            <div className="container">
                <div>
                    <form action="" className="row justify-content-evenly" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-10 col-md-5 rounded-5 p-3 mb-3" style={{ backgroundColor:"#AAC7E5" }}>
                            <div className="rounded-5 mx-auto p-2" style={{ backgroundColor:"#4888C8", width:"50px" }}>
                                <h4 className="text-white fw-bold text-center">OD</h4>
                            </div>
                            <div className={`${errors.wtw_od ? "mb-0" : "mb-3"}`}>
                                <label htmlFor="id_wtw_od" className="fw-bold">WTW*: </label>
                                        <div className="input-group">
                                        <input type="number" step="0.001" className={`form-control ${errors.wtw_od ? "border border-2 border-danger" : ""}`} id="id_wtw_od" aria-label="WTW" aria-describedby="WTW" name="wtw_od" {...register("wtw_od", { required: true })} disabled={isEnabled}/>
                                            <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                    </div>
                                    { errors.wtw_od && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                        </div>

                        <div className="col-10 col-md-5 rounded-5 p-3 mb-3" style={{ backgroundColor:"#98D3C7" }}>
                            <div className="rounded-5 mx-auto p-2" style={{ backgroundColor:"#2FB297", width:"50px" }}>
                                <h4 className="text-white fw-bold text-center">OS</h4>
                            </div>
                            
                            <div className={`${errors.wtw_os ? "mb-0" : "mb-3"}`}>
                            <label htmlFor="id_wtw_os" className="fw-bold">WTW*: </label>
                                        <div className="input-group">
                                            <input type="number" step="0.001" className={`form-control ${errors.wtw_os ? "border border-2 border-danger" : ""}`} id="id_wtw_os" aria-label="WTW" aria-describedby="WTW" name="wtw_os" {...register("wtw_os", { required: true })} disabled={isEnabled}/>
                                            <span className="input-group-text"  style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                                        </div>
                                    </div>
                                    { errors.wtw_os && (
                                        <div className="text-danger text-center fw-bold mb-3">This field is required</div>
                                    ) }
                        </div>
                            
                        <div className="d-flex justify-content-center">
                            <Button type="submit" title="SAVE" bgColor="#3DC2DD" rounded="2rem" fontWeight="bold" />
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