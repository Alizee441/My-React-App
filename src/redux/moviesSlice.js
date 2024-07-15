// src/redux/moviesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movies$ } from '../movies';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await movies$;
  return response;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'idle',
    error: null,
    filters: [],
    categories: [],
    currentPage: 1,
    itemsPerPage: 4,
  },
  reducers: {
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
      // Recalculate categories
      state.categories = Array.from(new Set(state.movies.map(movie => movie.category)));
    },
    likeMovie: (state, action) => {
      const movie = state.movies.find((movie) => movie.id === action.payload);
      if (movie) {
        movie.likes += 1;
      }
    },
    dislikeMovie: (state, action) => {
      const movie = state.movies.find((movie) => movie.id === action.payload);
      if (movie) {
        movie.dislikes += 1;
      }
    },
    setFilter: (state, action) => {
      state.filters = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
        // Extract categories dynamically
        state.categories = Array.from(new Set(action.payload.map(movie => movie.category)));
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { deleteMovie, likeMovie, dislikeMovie, setFilter, setPage, setItemsPerPage } = moviesSlice.actions;

export default moviesSlice.reducer;
