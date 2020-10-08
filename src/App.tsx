import React from 'react';

import Routes from './routes';
import { GlobalStyle } from './styles/global';

import { MovieProvider } from './context/MovieContext';

function App() {
  return (
    <MovieProvider>
      <Routes />
      <GlobalStyle />
    </MovieProvider>
  );
}

export default App;
