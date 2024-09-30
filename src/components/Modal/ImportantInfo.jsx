const ImportantInfo = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Vertically centered modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content px-2 px-md-4">
            <div className="modal-header pb-2">
              <h5 className="modal-title">Important information</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Dear user and friend of ICLGuru</p>
              <p>
                We are excited to share with you an update regarding our patient
                list. We have added a row named “follow-up”, where you will now
                see either a green circle, a flashing red circle, or a grey
                circle. These indicators represent the status of follow-ups for
                each patient: a green circle means the follow-ups for that
                patient have been completed, a flashing red circle signals that
                follow-ups are pending, and a grey circle indicates that the
                calculation for that patient has not been completed or that
                there is no calculation available for that patient. With this
                tool, we hope to make it easier for you to keep this crucial
                information up to date.
              </p>
              <p>
                There isn’t much that needs to be filled out, although more
                fields can be completed if you wish to maintain a truly
                comprehensive history of your patients. We specifically ask you
                to complete the IOL size and the final position in the
                “Intraoperative” section, and the central vault in the one-day
                post-op section. In the latter, please do not forget to upload
                the file with the OCT where the result can be seen. By doing
                this, we can tailor the formula for each surgeon, offering you
                greater precision in your calculations.
              </p>
              <p>
                We are excited to take precision and safety a step further with
                you
              </p>
              <p className="mb-1">Warm regards,</p>
              <p className="mb-0">The ICLGuru Team</p>
            </div>
            <div className="d-flex justify-content-center pb-3">
              <button
                type="button"
                className="btn btn-primary border-0 col-11"
                style={{ backgroundColor: "#3DC2DD" }}
                data-bs-dismiss="modal"
              >
                I Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportantInfo;
