import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategories } from '../features/movies/moviesSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.movies.categories);

  // Utilisez setCategories dans une fonction de gestion d'événements, un effet, etc.
  const handleCategoryChange = (selectedCategories) => {
    dispatch(setCategories(selectedCategories));
  };

  return (
    <div className="filter">
      {/* Contenu du composant */}
    </div>
  );
};

export default Filter;
