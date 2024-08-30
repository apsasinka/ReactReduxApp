import React from 'react';
import "./pagination.less"

const Pagination = () => {
    const pageNumbers = [1, 2, 3, 4, 5];
  return (
    <div className='pagination'>
        {pageNumbers.map(page => (
            <button key={page} className='pagination btn'>{page}</button>
        ))}
    </div>
  )
}

export default Pagination