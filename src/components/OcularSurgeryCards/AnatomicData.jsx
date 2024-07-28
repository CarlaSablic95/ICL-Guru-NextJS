const AnatomicData = ({ AtA, ARise, ACD, WtW }) => {
    return(
        <div className="card mb-4 p-3 rounded-4">
           <h5>Anatomic Data</h5>
           <p className="mb-1"><span className="fw-bold">AtA:</span> {AtA}</p>
           <p className="mb-1"><span className="fw-bold">aRise:</span> {ARise}</p>
           <p className="mb-1"><span className="fw-bold">ACD:</span> {ACD}</p>
           <p className="mb-1"><span className="fw-bold">WtW:</span> {WtW}</p>
        </div>
    )
}

export default AnatomicData;