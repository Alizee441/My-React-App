import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';
import moviesReducer from './features/movies/moviesSlice';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import Filter from './components/Filter';

const store = createStore(moviesReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Filter />
        <MovieList />
        <Pagination />
      </div>
    </Provider>
  );
};

export default App;
