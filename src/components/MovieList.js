import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, setCategories } from '../features/movies/moviesSlice';
import MovieCard from './MovieCard';

const MovieList = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const movies = useSelector(state => state.movies.movies);
  // eslint-disable-next-line no-unused-vars
  const categories = useSelector(state => state.movies.categories);

  useEffect(() => {
    dispatch(fetchMovies()); // Charger les films
    dispatch(setCategories(['Comedy', 'Animation', 'Thriller', 'Drame'])); // Exemple de chargement statique des catégories
  }, [dispatch]);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
