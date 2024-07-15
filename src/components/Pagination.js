// src/components/Pagination.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setPage, setItemsPerPage } from '../redux/moviesSlice';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px;
`;

const Button = styled.button`
  margin: 0 8px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;

const Select = styled.select`
  margin-left: 8px;
  padding: 8px;
`;

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage, movies } = useSelector(state => state.movies);
  const totalPages = Math.ceil(movies.length / itemsPerPage);

  return (
    <PaginationContainer>
      <Button onClick={() => dispatch(setPage(currentPage - 1))} disabled={currentPage === 1}>
        Previous
      </Button>
      <span>Page {currentPage} of {totalPages}</span>
      <Button onClick={() => dispatch(setPage(currentPage + 1))} disabled={currentPage === totalPages}>
        Next
      </Button>
      <Select value={itemsPerPage} onChange={(e) => dispatch(setItemsPerPage(Number(e.target.value)))}>
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={12}>12</option>
      </Select>
    </PaginationContainer>
  );
};

export default Pagination;
