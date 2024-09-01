const Pagination = ({ currentPage, totalPages, onPageChange  }) => {
    const pageNumbers = [];

    for(let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const getPageNumbers = () => {
        if(totalPages <= 5) {
            return pageNumbers;
        }

        if(currentPage <= 3) {
            return [...pageNumbers.slice(0, 5), '...', totalPages];
        }

        if(currentPage >= totalPages - 2) {
            return [1, '...', ...pageNumbers.slice(totalPages - 5)];
        }

        return [
            1,
            '...',
            currentPage - 1,
            currentPage,
            currentPage + 1,
            '...',
            totalPages
        ];
    };

    return (
        <div className="container">
        <nav aria-label="Pagination" className="mt-4">
            <ul className="d-flex justify-content-center align-items-center">
                <li>
                    <button
                        onClick={ () => onPageChange(currentPage - 1) }
                        disabled={ currentPage === 1 }
                        className="btn pagination-button text-white"
                        aria-label="Previous page"
                    >&laquo;</button>
                </li>

                { getPageNumbers().map((number, index) => (
                    <li key={index} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        { number === '...' ? (
                            <span className="px-3 py-2">...</span>
                        ) : (
                            <button onClick={() => onPageChange(number)}
                            className={`px-3 py-2 rounded-2 ${
                                currentPage === number ? "pagination-button text-white" 
                                : "bg-light text-gray"
                            }`}
                            >{number}</button>
                        )}
                    </li>
                ))}

                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <button
                        onClick={ () => onPageChange(currentPage + 1) }
                        disabled={ currentPage === totalPages }
                        className="btn pagination-button text-white"
                        aria-label="Next page"
                    >
                        &raquo;
                    </button>
                </li>
            </ul>
        </nav>
</div>
    )
}

export default Pagination;