import React from 'react';
import '../App.css';
import Pagination from 'react-js-pagination';

const Paging = ({ page, totalCount, postPerPage, handlePageChange }) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={postPerPage}
      totalItemsCount={totalCount ? totalCount : 0}
      pageRangeDisplayed={5}
      prevPageText={'‹'}
      nextPageText={'›'}
      onChange={handlePageChange}
    />
  );
};

export default Paging;
