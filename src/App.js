// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';

const App = () => {
  return (
    <div>
      <NavBar />
      <MovieList />
    </div>
  );
};

export default App;
