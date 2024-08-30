import React from 'react';
import "./pagination.less"

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <div className='pagination'>
        {pageNumbers.map(page => (
            <button key={page} className={`page-btn ${currentPage === page ? 'active' : ''}`} onClick={() => paginate(page)} >{page}</button>
        ))}
    </div>
  )
}

export default Pagination