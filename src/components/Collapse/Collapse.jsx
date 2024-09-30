"use client";

import Modal from "../Modal/Modal";
import image1 from "@/components/Collapse/img/us_sts.png";
import image2 from "@/components/Collapse/img/us_srise.png";
import image3 from "@/components/Collapse/img/us_cbt.png";
import image4 from "@/components/Collapse/img/oct_ata.png";
import image5 from "@/components/Collapse/img/oct_arise.png";
import image6 from "@/components/Collapse/img/oct_ang.png";
import image7 from "@/components/Collapse/img/oct_ang_1.png";

const Collapse = () => {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center mb-4">
      <button
        className="btn mb-3 text-dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
        id="button-collapse"
        style={{ backgroundColor: "#F3EA1F", borderRadius: "1rem" }}
      >
        Image references - Please check it
      </button>

      <div className="collapse" id="collapseExample">
        <div className="card card-body w-100">
          For videos, please follow this protocol to acquire them and only then
          upload them. In the case of images, it&apos;s necessary to upload both
          images from the right and left eye with the following visible
          measurements: (Please click on the links to get more information about
          the measurement criteria)
          <hr />
          <section className="d-flex justify-content-evenly">
            <div>
              <h4 className="text-uppercase">Ultrasound</h4>
              <p>
                STS:{" "}
                <a
                  className=""
                  data-bs-toggle="modal"
                  data-bs-target="#modal_1"
                  style={{ color: "#0887CE", cursor: "pointer" }}
                >
                  Sulcus to sulcus
                </a>
              </p>

              <p>
                sRise:
                <a
                  className=""
                  data-bs-toggle="modal"
                  data-bs-target="#modal_2"
                  style={{ color: "#0887CE", cursor: "pointer" }}
                >
                  Lens rise from the sulcus to sulcus line
                </a>
              </p>

              <p>
                CBT:
                <a
                  className=""
                  data-bs-toggle="modal"
                  data-bs-target="#modal_3"
                  style={{ color: "#0887CE", cursor: "pointer" }}
                >
                  Ciliary body thickness
                </a>
              </p>
            </div>
            <div>
              <h4>OCT</h4>
              <p>
                ATA:
                <a
                  className=""
                  data-bs-toggle="modal"
                  data-bs-target="#modal_4"
                  style={{ color: "#0887CE", cursor: "pointer" }}
                >
                  Angle to angle
                </a>
              </p>

              <p>
                aRise:
                <a
                  className=""
                  data-bs-toggle="modal"
                  data-bs-target="#modal_5"
                  style={{ color: "#0887CE", cursor: "pointer" }}
                >
                  Lens rise from the angle to angle line
                </a>
              </p>

              <p>
                nANG:
                <a
                  className=""
                  data-bs-toggle="modal"
                  data-bs-target="#modal_6"
                  style={{ color: "#0887CE", cursor: "pointer" }}
                >
                  Nasal angle
                </a>
              </p>

              <p>
                tANG:
                <a
                  className=""
                  data-bs-toggle="modal"
                  data-bs-target="#modal_7"
                  style={{ color: "#0887CE", cursor: "pointer" }}
                >
                  Temporal angle
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Modals de imágenes */}
      <Modal
        id="modal_1"
        title="Sulcus to sulcus - StS"
        image={image1}
        description="The measurement being referred to is the distance or dimension of the imaginary line starting from the nasal area of the sulcus and extending to the corresponding point on the temporal side (StS)."
      />

      <Modal
        id="modal_2"
        title="Rise from sulcus to sulcus line - sRISE"
        image={image2}
        description="The measurement being referred to is the dimension of a parallel line to the axial axis that connects the apex of the crystalline lens to the line extending from one sulcus to the other (sRis)."
      />

      <Modal
        id="modal_3"
        title="Ciliary body thickness - CBT"
        image={image3}
        description="Ciliary body thickness, measured from the insertion of the zonules on the anterior surface to the insertion of the zonules on the posterior surface (CBT)."
      />

      <Modal
        id="modal_4"
        title="Angle to angle line - AtA"
        image={image4}
        description="The measurement being referred to is the distance or dimension of the imaginary line starting from the nasal area of the iridocorneal angle and extending to the corresponding point on the temporal side (AtA)."
      />

      <Modal
        id="modal_5"
        title="Rise from angle to angle line - sRISE"
        image={image5}
        description="The measurement being referred to is the dimension of a parallel line to the axial axis that connects the apex of the crystalline lens to the line extending from one sulcus to the other (sRis)."
      />

      <Modal
        id="modal_6"
        title="Nasal and temporal iridocorneal angles - nANG - tANG"
        image={image6}
        description="The angle created by the junction of the iris and cornea (nANG - tANG)."
      />

      <Modal
        id="modal_7"
        title="Nasal and temporal iridocorneal angles - nANG - tANG"
        image={image7}
        description="The angle created by the junction of the iris and cornea (nANG - tANG)."
      />
    </section>
  );
};

export default Collapse;
