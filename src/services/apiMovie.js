import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '60be8fb8c8a1f350ed6abbd466e696ed';

export const getTrendingMovie = async () => {
  return await axios.get(`/trending/movie/week?api_key=${key}`);
};

export const getSearchMovie = async query => {
  return await axios.get(`/search/movie?api_key=${key}&query=${query}`);
};

export const getMovieById = async Id => {
  return await axios.get(`/movie/${Id}?api_key=${key}&language=en-US`);
};

export const getCastById = async id => {
  return await axios.get(`/movie/${id}/credits?api_key=${key}&language=en-US`);
};

export const getReviews = async id => {
  return await axios.get(
    `/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`,
  );
};
