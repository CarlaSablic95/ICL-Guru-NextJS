import Button2 from "../Button/Button2";


const FormCard = () => {
  return (
    <div className="card card-form p-0">
      <div className="card-header text-start text-white fw-bold">
        Postoperative - Intraoperative
      </div>
      <div className="card-body d-flex justify-content-evenly">
      <form>
        <div className="container">
          <div className="row justify-content-center justify-content-md-start">
              {/* Central vault (end): */}
            <div className="col-10 col-md-4 mb-4">
              <div className="d-flex flex-column align-items-start">
                <p className="fw-bold mb-2">Central vault (end):</p>
                <div className="input-group mb-3">
                  <input type="number" step="0.001" className="form-control vault" id="c_vault_postop_QX" aria-describedby="Central vault" name="c_vault_postop_QX" />
                  <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                </div>
              </div>
            </div>

              {/* IOL overall diameter *: */}
            <div className="col-10 col-md-4 mb-4">
              <div className="d-flex flex-column align-items-start">
                <p className="fw-bold mb-2">
                  IOL overall diameter <span className="text-danger">*</span>:
                </p>
                <div className="input-group">
                  <select
                    className="form-select" id="id_size_postop" name="size_postop" aria-label="IOL overall diameter"
                  >
                    <option defaultValue="selected">Select an option</option>
                    <option value="121">12.1</option>
                    <option value="126">12.6</option>
                    <option value="132">13.2</option>
                    <option value="137">13.7</option>
                  </select>
                </div>
              </div>
            </div>

              {/* IOL end position *: */}
            <div className="col-10 col-md-4 mb-4">
              <div className="d-flex flex-column align-items-start">
                <p className="fw-bold mb-2">
                  IOL end position <span className="text-danger">*</span>:
                </p>
                <div className="input-group">
                  <select
                    className="form-select" id="id_end_position" name="end_position" aria-label="IOL final position"
                  >
                    <option defaultValue="selected">Select an option</option>
                    <option value="0">Horizontal</option>
                    <option value="90">Vertical</option>
                    <option value="45">Oblique</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center justify-content-md-start">
              {/* Rotation maneuver *: */}
            <div className="col-10 col-md-4 mb-4">
              <div className="d-flex flex-column align-items-start">
                <p className="fw-bold mb-2">
                  Rotation maneuver:
                </p>
                <div className="input-group">
                  <select
                    className="form-select" id="id_maneuver" name="maneuver" aria-label="Rotation maneuver"
                  >
                    <option defaultValue="selected">Select an option</option>
                    <option value="NM">No maneuver</option>
                    <option value="HV">Horizontal -&gt; Vertical</option>
                    <option value="HO">Horizontal -&gt; Oblique</option>
                    <option value="VH">Vertical -&gt; Horizontal</option>
                    <option value="VO">Vertical -&gt; Oblique</option>
                    <option value="OH">Oblique -&gt; Horizontal</option>
                    <option value="OV">Oblique -&gt; Vertical</option>
                  </select>
                </div>
              </div>
            </div>

              {/* Central vault (initial): */}
            <div className="col-10 col-md-4 mb-4">
              <div className="d-flex flex-column align-items-start mb-4">
                <p className="fw-bold mb-2">Central vault (initial):</p>
                <div className="input-group mb-3">
                  <input type="number" step="0.001" className="form-control vault" id="c_vault_init_postop_QX" aria-describedby="Central vault" name="c_vault_init_postop_QX" />
                  <span className="input-group-text" style={{ backgroundColor:"#e9ecef" }} id="basic-addon2">mm</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Button2 title="Save" bgColor="#B02F92" textColor="#fefefe"  rounded="2rem" textTransform="uppercase" />
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default FormCard;
