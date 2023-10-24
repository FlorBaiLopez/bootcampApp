import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';


import noMovie from 'Assets/noMovie.jpg';

import './styles.scss';
import { getMoviesDetails } from 'Api/movies';

const MovieView = () => {
  const { id } = useParams();

  const [movieToDisplay, setMovieToDisplay] = useState(null);
  const [error, setError] = useState(false);

  const retrieveMovieDetails = async () => {
    const selectedMovie = await getMoviesDetails(id);

    console.log(selectedMovie);

    if (!id || !selectedMovie) {
          setError(true);
        } else {
          setMovieToDisplay(selectedMovie.data);
        }
  };

  useEffect (() => {
    retrieveMovieDetails();
  }, []);

  if (error) {
    return (
      <div className="movie-view movie-view--error">
        <h1>
          No movie found :(
        </h1>
        <img src={noMovie} alt="not found" />
      </div>
    );
  };

  const {
    overview,
    poster_path: posterPath,
    release_date: releaseDate,
    title,
    genres,
  } = movieToDisplay || {};

  return (
    <div className="movie-view">
      <div className="movie-view__image">
        <img src={`https://image.tmdb.org/t/p/original${posterPath}`} alt={title} />
      </div>
      <div className="movie-view__details">
        <h2 className="movie-view__title">
          {title}
        </h2>
        <p className="movie-view__release-year">
          {`Published in ${releaseDate}`}
        </p>
        <p className="movie-view__description">
          {overview}
        </p>
        <p className="movie-view__genres">
          {genres?.map((genre) => (
            <li>
              {genre.name}
            </li>
          ))}
        </p>
      </div>
    </div>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieView;
