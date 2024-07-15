// src/components/MovieList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import { fetchMovies, setPage, setItemsPerPage } from '../redux/moviesSlice';
import Pagination from './Pagination';
import Filter from './Filter';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, status, error, currentPage, itemsPerPage, filters } = useSelector(state => state.movies);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  const filteredMovies = movies.filter(movie => filters.length === 0 || filters.includes(movie.category));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMovies = filteredMovies.slice(startIndex, startIndex + itemsPerPage);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Filter />
      <Container>
        {currentMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Container>
      <Pagination />
    </div>
  );
};

export default MovieList;
