"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addCalculation } from "@/reduxSlices/calculations/calculationSlice";

const SurgicalData = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  const handleDisabledInput = () => {
    setIsEnabled((prevState) => !prevState);
  };

  const onSubmit = async (data) => {
    console.log("DATOS A ENVIAR: ", data);
    setIsLoading(true);
    try {
      const response = await dispatch(addCalculation(data)).unwrap();
      console.log("Cálculo añadido con éxito: ", response);
    } catch (error) {
      if (error.response) {
        console.error("Data Error: ", error.response.data);
        console.error("Status Error: ", error.response.status);
        console.error("Headers Error: ", error.response.headers);
      } else if (error.request) {
        console.error("Error creating a patient: ", error);
      } else {
        console.error("Error: ", error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-100">
      <div className="card rounded-5" style={{ width: "100%" }}>
        <div className="card-body">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onClick={() => handleDisabledInput()}
              style={{ cursor: "pointer" }}
            />
            <label
              className="form-check-label fw-bold fs-5"
              for="flexSwitchCheckChecked"
            >
              Edit{" "}
            </label>
          </div>
          <h3 className="card-title text-center">Surgical Data</h3>

          <div className="container">
            <div>
              <form
                action=""
                onSubmit={handleSubmit(onSubmit)}
                className="row justify-content-evenly"
              >
                {/* OD FORM */}
                <div
                  className="col-12 col-md-5 rounded-5 p-3 mb-3"
                  style={{ backgroundColor: "#AAC7E5" }}
                >
                  <div
                    className="rounded-5 mx-auto p-2"
                    style={{ backgroundColor: "#4888C8", width: "50px" }}
                  >
                    <h4 className="text-white fw-bold text-center">OD</h4>
                  </div>
                  <div>
                    <label htmlFor="id_power_sph" className="fw-bold">
                      IOL power:<span className="text-danger">*</span>
                    </label>
                    <div className={`${errors.power_sph ? "mb-0" : "mb-3"}`}>
                      <div className="input-group">
                        <input
                          type="number"
                          step="0.5"
                          min="-18"
                          max="-0.5"
                          className={`form-control ${
                            errors.power_sph
                              ? "border border-2 border-danger"
                              : ""
                          }`}
                          placeholder="Sphere"
                          aria-label="Sphere power"
                          id="id_power_sph"
                          name="power_sph"
                          {...register("power_sph", { required: true })}
                          disabled={isEnabled}
                        />
                        <span
                          className="input-group-text"
                          style={{ backgroundColor: "#e9ecef" }}
                        >
                          Dp
                        </span>
                      </div>
                    </div>
                    {errors.power_sph && (
                      <div className="text-danger text-center fw-bold mb-3">
                        This field is required
                      </div>
                    )}

                    <div className={`${errors.power_cyl ? "mb-0" : "mb-3"}`}>
                      <div className="input-group">
                        <input
                          type="number"
                          step="0.5"
                          min="-18"
                          max="-0.5"
                          className={`form-control ${
                            errors.power_cyl
                              ? "border border-2 border-danger"
                              : ""
                          }`}
                          placeholder="Cylinder"
                          aria-label="Cylinder power"
                          id="id_power_cyl"
                          name="power_cyl"
                          {...register("power_cyl")}
                          disabled={isEnabled}
                        />
                        <span
                          className="input-group-text"
                          style={{ backgroundColor: "#e9ecef" }}
                        >
                          Dp
                        </span>
                      </div>
                    </div>
                    {errors.power_cyl_od && (
                      <div className="text-danger text-center fw-bold mb-3">
                        This field is required
                      </div>
                    )}

                    <div className={`${errors.power_axis ? "mb-0" : "mb-3"}`}>
                      <div className="input-group">
                        <input
                          type="number"
                          step="0.1"
                          className={`form-control ${
                            errors.power_axis
                              ? "border border-2 border-danger"
                              : ""
                          }`}
                          placeholder="Axis"
                          aria-label="Axis"
                          id="id_power_axis"
                          name="power_axis"
                          {...register("power_axis")}
                          disabled={isEnabled}
                        />
                        <span
                          className="input-group-text"
                          style={{ backgroundColor: "#e9ecef" }}
                        >
                          °
                        </span>
                      </div>
                    </div>
                    {errors.power_axis && (
                      <div className="text-danger text-center fw-bold mb-3">
                        This field is required
                      </div>
                    )}
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      name="viva"
                      id="id_viva"
                      {...register("viva")}
                      disabled={isEnabled}
                    />
                    <label className="form-check-label fw-bold" for="id_viva">
                      VIVA*
                    </label>
                  </div>

                  <div>
                    <label className="fw-bold">
                      Data of surgery:<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="date"
                        className={`form-control ${
                          errors.qx_date ? "border border-2 border-danger" : ""
                        }`}
                        id="id_dqx"
                        name="qx_date"
                        {...register("qx_date", { required: true })}
                        disabled={isEnabled}
                      />
                    </div>
                  </div>
                  {errors.qx_date && (
                    <div className="text-danger text-center fw-bold mb-3">
                      This field is required
                    </div>
                  )}
                </div>

                {/* OS FORM */}

                <div
                  className="col-12 col-md-5 rounded-5 p-3 mb-3"
                  style={{ backgroundColor: "#98D3C7" }}
                >
                  <div
                    className="rounded-5 mx-auto p-2"
                    style={{ backgroundColor: "#2FB297", width: "50px" }}
                  >
                    <h4 className="text-white fw-bold text-center">OS</h4>
                  </div>
                  <label htmlFor="id_power_sph" className="fw-bold">
                    IOL power:<span className="text-danger">*</span>
                  </label>
                  <div className={`${errors.power_sph ? "mb-0" : "mb-3"}`}>
                    <div className="input-group">
                      <input
                        type="number"
                        step="0.5"
                        min="-18"
                        max="-0.5"
                        className={`form-control ${
                          errors.power_sph
                            ? "border border-2 border-danger"
                            : ""
                        }`}
                        placeholder="Sphere"
                        aria-label="Sphere power"
                        id="id_power_sph"
                        name="power_sph"
                        {...register("power_sph", { required: true })}
                        disabled={isEnabled}
                      />
                      <span
                        className="input-group-text"
                        style={{ backgroundColor: "#e9ecef" }}
                      >
                        Dp
                      </span>
                    </div>
                    {errors.power_sph && (
                      <div className="text-danger text-center fw-bold mb-3">
                        This field is required
                      </div>
                    )}
                  </div>

                  <div className={`${errors.power_cyl ? "mb-0" : "mb-3"}`}>
                    <div className="input-group">
                      <input
                        type="number"
                        step="0.5"
                        className={`form-control ${
                          errors.power_cyl
                            ? "border border-2 border-danger"
                            : ""
                        }`}
                        placeholder="Cylinder"
                        aria-label="Cylinder power"
                        id="id_power_cyl"
                        name="power_cyl"
                        {...register("power_cyl")}
                        disabled={isEnabled}
                      />
                      <span
                        className="input-group-text"
                        style={{ backgroundColor: "#e9ecef" }}
                      >
                        Dp
                      </span>
                    </div>
                    {errors.power_cyl && (
                      <div className="text-danger text-center fw-bold mb-3">
                        This field is required
                      </div>
                    )}
                  </div>

                  <div className={`${errors.power_axis ? "mb-0" : "mb-3"}`}>
                    <div className="input-group">
                      <input
                        type="number"
                        step="0.1"
                        className={`form-control ${
                          errors.power_axis
                            ? "border border-2 border-danger"
                            : ""
                        }`}
                        placeholder="Axis"
                        aria-label="Axis"
                        id="id_power_axis"
                        name="power_axis"
                        {...register("power_axis")}
                        disabled={isEnabled}
                      />
                      <span
                        className="input-group-text"
                        style={{ backgroundColor: "#e9ecef" }}
                      >
                        °
                      </span>
                    </div>
                    {errors.power_axis && (
                      <div className="text-danger text-center fw-bold mb-3">
                        This field is required
                      </div>
                    )}
                  </div>

                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      name="viva"
                      id="id_viva"
                      {...register("viva")}
                      disabled={isEnabled}
                    />
                    <label className="form-check-label fw-bold" for="id_viva">
                      VIVA*{" "}
                    </label>
                  </div>

                  <div>
                    <label className="fw-bold">
                      Data of surgery:<span className="text-danger">*</span>{" "}
                    </label>
                    <div className="input-group">
                      <input
                        type="date"
                        className={`form-control ${
                          errors.dqx ? "border border-2 border-danger" : ""
                        }`}
                        {...register("dqx", { required: true })}
                        id="id_dqx"
                        name="dqx"
                        disabled={isEnabled}
                      />
                    </div>
                    {errors.dqx && (
                      <div className="text-danger text-center fw-bold mb-3">
                        This field is required
                      </div>
                    )}
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn py-2 px-4 border-0 fw-bold"
                    style={{
                      backgroundColor: "#3DC2DD",
                      color: "#fefefe",
                      textTransform: "uppercase",
                      borderRadius: "2rem",
                      width: "220px",
                      height: "50px",
                      fontWeight: "bold",
                    }}
                    disabled={isEnabled || isLoading}
                  >
                    {isLoading ? (
                      <div className="d-flex justify-content-center align-items-center">
                        <span className="me-1">SAVING</span>{" "}
                        <span className="loader"></span>
                      </div>
                    ) : (
                      "SAVE"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurgicalData;
