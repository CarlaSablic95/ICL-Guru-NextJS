"use client";
import Image from "next/image";

const Modal = ({ id, title, image, description }) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered py-5">
        <div className="modal-content">
          <div className="modal-header border-0 justify-content-center">
            <h4>{title}</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body pb-0">
            <div className="mb-4">
              <Image src={image} alt="" className="img-fluid" />
            </div>
            <p style={{ fontSize: "17px" }} className="mb-4">
              {description}
            </p>
          </div>

          <div className="modal-footer border border-0 justify-content-center">
            <button
              type="button"
              className="btn"
              data-bs-dismiss="modal"
              style={{ backgroundColor: "#00507c" }}
            >
              Understood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
