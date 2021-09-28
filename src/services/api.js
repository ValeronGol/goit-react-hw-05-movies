import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '60be8fb8c8a1f350ed6abbd466e696ed';

export const getSearchMovie = async query => {
  const movie = await axios.get(`/search/movie?api_key=${key}&query=${query}`);
  return movie;
};

export const getMovieById = async Id => {
  const movieById = await axios.get(
    `/movie/${Id}?api_key=${key}&language=en-US`,
  );
  return movieById;
};

export const getCastById = async id => {
  const credits = await axios.get(
    `/movie/${id}/credits?api_key=${key}&language=en-US`,
  );
  return credits;
};

export const getReviews = async id => {
  const reviews = await axios.get(
    `/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`,
  );
  return reviews;
};
