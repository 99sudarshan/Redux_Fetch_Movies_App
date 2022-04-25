import { configureStore } from "@reduxjs/toolkit";
import movieReducers from './movies/MovieSlice';

export const store = configureStore({
    reducer: {
        movies: movieReducers,
    },
});