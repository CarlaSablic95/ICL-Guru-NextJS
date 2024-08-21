const Pagination = ({ patientsPerPage, totalPatients, paginate, currentPage }) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPatients / patientsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="container">
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <a className="page-link" href="#" onClick={() => paginate(currentPage - 1)} aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>

                { pageNumbers.map(number => (
                    <li className={`page-item ${currentPage === number ? "active" : ""}`} key={number}>
                        <a className="page-link text-decoration-none rounded-2" href="#" onClick={ () => paginate(number) }>{ number }</a>
                        </li>
                ))

                }

                <li className={`page-item ${currentPage === Math.ceil(totalPatients / patientsPerPage) ? "disabled" : ""}`}>
                <a className="page-link" href="#" onClick={() => paginate(currentPage + 1)} aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
        </nav>
</div>
    )
}

export default Pagination;