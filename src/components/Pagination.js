import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, selectCurrentPage, selectItemsPerPage, selectTotalMovies } from '../features/movies/moviesSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const totalMovies = useSelector(selectTotalMovies);

  const totalPages = Math.ceil(totalMovies / itemsPerPage);

  const handleSetPage = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const renderPaginationButtons = () => {
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => handleSetPage(i)}
          className={i === currentPage ? 'active' : ''}
        >
          {i}
        </button>
      );
    }
    return pageButtons;
  };

  return (
    <div className="pagination">
      {renderPaginationButtons()}
    </div>
  );
};

export default Pagination;
