import Button from "../Button/Button";


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
                  <span className="input-group-text bg-white" id="basic-addon2">mm</span>
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

              {/* IOL end position *: */}
            <div className="col-10 col-md-4 mb-4">
              <div className="d-flex flex-column align-items-start">
                <p className="fw-bold mb-2">
                  IOL end position <span className="text-danger">*</span>:
                </p>
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

          <div className="row justify-content-center justify-content-md-start">
              {/* Rotation maneuver *: */}
            <div className="col-10 col-md-4 mb-4">
              <div className="d-flex flex-column align-items-start">
                <p className="fw-bold mb-2">
                  Rotation maneuver:
                </p>
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

              {/* Central vault (initial): */}
            <div className="col-10 col-md-4 mb-4">
              <div className="d-flex flex-column align-items-start mb-4">
                <p className="fw-bold mb-2">Central vault (initial):</p>
                <div className="input-group mb-3">
                  <input type="number" step="0.001" className="form-control vault" id="c_vault_postop_QX" aria-describedby="Central vault" name="c_vault_postop_QX" />
                  <span className="input-group-text bg-white" id="basic-addon2">mm</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Button title="Save" bgColor="#B02F92" textColor="#fefefe"  rounded="2rem" textTransform="uppercase" />
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default FormCard;
