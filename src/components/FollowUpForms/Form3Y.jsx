import Button from "../Button/Button";

const Form3Y = () => {
  return (
    <div className="card card-form p-0">
      <div className="card-header text-start text-white fw-bold">
        Postoperative - 3Y
      </div>
      <div className="card-body d-flex justify-content-evenly">
        <form>
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
                    />

                    <input
                      type="text"
                      className="form-control input-date"
                      id="id_time"
                      name="time_hour"
                    />
                  </div>
                </div>
              </div>

              {/* IOL */}
              {/* Central vault */}
              <div className="row justify-content-center justify-content-md-start">
                <p className="fw-bold">IOL</p>
                <div className="col-10 col-md-4 mb-3">
                  <div className="d-flex flex-column align-items-start">
                    <p className="fw-bold mb-2">Central vault: </p>
                    <div className="input-group">
                      <input type="number" step="0.001" className="form-control vault" id="c_vault_postop_QX" aria-describedby="Central vault" name="c_vault_postop_QX" />
                      <span className="input-group-text bg-white" id="basic-addon2">mm</span>
                    </div>
                  </div>
                </div>

                 {/* Nasal peripheral vault: */}
                 <div className="col-10 col-md-4 mb-3">
                  <div className="d-flex flex-column align-items-start">
                    <p className="fw-bold mb-2">Nasal peripheral vault: </p>
                    <div className="input-group">
                      <input type="number" step="0.001" className="form-control vault" id="c_vault_postop_QX" aria-describedby="Central vault" name="c_vault_postop_QX" />
                      <span className="input-group-text bg-white" id="basic-addon2">mm</span>
                    </div>
                  </div>
                </div>

                {/* Temporal peripheral vault: */}
                <div className="col-10 col-md-4 mb-3">
                  <div className="d-flex flex-column align-items-start">
                    <p className="fw-bold mb-2">Temporal peripheral vault: </p>
                    <div className="input-group">
                      <input type="number" step="0.001" className="form-control vault" id="c_vault_postop_QX" aria-describedby="Central vault" name="c_vault_postop_QX" />
                      <span className="input-group-text bg-white" id="basic-addon2">mm</span>
                    </div>
                  </div>
                </div>

                {/* Nasal angle: */}
                <div className="col-10 col-md-4 mb-4">
                  <div className="d-flex flex-column align-items-start">
                    <p className="fw-bold mb-2">Nasal angle: </p>
                    <div className="input-group">
                      <input type="number" step="0.001" className="form-control vault" id="c_vault_postop_QX" aria-describedby="Central vault" name="c_vault_postop_QX" />
                      <span className="input-group-text bg-white" id="basic-addon2">°</span>
                    </div>
                  </div>
                </div>

                {/* Temporal angle: */}
                <div className="col-10 col-md-4 mb-4">
                  <div className="d-flex flex-column align-items-start">
                    <p className="fw-bold mb-2">Temporal angle: </p>
                    <div className="input-group">
                      <input type="number" step="0.001" className="form-control vault" id="c_vault_postop_QX" aria-describedby="Central vault" name="c_vault_postop_QX" />
                      <span className="input-group-text bg-white" id="basic-addon2">°</span>
                    </div>
                  </div>
                </div>

                {/* Pupil diameter: */}
                <div className="col-10 col-md-4 mb-4">
                  <div className="d-flex flex-column align-items-start">
                    <p className="fw-bold mb-2">Pupil diameter: </p>
                    <div className="input-group">
                      <input type="number" step="0.001" className="form-control vault" id="c_vault_postop_QX" aria-describedby="Central vault" name="c_vault_postop_QX" />
                      <span className="input-group-text bg-white" id="basic-addon2">mm</span>
                    </div>
                  </div>
                </div>
            </div>

                {/* BCVA: */}
              <div className="col-10 col-md-4 mb-4">
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
              <div className="col-10 col-md-4 mb-4">
                <div className="d-flex flex-column align-items-start">
                  <p className="fw-bold mb-2">Sphere:</p>
                  <div className="input-group">
                      <input type="number" step="0.1" className="form-control" id="id_rx_sph_IMM" aria-describedby="RX Sphere" name="rx_sph" />
                      <span className="input-group-text" id="basic-addon2">D</span>
                  </div>
                </div>
              </div>

                {/* Cylinder: */}
              <div className="col-10 col-md-4 mb-3">
                <div className="d-flex flex-column align-items-start">
                  <p className="fw-bold mb-2">Cylinder:</p>
                  <div className="input-group">
                      <input type="number" step="0.1" className="form-control" id="id_rx_sph_IMM" aria-describedby="RX Sphere" name="rx_sph" />
                      <span className="input-group-text" id="basic-addon2">D</span>
                  </div>
                </div>
              </div>

               {/* Axis: */}
               <div className="col-10 col-md-4 mb-3">
                <div className="d-flex flex-column align-items-start mb-4">
                  <p className="fw-bold mb-2">Axis:</p>
                  <div className="input-group">
                      <input type="number" step="0.1" className="form-control" id="id_rx_sph_IMM" aria-describedby="RX Sphere" name="rx_sph" />
                      <span className="input-group-text" id="basic-addon2">°</span>
                  </div>
                </div>
              </div>
              </div>

              {/* Button form */}
              
            <div className="d-flex justify-content-center">
              <Button
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

export default Form3Y;
