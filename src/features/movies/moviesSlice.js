import { createSlice } from '@reduxjs/toolkit';
import { movies$ } from './moviesData'; // Assurez-vous que l'importation de movies$ est correcte

const initialState = {
  movies: [],       // Tableau des films
  categories: [],   // Tableau des catégories
  loading: true,    // Indicateur de chargement
  error: null,      // Gestion des erreurs
  currentPage: 1,   // Page actuelle pour la pagination
  itemsPerPage: 4,  // Nombre d'éléments par page
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMoviesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess(state, action) {
      state.movies = action.payload;
      state.loading = false;
    },
    fetchMoviesFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    toggleLike(state, action) {
      const { movieId } = action.payload;
      const movieToUpdate = state.movies.find(movie => movie.id === movieId);
      if (movieToUpdate) {
        movieToUpdate.likes = !movieToUpdate.likes;
      }
    },
    toggleDislike(state, action) {
      const { movieId } = action.payload;
      const movieToUpdate = state.movies.find(movie => movie.id === movieId);
      if (movieToUpdate) {
        movieToUpdate.dislikes = !movieToUpdate.dislikes;
      }
    },
    deleteMovie(state, action) {
      const { movieId } = action.payload;
      state.movies = state.movies.filter(movie => movie.id !== movieId);
    },
    setCategories(state) {
      const uniqueCategories = state.movies.reduce((categories, movie) => {
        if (!categories.includes(movie.category)) {
          categories.push(movie.category);
        }
        return categories;
      }, []);
      state.categories = uniqueCategories;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setItemsPerPage(state, action) {
      state.itemsPerPage = action.payload;
    },
  },
});

export const {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  toggleLike,
  toggleDislike,
  deleteMovie,
  setCategories,
  setCurrentPage,
  setItemsPerPage,
} = moviesSlice.actions;

export default moviesSlice.reducer;

// Action asynchrone pour charger les films
export const fetchMovies = () => async (dispatch) => {
  dispatch(fetchMoviesStart());
  try {
    const movies = await movies$; // Attend la résolution de la promesse movies$
    dispatch(fetchMoviesSuccess(movies));
    dispatch(setCategories()); // Met à jour les catégories après avoir chargé les films
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};

// Selecteurs Redux
export const selectAllMovies = state => state.movies.movies;

// Pagination - Sélecteur pour obtenir les films à afficher sur la page actuelle
export const selectMoviesForCurrentPage = state => {
  const { movies, currentPage, itemsPerPage } = state.movies;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return movies.slice(startIndex, endIndex);
};

// Sélecteur pour le nombre total de films
export const selectTotalMovies = state => state.movies.movies.length;

// Sélecteur pour obtenir les catégories
export const selectCategories = state => state.movies.categories;

// Sélecteur pour obtenir le nombre d'éléments par page
export const selectItemsPerPage = state => state.movies.itemsPerPage;

// Sélecteur pour obtenir la page actuelle
export const selectCurrentPage = state => state.movies.currentPage;

