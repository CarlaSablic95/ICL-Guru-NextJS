const SurgicalData = ({IntraocularLensPower, DateOfSurgery}) => {
    return(
        <div className="card card-surgical-data mb-4 p-3 rounded-4">
           <h5>Surgical Data</h5>
           <p className="mb-1"><span className="fw-bold">IOL Power:</span> {IntraocularLensPower}</p>
           <p className="mb-1"><span className="fw-bold">Date of Surgery:</span> {DateOfSurgery}</p>
        </div>
    )
}

export default SurgicalData;