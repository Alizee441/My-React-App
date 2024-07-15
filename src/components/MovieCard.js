import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleLike, toggleDislike, deleteMovie } from '../features/movies/moviesSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const handleToggleLike = () => {
    dispatch(toggleLike({ id: movie.id }));
  };

  const handleToggleDislike = () => {
    dispatch(toggleDislike({ id: movie.id }));
  };

  const handleDelete = () => {
    dispatch(deleteMovie({ id: movie.id }));
  };

  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>{movie.category}</p>
      <div>
        <button onClick={handleToggleLike}>Like</button>
        <button onClick={handleToggleDislike}>Dislike</button>
      </div>
      <div>
        Likes: {movie.likes} | Dislikes: {movie.dislikes}
      </div>
      <button onClick={handleDelete}><i className="fas fa-trash-alt"></i></button>
    </div>
  );
};

export default MovieCard;
