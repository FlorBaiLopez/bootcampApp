import React, {useEffect, useState} from 'react';

import MovieList from 'Components/MovieList';
import moviesData from 'Data/movies';

import getMovies from '../../api/movies';

import './styles.scss';

const Home = () => {
  //const [movies, setMovies] = useState([]);
  const initHome = async () => {
    const movies = await getMovies();
    // hacer traid catch 

    console.log(movies);
  };

  useEffect(() => {
    initHome();
  }, []);

  return (
    <div className="home">
      <MovieList movies={moviesData} />
    </div>
  );
};

export default Home;
