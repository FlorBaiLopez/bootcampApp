import instance from './config';

const getMovies = () => instance.get('discover/movie');

const getMoviesDetails = (id) => instance.get(`movie/${id}`);

export { getMovies, getMoviesDetails };
