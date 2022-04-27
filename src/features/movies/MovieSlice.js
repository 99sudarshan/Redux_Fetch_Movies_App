import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../components/common/MovieApi";
import { APIKey } from "../../components/common/MovieAPiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async (term) => {
        const response = await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
        return response.data;
    });

export const fetchAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries',
    async (term) => {
        const response = await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
        return response.data;
    });

export const fetchAsyncMovieOrSeriesDetail = createAsyncThunk('movies/fetchAsyncMovieOrSeriesDetail',
    async (id) => {
        const response = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
        return response.data;
    });

const initialState = {
    movies: {},
    series: {},
    MovieOrSeriesDetail: {},
    loading: false,
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedMovieOrSeries: (state) => {
            state.MovieOrSeriesDetail = {}
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: (state) => {
            console.log("pending..");
            state.loading = true
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("fetched successfully");
            return { ...state, movies: payload, loading: false };
        },
        [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
            console.log("fetched successfully");
            return { ...state, series: payload, loading: false };
        },
        [fetchAsyncMovieOrSeriesDetail.fulfilled]: (state, { payload }) => {
            console.log("fetched successfully");
            return { ...state, MovieOrSeriesDetail: payload, loading: false };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected");
        },
    }
});

export const { removeSelectedMovieOrSeries } = movieSlice.actions;
export const getAllMovies = state => {
    return {
        movies: state.movies.movies,
        loading: state.movies.loading,
    }
};
export const getAllSeries = state => state.movies.series;
export const getSeriesOrMovieDetail = state => state.movies.MovieOrSeriesDetail;
export default movieSlice.reducer;