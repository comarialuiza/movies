import React from 'react';
import Header from '../../components/Header';
import MovieList from '../../components/MovieList';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <MovieList />
    </>
  );
}

export default Home;