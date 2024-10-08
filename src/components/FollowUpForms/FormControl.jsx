"use client";

import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addCalculation } from "@/reduxSlices/calculations/calculationSlice";
import Button2 from "../Button/Button2";
import Image from "next/image";
import icon from "../../../public/icons/backup.svg";

const FormControl = ({ title }) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("No file chosen");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Campo File
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("No file chosen");
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Formulario
  const onSubmit = async (data) => {
    console.log("DATOS A ENVIAR: ", data);

    // try {

    // }
  };

  return (
    <div className="card card-form p-0 mb-4">
      <div className="card-header text-start text-white fw-bold">{title}</div>
      <div
        className="card-body d-flex justify-content-evenly w-100"
        style={{ borderTop: "0px", backgroundColor: "#E9F1F8" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
            <div className="row justify-content-center justify-content-md-start">
              <p className="fw-bold mb-2">DATE:</p>
              {/* Date: */}
              <div className="col-10 col-md-6 mb-4">
                <div className="d-flex flex-column align-items-start">
                  <p className="fw-bold mb-2">Date:</p>
                  <div className="input-group">
                    <input
                      type="date"
                      className="datepicker form-control"
                      id="id_dqx_od"
                      name="dqx_od"
                      {...register("dqx_od")}
                    />
                  </div>
                </div>
              </div>

              {/* Time: */}
              <div className="col-10 col-md-6 mb-4">
                <div className="d-flex flex-column align-items-start">
                  <p className="fw-bold mb-2">Time (24 hours format) :</p>
                  <div className="input-group date">
                    <input
                      type="text"
                      className="form-control"
                      id="id_time"
                      name="time_hour"
                      {...register("time_hour")}
                    />
                    <span
                      className="input-group-text"
                      style={{ backgroundColor: "#E9ECEF" }}
                    >
                      :
                    </span>
                    <input
                      type="text"
                      className="form-control input-date"
                      id="id_time"
                      name="time_hour"
                      {...register("time_hour")}
                      style={{}}
                    />
                  </div>
                </div>
              </div>

              {/* IOL */}
              {/* Central vault */}
              <div className="row justify-content-center justify-content-md-start">
                <p className="fw-bold">IOL</p>
                <div className="col-10 col-lg-4 mb-3">
                  <div className="d-flex flex-column align-items-start">
                    <p className="fw-bold mb-2">Central vault: </p>
                    <div className="input-group">
                      <input
                        type="number"
                        step="0.001"
                        className="form-control vault"
                        id="id_c_vault_IMM"
                        aria-describedby="Central vault"
                        name="c_vault"
                        {...register("c_vault")}
                      />
                      <span
                        className="input-group-text"
                        id="basic-addon2"
                        style={{ backgroundColor: "#E9ECEF" }}
                      >
                        mm
                      </span>
                    </div>
                  </div>
                </div>

                {/* Nasal peripheral vault: */}
                <div className="col-10 col-lg-4 mb-3">
                  <div className="d-flex flex-column align-items-start">
                    <p className="fw-bold mb-2">Nasal peripheral vault: </p>
                    <div className="input-group">
                      <input
                        type="number"
                        step="0.001"
                        className="form-control vault"
                        id="id_n_p_vault_IMM"
                        aria-describedby="Nasal peripheral vault"
                        name="n_p_vault"
                        {...register("n_p_vault")}
                      />
                      <span
                        className="input-group-text"
                        id="basic-addon2"
                        style={{ backgroundColor: "#E9ECEF" }}
                      >
                        mm
                      </span>
                    </div>
                  </div>
                </div>

                {/* Temporal peripheral vault: */}
                <div className="col-10 col-lg-4 mb-3">
                  <div className="d-flex flex-column align-items-start">
                    <p className="fw-bold mb-2">Temporal peripheral vault: </p>
                    <div className="input-group">
                      <input
                        type="number"
                        step="0.001"
                        className="form-control vault"
                        id="id_t_p_vault_IMM"
                        aria-describedby="Temporal peripheral vault"
                        name="t_p_vault"
                        {...register("t_p_vault")}
                      />
                      <span
                        className="input-group-text"
                        id="basic-addon2"
                        style={{ backgroundColor: "#E9ECEF" }}
                      >
                        mm
                      </span>
                    </div>
                  </div>
                </div>

                {/* Nasal angle: */}
                <div className="col-10 col-lg-4 mb-4">
                  <div className="d-flex flex-column align-items-start">
                    <p className="fw-bold mb-2">Nasal angle: </p>
                    <div className="input-group">
                      <input
                        type="number"
                        step="0.1"
                        className="form-control angle"
                        id="id_n_angle_IMM"
                        aria-describedby="Nasal angle"
                        name="n_angle"
                        {...register("n_angle")}
                      />
                      <span
                        className="input-group-text"
                        id="basic-addon2"
                        style={{ backgroundColor: "#E9ECEF" }}
                      >
                        °
                      </span>
                    </div>
                  </div>
                </div>

                {/* Temporal angle: */}
                <div className="col-10 col-lg-4 mb-4">
                  <div className="d-flex flex-column align-items-start">
                    <p className="fw-bold mb-2">Temporal angle: </p>
                    <div className="input-group">
                      <input
                        type="number"
                        step="0.1"
                        className="form-control angle"
                        id="id_t_angle_IMM"
                        aria-describedby="Temporal angle"
                        name="t_angle"
                        {...register("t_angle")}
                      />
                      <span
                        className="input-group-text"
                        id="basic-addon2"
                        style={{ backgroundColor: "#E9ECEF" }}
                      >
                        °
                      </span>
                    </div>
                  </div>
                </div>

                {/* Pupil diameter: */}
                <div className="col-10 col-lg-4 mb-4">
                  <div className="d-flex flex-column align-items-start">
                    <p className="fw-bold mb-2">Pupil diameter: </p>
                    <div className="input-group">
                      <input
                        type="number"
                        step="0.001"
                        className="form-control pupil"
                        id="id_pupil_IMM"
                        aria-describedby="Pupil diameter"
                        name="pupil"
                        {...register("pupil")}
                      />
                      <span
                        className="input-group-text"
                        id="basic-addon2"
                        style={{ backgroundColor: "#E9ECEF" }}
                      >
                        mm
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* INPUT FILE */}
              <label htmlFor="id_report_file" className="form-label w-100">
                <div className="form-control d-flex justify-content-between align-items-center rounded-4">
                  <Image
                    alt="icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    src={icon}
                    style={{ color: "transparent" }}
                  />
                  <small className="text-secondary mb-0">{fileName}</small>
                  <button
                    type="button"
                    className="btn py-2 px-4"
                    style={{
                      backgroundColor: "rgb(24, 73, 214)",
                      textTransform: "capitalize",
                      borderRadius: "0.5rem",
                      fontSize: "16px",
                    }}
                    onClick={handleUploadClick}
                  >
                    Upload
                  </button>
                </div>
              </label>
              <input
                className="form-control d-none"
                type="file"
                id="id_report_file"
                name="report_file"
                ref={fileInputRef}
                onChange={handleFileChange}
              />

              {/* BCVA: */}
              <div className="col-10 col-lg-4 mb-4">
                <div className="d-flex flex-column align-items-start">
                  <p className="fw-bold mb-2">BCVA:</p>
                  <div className="input-group">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue="selected">Select an option</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* RX */}
            {/* Sphere */}
            <div className="row justify-content-center justify-content-md-start">
              <p className="fw-bold">RX</p>
              <div className="col-10 col-lg-4 mb-4">
                <div className="d-flex flex-column align-items-start">
                  <p className="fw-bold mb-2">Sphere:</p>
                  <div className="input-group">
                    <input
                      type="number"
                      step="0.1"
                      className="form-control"
                      id="id_rx_sph_IMM"
                      aria-describedby="RX Sphere"
                      name="rx_sph"
                      {...register("rx_sph")}
                    />
                    <span
                      className="input-group-text"
                      id="basic-addon2"
                      style={{ backgroundColor: "#E9ECEF" }}
                    >
                      D
                    </span>
                  </div>
                </div>
              </div>

              {/* Cylinder: */}
              <div className="col-10 col-lg-4 mb-3">
                <div className="d-flex flex-column align-items-start">
                  <p className="fw-bold mb-2">Cylinder:</p>
                  <div className="input-group">
                    <input
                      type="number"
                      step="0.1"
                      className="form-control"
                      id="id_rx_cyl_IMM"
                      aria-describedby="RX Cylinder"
                      name="rx_cyl"
                      {...register("rx_cyl")}
                    />
                    <span
                      className="input-group-text"
                      id="basic-addon2"
                      style={{ backgroundColor: "#E9ECEF" }}
                    >
                      D
                    </span>
                  </div>
                </div>
              </div>

              {/* Axis: */}
              <div className="col-10 col-lg-4 mb-3">
                <div className="d-flex flex-column align-items-start mb-4">
                  <p className="fw-bold mb-2">Axis:</p>
                  <div className="input-group">
                    <input
                      type="number"
                      step="0.001"
                      className="form-control"
                      id="id_rx_axis_IMM"
                      aria-describedby="RX Axis"
                      name="rx_axis"
                      {...register("rx_axis")}
                    />
                    <span
                      className="input-group-text"
                      id="basic-addon2"
                      style={{ backgroundColor: "#E9ECEF" }}
                    >
                      °
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Button form */}

            <div className="d-flex justify-content-center">
              <Button2
                type="submit"
                title="Save"
                bgColor="#B02F92"
                textColor="#fefefe"
                rounded="2rem"
                textTransform="uppercase"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormControl;
