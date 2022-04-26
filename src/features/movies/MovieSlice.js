import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../components/common/MovieApi";
import { APIKey } from "../../components/common/MovieAPiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async () => {
        const movieTerm = "avengers";
        const response = await MovieApi.get(`?apiKey=${APIKey}&s=${movieTerm}&type=movie`)
        return response.data;
    });

export const fetchAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries',
    async () => {
        const seriesTerm = "heist";
        const response = await MovieApi.get(`?apiKey=${APIKey}&s=${seriesTerm}&type=series`)
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
        [fetchAsyncMovies.pending]: () => {
            console.log("pending..");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("fetched successfully");
            return { ...state, movies: payload };
        },
        [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
            console.log("fetched successfully");
            return { ...state, series: payload };
        },
        [fetchAsyncMovieOrSeriesDetail.fulfilled]: (state, { payload }) => {
            console.log("fetched successfully");
            return { ...state, MovieOrSeriesDetail: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected");
        },
    }
});

export const { removeSelectedMovieOrSeries } = movieSlice.actions;
export const getAllMovies = state => state.movies.movies;
export const getAllSeries = state => state.movies.series;
export const getSeriesOrMovieDetail = state => state.movies.MovieOrSeriesDetail;
export default movieSlice.reducer;